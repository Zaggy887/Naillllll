import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, FileCheck, Building2, Mail, Phone } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { HERO_IMAGES, preloadImages } from '../../utils/pexelsOptimizer';

const AuditAssurance = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ NEW: fade-in hero
  const [heroReady, setHeroReady] = useState(false);

  // Critical images to preload for instant display
  const criticalImages = [
    '/aboutus.jpg',
    HERO_IMAGES.auditAssurance
  ];

  const { imagesLoaded, progress } = useImagePreloader(criticalImages);

  useEffect(() => {
    preloadImages(criticalImages);
  }, []);


  const services = [
    {
      icon: <Shield className="w-8 h-8 text-[#0A2540]" />,
      title: 'Financial Statement Audits',
      description: 'Independent audits that provide assurance to stakeholders and meet regulatory requirements.',
      details: [
        'ASIC registered audits',
        'Financial report audits',
        'Special purpose audits',
        'Group audit coordination',
        'International standards compliance'
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#0A2540]" />,
      title: 'Review Engagements',
      description: 'Limited assurance reviews for businesses seeking cost-effective financial statement assurance.',
      details: [
        'Financial statement reviews',
        'Agreed-upon procedures',
        'Compilation engagements',
        'Quarterly reviews',
        'Due diligence reviews'
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0A2540]" />,
      title: 'Internal Audits',
      description: 'Comprehensive internal control assessments to identify risks and improve operations.',
      details: [
        'Internal control reviews',
        'Process audits',
        'IT system audits',
        'Fraud risk assessments',
        'Compliance testing'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#0A2540]" />,
      title: 'Compliance Audits',
      description: 'Specialized audits for grant acquittals, trust deeds, and regulatory compliance.',
      details: [
        'Grant acquittal audits',
        'Trust deed compliance',
        'NFP audits',
        'SMSF audits',
        'Regulatory compliance audits'
      ]
    },
  ];


  const faqs = [
    {
      question: 'Is my company required to have an audit?',
      answer: 'Companies must have audits if they meet certain criteria under the Corporations Act: large proprietary companies, public companies, registered schemes, or companies controlled by foreign entities. Not-for-profits may require audits based on their constitution, funding agreements, or ACNC registration. We can assess your specific obligations.'
    },
    {
      question: 'What is the difference between an audit and a review?',
      answer: 'An audit provides reasonable assurance (high level of confidence) through extensive testing and verification. A review provides limited assurance (moderate confidence) using inquiry and analytical procedures with less testing. Reviews are less expensive but provide lower assurance. The choice depends on stakeholder requirements and regulatory obligations.'
    },
    {
      question: 'How long does an audit take?',
      answer: 'Timeline depends on company size and complexity. Small companies typically take 2–4 weeks. Medium companies 4–8 weeks. Larger organizations 3–4 months. Early planning ensures timely completion.'
    },
    {
      question: 'What documents do I need to provide for an audit?',
      answer: 'Documents include: financial statements, GL, bank statements, reconciliations, aging reports, asset registers, loan agreements, board minutes, policies, and documentation for significant transactions. We provide a full checklist.'
    },
    {
      question: 'Can you audit our company if you also do our accounting?',
      answer: 'No, independence rules prevent auditors from auditing entities where they provide bookkeeping or financial statement preparation. But we can still perform tax, advisory, or internal audit services.'
    },
    {
      question: 'What happens if the auditor finds errors or issues?',
      answer: 'Errors are discussed with management and may require adjustments. Material misstatements must be corrected for a clean opinion. Uncorrected misstatements may result in a qualified opinion.'
    },
    {
      question: 'Do you audit not-for-profit organizations?',
      answer: 'Yes — charities, schools, clubs, and ACNC-registered NFPs. We understand their compliance and reporting requirements.'
    },
    {
      question: 'What is an internal audit and do we need one?',
      answer: 'Internal audits assess controls, risk, and operations. They help prevent fraud, improve processes, and prepare for external audits.'
    },
    {
      question: 'How much does an audit cost?',
      answer: 'Small audits typically start at $5k–$10k. Medium companies $15k–$40k. Large organizations $50k+. We provide fixed-fee quotes.'
    },
    {
      question: 'Can you help us prepare for our first audit?',
      answer: 'Absolutely — we provide readiness assessments, policy reviews, checklists, and guidance to make your first audit smooth and efficient.'
    },
  ];


  const manager = {
    name: 'Daniel Harbour',
    credentials: 'CA, MAICD',
    email: 'daniel.harbour@harbourfinch.com.au',
    phone: '+61 3 9000 0002',
    bio: 'Daniel is a chartered accountant with 12 years in audit and assurance, including 8 years at EY. He leads our audit practice and specialises in financial reporting, internal controls, and risk management.',
    image: '/phototwo.png'
  };


  // Loading screen
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mb-4" />
          <p className="text-[#1e3a8a] font-semibold">Loading Audit & Assurance Services...</p>
          <div className="mt-4 w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#1e3a8a] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">{progress}%</p>
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
    src="/aboutus.jpg"
    alt="Audit & Assurance Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/aboutus.jpg?v=6"
          alt="Audit & Assurance Header"
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
            Service
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
            Audit & Assurance
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl">
            Independent audits and reviews to ensure compliance, build stakeholder trust,
            and strengthen your organization.
          </p>
        </div>
      </section>

      {/* ===================================================== */}



      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-16">
            <p className="text-[#0A2540] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Comprehensive Audit Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From financial statement audits to internal reviews, we provide independent
              assurance that strengthens your organization.
            </p>
          </div>

          {/* Meet Your Director */}
          <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 items-center">

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#3b82f6]/5" />
                <OptimizedImage
                  src={manager.image}
                  alt={manager.name}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover object-center"
                  priority
                  loading="eager"
                />
              </div>

              <div className="p-6 lg:p-8">
                <p className="text-[#0A2540] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
                  Your Expert
                </p>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-2">
                  Meet Your Director
                </h3>

                <h4 className="text-lg md:text-xl text-[#1B4765] font-semibold mb-1.5">
                  {manager.name}
                </h4>

                <p className="text-[#D4AF37] font-semibold text-sm md:text-base mb-4">
                  {manager.credentials}
                </p>

                <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                  {manager.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${manager.email}`}
                    className="inline-flex items-center px-5 py-2.5 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1B4765] transition-all hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email {manager.name.split(' ')[0]}
                  </a>

                  <a
                    href={`tel:${manager.phone}`}
                    className="inline-flex items-center px-5 py-2.5 border-2 border-[#0A2540] text-[#0A2540] rounded-lg font-semibold hover:bg-[#0A2540] hover:text-white transition-all hover:shadow-lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {manager.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 
                hover:shadow-2xl hover:border-[#0A2540] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 p-3 bg-gradient-to-br from-[#0A2540]/5 to-[#3b82f6]/5 
                  rounded-xl inline-block group-hover:scale-110 transition-transform">
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
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] mr-2.5 mt-0.5" />
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
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


      {/* FAQ */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">

          <div className="text-center mb-12">
            <p className="text-[#1e3a8a] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
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
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


      {/* CTA Footer */}
      <section className="relative py-12 md:py-20 bg-[#0A2540] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-[-5%] top-[10%] w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl"></div>
          <div className="absolute left-[-5%] bottom-[10%] w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">

          <p className="text-[#D4AF37] text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
            Get Started Today
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-7">
            Need Audit or Assurance Services?
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed">
            Our experienced audit team is ready to provide independent assurance for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact/book-consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0A2540] rounded-lg 
              font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <a
              href={`mailto:${manager.email}`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white 
              rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Our Team
            </a>

          </div>

        </div>
      </section> 

    </div>
  );
};

export default AuditAssurance;