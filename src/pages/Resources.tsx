import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, HelpCircle } from 'lucide-react';

const Resources = () => {
  const [heroReady, setHeroReady] = useState(false);

  const resources = [
    {
      title: 'Insights & Blog',
      description:
        'Expert analysis, industry trends, and practical advice on Australian tax and business matters.',
      icon: BookOpen,
      href: '/resources/insights-blog',
      count: '10+ articles',
    },
    {
      title: 'Calculators & Templates',
      description:
        'Free tools and templates to help you plan and manage your business finances effectively.',
      icon: Calculator,
      href: '/resources/calculators-templates',
      count: '5+ tools',
    },
    {
      title: 'FAQs',
      description:
        'Answers to common questions about Australian taxation, compliance, and business advisory.',
      icon: HelpCircle,
      href: '/resources/faqs',
      count: '12+ answers',
    },
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
    alt="Resources Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/faq8.jpg?v=6"
    alt="Resources Header"
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
      Resources
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Expert insights, practical tools, and answers to help you make informed financial decisions.
    </p>
  </div>
</section>


      {/* Resources Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.href}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto group-hover:bg-[#0A2540] transition-colors duration-300">
                  <resource.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>

                <h3 className="font-poppins text-lg md:text-xl font-bold text-[#0A2540] mb-3">
                  {resource.title}
                </h3>

                <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                  {resource.description}
                </p>

                <div className="bg-[#F5F1EC] px-3 py-1.5 rounded-lg inline-block mb-4">
                  <span className="text-[#1B4765] font-semibold text-xs md:text-sm">
                    {resource.count}
                  </span>
                </div>

                <div className="flex items-center justify-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors duration-300">
                  <span>Explore resources</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
              Featured Resources
            </h2>
            <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Some of our most popular and helpful resources for Australian businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl">
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-3">
                2025 Tax Planning Guide
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Comprehensive guide to tax planning strategies for the 2025 financial year.
              </p>
              <Link
                to="/resources/insights-blog"
                className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
              >
                Read more →
              </Link>
            </div>

            <div className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl">
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-3">
                GST Calculator
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Quick and accurate GST calculations for your business transactions.
              </p>
              <Link
                to="/resources/calculators-templates"
                className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
              >
                Use calculator →
              </Link>
            </div>

            <div className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl">
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-3">
                SMSF Setup Guide
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Everything you need to know about establishing a self-managed super fund.
              </p>
              <Link
                to="/resources/faqs"
                className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-4">
            Need personalised advice?
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            While our resources provide valuable insights, nothing replaces personalised professional advice.
            Let's discuss your specific situation.
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

export default Resources;
