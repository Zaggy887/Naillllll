import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo
    });

    if (import.meta.env.PROD) {
      console.error('Production error logged:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-[#0A2540] to-[#1B4765] flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-lg text-gray-600 text-center mb-8">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            {!import.meta.env.PROD && this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-red-800 mb-2">Error Details:</p>
                <p className="text-sm text-red-700 font-mono mb-2">{this.state.error.message}</p>
                {this.state.errorInfo && (
                  <details className="mt-4">
                    <summary className="text-sm font-semibold text-red-800 cursor-pointer">
                      Component Stack
                    </summary>
                    <pre className="text-xs text-red-600 mt-2 overflow-auto max-h-64">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1B4765] transition-all shadow-lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </button>

              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] rounded-lg font-semibold hover:bg-[#0A2540] hover:text-white transition-all"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-8">
              If this problem persists, please contact our support team.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
