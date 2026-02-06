import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Percent,
  TrendingUp,
  DollarSign,
  Landmark,
  PieChart,
  Info,
} from "lucide-react";

const payrollRates = {
  VIC: { threshold: 700000, rate: 0.0485 },
  NSW: { threshold: 1200000, rate: 0.055 },
  QLD: { threshold: 1300000, rate: 0.0475 },
  WA: { threshold: 1000000, rate: 0.055 },
  SA: { threshold: 600000, rate: 0.0485 },
  TAS: { threshold: 1250000, rate: 0.06 },
  NT: { threshold: 1500000, rate: 0.055 },
  ACT: { threshold: 2000000, rate: 0.0655 },
};

const Calculators = () => {
  const [heroReady, setHeroReady] = useState(false);

  const [gstAmount, setGstAmount] = useState("");
  const [gstType, setGstType] = useState("including");
  const [gstResult, setGstResult] = useState({
    excluding: 0,
    including: 0,
    gst: 0,
  });

  const [payrollState, setPayrollState] = useState("VIC");
  const [annualWages, setAnnualWages] = useState("");
  const [payrollResult, setPayrollResult] = useState(null);

  const [assetCost, setAssetCost] = useState("");
  const [life, setLife] = useState("");
  const [method, setMethod] = useState("prime");
  const [depreciation, setDepreciation] = useState(null);

  const [profit, setProfit] = useState("");
  const [companyTax, setCompanyTax] = useState(null);

  const [gain, setGain] = useState("");
  const [ownershipYears, setOwnershipYears] = useState("");
  const [entityType, setEntityType] = useState("individual");
  const [capitalGainsTax, setCapitalGainsTax] = useState(null);

  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [repayment, setRepayment] = useState(null);

  // GST
  const handleGST = (value, type) => {
    const amount = parseFloat(value);
    if (isNaN(amount))
      return setGstResult({ excluding: 0, including: 0, gst: 0 });

    let excluding, including, gst;

    if (type === "including") {
      excluding = amount / 1.1;
      gst = amount - excluding;
      including = amount;
    } else {
      excluding = amount;
      gst = amount * 0.1;
      including = amount * 1.1;
    }

    setGstResult({
      excluding: excluding.toFixed(2),
      including: including.toFixed(2),
      gst: gst.toFixed(2),
    });
  };

  // Payroll
  const handlePayroll = () => {
    const wages = parseFloat(annualWages);
    if (isNaN(wages)) return setPayrollResult(null);

    const { threshold, rate } = payrollRates[payrollState];
    setPayrollResult(
      wages <= threshold ? 0 : ((wages - threshold) * rate).toFixed(2)
    );
  };

  // Depreciation
  const handleDepreciation = () => {
    const cost = parseFloat(assetCost);
    const effectiveLife = parseFloat(life);
    if (isNaN(cost) || isNaN(effectiveLife)) return setDepreciation(null);

    const depreciationValue =
      method === "prime"
        ? cost / effectiveLife
        : cost * (200 / effectiveLife / 100);

    setDepreciation(depreciationValue.toFixed(2));
  };

  // Company Tax
  const handleCompanyTax = () => {
    const profitNum = parseFloat(profit);
    if (isNaN(profitNum)) return setCompanyTax(null);

    const taxRate = profitNum <= 50000000 ? 0.25 : 0.3;

    setCompanyTax({
      payable: (profitNum * taxRate).toFixed(2),
      rate: taxRate * 100,
      afterTax: (profitNum - profitNum * taxRate).toFixed(2),
    });
  };

  // Capital Gains Tax
  const handleCapitalGains = () => {
    const gainNum = parseFloat(gain);
    const years = parseFloat(ownershipYears);
    if (isNaN(gainNum) || isNaN(years)) return setCapitalGainsTax(null);

    const eligible =
      entityType === "individual" || entityType === "trust";
    const discount = eligible && years >= 1 ? 0.5 : 0;

    const taxable = gainNum * (1 - discount);
    const assumedRate = 0.325;

    const taxPayable = taxable * assumedRate;

    setCapitalGainsTax({
      discount: (discount * 100).toFixed(0),
      taxable: taxable.toFixed(2),
      tax: taxPayable.toFixed(2),
    });
  };

  // Loan Repayments
  const handleLoan = () => {
    const principal = parseFloat(loan);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    if (isNaN(principal) || isNaN(r) || isNaN(n)) return setRepayment(null);

    const monthly = (principal * r) / (1 - Math.pow(1 + r, -n));

    setRepayment(monthly.toFixed(2));
  };

  return (
    <div className="bg-[#FAF9F6] text-[#0A2540]">

{/* =====================================================
   ⭐ UPDATED HERO — instant fallback + fade system + circle loader
===================================================== */}
<section className="relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">

  {/* 🔄 Circle loader for header image (displays while heroReady is false) */}
  {!heroReady && (
    <div className="absolute inset-0 bg-[#F5F1EC] flex items-center justify-center z-20">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#0A2540]" />
    </div>
  )}

  {/* 1️⃣ Instant fallback image */}
  <img
    src="/calculator1.webp"
    alt="Calculators Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/calculator1.webp?v=6"
    alt="Calculators Header"
    loading="eager"
    decoding="async"
    fetchpriority="high"
    onLoad={() => setHeroReady(true)}
    onError={() => setHeroReady(true)}
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-100' : 'opacity-0'
    }`}
  />

  {/* 3️⃣ Gold–navy gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#18385A]/65 to-[#AE8621]/70"></div>

  {/* 4️⃣ Text */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10">
    <span className="inline-block rounded-full bg-white/90 text-[#0A2540] text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
      Resources
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Calculators & Templates
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Professional-grade Australian tax and advisory tools with transparent explanations.
    </p>

    <Link
      to="/resources/interactive-calculator"
      className="inline-flex items-center px-6 py-3 mt-6 bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white rounded-xl font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <Calculator className="w-5 h-5 mr-2" />
      Try Interactive Calculator
    </Link>
  </div>
</section>

      {/* CALCULATORS */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]"></div>
            <span className="mx-4 text-sm font-semibold text-[#C9A227] tracking-widest uppercase">Tools</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Financial Calculators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Quick and accurate calculations for your tax and financial planning needs
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {/* GST Calculator */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <Calculator className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">GST Calculator</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Calculates the GST (10%) component for Australian transactions.
          </p>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => {
                setGstType("including");
                handleGST(gstAmount, "including");
              }}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                gstType === "including"
                  ? "bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-[#C9A227]/10 hover:to-[#B8911F]/10"
              }`}
            >
              Incl. GST
            </button>

            <button
              onClick={() => {
                setGstType("excluding");
                handleGST(gstAmount, "excluding");
              }}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                gstType === "excluding"
                  ? "bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gradient-to-r hover:from-[#C9A227]/10 hover:to-[#B8911F]/10"
              }`}
            >
              Excl. GST
            </button>
          </div>

          <input
            type="number"
            placeholder="Enter amount"
            value={gstAmount}
            onChange={(e) => {
              setGstAmount(e.target.value);
              handleGST(e.target.value, gstType);
            }}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          {gstAmount && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 space-y-2 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">GST (10%):</span>
                <strong className="text-base text-[#0A2540]">${gstResult.gst}</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Excluding GST:</span>
                <strong className="text-base text-[#0A2540]">${gstResult.excluding}</strong>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#0A2540]/10">
                <span className="text-sm font-semibold text-gray-700">Including GST:</span>
                <strong className="text-lg text-[#C9A227]">${gstResult.including}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Payroll Tax */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <Percent className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">Payroll Tax</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Calculates payroll tax payable based on your state.
          </p>

          <div className="relative mb-3">
            <select
              value={payrollState}
              onChange={(e) => setPayrollState(e.target.value)}
              className="w-full p-3.5 pl-4 pr-10 border border-gray-200 rounded-lg text-sm font-medium text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all bg-gradient-to-br from-white to-[#FAF9F6] shadow-sm focus:shadow-md hover:border-[#C9A227]/30 cursor-pointer appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23C9A227\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem'
              }}
            >
              {Object.keys(payrollRates).map((s) => (
                <option key={s} className="py-2">{s}</option>
              ))}
            </select>
          </div>

          <input
            type="number"
            placeholder="Annual wages ($)"
            value={annualWages}
            onChange={(e) => setAnnualWages(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <button
            onClick={handlePayroll}
            className="w-full bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white py-3.5 rounded-lg text-sm font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {payrollResult !== null && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 mt-4 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Annual Payroll Tax:</span>
                <strong className="text-lg text-[#C9A227]">${payrollResult}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Depreciation */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">Depreciation</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Estimates annual deductions for business assets.
          </p>

          <input
            type="number"
            placeholder="Asset cost ($)"
            value={assetCost}
            onChange={(e) => setAssetCost(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <input
            type="number"
            placeholder="Effective life (years)"
            value={life}
            onChange={(e) => setLife(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <div className="relative mb-4">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full p-3.5 pl-4 pr-10 border border-gray-200 rounded-lg text-sm font-medium text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all bg-gradient-to-br from-white to-[#FAF9F6] shadow-sm focus:shadow-md hover:border-[#C9A227]/30 cursor-pointer appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23C9A227\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem'
              }}
            >
              <option value="prime" className="py-2">Prime Cost</option>
              <option value="diminishing" className="py-2">Diminishing Value</option>
            </select>
          </div>

          <button
            onClick={handleDepreciation}
            className="w-full bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white py-3.5 rounded-lg text-sm font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {depreciation && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 mt-4 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Annual Deduction:</span>
                <strong className="text-lg text-[#C9A227]">${depreciation}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Company Tax */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <Landmark className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">Company Tax</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Calculates corporate income tax payable.
          </p>

          <input
            type="number"
            placeholder="Company profit ($)"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <button
            onClick={handleCompanyTax}
            className="w-full bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white py-3.5 rounded-lg text-sm font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {companyTax && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 mt-4 space-y-2 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tax Rate:</span>
                <strong className="text-base text-[#0A2540]">{companyTax.rate}%</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tax Payable:</span>
                <strong className="text-base text-[#0A2540]">${companyTax.payable}</strong>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#0A2540]/10">
                <span className="text-sm font-semibold text-gray-700">After-tax Profit:</span>
                <strong className="text-lg text-[#C9A227]">${companyTax.afterTax}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Capital Gains */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <PieChart className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">Capital Gains</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Estimates taxable gain from asset sales.
          </p>

          <div className="relative mb-3">
            <select
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              className="w-full p-3.5 pl-4 pr-10 border border-gray-200 rounded-lg text-sm font-medium text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all bg-gradient-to-br from-white to-[#FAF9F6] shadow-sm focus:shadow-md hover:border-[#C9A227]/30 cursor-pointer appearance-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23C9A227\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem'
              }}
            >
              <option value="individual" className="py-2">Individual / Trust</option>
              <option value="company" className="py-2">Company</option>
              <option value="superfund" className="py-2">Super Fund</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="Capital gain ($)"
            value={gain}
            onChange={(e) => setGain(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <input
            type="number"
            placeholder="Ownership (years)"
            value={ownershipYears}
            onChange={(e) => setOwnershipYears(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <button
            onClick={handleCapitalGains}
            className="w-full bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white py-3.5 rounded-lg text-sm font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {capitalGainsTax && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 mt-4 space-y-2 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Discount Applied:</span>
                <strong className="text-base text-[#0A2540]">{capitalGainsTax.discount}%</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taxable Gain:</span>
                <strong className="text-base text-[#0A2540]">${capitalGainsTax.taxable}</strong>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#0A2540]/10">
                <span className="text-sm font-semibold text-gray-700">Estimated Tax:</span>
                <strong className="text-lg text-[#C9A227]">${capitalGainsTax.tax}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Loan Repayment */}
        <div className="group relative bg-white rounded-2xl shadow-sm border border-[#0A2540]/5 p-6 md:p-8 hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2.5 bg-gradient-to-br from-[#0A2540]/5 to-[#C9A227]/5 rounded-xl mr-3 group-hover:from-[#C9A227]/10 group-hover:to-[#D4AF37]/10 transition-all duration-300">
                <DollarSign className="w-6 h-6 text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#C9A227] transition-colors duration-300">Loan Repayment</h3>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Estimates monthly repayment for principal-and-interest loans.
          </p>

          <input
            type="number"
            placeholder="Loan amount ($)"
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <input
            type="number"
            placeholder="Interest rate (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <input
            type="number"
            placeholder="Term (years)"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40 focus:border-[#C9A227] transition-all shadow-sm focus:shadow-md"
          />

          <button
            onClick={handleLoan}
            className="w-full bg-gradient-to-r from-[#C9A227] to-[#B8911F] text-white py-3.5 rounded-lg text-sm font-semibold hover:from-[#D4AF37] hover:to-[#C9A227] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>

          {repayment && (
            <div className="relative bg-gradient-to-br from-[#FAF9F6] via-white to-[#C9A227]/5 rounded-xl p-4 mt-4 border border-[#C9A227]/20 shadow-inner">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-700">Monthly Repayment:</span>
                <strong className="text-lg text-[#C9A227]">${repayment}</strong>
              </div>
            </div>
          )}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-[#0A2540] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          We’d love to help you minimise your tax.
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Book a consultation with Harbour & Finch Advisory for tailored tax planning and business strategy advice.
        </p>

        <Link
          to="/contact/book-consultation"
          className="inline-flex items-center px-6 py-3 bg-[#C9A227] text-white rounded-lg font-semibold hover:bg-[#B38F1F] transition-all hover:scale-105"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
};

export default Calculators;
