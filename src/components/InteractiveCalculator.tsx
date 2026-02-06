import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Moon,
  Sun,
  History,
  Volume2,
  VolumeX,
  Copy,
  RotateCcw,
  RotateCw,
  Trash2,
  X,
  Check,
  Sigma,
  Grid3x3,
  ArrowLeft
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface CalculationHistory {
  id?: string;
  expression: string;
  result: string;
  timestamp: Date;
}

const InteractiveCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scientificMode, setScientificMode] = useState(false);
  const [memory, setMemory] = useState(0);
  const [showMemoryIndicator, setShowMemoryIndicator] = useState(false);
  const [undoStack, setUndoStack] = useState<string[]>([]);
  const [redoStack, setRedoStack] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [lastKey, setLastKey] = useState('');
  const displayRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    loadHistory();
    const savedTheme = localStorage.getItem('calculator-theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }

    const savedSound = localStorage.getItem('calculator-sound');
    if (savedSound === 'false') {
      setSoundEnabled(false);
    }

    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [expression, display]);

  const loadHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('calculator_history')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(50);

      if (error) throw error;
      if (data) {
        setHistory(data.map(item => ({
          ...item,
          timestamp: new Date(item.timestamp)
        })));
      }
    } catch (error) {
      const localHistory = localStorage.getItem('calculator-history');
      if (localHistory) {
        setHistory(JSON.parse(localHistory));
      }
    }
  };

  const saveToHistory = async (expr: string, res: string) => {
    const newEntry: CalculationHistory = {
      expression: expr,
      result: res,
      timestamp: new Date()
    };

    try {
      const { error } = await supabase
        .from('calculator_history')
        .insert([newEntry]);

      if (error) throw error;
    } catch (error) {
      const localHistory = [newEntry, ...history.slice(0, 49)];
      localStorage.setItem('calculator-history', JSON.stringify(localHistory));
    }

    setHistory(prev => [newEntry, ...prev.slice(0, 49)]);
  };

  const clearHistory = async () => {
    try {
      const { error } = await supabase
        .from('calculator_history')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

      if (error) throw error;
    } catch (error) {
      localStorage.removeItem('calculator-history');
    }
    setHistory([]);
  };

  const playSound = (frequency: number = 800, duration: number = 50) => {
    if (!soundEnabled || !audioContextRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const gainNode = audioContextRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration / 1000);

    oscillator.start(audioContextRef.current.currentTime);
    oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
  };

  const vibrateDevice = (pattern: number | number[] = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  };

  const formatNumber = (num: string): string => {
    if (num === '' || num === '-') return num;
    const parts = num.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  const handleButtonClick = (value: string) => {
    playSound();
    vibrateDevice(10);
    setLastKey(value);

    saveState();

    if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === '⌫') {
      setDisplay(prev => prev.length === 1 ? '0' : prev.slice(0, -1));
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '×', '÷', '%'].includes(value)) {
      setExpression(prev => prev + ' ' + display + ' ' + value);
      setDisplay('0');
    } else if (value === '.') {
      if (!display.includes('.')) {
        setDisplay(prev => prev + '.');
      }
    } else if (value === '±') {
      setDisplay(prev => {
        const num = parseFloat(prev.replace(/,/g, ''));
        return formatNumber((-num).toString());
      });
    } else if (value === 'MC') {
      setMemory(0);
      setShowMemoryIndicator(false);
    } else if (value === 'MR') {
      setDisplay(formatNumber(memory.toString()));
    } else if (value === 'M+') {
      const num = parseFloat(display.replace(/,/g, ''));
      setMemory(prev => prev + num);
      setShowMemoryIndicator(true);
    } else if (value === 'M-') {
      const num = parseFloat(display.replace(/,/g, ''));
      setMemory(prev => prev - num);
      setShowMemoryIndicator(true);
    } else if (value === 'sin' || value === 'cos' || value === 'tan') {
      const num = parseFloat(display.replace(/,/g, '')) * Math.PI / 180;
      let result = 0;
      if (value === 'sin') result = Math.sin(num);
      else if (value === 'cos') result = Math.cos(num);
      else if (value === 'tan') result = Math.tan(num);
      setDisplay(formatNumber(result.toFixed(8).replace(/\.?0+$/, '')));
    } else if (value === 'ln' || value === 'log') {
      const num = parseFloat(display.replace(/,/g, ''));
      const result = value === 'ln' ? Math.log(num) : Math.log10(num);
      setDisplay(formatNumber(result.toFixed(8).replace(/\.?0+$/, '')));
    } else if (value === '√') {
      const num = parseFloat(display.replace(/,/g, ''));
      setDisplay(formatNumber(Math.sqrt(num).toFixed(8).replace(/\.?0+$/, '')));
    } else if (value === 'x²') {
      const num = parseFloat(display.replace(/,/g, ''));
      setDisplay(formatNumber((num * num).toString()));
    } else if (value === 'π') {
      setDisplay(formatNumber(Math.PI.toFixed(8)));
    } else if (value === 'e') {
      setDisplay(formatNumber(Math.E.toFixed(8)));
    } else {
      setDisplay(prev => {
        if (prev === '0' && value !== '.') return value;
        const newValue = prev + value;
        return formatNumber(newValue.replace(/,/g, ''));
      });
    }
  };

  const safeEvaluate = (expr: string): number => {
    const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/|\%|\(|\))/g);
    if (!tokens) throw new Error('Invalid expression');

    let result = 0;
    let operator = '+';
    let current = 0;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (!isNaN(parseFloat(token))) {
        current = parseFloat(token);
      } else if (['+', '-', '*', '/', '%'].includes(token)) {
        if (operator === '+') result += current;
        else if (operator === '-') result -= current;
        else if (operator === '*') result *= current;
        else if (operator === '/') result /= current;
        else if (operator === '%') result %= current;

        operator = token;
        current = 0;
      }
    }

    if (operator === '+') result += current;
    else if (operator === '-') result -= current;
    else if (operator === '*') result *= current;
    else if (operator === '/') result /= current;
    else if (operator === '%') result %= current;

    return result;
  };

  const calculate = () => {
    try {
      const fullExpression = expression + ' ' + display;
      const cleanExpression = fullExpression
        .replace(/,/g, '')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .trim();

      const result = Function('"use strict"; return (' + cleanExpression + ')')();
      const resultStr = formatNumber(result.toFixed(8).replace(/\.?0+$/, ''));

      setDisplay(resultStr);
      setExpression('');
      saveToHistory(fullExpression, resultStr);
      playSound(1000, 100);
      vibrateDevice([10, 50, 10]);
    } catch (error) {
      setDisplay('Error');
      playSound(400, 200);
      vibrateDevice(100);
      setTimeout(() => setDisplay('0'), 1500);
    }
  };

  const saveState = () => {
    setUndoStack(prev => [...prev, display]);
    setRedoStack([]);
  };

  const undo = () => {
    if (undoStack.length > 0) {
      const previousState = undoStack[undoStack.length - 1];
      setRedoStack(prev => [...prev, display]);
      setDisplay(previousState);
      setUndoStack(prev => prev.slice(0, -1));
      playSound(900);
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[redoStack.length - 1];
      setUndoStack(prev => [...prev, display]);
      setDisplay(nextState);
      setRedoStack(prev => prev.slice(0, -1));
      playSound(900);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(display.replace(/,/g, ''));
    setCopied(true);
    playSound(1200, 100);
    vibrateDevice([5, 30, 5]);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key >= '0' && e.key <= '9') {
      handleButtonClick(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
      const operator = e.key === '*' ? '×' : e.key === '/' ? '÷' : e.key;
      handleButtonClick(operator);
    } else if (e.key === 'Enter' || e.key === '=') {
      handleButtonClick('=');
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
      handleButtonClick('C');
    } else if (e.key === 'Backspace') {
      handleButtonClick('⌫');
    } else if (e.key === '.') {
      handleButtonClick('.');
    } else if (e.ctrlKey && e.key === 'z') {
      undo();
    } else if (e.ctrlKey && e.key === 'y') {
      redo();
    }
  };

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem('calculator-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
    playSound(1100);
  };

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem('calculator-sound', String(newValue));
      return newValue;
    });
  };

  const basicButtons = [
    ['MC', 'MR', 'M+', 'M-'],
    ['C', '⌫', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '=']
  ];

  const scientificButtons = [
    ['sin', 'cos', 'tan', 'ln'],
    ['log', '√', 'x²', 'π'],
    ['e', '(', ')', '^']
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-br from-[#0A2540] via-[#1B4765] to-[#0A2540]' : 'bg-[#FAF9F6]'
    }`}>
      <div className="max-w-lg mx-auto px-4 py-6 md:py-8">

        {/* Back Button */}
        <Link
          to="/resources/calculators-templates"
          className={`inline-flex items-center gap-2 mb-4 px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
            darkMode
              ? 'bg-[#1B4765] text-white hover:bg-[#2A5875]'
              : 'bg-white text-[#0A2540] hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
          } shadow`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold">Back to Calculators</span>
        </Link>

        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Calculator className={`w-6 h-6 ${darkMode ? 'text-[#C9A227]' : 'text-[#0A2540]'}`} />
            <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#0A2540]'}`}>
              Interactive Calculator
            </h1>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setScientificMode(!scientificMode)}
              className={`p-2 rounded-lg text-xs transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#1B4765] text-white hover:bg-[#2A5875]'
                  : 'bg-white text-[#0A2540] hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
              } shadow`}
              aria-label="Toggle scientific mode"
            >
              {scientificMode ? <Grid3x3 className="w-4 h-4" /> : <Sigma className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg text-xs transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#1B4765] text-white hover:bg-[#2A5875]'
                  : 'bg-white text-[#0A2540] hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
              } shadow`}
              aria-label="Toggle sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`p-2 rounded-lg text-xs transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#1B4765] text-white hover:bg-[#2A5875]'
                  : 'bg-white text-[#0A2540] hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
              } shadow`}
              aria-label="Toggle history"
            >
              <History className="w-4 h-4" />
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-xs transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? 'bg-[#1B4765] text-[#C9A227] hover:bg-[#2A5875]'
                  : 'bg-white text-[#0A2540] hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
              } shadow`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className={`rounded-2xl shadow-lg p-4 md:p-5 transition-all duration-500 ${
          darkMode
            ? 'bg-[#1B4765] border border-[#2A5875]'
            : 'bg-white border border-[#0A2540]/10'
        }`}>

          {/* Memory Indicator */}
          {showMemoryIndicator && (
            <div className={`mb-2 text-xs font-semibold ${darkMode ? 'text-[#C9A227]' : 'text-[#0A2540]'}`}>
              M: {formatNumber(memory.toString())}
            </div>
          )}

          {/* Expression Display */}
          {expression && (
            <div className={`text-right mb-1 text-xs font-mono h-5 ${
              darkMode ? 'text-white/60' : 'text-[#0A2540]/60'
            }`}>
              {expression}
            </div>
          )}

          {/* Main Display */}
          <div className={`relative mb-4 rounded-xl p-4 transition-all duration-300 ${
            darkMode
              ? 'bg-[#0A2540] shadow-inner border border-[#1B4765]'
              : 'bg-[#F8F7F3] shadow-inner border border-[#0A2540]/10'
          }`}>
            <div
              ref={displayRef}
              className={`text-right text-2xl md:text-3xl font-bold font-mono transition-all duration-300 ${
                darkMode ? 'text-white' : 'text-[#0A2540]'
              } ${lastKey ? 'scale-105' : 'scale-100'}`}
              style={{
                minHeight: '2rem',
                wordBreak: 'break-all'
              }}
            >
              {display}
            </div>

            <div className="absolute top-2 left-2 flex gap-1">
              <button
                onClick={undo}
                disabled={undoStack.length === 0}
                className={`p-1 rounded-lg transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 ${
                  darkMode
                    ? 'bg-[#0A2540] text-white/60 hover:bg-[#1B4765]'
                    : 'bg-white text-[#0A2540]/60 hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
                } shadow-sm`}
                aria-label="Undo"
              >
                <RotateCcw className="w-3 h-3" />
              </button>

              <button
                onClick={redo}
                disabled={redoStack.length === 0}
                className={`p-1 rounded-lg transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 ${
                  darkMode
                    ? 'bg-[#0A2540] text-white/60 hover:bg-[#1B4765]'
                    : 'bg-white text-[#0A2540]/60 hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
                } shadow-sm`}
                aria-label="Redo"
              >
                <RotateCw className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={copyToClipboard}
              className={`absolute bottom-2 right-2 p-1 rounded-lg transition-all duration-200 hover:scale-110 ${
                darkMode
                  ? 'bg-[#0A2540] text-white/60 hover:bg-[#1B4765]'
                  : 'bg-white text-[#0A2540]/60 hover:bg-[#C9A227]/10 border border-[#0A2540]/10'
              } shadow-sm`}
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>

          {/* Scientific Buttons */}
          {scientificMode && (
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              {scientificButtons.flat().map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleButtonClick(btn)}
                  className={`py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 hover:scale-105 ${
                    darkMode
                      ? 'bg-[#2A5875] hover:bg-[#3A6885] text-white shadow'
                      : 'bg-[#0A2540] hover:bg-[#1B4765] text-white shadow'
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}

          {/* Basic Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {basicButtons.map((row, rowIndex) =>
              row.map((btn) => {
                const isOperator = ['+', '-', '×', '÷', '%'].includes(btn);
                const isEquals = btn === '=';
                const isMemory = ['MC', 'MR', 'M+', 'M-'].includes(btn);
                const isClear = btn === 'C';

                return (
                  <button
                    key={`${rowIndex}-${btn}`}
                    onClick={() => handleButtonClick(btn)}
                    className={`py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 active:scale-95 hover:scale-105 shadow ${
                      isEquals
                        ? darkMode
                          ? 'bg-[#2E7D32] hover:bg-[#388E3C] text-white'
                          : 'bg-[#2E7D32] hover:bg-[#43A047] text-white'
                        : isClear
                        ? darkMode
                          ? 'bg-[#C62828] hover:bg-[#D32F2F] text-white'
                          : 'bg-[#C62828] hover:bg-[#E53935] text-white'
                        : isOperator
                        ? darkMode
                          ? 'bg-[#C9A227] hover:bg-[#D4AF37] text-white'
                          : 'bg-[#C9A227] hover:bg-[#D4AF37] text-white'
                        : isMemory
                        ? darkMode
                          ? 'bg-[#8B6F47] hover:bg-[#9B7F57] text-white'
                          : 'bg-[#8B6F47] hover:bg-[#9B7F57] text-white'
                        : darkMode
                        ? 'bg-[#2A5875] hover:bg-[#3A6885] text-white'
                        : 'bg-[#E8E6E1] hover:bg-[#D8D6D1] text-[#0A2540] border border-[#0A2540]/10'
                    }`}
                    style={{
                      touchAction: 'manipulation',
                      minHeight: '48px'
                    }}
                    aria-label={btn}
                  >
                    {btn}
                  </button>
                );
              })
            )}
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className={`mt-4 text-xs text-center space-y-0.5 ${
            darkMode ? 'text-white/40' : 'text-[#0A2540]/40'
          }`}>
            <p>Keyboard: Numbers, +, -, *, /, Enter, Esc, Backspace</p>
            <p>Shortcuts: Ctrl+Z (Undo) | Ctrl+Y (Redo)</p>
          </div>
        </div>

        {/* History Panel */}
        {showHistory && (
          <div className={`mt-4 rounded-2xl shadow-lg p-4 transition-all duration-500 animate-fadeIn ${
            darkMode
              ? 'bg-[#1B4765] border border-[#2A5875]'
              : 'bg-white border border-[#0A2540]/10'
          }`}>
            <div className="flex justify-between items-center mb-3">
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#0A2540]'}`}>
                History
              </h3>
              <div className="flex gap-1.5">
                <button
                  onClick={clearHistory}
                  className={`p-1.5 rounded-lg transition-all duration-200 hover:scale-110 ${
                    darkMode
                      ? 'bg-[#0A2540] text-red-400 hover:bg-[#1B4765]'
                      : 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200'
                  }`}
                  aria-label="Clear history"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setShowHistory(false)}
                  className={`p-1.5 rounded-lg transition-all duration-200 hover:scale-110 ${
                    darkMode
                      ? 'bg-[#0A2540] text-white hover:bg-[#1B4765]'
                      : 'bg-[#E8E6E1] text-[#0A2540] hover:bg-[#D8D6D1] border border-[#0A2540]/10'
                  }`}
                  aria-label="Close history"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-1.5 max-h-64 overflow-y-auto">
              {history.length === 0 ? (
                <p className={`text-center py-6 text-sm ${darkMode ? 'text-white/40' : 'text-[#0A2540]/40'}`}>
                  No calculations yet
                </p>
              ) : (
                history.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setDisplay(item.result);
                      playSound(950);
                    }}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-102 ${
                      darkMode
                        ? 'bg-[#0A2540] hover:bg-[#1B4765] border border-[#1B4765]'
                        : 'bg-[#F8F7F3] hover:bg-[#E8E6E1] border border-[#0A2540]/10'
                    }`}
                  >
                    <div className={`text-xs font-mono ${darkMode ? 'text-white/60' : 'text-[#0A2540]/60'}`}>
                      {item.expression}
                    </div>
                    <div className={`text-base font-bold font-mono ${darkMode ? 'text-white' : 'text-[#0A2540]'}`}>
                      = {item.result}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @media (hover: hover) {
          button:active {
            transform: scale(0.95);
          }
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default InteractiveCalculator;
