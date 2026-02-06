import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Award, TrendingUp, Shield } from 'lucide-react';

const OurFirm = () => {
  const [heroReady, setHeroReady] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Client-Centric Focus',
      description: 'Every decision we make is guided by what delivers the best outcome for our clients.',
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest professional standards in all our services and advice.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We embrace technology and modern practices to deliver efficient, effective solutions.',
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'We build long-term relationships based on trust, transparency, and consistent results.',
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
    src="/ourfirm1.webp"
    alt="Our Firm Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/ourfirm1.webp?v=6"
    alt="Our Firm Header"
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
      About
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Our Firm
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
       Our firm is built on expertise, integrity, and a commitment to delivering meaningful results.
    </p>
  </div>
</section>

{/* ===================================================== */}

{/* Divider */}
<div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>


{/* ======================================================
   OUR STORY
====================================================== */}
<section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
          Our Story
        </h2>

        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-[#222222] leading-relaxed">
          <p>
            Harbour & Finch Advisory was established in 2018 by Emma Finch and Daniel Harbour — two
            seasoned professionals who recognised a gap in the Australian market for strategic,
            results-driven accounting and advisory services.
          </p>

          <p>
            Coming from Big Four backgrounds, our founders were passionate about delivering the same
            calibre of expertise and strategic thinking to small and medium-sized businesses that was
            traditionally only available to large corporations.
          </p>

          <p>
            Today, we're proud to serve over 300 clients across Australia — helping them navigate complex
            financial landscapes and achieve sustainable growth.
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.pexels.com/photos/5668832/pexels-photo-5668832.jpeg"
          alt="Our office"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


{/* ======================================================
   MISSION & VISION
====================================================== */}
<section className="py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="grid lg:grid-cols-2 gap-6 md:gap-16">
      <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4 md:mb-6">
          Our Mission
        </h3>
        <p className="text-base md:text-lg text-[#222222] leading-relaxed">
          To empower Australian businesses with strategic financial advice and comprehensive accounting
          services that drive measurable growth.
        </p>
      </div>

      <div className="bg-[#1B4765] p-6 md:p-12 rounded-2xl text-white">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Our Vision
        </h3>
        <p className="text-base md:text-lg leading-relaxed">
          To be Australia’s most trusted accounting and advisory firm — recognised for innovation,
          exceptional client outcomes, and unwavering professional excellence.
        </p>
      </div>
    </div>

  </div>
</section>


{/* ======================================================
   OUR VALUES
====================================================== */}
<section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
        Our Values
      </h2>
      <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
        These core values guide every interaction, decision, and service we provide.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {values.map((value, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
            <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3 md:mb-4">
            {value.title}
          </h3>
          <p className="text-sm md:text-base text-[#222222] leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


{/* ======================================================
   AWARDS & RECOGNITION
====================================================== */}
<section className="py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
        Awards & Recognition
      </h2>
      <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
        We're proud to be recognised by industry bodies and peers for our commitment to excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C9A227] rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
          <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3 md:mb-4">
          Excellence in Client Service 2024
        </h3>
        <p className="text-sm md:text-base text-[#222222] leading-relaxed">
          CPA Australia Small Practice Award
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C9A227] rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
          <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3 md:mb-4">
          Innovation in Practice 2023
        </h3>
        <p className="text-sm md:text-base text-[#222222] leading-relaxed">
          Chartered Accountants ANZ
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#C9A227] rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
          <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3 md:mb-4">
          Best New Firm 2019
        </h3>
        <p className="text-sm md:text-base text-[#222222] leading-relaxed">
          Australian Accounting Awards
        </p>
      </div>
    </div>

  </div>
</section>


{/* ======================================================
   CTA FOOTER
====================================================== */}
<section className="bg-[#0A2540] py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">

    <h2 className="text-4xl font-bold text-white mb-6">
      Experience the difference
    </h2>

    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
      Ready to work with a firm that puts your success first? Let's discuss how our strategic approach
      can deliver results for your business.
    </p>

    <Link
      to="/contact/book-consultation"
      className="inline-flex items-center bg-[#C9A227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
    >
      <span>Book a consultation</span>
      <ArrowRight className="w-5 h-5" />
    </Link>

  </div>
</section>

    </div>
  );
};

export default OurFirm;
