import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target } from 'lucide-react';

const About = () => {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="bg-[#F5F1EC] min-h-screen">

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
    src="/thefir.webp"
    alt="About Harbour & Finch Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/thefir.webp?v=6"
    alt="About Harbour & Finch Header"
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
      About
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      About Harbour & Finch
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Your trusted partners in financial growth and strategic business development across Australia.
    </p>
  </div>
</section>


      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/about/our-firm"
              className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1B4765] transition-colors duration-300">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#0A2540] mb-3">Our Firm</h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Learn about our history, mission, and the values that drive everything we do.
              </p>
              <div className="flex items-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              to="/about/partners"
              className="bg-[#F5F1EC] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1B4765] transition-colors duration-300">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#0A2540] mb-3">Partners</h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Meet our experienced team of partners and senior professionals.
              </p>
              <div className="flex items-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors duration-300">
                <span>Meet the team</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              to="/about/community-esg"
              className="bg-[#F5F1EC] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1B4765] transition-colors duration-300">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#0A2540] mb-3">Community & ESG</h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Discover our commitment to community impact and environmental responsibility.
              </p>
              <div className="flex items-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors duration-300">
                <span>Our impact</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to work with us?
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help your business achieve its financial goals.
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

export default About;
