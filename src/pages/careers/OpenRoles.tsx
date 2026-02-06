import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";

const OpenRoles = () => {
  const [heroReady, setHeroReady] = useState(false);

  const openRoles = [
    {
      title: "Senior Tax Accountant",
      department: "Tax Advisory",
      location: "Melbourne CBD",
      type: "Full-time",
      salary: "$75,000 - $90,000",
      experience: "3-5 years",
      description:
        "Join our growing tax team to provide strategic tax advice and compliance services to our diverse client base.",
      requirements: [
        "CPA or CA qualification (or working towards)",
        "3+ years tax experience in public practice",
        "Strong technical knowledge of Australian tax law",
        "Excellent client communication skills",
      ],
    },
    {
      title: "Business Advisory Manager",
      department: "Business Services",
      location: "Sydney CBD",
      type: "Full-time",
      salary: "$85,000 - $105,000",
      experience: "5-7 years",
      description:
        "Lead business advisory engagements and help our clients achieve their strategic and financial objectives.",
      requirements: [
        "CPA or CA qualification",
        "5+ years business advisory experience",
        "Strong analytical and problem-solving skills",
        "Experience with financial modelling and forecasting",
      ],
    },
    {
      title: "Audit Senior",
      department: "Audit & Assurance",
      location: "Melbourne CBD",
      type: "Full-time",
      salary: "$65,000 - $80,000",
      experience: "2-4 years",
      description:
        "Support audit engagements across various industries while developing your technical and leadership skills.",
      requirements: [
        "CA qualification preferred",
        "2+ years audit experience",
        "Knowledge of Australian Auditing Standards",
        "Strong attention to detail and analytical skills",
      ],
    },
    {
      title: "SMSF Administrator",
      department: "SMSF Services",
      location: "Melbourne CBD",
      type: "Full-time",
      salary: "$55,000 - $70,000",
      experience: "1-3 years",
      description:
        "Provide comprehensive SMSF administration services and support our growing superannuation practice.",
      requirements: [
        "SMSF Specialist Advisor qualification (or willing to obtain)",
        "1+ years SMSF experience",
        "Understanding of superannuation legislation",
        "Proficiency with SMSF software packages",
      ],
    },
    {
      title: "Graduate Accountant",
      department: "Multiple Teams",
      location: "Melbourne CBD / Sydney CBD",
      type: "Full-time",
      salary: "$50,000 - $60,000",
      experience: "Graduate",
      description:
        "Start your accounting career with comprehensive training and exposure to various service areas.",
      requirements: [
        "Bachelor's degree in Accounting or related field",
        "Strong academic record",
        "Excellent communication and interpersonal skills",
        "Enthusiasm for learning and professional development",
      ],
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Annual learning budget ($3,000)",
    "CPA/CA study support",
    "Flexible working arrangements",
    "Health insurance discounts",
    "Professional development opportunities",
    "Team events and social activities",
    "Modern office environments",
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
    src="/thefir.webp"
    alt="Open Roles Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/thefir.webp?v=6"
    alt="Open Roles Header"
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
      Careers
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Open Roles
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Discover exciting career opportunities and take the next step in your professional journey with us.
    </p>
  </div>
</section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* ======================================================
         CURRENT OPPORTUNITIES
      ======================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto">
              We're always looking for talented professionals to join our growing team.
            </p>
          </div>

          <div className="space-y-8">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">

                  {/* Top row */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                        {role.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#222222] mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-[#1B4765]" />
                          {role.department}
                        </div>

                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-[#1B4765]" />
                          {role.location}
                        </div>

                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-[#1B4765]" />
                          {role.type}
                        </div>

                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2 text-[#1B4765]" />
                          {role.salary}
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-8">
                      <span className="bg-[#1B4765] text-white px-4 py-2 rounded-lg text-sm font-medium">
                        {role.experience}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[#222222] leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#0A2540] mb-4">
                      Key Requirements:
                    </h4>

                    <ul className="grid md:grid-cols-2 gap-2">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#1B4765] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-[#222222]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#C9A227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8921F] transition-all flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button className="bg-[#F5F1EC] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8E3DC] transition-all">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
         WHAT WE OFFER
      ======================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Comprehensive benefits and opportunities designed to support your career growth and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F5F1EC] p-6 rounded-xl text-center flex items-center justify-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="#1B4765"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-[#222222] font-medium text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
         APPLICATION PROCESS
      ======================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              Application Process
            </h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures a positive experience for all candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Submit Application",
              "Initial Review",
              "Interview Process",
              "Welcome Aboard",
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1B4765] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-[#0A2540] mb-4">
                  {step}
                </h3>

                <p className="text-[#222222] leading-relaxed">
                  {index === 0 &&
                    "Send your resume and cover letter through our online portal."}
                  {index === 1 &&
                    "Our team reviews applications and contacts suitable candidates within 5 business days."}
                  {index === 2 &&
                    "Meet with the hiring manager and team members to discuss the role and your experience."}
                  {index === 3 &&
                    "Successful candidates receive an offer and begin our comprehensive onboarding program."}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
         DON'T SEE A FIT SECTION
      ======================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
            Don't see the right fit?
          </h2>

          <p className="text-xl text-[#222222] mb-8 leading-relaxed">
            We're always interested in connecting with talented professionals. Send us
            your resume and we'll keep you in mind for future opportunities that match
            your skills and interests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0A2540] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0F3A5F] transition-all">
              Submit General Application
            </button>

            <Link
              to="/careers/life-at-harbour-finch"
              className="bg-[#F5F1EC] text-[#0A2540] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E8E3DC] transition-all"
            >
              Learn About Our Culture
            </Link>
          </div>

        </div>
      </section>

      {/* ======================================================
         CTA FOOTER
      ======================================================= */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your journey?
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Join a team that values your growth, celebrates your successes, and
            supports your career aspirations.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center bg-[#C9A227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all space-x-2"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default OpenRoles;
