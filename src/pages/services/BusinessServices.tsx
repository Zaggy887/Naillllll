import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  BarChart3,
  Mail,
  Phone,
  CheckCircle
} from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { HERO_IMAGES, SECONDARY_IMAGES, preloadImages } from '../../utils/pexelsOptimizer';

const BusinessServices = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ Match Tax Advisory: Smooth hero state
  const [heroReady, setHeroReady] = useState(false);

  // Preload key images
  const criticalImages = ['/photothree.jpg', '/businessinfo.jpg'];
  const { imagesLoaded, progress } = useImagePreloader(criticalImages);

  useEffect(() => {
    preloadImages(criticalImages);
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#0A2540]" />,
      title: 'Fractional CFO Services',
      description:
        'Strategic financial leadership without the full-time commitment. Perfect for growing businesses.',
      details: [
        'Monthly management reporting',
        'Cash flow forecasting and management',
        'Strategic planning and budgeting',
        'KPI development and tracking',
        'Board presentation preparation'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0A2540]" />,
      title: 'Business Strategy',
      description:
        'Develop actionable strategies to drive sustainable growth and long-term performance.',
      details: [
        'Business planning and modelling',
        'Growth strategy development',
        'Market analysis and positioning',
        'Operational efficiency reviews',
        'Succession and exit planning'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#0A2540]" />,
      title: 'Financial Reporting',
      description:
        'Clear, accurate financial reporting that provides real insights for better decisions.',
      details: [
        'Monthly financial statements',
        'Management dashboards',
        'Variance analysis and commentary',
        'Forecasting and scenario planning',
        'Stakeholder reporting'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-[#0A2540]" />,
      title: 'Advisory & Consulting',
      description:
        'Expert guidance across operations, risk, systems, and strategic decision-making.',
      details: [
        'Risk management frameworks',
        'Process improvement initiatives',
        'Technology selection and integration',
        'M&A support',
        'Business valuations'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is a Fractional CFO and do I need one?',
      answer:
        'A Fractional CFO provides strategic financial leadership on a part-time or project basis, offering C-suite expertise without the cost of a full-time hire.'
    },
    {
      question: 'How much time does a Fractional CFO commit?',
      answer:
        'Typically 1–3 days per month for established businesses, and 2–5 days per month during growth or fundraising. We tailor involvement to your needs.'
    },
    {
      question: 'What is the difference between a CFO and an accountant?',
      answer:
        'Accountants focus on compliance and historical data. CFOs provide forward-looking strategy, forecasting, raising capital, and financial leadership.'
    },
    {
      question: 'Can you help with raising capital?',
      answer:
        'Yes — pitch preparation, financial models, investor readiness, due diligence, bank negotiations, and grant support.'
    },
    {
      question: 'How do you improve cash flow?',
      answer:
        'By analysing your cash cycle, implementing 13-week forecasts, improving collections, negotiating terms, and identifying drains.'
    },
    {
      question: 'Do you work with startups?',
      answer:
        'Yes — we support all business stages with tailored strategy, reporting, planning, and growth advice.'
    },
    {
      question: 'Can you help with valuations?',
      answer:
        'Yes — comprehensive valuations using multiple methodologies to support succession, sale, or investment decisions.'
    },
    {
      question: 'What KPIs should I track?',
      answer:
        'Common KPIs include gross margin, CAC, LTV, cash conversion, revenue per employee — customised to your industry.'
    },
    {
      question: 'How do you integrate with our team?',
      answer:
        'We collaborate with your leadership and finance teams, mentoring and providing strategic oversight.'
    },
    {
      question: 'What ROI should I expect?',
      answer:
        'Most clients see 5–10x ROI through improved cash flow, pricing, modelling, avoided mistakes, and successful fundraising.'
    }
  ];

  const manager = {
    name: 'Priya Nair',
    role: 'Partner & Advisory Director',
    credentials: 'CPA, MBA',
    email: 'priya.nair@harbourfinch.com.au',
    phone: '+61 3 9000 0003',
    bio: 'Priya combines technical accounting expertise with strategic business acumen. With an MBA from Melbourne Business School and 14 years of experience, she leads our business advisory services.',
    image: '/photothree.jpg'
  };

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mx-auto mb-4" />
          <p className="text-[#1e3a8a] font-semibold">Loading Business Services...</p>
          <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden mt-4">
            <div
              className="bg-[#1e3a8a] h-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">{progress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">

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
    src="/businessinfo.jpg"
    alt="Business Services Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/businessinfo.jpg?v=6"
          alt="Business Services Header"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          onLoad={() => setHeroReady(true)}
          onError={() => setHeroReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 3️⃣ Gold–navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#18385A]/65 to-[#AE8621]/70"></div>

        {/* 4️⃣ Text */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10">
          <span className="inline-block rounded-full bg-white/90 text-[#0A2540] text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
            Service
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
            Business Services
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light max-w-2xl leading-relaxed">
            Strategic financial leadership and tailored business guidance to support sustainable growth and drive measurable results.
          </p>
        </div>

      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* ======================================================
         SERVICES SECTION
      ====================================================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16">
            <p className="text-xs md:text-sm text-[#0A2540] font-semibold tracking-wider uppercase mb-3">
              Our Expertise
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Comprehensive Business Advisory
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From Fractional CFO services to strategic planning, we provide the financial leadership and insights you need to scale successfully.
            </p>
          </div>

          {/* Meet Your Director */}
          <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#3b82f6]/5"></div>

                <OptimizedImage
                  src={manager.image}
                  alt={manager.name}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover object-center"
                  priority
                  loading="eager"
                />
              </div>

              <div className="p-6 lg:p-8">
                <p className="text-xs md:text-sm text-[#0A2540] font-semibold uppercase tracking-wider mb-2">
                  Your Expert
                </p>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-2">
                  Meet Your Director
                </h3>

                <h4 className="text-lg md:text-xl font-semibold text-[#1B4765] mb-1.5">
                  {manager.name}
                </h4>

                <p className="text-[#D4AF37] text-sm md:text-base font-semibold mb-4">
                  {manager.credentials}
                </p>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {manager.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">

                  <a
                    href={`mailto:${manager.email}`}
                    className="inline-flex items-center px-5 py-2.5 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1B4765] transition-all shadow-lg"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email {manager.name.split(' ')[0]}
                  </a>

                  <a
                    href={`tel:${manager.phone}`}
                    className="inline-flex items-center px-5 py-2.5 border-2 border-[#1B4765] text-[#1B4765] rounded-lg font-semibold hover:bg-[#1B4765] hover:text-white transition-all shadow-lg"
                  >
                    <Phone className="w-4 h-4 mr-2" /> {manager.phone}
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0A2540] hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="mb-5 p-3 bg-gradient-to-br from-[#0A2540]/5 to-[#3b82f6]/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon, {
                    className: 'w-8 h-8 md:w-10 md:h-10 text-[#0A2540]'
                  })}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">
            <p className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wider mb-3">
              Common Questions
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* CTA Footer */}
      <section className="relative py-12 md:py-20 bg-[#0A2540] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-[-5%] top-[10%] w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl"></div>
          <div className="absolute left-[-5%] bottom-[10%] w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">

          <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-4">
            Get Started Today
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-7">
            Ready to Take Your Business Further?
          </h2>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
            Our business advisors and fractional CFOs are ready to help you achieve your strategic goals with expert financial leadership and actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact/book-consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0A2540] rounded-lg 
              font-semibold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href={`mailto:${manager.email}`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white 
              rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Our Team
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default BusinessServices;
