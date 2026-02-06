import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { preloadImages } from '../../utils/pexelsOptimizer';

const Bookkeeping = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ HERO LOADER STATE (same pattern as Bookkeeping)
  const [heroReady, setHeroReady] = useState(false);

  // ⭐ Preload critical images (same hook pattern as Bookkeeping)
  const criticalImages = ['/payroll.jpg', '/photothree.jpg'];
  const { imagesLoaded, progress } = useImagePreloader(criticalImages);

  useEffect(() => {
    preloadImages(criticalImages);
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#0A2540]" />,
      title: 'Daily Bookkeeping',
      description:
        'Accurate recording and reconciliation of all your business transactions.',
      details: [
        'Daily transaction recording',
        'Bank reconciliations',
        'Accounts payable/receivable',
        'Expense tracking',
        'Financial reporting',
      ],
    },
    {
      icon: <FileText className="w-8 h-8 text-[#0A2540]" />,
      title: 'Payroll Processing',
      description:
        'Full-service payroll management ensuring compliance with all regulations.',
      details: [
        'Employee payroll processing',
        'Superannuation contributions',
        'PAYG withholding',
        'Single Touch Payroll (STP)',
        'Payroll tax compliance',
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0A2540]" />,
      title: 'BAS & IAS Preparation',
      description:
        'Business Activity Statements and Instalment Activity Statements prepared accurately and on time.',
      details: [
        'Quarterly BAS lodgement',
        'GST calculations',
        'PAYG instalments',
        'Compliance reviews',
        'ATO correspondence',
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0A2540]" />,
      title: 'Financial Management',
      description: 'Monthly financial reporting and management advice for better decision-making.',
      details: [
        'Monthly management reports',
        'Cash flow monitoring',
        'Budgeting support',
        'Financial analysis',
        'Advisory services',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Why should I outsource bookkeeping instead of doing it myself?',
      answer:
        'Outsourcing saves time, reduces errors, ensures compliance, and gives you access to expert advice. You can focus on growing your business while we handle the numbers accurately and efficiently.',
    },
    {
      question: 'How much do bookkeeping services cost?',
      answer:
        'Our pricing depends on transaction volume and complexity. Small businesses typically pay $300-$800/month, while larger operations may be $1,000-$3,000/month. We provide transparent, fixed-fee quotes with no hidden costs.',
    },
    {
      question: 'What software do you use for bookkeeping?',
      answer:
        'Yes, SMSFs can invest in property, including business real property, but strict rules apply around borrowing, related-party transactions, and the sole purpose test. We guide you through structure, compliance, and long-term strategy before any property purchase.',
    },
    {
      question: 'What are my responsibilities as an SMSF trustee?',
      answer:
        'Trustees must act in members’ best interests, follow the trust deed and super laws, keep assets separate, maintain accurate records, and ensure the fund remains compliant. We support you with ongoing administration, education, and compliance oversight.',
    },
    {
      question: 'How often do SMSFs need to be audited?',
      answer:
        'Every SMSF must be audited annually by an approved SMSF auditor before the annual return is lodged with the ATO. We coordinate the audit process, prepare required documentation, and address any issues raised.',
    },
    {
      question: 'What investments can an SMSF hold?',
      answer:
        'SMSFs can hold a wide range of investments including shares, managed funds, term deposits, property, and more, subject to superannuation and tax rules. We help you design and maintain an investment strategy that meets regulatory requirements and supports your retirement goals.',
    },
    {
      question: 'Can I have multiple members in one SMSF?',
      answer:
        'Yes. An SMSF can have up to six members, often used by couples or families who want to manage their super together. We help ensure the structure, documentation, and decision-making processes are appropriate for multiple members.',
    },
    {
      question: 'When can I access my SMSF money?',
      answer:
        'Generally, you can access your super when you reach preservation age and retire, turn 65, or meet another condition of release. We advise on pension commencement, transition-to-retirement strategies, and tax implications.',
    },
    {
      question: 'What happens if I breach SMSF rules?',
      answer:
        'Breaches can result in penalties, rectification directions, enforceable undertakings, or fund non-compliance. Early action is critical. We work with you and your auditor to identify issues, implement rectification plans, and engage with the ATO where needed.',
    },
    {
      question: 'Can you take over an existing SMSF?',
      answer:
        'Yes. We review your current fund, identify risks, bring records up to date, and transition administration and compliance smoothly. Our goal is to stabilise your SMSF and provide ongoing, proactive support.',
    },
  ];

  const manager = {
    name: 'Sarah Mitchell',
    role: 'Bookkeeping Services Manager',
    credentials: 'BAS Agent, Certified Bookkeeper',
    email: 'sarah.mitchell@harbourfinch.com.au',
    phone: '+61 3 9000 0004',
    bio: 'Sarah leads our bookkeeping and payroll team with over 12 years of experience helping businesses maintain accurate financial records and stay compliant. She specializes in cloud accounting systems and process optimization.',
    image: '/photothree.jpg',
  };

  // ⭐ Loading screen — same structure as Bookkeeping
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a8a] mx-auto mb-4" />
          <p className="text-[#1e3a8a] font-semibold">Loading Bookkeeping & Payroll...</p>
          <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden mt-4">
            <div
              className="bg-[#1e3a8a] h-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">{progress}%</p>
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
    src="/bookeeping.webp"
    alt="Bookkeeping & Payroll Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/bookeeping.webp?v=6"
          alt="Bookkeeping & Payroll Header"
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
            Bookkeeping &amp; Payroll
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal max-w-2xl leading-relaxed">
            Accurate bookkeeping and payroll to keep you compliant and efficient so you can focus on growing your business.
          </p>
        </div>
      </section>


      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>


