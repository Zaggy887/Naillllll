import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, FileText, Briefcase, PieChart } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [heroReady, setHeroReady] = useState(false);

  const faqCategories = [
    {
      category: 'About Harbour & Finch',
      icon: <Briefcase className="w-7 h-7 text-[#1B4765] mr-3" />,
      image: "/aboutus.jpg",
      faqs: [
        {
          question: 'Where is Harbour & Finch located?',
          answer: 'We are based in Melbourne, Australia, serving clients across Victoria and throughout Australia. Our office is conveniently located in the Melbourne CBD with excellent public transport access. We also offer virtual consultations for clients who prefer remote meetings or are located outside Melbourne.'
        },
        {
          question: 'What are your office hours?',
          answer: 'Our office is open Monday to Friday, 9:00 AM to 5:30 PM AEST. We understand business doesn\'t always happen during standard hours, so we offer flexible appointment times including early morning and evening consultations by arrangement. During tax season (July-October), we extend our hours to better serve our clients.'
        },
        {
          question: 'How do I book a consultation?',
          answer: 'You can book a consultation through our website\'s contact form, by calling us directly, or by emailing your preferred contact person. We offer free initial consultations to discuss your needs and how we can help. Most consultations can be scheduled within 2-3 business days, and urgent matters can often be accommodated sooner.'
        },
        {
          question: 'Do you work with businesses of all sizes?',
          answer: 'Yes, we work with individuals, startups, small businesses, medium enterprises, and established corporations. Our team has experience across diverse industries including professional services, retail, manufacturing, technology, healthcare, and not-for-profit organizations. We tailor our services to match your business size, complexity, and growth stage.'
        }
      ]
    },
    {
      category: 'Important Tax & Financial Deadlines',
      icon: <FileText className="w-7 h-7 text-[#1B4765] mr-3" />,
      image: "/deadlines.jpg",
      faqs: [
        {
          question: 'When are individual tax returns due?',
          answer: 'Individual tax returns for the financial year ending June 30 are due by October 31 if you lodge yourself. If you engage a registered tax agent like Harbour & Finch, the deadline is automatically extended to May 15 of the following year.'
        },
        {
          question: 'When are company tax returns due?',
          answer: 'Company tax returns are due by the last day of the seventh month after the end of your financial year. Using a registered tax agent typically provides an automatic extension to May 15.'
        },
        {
          question: 'What are the quarterly BAS lodgement dates?',
          answer: 'For quarterly BAS reporters: July 28, October 28, February 28, April 28. Lodging through a tax agent extends these dates. Monthly lodgers must submit by the 21st of the following month.'
        },
        {
          question: 'When should I start preparing for tax time?',
          answer: 'We recommend preparing 6–8 weeks before year-end to allow for planning, documentation, and early identification of issues.'
        }
      ]
    },
    {
      category: 'General Business Information',
      icon: <PieChart className="w-7 h-7 text-[#1B4765] mr-3" />,
      image: "/businessinfo.jpg",
      faqs: [
        {
          question: 'What qualifications does your team have?',
          answer: 'Our partners and senior team hold CPA, CA, Registered Tax Agent status, SMSF Specialist credentials and have Big 4 backgrounds.'
        },
        {
          question: 'How do you protect client confidentiality?',
          answer: 'We comply with Privacy Act requirements, encrypted systems, access controls, and professional standards from CPA Australia and CA ANZ.'
        },
        {
          question: 'Do you offer fixed-fee pricing?',
          answer: 'Yes – we offer fixed-fee pricing for most compliance services and transparent proposals for advisory engagements.'
        },
        {
          question: 'Can you work with my existing accountant or bookkeeper?',
          answer: 'Absolutely. We frequently collaborate with other professionals when delivering specialized services.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

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
    src="/faq1.webp"
    alt="FAQs Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/faq1.webp?v=6"
    alt="Frequently Asked Questions Header"
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

  {/* Hero Content */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10 transition-opacity duration-700">
    <span className="inline-block rounded-full bg-white/90 text-[#0A2540] text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
      Resources
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Frequently Asked Questions
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Get answers to common questions about our firm, key deadlines, and business topics.
    </p>
  </div>
</section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 md:mb-20">
              
              {/* Category header */}
              <div className="flex items-center justify-center mb-6">
                {category.icon}
                <h2 className="font-poppins text-2xl md:text-3xl font-bold text-[#0A2540]">
                  {category.category}
                </h2>
              </div>

              {/* Category image */}
              <img
                src={category.image}
                alt={category.category}
                className="rounded-2xl mb-8 shadow-md w-full max-h-72 object-cover"
              />

              {/* FAQ items */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={faqIndex} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <h3 className="font-poppins text-lg font-semibold text-[#0A2540]">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#1B4765]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#1B4765]" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 border-l-4 border-[#1B4765] bg-[#F9F9F9]">
                          <p className="text-[#222222] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
