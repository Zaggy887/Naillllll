import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Coffee,
  BookOpen,
  Globe,
} from "lucide-react";

const LifeAtHF = () => {
  const [heroReady, setHeroReady] = useState(false);

  const benefits = [
    {
      icon: Award,
      title: "Professional Development",
      description:
        "Annual learning budget, conference attendance, and support for CPA/CA studies",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements, generous leave policies, and wellbeing programs",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Regular team events, mentoring programs, and collaborative workspace",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description:
        "Free coffee, team lunches, parking allowances, and health insurance discounts",
    },
    {
      icon: BookOpen,
      title: "Career Progression",
      description:
        "Clear advancement paths, leadership opportunities, and skills development",
    },
    {
      icon: Globe,
      title: "Modern Workplace",
      description:
        "Latest technology, cloud-based systems, and contemporary office spaces",
    },
  ];

  const values = [
    {
      title: "Client First",
      description:
        "Every decision we make is guided by what delivers the best outcome for our clients.",
    },
    {
      title: "Continuous Learning",
      description:
        "We invest in our people and embrace new technologies to stay at the forefront of our industry.",
    },
    {
      title: "Integrity & Trust",
      description:
        "We build lasting relationships through honest communication and reliable service.",
    },
    {
      title: "Collaborative Success",
      description:
        "We achieve more together and celebrate both individual and team accomplishments.",
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
    src="/lifeat.webp"
    alt="Life at Harbour & Finch Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/lifeat.webp?v=6"
    alt="Life at Harbour & Finch Header"
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
      Life at Harbour & Finch
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Discover what makes our workplace special—where talented professionals grow,
      collaborate, and make a meaningful impact.
    </p>
  </div>
</section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>

      {/* ======================================================
         OUR CULTURE
      ======================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Our Culture</h2>

              <div className="space-y-6 text-lg text-[#222222] leading-relaxed">
                <p>
                  At Harbour & Finch, we've built more than just an accounting firm—we've
                  created a community of passionate professionals who genuinely care about
                  each other's success and our clients' outcomes.
                </p>

                <p>
                  Our culture is built on collaboration, continuous learning, and having fun
                  while doing meaningful work. When our team thrives, our clients benefit from
                  exceptional service and innovative solutions.
                </p>

                <p>
                  From morning coffee chats to celebrating team wins, we foster an environment
                  where everyone feels valued, supported, and empowered to reach their potential.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/7580787/pexels-photo-7580787.jpeg"
                className="rounded-2xl shadow-lg"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
         OUR VALUES
      ======================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">Our Values</h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
              These core values shape our decisions, guide our interactions, and define who we
              are as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#222222] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
         BENEFITS & PERKS
      ======================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
              We invest in our people with comprehensive benefits and thoughtful perks
              that support both your career and personal wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#222222] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
         CAREER DEVELOPMENT
      ======================================================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3760089/pexels-photo-3760089.jpeg"
                className="rounded-2xl shadow-lg"
                alt="Professional development"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Career Development</h2>

              <div className="space-y-6 text-lg text-[#222222] leading-relaxed">
                <p>
                  We're committed to helping every team member reach their full potential.
                  Our structured career development program includes mentoring, skills
                  training, and clear progression paths.
                </p>

                <p>
                  Whether you're starting your career or moving toward senior roles, we
                  provide the support and opportunities you need to flourish.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Annual learning budget of $3,000 per person",
                  "CPA/CA study support and exam leave",
                  "Conference attendance and networking",
                  "Leadership development programs",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-[#1B4765] rounded-full mr-3"></div>
                    <span className="text-[#222222]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
         TEAM TESTIMONIALS
      ======================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              What Our Team Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1EC] p-8 rounded-2xl">
              <blockquote className="text-[#222222] text-lg leading-relaxed mb-6 italic">
                "The support for professional development here is incredible. I've
                completed my CPA and am now working toward partner level, with full
                leadership support."
              </blockquote>
              <p className="font-semibold text-[#0A2540]">Sarah Chen</p>
              <p className="text-[#1B4765]">Senior Tax Accountant</p>
              <p className="text-sm text-gray-600">3 years with the firm</p>
            </div>

            <div className="bg-[#F5F1EC] p-8 rounded-2xl">
              <blockquote className="text-[#222222] text-lg leading-relaxed mb-6 italic">
                "The work-life balance and flexible arrangements make this a wonderful
                place for parents. I can build my career while being present for my
                family."
              </blockquote>
              <p className="font-semibold text-[#0A2540]">Michael Roberts</p>
              <p className="text-[#1B4765]">Business Advisory Manager</p>
              <p className="text-sm text-gray-600">2 years with the firm</p>
            </div>

            <div className="bg-[#F5F1EC] p-8 rounded-2xl">
              <blockquote className="text-[#222222] text-lg leading-relaxed mb-6 italic">
                "Coming from a Big Four firm, I love the level of responsibility and
                client interaction here. Every day brings new challenges and real growth."
              </blockquote>
              <p className="font-semibold text-[#0A2540]">Lisa Park</p>
              <p className="text-[#1B4765]">Audit Senior</p>
              <p className="text-sm text-gray-600">1.5 years with the firm</p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
         CTA FOOTER
      ======================================================= */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to join our team?
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Take the next step in your career and become part of something special.
            Explore our current opportunities and see where you fit.
          </p>

          <Link
            to="/careers/open-roles"
            className="inline-flex items-center bg-[#C9A227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
          >
            <span>View open positions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default LifeAtHF;
