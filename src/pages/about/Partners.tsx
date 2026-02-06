import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

const Partners = () => {
  const [heroReady, setHeroReady] = useState(false);

  const partners = [
    {
      name: 'Emma Finch',
      role: 'Managing Partner & Tax Director',
      credentials: 'CPA, CA, RTA',
      bio: 'Emma brings over 8 years of experience in corporate tax and advisory services. Previously a Tax Director at PwC, she specialises in complex restructures, M&A tax advisory, and international tax planning.',
      expertise: ['Corporate Tax Planning', 'Mergers & Acquisitions', 'International Tax', 'Business Restructures'],
      image: '/photoone.jpg',
      email: 'emma.finch@harbourfinch.com.au',
      phone: '+61 3 9000 0001'
    },
    {
      name: 'Daniel Harbour',
      role: 'Partner & Audit Director',
      credentials: 'CA, MAICD',
      bio: 'Daniel is a chartered accountant with 12 years in audit and assurance, including 8 years at EY. He leads our audit practice and specialises in financial reporting, internal controls, and risk management for growing businesses.',
      expertise: ['Financial Statement Audits', 'Internal Controls Review', 'Risk Management', 'Corporate Governance'],
      image: '/phototwo.png',
      email: 'daniel.harbour@harbourfinch.com.au',
      phone: '+61 3 9000 0002'
    },
    {
      name: 'Priya Nair',
      role: 'Partner & Advisory Director',
      credentials: 'CPA, MBA',
      bio: 'Priya combines technical accounting expertise with strategic business acumen. With an MBA from Melbourne Business School and 14 years of experience, she leads our business advisory and SMSF services.',
      expertise: ['SMSF Strategy & Compliance', 'Business Advisory', 'Financial Planning Integration', 'Succession Planning'],
      image: '/photothree.jpg',
      email: 'priya.nair@harbourfinch.com.au',
      phone: '+61 3 9000 0003'
    }
  ];

  const seniorTeam = [
    { name: 'Marcus Alexander', role: 'Senior Manager, Tax', credentials: 'CPA, RTA', specialty: 'Personal tax, small business advisory', image: '/tone.jpg' },
    { name: 'Sarah Williams', role: 'Senior Manager, Audit', credentials: 'CA', specialty: 'NFP audits, compliance reviews', image: '/tthree.jpg' },
    { name: 'James Mitchell', role: 'Manager, Business Services', credentials: 'CPA', specialty: 'Bookkeeping, payroll, cloud accounting', image: '/ttwo.jpg' },
    { name: 'Lisa Park', role: 'Manager, SMSF Services', credentials: 'CPA, SMSF Specialist Advisor', specialty: 'SMSF compliance, investment strategies', image: '/tfour.jpg' }
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
    src="/partner.webp"
    alt="Meet our Partners Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/partner.webp?v=6"
    alt="Meet our Partners Header"
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
      Meet our Partners
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Dedicated professionals combining global expertise with local knowledge to deliver exceptional outcomes.
    </p>
  </div>
</section>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


      {/* ======================================================
         PARTNERS SECTION
      ====================================================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10 md:space-y-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 md:gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-reverse" : ""
              }`}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-2xl shadow-lg hover:scale-105 transition duration-500 bg-white"
              />

              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540]">{partner.name}</h2>
                <p className="text-lg md:text-xl text-[#1B4765] font-semibold">{partner.role}</p>
                <p className="text-sm md:text-base text-[#C9A227] font-semibold">{partner.credentials}</p>
                <p className="text-base md:text-lg text-[#222222] leading-relaxed">{partner.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {partner.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#F5F1EC] text-[#1B4765] px-3 py-[5px] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-200/70 my-3 sm:my-4"></div>

                <div className="flex items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
                  <a href={`mailto:${partner.email}`} className="text-[#1B4765] hover:text-[#0A2540] flex items-center gap-2 text-sm sm:text-base">
                    <Mail className="w-5 h-5" /> <span className="hidden sm:inline">Email</span>
                  </a>
                  <a href={`tel:${partner.phone}`} className="text-[#1B4765] hover:text-[#0A2540] flex items-center gap-2 text-sm sm:text-base">
                    <Phone className="w-5 h-5" /> <span className="hidden sm:inline">Call</span>
                  </a>
                  <a href="#" className="text-[#1B4765] hover:text-[#0A2540] flex items-center gap-2 text-sm sm:text-base">
                    <Linkedin className="w-5 h-5" /> <span className="hidden sm:inline">Connect</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ======================================================
         SENIOR TEAM
      ====================================================== */}
      <section className="py-12 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4 md:mb-6">Senior Team</h2>
            <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto">
              Our senior managers bring technical depth and a client-first approach.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {seniorTeam.map((member, i) => (
              <div key={i} className="bg-white p-5 md:p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 text-center">
                <div className="w-24 md:w-28 h-24 md:h-28 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-contain bg-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0A2540]">{member.name}</h3>
                <p className="text-[#1B4765] text-sm md:text-base font-medium">{member.role}</p>
                <p className="text-[#C9A227] text-xs md:text-sm font-medium mb-2">{member.credentials}</p>
                <p className="text-[#222222] text-xs md:text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex overflow-x-auto gap-5 snap-x snap-mandatory pb-3 scrollbar-hide">
            {seniorTeam.map((member, i) => (
              <div key={i} className="flex-shrink-0 w-[70%] snap-center bg-white p-5 rounded-2xl shadow text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-semibold text-[#0A2540]">{member.name}</h3>
                <p className="text-[#1B4765] text-sm">{member.role}</p>
                <p className="text-[#C9A227] text-xs mb-1">{member.credentials}</p>
                <p className="text-gray-700 text-xs">{member.specialty}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Partners;
