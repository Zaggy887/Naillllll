import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Mail,
  Phone,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Shield,
  Heart,
  TreePine,
  Users,
  Award,
} from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';
import ErrorBoundary from '../../components/ErrorBoundary';

const CommunityESG = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ HERO LOADER STATE (same pattern as service pages)
  const [heroReady, setHeroReady] = useState(false);
  
  const initiatives = [
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Supporting local charities and community organisations through pro bono services and financial contributions.',
      stats: '$50K+ donated annually'
    },
    {
      icon: TreePine,
      title: 'Environmental Responsibility',
      description: 'Carbon-neutral operations, paperless processes, and sustainable business practices.',
      stats: '100% renewable energy'
    },
    {
      icon: Users,
      title: 'Education & Mentoring',
      description: 'Providing financial literacy programs and mentoring to small business owners and startups.',
      stats: '200+ businesses mentored'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Active participation in professional bodies and contributing to industry development.',
      stats: '5 industry committees'
    }
  ];

  const partnerships = [
    {
      name: 'Beyond Blue',
      description: 'Mental health support and workplace wellness programs',
      contribution: 'Annual fundraising and employee volunteer days'
    },
    {
      name: 'Junior Achievement Australia',
      description: 'Financial literacy education for young Australians',
      contribution: 'Volunteer mentors and curriculum development'
    },
    {
      name: 'Reconciliation Australia',
      description: 'Supporting Aboriginal and Torres Strait Islander businesses',
      contribution: 'Pro bono services and procurement partnerships'
    },
    {
      name: 'Small Business Mentoring Service',
      description: 'Free business advisory for startup entrepreneurs',
      contribution: 'Monthly mentoring sessions and workshops'
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
    src="/vol.jpg"
    alt="Community & ESG Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/vol.jpg?v=6"
    alt="Community & ESG Header"
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
      Community &amp; ESG
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal max-w-2xl leading-relaxed">
      Our commitment to social responsibility, environmental stewardship, and making a positive impact in the communities we serve.
    </p>
  </div>
</section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* ======================================================
         ESG INITIATIVES SECTION
      ====================================================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16">
            <p className="text-xs md:text-sm text-[#0A2540] font-semibold tracking-wider uppercase mb-3">
              Making a Difference
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Our ESG Initiatives
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to creating positive social, environmental, and economic impact in everything we do.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {initiatives.map((initiative, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0A2540] hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="mb-5 p-3 bg-gradient-to-br from-[#0A2540]/5 to-[#3b82f6]/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {React.createElement(initiative.icon, {
                    className: 'w-8 h-8 md:w-10 md:h-10 text-[#0A2540]'
                  })}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3">
                  {initiative.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {initiative.description}
                </p>

                <div className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/10 rounded-lg">
                  <span className="text-sm font-semibold text-[#0A2540]">{initiative.stats}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


{/* Divider */}
<div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>



{/* ======================================================
   OUR COMMITMENT
====================================================== */}
<section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
          Our Commitment
        </h2>

        <div className="space-y-6 text-[#222222] text-base md:text-lg leading-relaxed">
          <p>
            At Harbour & Finch Advisory, we believe that successful businesses have a responsibility 
            to contribute positively to society and the environment. Our ESG framework guides our 
            decision-making and operations.
          </p>
          <p>
            We're committed to being a force for good in our community while helping our clients adopt 
            sustainable practices in their own businesses.
          </p>
          <p>
            Our ESG initiatives are not just corporate responsibility—they’re woven into how we 
            operate every single day.
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.pexels.com/photos/8459412/pexels-photo-8459412.jpeg"
          alt="Community engagement"
          className="rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>



{/* ======================================================
   OUR INITIATIVES
====================================================== */}
<section className="py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
        Our Initiatives
      </h2>
      <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
        We focus on four key areas where we can make the most meaningful impact.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {initiatives.map((initiative, index) => (
        <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1B4765] rounded-xl flex items-center justify-center mb-4 md:mb-6">
            <initiative.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-3">
            {initiative.title}
          </h3>
          <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4">
            {initiative.description}
          </p>
          <div className="bg-[#F5F1EC] px-4 py-2 rounded-lg inline-block">
            <span className="text-[#1B4765] font-semibold text-sm">{initiative.stats}</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>



{/* ======================================================
   COMMUNITY PARTNERSHIPS
====================================================== */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
        Community Partnerships
      </h2>
      <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
        We partner with organisations that share our values and commitment to positive change.
      </p>
    </div>

    {/* Desktop grid */}
    <div className="hidden sm:grid md:grid-cols-2 gap-8">
      {partnerships.map((p, index) => (
        <div key={index} className="bg-[#F5F1EC] p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-[#0A2540] mb-4">{p.name}</h3>
          <p className="text-[#222222] leading-relaxed mb-4">{p.description}</p>
          <div className="bg-[#1B4765] text-white px-4 py-2 rounded-lg inline-block">
            <span className="font-medium text-sm">{p.contribution}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile slider */}
    <div className="sm:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide">
      {partnerships.map((p, index) => (
        <div key={index} className="flex-shrink-0 w-[80%] snap-center bg-[#F5F1EC] p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold text-[#0A2540] mb-3">{p.name}</h3>
          <p className="text-sm text-[#222222] leading-relaxed mb-3">{p.description}</p>
          <div className="bg-[#1B4765] text-white px-4 py-2 rounded-lg inline-block">
            <span className="font-medium text-xs">{p.contribution}</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>



{/* ======================================================
   IMPACT REPORT
====================================================== */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
        2024 Impact Report
      </h2>
      <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
        Measuring our progress towards a more sustainable and equitable future.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-4xl font-bold text-[#1B4765] mb-2">Zero</div>
        <p className="text-[#222222] font-medium">Carbon Footprint</p>
        <p className="text-sm text-gray-600 mt-2">100% offset operations</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-4xl font-bold text-[#1B4765] mb-2">95%</div>
        <p className="text-[#222222] font-medium">Paperless Processes</p>
        <p className="text-sm text-gray-600 mt-2">Digital-first approach</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-4xl font-bold text-[#1B4765] mb-2">150</div>
        <p className="text-[#222222] font-medium">Volunteer Hours</p>
        <p className="text-sm text-gray-600 mt-2">Per team member annually</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
        <div className="text-4xl font-bold text-[#1B4765] mb-2">$75K</div>
        <p className="text-[#222222] font-medium">Community Investment</p>
        <p className="text-sm text-gray-600 mt-2">Direct contributions</p>
      </div>
    </div>

  </div>
</section>



{/* ======================================================
   FUTURE GOALS
====================================================== */}
<section className="py-20 bg-[#1B4765] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our 2025 Goals</h2>
      <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
        We're committed to continuous improvement and setting ambitious targets for the year ahead.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <TreePine className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Carbon Negative Operations</h3>
        <p className="opacity-90 leading-relaxed">
          Move beyond carbon neutral to actively remove CO2 from the atmosphere.
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4">300 SMEs Supported</h3>
        <p className="opacity-90 leading-relaxed">
          Provide free business mentoring and resources to 300 small and medium Australian businesses.
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4">$100K Community Fund</h3>
        <p className="opacity-90 leading-relaxed">
          Double our annual community contributions through donations and pro bono services.
        </p>
      </div>

    </div>
  </div>
</section>



{/* ======================================================
   CTA FOOTER
====================================================== */}
<section className="bg-[#0A2540] py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-4xl font-bold text-white mb-6">
      Partner with purpose
    </h2>

    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
      Choose an accounting firm that shares your values. Let's discuss how we can 
      help your business grow while making a positive impact.
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

export default CommunityESG;
