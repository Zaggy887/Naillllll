import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";
import StatCard from "../components/StatCard";

// ------------------------
// Static data (no re-create on every render)
// ------------------------
const services = [
  {
    title: "Tax Advisory",
    description: "Strategic planning and compliance that maximises opportunities.",
    href: "/services/tax-advisory",
  },
  {
    title: "Business Services & CFO",
    description: "Fractional CFO and tailored business guidance to support growth.",
    href: "/services/business-services-cfo",
  },
  {
    title: "Audit & Assurance",
    description: "Independent audits and reviews to ensure compliance and trust.",
    href: "/services/audit-assurance",
  },
  {
    title: "SMSF & Superannuation",
    description: "Comprehensive SMSF setup, compliance and retirement planning.",
    href: "/services/smsf-superannuation",
  },
  {
    title: "Bookkeeping & Payroll",
    description: "Accurate bookkeeping and payroll to keep you compliant and efficient.",
    href: "/services/bookkeeping-payroll",
  },
  {
    title: "Cloud Accounting & Xero",
    description: "Seamless cloud migrations and modern accounting solutions.",
    href: "/services/cloud-accounting-xero",
  },
];

const partners = [
  {
    name: "Emma Finch",
    role: "Managing Partner & Tax Director",
    credentials: "CPA, CA, RTA",
    img: "/photoone.jpg",
  },
  {
    name: "Daniel Harbour",
    role: "Partner & Audit Director",
    credentials: "CA, MAICD",
    img: "/phototwo.png",
  },
  {
    name: "Priya Nair",
    role: "Partner & Advisory Director",
    credentials: "CPA, MBA",
    img: "/photothree.jpg",
  },
];

