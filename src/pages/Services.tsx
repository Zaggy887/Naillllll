import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calculator,
  TrendingUp,
  Shield,
  Award,
  BookOpen,
  Cloud
} from 'lucide-react';

const Services = () => {
  const [heroReady, setHeroReady] = useState(false);

  const services = [
    {
      title: 'Tax Advisory',
      description:
        'Strategic tax planning, compliance, and optimisation services to minimise your tax burden while ensuring full compliance with Australian tax law.',
      icon: Calculator,
      features: [
        'Corporate & Personal Tax Returns',
        'Tax Planning & Strategy',
        'R&D Tax Incentives',
        'International Tax Advisory'
      ],
      href: '/services/tax-advisory'
    },
    {
      title: 'Business Services & CFO',
      description:
        'Comprehensive business advisory and fractional CFO services to drive strategic growth and operational efficiency.',
      icon: TrendingUp,
      features: [
        'Fractional CFO Services',
        'Business Strategy & Planning',
        'Financial Analysis & Reporting',
        'Management Accounting'
      ],
      href: '/services/business-services-cfo'
    },
    {
      title: 'Audit & Assurance',
      description:
        'Independent audit services providing stakeholders with confidence in your financial reporting and compliance.',
      icon: Shield,
      features: [
        'Financial Statement Audits',
        'Internal Control Reviews',
        'Compliance Audits',
        'Due Diligence Reviews'
      ],
      href: '/services/audit-assurance'
    },
    {
      title: 'SMSF & Superannuation',
      description:
        'Expert self-managed super fund services to help you take control of your retirement planning and investments.',
      icon: Award,
      features: [
        'SMSF Setup & Administration',
        'Investment Strategy Development',
        'Compliance & Reporting',
        'Pension Phase Management'
      ],
      href: '/services/smsf-superannuation'
    },
    {
      title: 'Bookkeeping & Payroll',
      description:
        'Accurate, timely bookkeeping and payroll services to keep your business running smoothly and compliant.',
      icon: BookOpen,
      features: [
        'Monthly Bookkeeping',
        'Payroll Processing',
        'BAS & IAS Preparation',
        'Accounts Payable/Receivable'
      ],
      href: '/services/bookkeeping-payroll'
    },
    {
      title: 'Cloud Accounting & Xero Migration',
      description:
        'Modern cloud accounting solutions and seamless Xero migrations to streamline your financial processes.',
      icon: Cloud,
      features: [
        'Xero Implementation & Training',
        'Cloud System Migration',
        'Process Automation',
        'App Integration & Setup'
      ],
      href: '/services/cloud-accounting-xero'
    }
  ];

  return (
    <div className="bg-[#F5F1EC]">

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
    src="/faq8.jpg"
    alt="Our Services Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/faq8.jpg?v=6"
    alt="Our Services Header"
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
      Services
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Our Services
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Comprehensive accounting and advisory services designed to drive your business forward.
          </p>
        </div>
      </section>
      {/* ===================================================== */}


      {/* SERVICES GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#0A2540] transition-colors duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <h3 className="font-poppins text-lg md:text-xl font-bold text-[#0A2540] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 md:space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm md:text-base text-[#222222]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#1B4765] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center bg-[#0A2540] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#0F3A5F] transition-all duration-300 space-x-2 group-hover:scale-105"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
              Why choose our services?
            </h2>
            <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with strategic thinking to deliver results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Results-Driven Approach
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                We focus on measurable outcomes that contribute directly to your business growth and financial success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Compliance & Risk Management
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Stay ahead of regulatory requirements with our proactive compliance monitoring and risk assessment services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Industry Expertise
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Deep sector knowledge across professional services, property, hospitality, and technology industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to get started?
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Let's discuss which services are right for your business and how we can help you achieve your financial goals.
          </p>
          <Link
            to="/contact/book-consultation"
            className="inline-flex items-center bg-[#C9A227] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
          >
            <span>Book a consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
