import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";

const Careers = () => {
  const [heroReady, setHeroReady] = useState(false);

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
    src="/thefir.webp"
    alt="Careers Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/thefir.webp?v=6"
    alt="Careers Header"
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
      Careers
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Build Your Career With Us
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Join a team that values growth, innovation, and making a meaningful impact
      for our clients and community.
    </p>
  </div>
</section>


      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link
              to="/careers/life-at-harbour-finch"
              className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1B4765] transition-colors">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Life at Harbour & Finch
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Discover our culture, values, and what makes working here special.
              </p>
              <div className="flex items-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/careers/open-roles"
              className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1B4765] transition-colors">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Open Roles
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
                Explore current opportunities and take the next step in your career.
              </p>
              <div className="flex items-center text-[#1B4765] font-medium group-hover:text-[#0A2540] transition-colors">
                <span>View positions</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
              Why choose Harbour & Finch?
            </h2>
            <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
              We're not just building a business — we're building careers and making a positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Career Growth
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Clear progression paths and support for ongoing professional development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Collaborative Culture
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Work with passionate professionals who support each other.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-5 mx-auto">
                <Award className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-poppins text-base md:text-lg font-semibold text-[#0A2540] mb-2 md:mb-3">
                Meaningful Work
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Make a genuine impact helping businesses and individuals thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to grow with us?
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Take the first step towards an exciting career in accounting and advisory services.
          </p>
          <Link
            to="/careers/open-roles"
            className="inline-flex items-center bg-[#C9A227] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
          >
            <span>View open positions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Careers;