const insights = [
  {
    title: "2025 Tax Changes: What Businesses Must Know",
    excerpt: "Key updates to tax legislation affecting SMEs this financial year.",
    date: "15 Jan 2025",
    category: "Tax Advisory",
    href: "/resources/insights-blog",
    img: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "SMSF Strategies for Volatile Markets",
    excerpt: "Protect and grow your superannuation during uncertain conditions.",
    date: "10 Jan 2025",
    category: "SMSF",
    href: "/resources/insights-blog",
    img: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Cloud Accounting Migration Guide",
    excerpt: "Step-by-step to move your systems to cloud accounting securely.",
    date: "8 Jan 2025",
    category: "Technology",
    href: "/resources/insights-blog",
    img: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [videoReady, setVideoReady] = useState(false);
  const [income, setIncome] = useState("");
  const [taxResult, setTaxResult] = useState({ tax: 0, net: 0 });

  // ✅ Smooth fade-only page transitions
  const handleFadeNavigate = (e: any, href: string) => {
    e.preventDefault();
    document.body.classList.add("opacity-0", "transition-opacity", "duration-500");
    setTimeout(() => {
      navigate(href);
      document.body.classList.remove("opacity-0");
    }, 300);
  };

  const calculateIncomeTax = (value: string) => {
    const amount = parseFloat(value);
    if (isNaN(amount)) return setTaxResult({ tax: 0, net: 0 });

    let tax = 0;

    if (amount <= 18200) tax = 0;
    else if (amount <= 45000) tax = (amount - 18200) * 0.16;
    else if (amount <= 135000)
      tax = 26800 * 0.16 + (amount - 45000) * 0.3;
    else if (amount <= 190000)
      tax = 26800 * 0.16 + 90000 * 0.3 + (amount - 135000) * 0.37;
    else
      tax =
        26800 * 0.16 +
        90000 * 0.3 +
        55000 * 0.37 +
        (amount - 190000) * 0.45;

    const net = amount - tax;
    setTaxResult({ tax: Math.round(tax), net: Math.round(net) });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* ✅ Hero Section */}
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-black">
        {/* Fallback Image - ALWAYS visible as base layer */}
        <img
          src="/homeimagee.webp"
          alt="Harbour & Finch Advisory"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Desktop Video - plays over image when loaded */}
       <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  poster="/homeimagee.webp"
  onCanPlay={() => setVideoReady(true)}
  onError={() => setVideoReady(false)}
  className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
    videoReady ? "opacity-100" : "opacity-0"
  }`}
>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video - plays over image when loaded */}
       <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  poster="/homeimagee.webp"
  onCanPlay={() => setVideoReady(true)}
  onError={() => setVideoReady(false)}
  className={`block md:hidden absolute inset-0 w-full h-full object-cover object-[70%_70%] transition-opacity duration-700 ease-out ${
    videoReady ? "opacity-100" : "opacity-0"
  }`}
>
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 md:mb-10 leading-tight">
            Advice that <span className="text-[#C9A227]">compounds</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic accounting and advisory services designed to deliver
            measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 md:mb-24">
            <Link
              to="/contact/book-consultation"
              onClick={(e) => handleFadeNavigate(e, "/contact/book-consultation")}
              className="px-8 py-4 bg-[#C9A227] text-white rounded-lg font-semibold hover:bg-[#A98E1E] transition"
            >
              Book a consultation
            </Link>

            <Link
              to="/services"
              onClick={(e) => handleFadeNavigate(e, "/services")}
              className="px-8 py-4 border-2 border-[#C9A227] text-[#C9A227] rounded-lg font-semibold hover:bg-[#C9A227] hover:text-white transition"
            >
              See our services
            </Link>
          </div>

     {/* Statistics Section - Side by side on all devices */}
<div className="flex flex-row justify-center items-start gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto px-4">
  <StatCard value={1800} label="Clients Helped" suffix="+" duration={2500} />
  <StatCard
    value={2.8}
    label="Transactions Supported"
    suffix="B+"
    duration={2000}
    decimals={1}
    prefix="$"
  />
</div>
        </div>
      </section>

      {/* ✅ About Us */}
      <section className="py-12 md:py-16 bg-white text-center px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-3 md:mb-4">
          About Harbour & Finch Advisory
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
          Harbour & Finch Advisory is a Melbourne-based accounting and business
          advisory firm built on the philosophy that great advice compounds over
          time. We partner with businesses, investors, and professionals to provide
          strategic tax planning, financial insights, and hands-on support that
          drives real-world outcomes.
        </p>

        <Link
          to="/about"
          onClick={(e) => handleFadeNavigate(e, "/about")}
          className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-[#1B4765] text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#0A2540] transition space-x-2"
        >
          <span>More About Us</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* ✅ Certifications */}
      <section
        className="py-6 shadow-inner"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 45%, #FBF9F3 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.03)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          <div>
            <img
              src="/cpaaus.png"
              alt="CPA Australia"
              className="h-10 mx-auto hover:scale-105 transition"
            />
            <p className="text-[0.75rem] text-[#0A2540] font-medium mt-2">
              Certified Practicing Accountants
            </p>
          </div>

          <div>
            <img
              src="/cpaanz.png"
              alt="CA ANZ"
              className="h-10 mx-auto hover:scale-105 transition"
            />
            <p className="text-[0.75rem] text-[#0A2540] font-medium mt-2">
              Chartered Accountants ANZ
            </p>
          </div>

          <div>
            <img
              src="/taxagent.png"
              alt="Tax Agent"
              className="h-10 mx-auto hover:scale-105 transition"
            />
            <p className="text-[0.75rem] text-[#0A2540] font-medium mt-2">
              Registered Tax Agent
            </p>
          </div>

          <div>
            <img
              src="/xero.jpg"
              alt="Xero Partner"
              className="h-10 mx-auto hover:scale-105 transition rounded-sm"
            />
            <p className="text-[0.75rem] text-[#0A2540] font-medium mt-2">
              Xero Silver Partner
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-8 md:mb-12">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 md:p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-md transition"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-3 md:mb-4">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  onClick={(e) => handleFadeNavigate(e, s.href)}
                  className="inline-flex items-center text-[#C9A227] font-semibold hover:text-[#0A2540] transition"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Link
              to="/services"
              onClick={(e) => handleFadeNavigate(e, "/services")}
              className="inline-flex items-center bg-[#1B4765] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#0A2540] transition space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Partners Section */}
      <section
        className="py-12 md:py-20 bg-gray-50 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-8 md:mb-12">
            Meet Our Partners
          </h2>

          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="h-24 w-24 md:h-28 md:w-28 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden shadow-md ring-4 ring-[#D4AF37]/20">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-1">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-[#1B4765] font-medium mb-1">
                  {p.role}
                </p>
                <p className="text-xs md:text-sm text-gray-500">{p.credentials}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide">
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80%] snap-center bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden shadow ring-4 ring-[#D4AF37]/20">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-1">
                  {p.name}
                </h3>
                <p className="text-[#1B4765] text-sm font-medium mb-1">
                  {p.role}
                </p>
                <p className="text-xs text-gray-500">{p.credentials}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Link
              to="/about/partners"
              onClick={(e) => handleFadeNavigate(e, "/about/partners")}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#C9A227] text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#B38F1F] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Meet the Team</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Tax Calculator */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-3 md:mb-4">
            Assessable Income Calculator (2026 FY)
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
            Estimate your taxable income and potential take-home pay for the 2026
            financial year. This quick calculator helps you understand how much of
            your assessable income may be taxed.
          </p>

          <input
            type="number"
            placeholder="Enter your assessable income (e.g. 85000)"
            value={income}
            onChange={(e) => {
              setIncome(e.target.value);
              calculateIncomeTax(e.target.value);
            }}
            className="w-full border-2 border-gray-300 rounded-lg p-3 md:p-4 text-sm md:text-base text-center mb-4 md:mb-6 focus:ring-2 focus:ring-[#C9A227]"
          />

          {income && (
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-200">
                <h3 className="text-xs md:text-sm font-semibold text-blue-700 mb-1">
                  ASSESSABLE INCOME
                </h3>
                <p className="text-xl md:text-2xl font-bold text-blue-900">
                  ${parseFloat(income).toLocaleString()}
                </p>
              </div>

              <div className="bg-red-50 p-4 md:p-6 rounded-xl border border-red-200">
                <h3 className="text-xs md:text-sm font-semibold text-red-700 mb-1">
                  ESTIMATED TAX
                </h3>
                <p className="text-xl md:text-2xl font-bold text-red-900">
                  ${taxResult.tax.toLocaleString()}
                </p>
              </div>

              <div className="bg-green-50 p-4 md:p-6 rounded-xl border border-green-200">
                <h3 className="text-xs md:text-sm font-semibold text-green-700 mb-1">
                  ESTIMATED NET INCOME
                </h3>
                <p className="text-xl md:text-2xl font-bold text-green-900">
                  ${taxResult.net.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          <p className="text-gray-500 text-xs md:text-sm italic mb-6 md:mb-10 max-w-xl mx-auto">
            Results are estimates only and may vary based on your deductions,
            offsets, and other income sources.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/resources/"
              onClick={(e) => handleFadeNavigate(e, "/resources/")}
              className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 bg-[#1B4765] text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#0A2540] transition space-x-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Explore Resources</span>
            </Link>

            <Link
              to="/contact/book-consultation"
              onClick={(e) => handleFadeNavigate(e, "/contact/book-consultation")}
              className="inline-flex items-center text-sm md:text-base text-[#C9A227] font-semibold hover:text-[#A98E1E] transition"
            >
              Want to minimise your tax? Book a consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Insights & Resources */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-8 md:mb-12">
            Insights & Resources
          </h2>

          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {insights.map((i, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 md:p-6 text-left">
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2540] mb-2">
                    {i.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{i.excerpt}</p>
                  <Link
                    to={i.href}
                    onClick={(e) => handleFadeNavigate(e, i.href)}
                    className="inline-flex items-center text-[#1B4765] font-medium hover:text-[#0A2540] transition text-sm"
                  >
                    View Article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide">
            {insights.map((i, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] snap-center bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-base font-semibold text-[#0A2540] mb-2">
                    {i.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{i.excerpt}</p>
                  <Link
                    to={i.href}
                    onClick={(e) => handleFadeNavigate(e, i.href)}
                    className="inline-flex items-center text-[#1B4765] text-sm font-medium hover:text-[#0A2540] transition"
                  >
                    View Article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/resources/insights-blog"
              onClick={(e) => handleFadeNavigate(e, "/resources/insights-blog")}
              className="inline-flex items-center bg-[#C9A227] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#0F3A5F] transition space-x-2"
            >
              <span>View All Insights & Blog</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Footer CTA Section */}
      <section className="py-12 md:py-20 bg-[#0A2540] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A227] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Experience the difference
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to work with a firm that puts your success first? Let's discuss how our strategic approach can deliver results for your business.
          </p>

          <Link
            to="/contact/book-consultation"
            onClick={(e) => handleFadeNavigate(e, "/contact/book-consultation")}
            className="inline-flex items-center px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-[#C9A227] text-white rounded-lg text-sm md:text-base font-semibold hover:bg-[#B38F1F] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 min-h-[44px]"
          >
            <span>Book a consultation</span>
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
