import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Calculator, TrendingUp, Shield, Mail, Phone, CheckCircle } from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';

const TaxAdvisory = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ NEW: Smooth header image loader state
  const [heroReady, setHeroReady] = useState(false);

  const services = [
    {
      icon: <Calculator className="w-8 h-8 text-[#0A2540]" />,
      title: 'Tax Planning & Strategy',
      description: 'Proactive tax planning to minimize liabilities and maximize opportunities across all business structures.',
      details: [
        'Strategic tax minimization strategies',
        'Entity structure optimization',
        'Tax-effective salary packaging',
        'Capital gains tax planning',
        'Division 7A compliance'
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#0A2540]" />,
      title: 'Tax Compliance',
      description: 'Accurate and timely lodgement of all tax returns, BAS, IAS, and regulatory obligations.',
      details: [
        'Individual and company tax returns',
        'Trust and partnership returns',
        'BAS and IAS preparation',
        'FBT returns and planning',
        'Transfer pricing documentation'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0A2540]" />,
      title: 'Business Restructuring',
      description: 'Strategic advice on entity structures, mergers, acquisitions, and succession planning.',
      details: [
        'Business structure reviews',
        'Merger and acquisition support',
        'Succession planning strategies',
        'Asset protection structures',
        'Family trust arrangements'
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0A2540]" />,
      title: 'Tax Disputes & ATO',
      description: 'Expert representation in tax audits, objections, and ATO correspondence.',
      details: [
        'ATO audit defense',
        'Objections and appeals',
        'Private binding rulings',
        'Tax debt negotiation',
        'Settlement arrangements'
      ]
    },
  ];

  const faqs = [
    {
      question: 'When should I start tax planning for the financial year?',
      answer: 'Ideally, tax planning should begin early in the financial year, allowing time to implement strategies before June 30.'
    },
    {
      question: 'What are the benefits of having a tax advisor versus doing it myself?',
      answer: 'A tax advisor provides expertise in current legislation, identifies legitimate deductions you may miss...'
    },
    {
      question: 'How can I reduce my tax liability legally?',
      answer: 'Legal tax minimization strategies include...'
    },
    {
      question: 'What should I do if I receive an ATO audit notice?',
      answer: 'Contact us immediately before responding to the ATO...'
    },
    {
      question: 'How long does it take to prepare my tax return?',
      answer: 'Simple individual returns typically take 3–5 business days...'
    },
    {
      question: 'What business structure is most tax-effective?',
      answer: 'The optimal structure depends on your income level, business type, and asset protection needs.'
    },
    {
      question: 'Can you help with international tax issues?',
      answer: 'Yes, we advise on foreign income reporting, residency issues, double taxation agreements, and more.'
    },
    {
      question: 'What is Division 7A and how does it affect me?',
      answer: 'Division 7A prevents tax-free distribution of company profits...'
    },
    {
      question: 'How often should I review my tax strategy?',
      answer: 'We recommend annual comprehensive reviews before year-end...'
    },
    {
      question: 'What records do I need to keep for tax purposes?',
      answer: 'Keep income records, receipts, statements, invoices, and asset documents for 5 years.'
    }
  ];

  const manager = {
    name: 'Emma Finch',
    role: 'Managing Partner & Tax Director',
    credentials: 'CPA, CA, RTA',
    email: 'emma.finch@harbourfinch.com.au',
    phone: '+61 3 9000 0001',
    bio: 'Emma leads our tax advisory practice with over 8 years of experience in corporate tax and advisory services, including her time as Tax Director at PwC.',
    image: '/photoone.jpg'
  };

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
    src="/taxadvisory1.webp"
    alt="Tax Advisory Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/taxadvisory1.webp?v=6"
    alt="Tax Advisory Header"
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
      Tax Advisory
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Navigate the complexities of tax regulations with confidence through our expert advisory services.
    </p>
  </div>
</section>
{/* ====================================================== */}




      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


{/* ======================================================
   Services Section
====================================================== */}
<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="text-center mb-8 md:mb-16">
      <p className="text-[#0A2540] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
        Our Expertise
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
        Comprehensive Tax Services
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our full-service approach covers every aspect of your tax needs, from preparation and planning to representation and resolution.
      </p>
    </div>

    {/* Meet Director */}
    <div className="mb-10 md:mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-0 items-center">

        <div className="order-1 lg:order-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#3b82f6]/5"></div>
          <OptimizedImage
            src={manager.image}
            alt={manager.name}
            className="w-full h-64 md:h-72 lg:h-80 object-contain md:object-cover object-center scale-[0.95] md:scale-[0.9]"
            priority={true}
            loading="eager"
          />
        </div>

        <div className="order-2 lg:order-2 p-5 md:p-6 lg:p-8">
          <p className="text-[#0A2540] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            Your Expert
          </p>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-2">
            Meet Your Director
          </h3>

          <h4 className="text-lg md:text-xl text-[#1B4765] font-semibold mb-1.5">
            {manager.name}
          </h4>

          <p className="text-[#D4AF37] font-semibold text-sm md:text-base mb-3 md:mb-4">
            {manager.credentials}
          </p>

          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
            {manager.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
            <a
              href={`mailto:${manager.email}`}
              className="inline-flex items-center justify-center px-4 py-2.5 md:px-5 md:py-2.5 bg-[#1B4765] text-white rounded-lg font-semibold hover:bg-[#1B4765] transition-all hover:shadow-lg min-h-[44px] text-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email {manager.name.split(' ')[0]}
            </a>

            <a
              href={`tel:${manager.phone}`}
              className="inline-flex items-center justify-center px-4 py-2.5 md:px-5 md:py-2.5 border-2 border-[#1B4765] text-[#0A2540] rounded-lg font-semibold hover:bg-[#0A2540] hover:text-white transition-all hover:shadow-lg min-h-[44px] text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              {manager.phone}
            </a>
          </div>

        </div>

      </div>
    </div>


    {/* Services List */}
    <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="group bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#0A2540] transition-all duration-300 hover:-translate-y-1"
        >
          <div className="mb-4 md:mb-5 p-3 bg-gradient-to-br from-[#0A2540]/5 to-[#3b82f6]/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(service.icon as React.ReactElement, {
              className: 'w-8 h-8 md:w-10 md:h-10 text-[#0A2540]'
            })}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3 md:mb-4">
            {service.title}
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2.5">
            {service.details.map((detail, i) => (
              <li key={i} className="flex items-start text-sm md:text-base text-gray-600">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] mr-2.5 mt-0.5 flex-shrink-0" />
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


{/* ======================================================
   FAQ Section
====================================================== */}
<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto px-4 md:px-6">

    <div className="text-center mb-8 md:mb-12">
      <p className="text-[#1e3a8a] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
        Common Questions
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="space-y-3 md:space-y-4">
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


{/* ======================================================
   CTA FOOTER
====================================================== */}
<section className="relative py-12 md:py-20 bg-[#0A2540] text-white overflow-hidden">

  <div className="absolute inset-0 opacity-10">
    <div className="absolute right-[-5%] top-[10%] w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl"></div>
    <div className="absolute left-[-5%] bottom-[10%] w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
    <p className="text-[#D4AF37] text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
      Get Started Today
    </p>

    <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-7">
      Ready to Optimize Your Tax Position?
    </h2>

    <p className="text-base md:text-lg text-gray-200 mb-7 md:mb-10 leading-relaxed">
      Our tax advisors are ready to help you navigate complex tax legislation and ensure compliance.
      Book a consultation today.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">

      <Link
        to="/contact/book-consultation"
        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-[#0A2540] rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
      >
        Book a Consultation
        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
      </Link>

      <a
        href={`mailto:${manager.email}`}
        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all hover:shadow-xl"
      >
        <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
        Email Our Team
      </a>

    </div>
  </div>

</section>


    </div>
  );
};

export default TaxAdvisory;