{/* ======================================================
   SERVICES SECTION
====================================================== */}
<section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="text-center mb-16">
      <p className="text-xs md:text-sm text-[#0A2540] font-semibold tracking-wider uppercase mb-3">
        Our Expertise
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-6">
        Complete Bookkeeping Solutions
      </h2>

      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        From daily transactions to payroll management, we handle your bookkeeping so you can focus on growing your business.
      </p>
    </div>


    {/* Manager Section */}
    <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-[#3b82f6]/5"></div>
          <OptimizedImage
            src={manager.image}
            alt={manager.name}
            className="w-full h-64 md:h-72 lg:h-80 object-cover object-center"
            priority
            loading="eager"
          />
        </div>

        <div className="p-6 lg:p-8">
          <p className="text-xs md:text-sm text-[#0A2540] font-semibold uppercase tracking-wider mb-2">
            Your Expert
          </p>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-2">
            Meet Your Manager
          </h3>

          <h4 className="text-lg md:text-xl font-semibold text-[#1B4765] mb-1.5">
            {manager.name}
          </h4>

          <p className="text-[#D4AF37] text-sm md:text-base font-semibold mb-4">
            {manager.credentials}
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            {manager.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${manager.email}`}
              className="inline-flex items-center px-5 py-2.5 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1B4765] transition-all shadow-lg"
            >
              <Mail className="w-4 h-4 mr-2" /> Email {manager.name.split(' ')[0]}
            </a>

            <a
              href={`tel:${manager.phone}`}
              className="inline-flex items-center px-5 py-2.5 border-2 border-[#1B4765] text-[#1B4765] rounded-lg font-semibold hover:bg-[#1B4765] hover:text-white transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" /> {manager.phone}
            </a>
          </div>
        </div>
      </div>
    </div>


    {/* Services Grid */}
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#0A2540] hover:shadow-2xl transition-all hover:-translate-y-1"
        >
          <div className="mb-5 p-3 bg-gradient-to-br from-[#0A2540]/5 to-[#3b82f6]/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
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
                <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5" />
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
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>


{/* ======================================================
   FAQ SECTION
====================================================== */}
<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-4xl mx-auto px-4 md:px-6">

    <div className="text-center mb-12">
      <p className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wider mb-3">
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
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent"></div>


{/* ======================================================
   CTA FOOTER
====================================================== */}
<section className="relative py-12 md:py-20 bg-[#0A2540] text-white overflow-hidden">

  <div className="absolute inset-0 opacity-10">
    <div className="absolute right-[-5%] top-[10%] w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl"></div>
    <div className="absolute left-[-5%] bottom-[10%] w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-4 text-center">
    <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-4">
      Get Started Today
    </p>

    <h2 className="text-3xl md:text-5xl font-bold mb-7">
      Focus on Your Business — We'll Handle the Books
    </h2>

    <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
      Our bookkeeping experts ensure your financial data is accurate, compliant, and always ready for decision-making.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      <Link
        to="/contact/book-consultation"
        className="inline-flex items-center px-8 py-4 bg-white text-[#0A2540] rounded-lg 
        font-semibold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
      >
        Book a Consultation
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>

      <a
        href={`mailto:${manager.email}`}
        className="inline-flex items-center px-8 py-4 border-2 border-white text-white 
        rounded-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all shadow-xl"
      >
        <Mail className="w-5 h-5 mr-2" /> Email Our Team
      </a>

    </div>
  </div>
</section>


    </div>
  );
};

export default Bookkeeping;
