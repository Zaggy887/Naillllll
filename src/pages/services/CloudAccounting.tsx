import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cloud,
  Smartphone,
  Settings,
  BarChart3,
  Mail,
  Phone,
  CheckCircle
} from 'lucide-react';
import FAQAccordion from '../../components/FAQAccordion';
import OptimizedImage from '../../components/OptimizedImage';

const CloudAccounting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ⭐ Smooth header image loader state (same pattern as Tax Advisory)
  const [heroReady, setHeroReady] = useState(false);

  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-[#0A2540]" />,
      title: 'Cloud Migration',
      description:
        'Seamless transition from desktop accounting to cloud-based solutions like Xero.',
      details: [
        'Data migration from MYOB, QuickBooks and other systems',
        'Xero setup and configuration',
        'Chart of accounts optimisation',
        'Historical data import and mapping',
        'Testing, validation and go-live support'
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-[#0A2540]" />,
      title: 'System Setup & Integration',
      description:
        'Complete setup, configuration and integration of your cloud accounting ecosystem.',
      details: [
        'Bank feed setup and reconciliation rules',
        'App integrations (Dext, Stripe, PayPal, Shopify)',
        'Inventory and job management configuration',
        'Multi-currency and multi-entity setup',
        'User roles, access and permissions'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#0A2540]" />,
      title: 'Training & Support',
      description:
        'Comprehensive training and ongoing support to maximise your cloud investment.',
      details: [
        'One-on-one and team training sessions',
        'Tailored workshops for finance and operations teams',
        'User guides and process documentation',
        'Ongoing helpdesk and troubleshooting support',
        'Best-practice accounting workflows'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#0A2540]" />,
      title: 'Automation & Efficiency',
      description:
        'Implement automation to streamline processes and reduce manual data entry.',
      details: [
        'Automated bank reconciliation and coding rules',
        'Invoice and debtor management automation',
        'Digital expense capture and approval workflows',
        'Real-time reporting dashboards and KPIs',
        'End-to-end process optimisation reviews'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is cloud accounting and how is it different from desktop software?',
      answer:
        'Cloud accounting stores your financial data securely online instead of on a single computer. You can access it anytime, from any device with an internet connection, and your accountant can work in real time with you. Updates, backups and security are handled automatically by the provider.'
    },
    {
      question: 'Is cloud accounting secure?',
      answer:
        'Yes. Reputable cloud platforms like Xero use bank-level encryption, multi-factor authentication, regular security audits and secure data centres. In many cases, this is more secure than storing data on a local office computer or server.'
    },
    {
      question: 'How long does it take to migrate to Xero?',
      answer:
        'Simple migrations can be completed in 1–2 weeks, medium complexity migrations in 3–4 weeks, and more complex multi-entity or high-volume migrations can take up to 6–8 weeks. We scope your situation upfront and provide a clear migration timeline.'
    },
    {
      question: 'Will my accountant and bookkeeper be able to access Xero?',
      answer:
        'Yes. One of the biggest advantages of cloud accounting is real-time collaboration. We set up secure user access for your accountant, bookkeeper and key team members so everyone works from the same live data.'
    },
    {
      question: 'Does Xero integrate with my existing software?',
      answer:
        'Xero has over 1,000 app integrations including payment gateways, e-commerce platforms, CRMs, inventory systems and more. We review your current stack and recommend the right integrations to streamline your processes.'
    },
    {
      question: 'What happens to my historical data?',
      answer:
        'Typically we migrate key opening balances and 1–2 years of detailed transaction history into Xero. Older data remains available in your legacy system or archived reports, so you retain a complete audit trail without overloading the new file.'
    },
    {
      question: 'How much does Xero cost?',
      answer:
        'Xero plans generally range from approximately $32–$70 per month depending on your needs, transaction volumes and add-ons. We help you select the most cost-effective plan and avoid paying for features you don’t need.'
    },
    {
      question: 'Do I need to be tech-savvy to use cloud accounting?',
      answer:
        'No. Xero is designed to be intuitive and user-friendly. We provide full training, clear step-by-step processes and ongoing support until you are completely comfortable with the system.'
    },
    {
      question: 'Can I access Xero on my phone or tablet?',
      answer:
        'Yes. Xero’s mobile app allows you to raise invoices, approve bills, capture receipts, check account balances and reconcile transactions on the go.'
    },
    {
      question: 'What ongoing support do you provide after migration?',
      answer:
        'We offer ongoing helpdesk support, periodic file health checks, process optimisation reviews and training for new team members to ensure you continue to get value from your cloud setup.'
    }
  ];

  const manager = {
    name: 'James Mitchell',
    role: 'Manager, Business Services',
    credentials: 'CPA',
    email: 'james.mitchell@harbourfinch.com.au',
    phone: '+61 3 9000 0004',
    bio: 'James leads our cloud accounting services with extensive experience in Xero migration, system optimisation and financial process automation for growing Australian businesses.',
    // Using same image asset style as Tax Advisory hero for consistency
    image: '/ttwo.jpg'
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
    src="/cloud.webp"
    alt="Cloud Accounting Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/cloud.webp?v=6"
    alt="Cloud Accounting & Xero Header"
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
      Cloud Accounting & Xero
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Seamless cloud migrations, Xero optimisation and automation that transform how your finance function operates.
    </p>
  </div>
</section>
      {/* ====================================================== */}


      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-[#0A2540]/20 to-transparent h-px"></div>


      {/* ======================================================
         Services + Manager Section (mirrors Tax Advisory layout)
      ====================================================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Section intro */}
          <div className="text-center mb-8 md:mb-16">
            <p className="text-[#0A2540] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 md:mb-6">
              Complete Cloud Accounting Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We design, implement and support cloud-based accounting systems that provide real-time visibility, automation and control over your numbers.
            </p>
          </div>

          {/* Meet Manager */}
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
                  Meet Your Cloud Specialist
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

          {/* Services Grid */}
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
         FAQ Section (mirrors Tax Advisory structure)
      ====================================================== */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">

          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#1e3a8a] text-sm md:text-base font-semibold tracking-wider uppercase mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Cloud Accounting FAQs
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
         CTA FOOTER (mirrors Tax Advisory CTA)
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
            Ready to Move Your Accounting to the Cloud?
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-7 md:mb-10 leading-relaxed">
            Our cloud specialists will guide you through every step of your Xero migration and optimisation, ensuring a smooth transition with minimal disruption to your business.
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

export default CloudAccounting;
