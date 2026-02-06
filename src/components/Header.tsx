import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFadeNavigate = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.body.classList.add("opacity-0", "transition-opacity", "duration-500");
    setTimeout(() => {
      navigate(href);
      document.body.classList.remove("opacity-0");
      window.scrollTo(0, 0);
    }, 300);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'Our Firm', href: '/about/our-firm' },
        { name: 'Partners', href: '/about/partners' },
        { name: 'Community & ESG', href: '/about/community-esg' },
      ],
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Tax Advisory', href: '/services/tax-advisory' },
        { name: 'Business Services & CFO', href: '/services/business-services-cfo' },
        { name: 'Audit & Assurance', href: '/services/audit-assurance' },
        { name: 'SMSF & Superannuation', href: '/services/smsf-superannuation' },
        { name: 'Bookkeeping & Payroll', href: '/services/bookkeeping-payroll' },
        { name: 'Cloud Accounting & Xero', href: '/services/cloud-accounting-xero' },
      ],
    },
    {
      name: 'Resources',
      dropdown: [
        { name: 'Insights & Blog', href: '/resources/insights-blog' },
        { name: 'Calculators & Templates', href: '/resources/calculators-templates' },
        { name: 'FAQs', href: '/resources/faqs' },
      ],
    },
    {
      name: 'Careers',
      dropdown: [
        { name: 'Life at Harbour & Finch', href: '/careers/life-at-harbour-finch' },
        { name: 'Open Roles', href: '/careers/open-roles' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-[#C9A227] text-white text-[13px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-9 sm:h-10">
          {/* Email - Left */}
          <a
            href="mailto:contact@harbourfinch.com.au"
            className="flex items-center space-x-1 font-semibold text-white hover:text-[#0A2540] transition-colors duration-300"
            aria-label="Email Harbour & Finch"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="tracking-wide">contact@harbourfinch.com</span>
          </a>

          {/* Phone - Right */}
          <a
            href="tel:+61 3 9518 7499"
            className="flex items-center space-x-1 font-semibold text-white hover:text-[#0A2540] transition-colors duration-300"
            aria-label="Call Harbour & Finch"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tracking-wide">+61 3 9518 7499</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleFadeNavigate(e, "/")}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Harbour & Finch Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl sm:text-2xl tracking-tight text-[#0A2540]">
                Harbour & Finch
              </span>
              <span className="text-sm text-[#1B4765] font-medium -mt-1">Advisory</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-[15px] font-medium text-[#0A2540] hover:text-[#C9A227] transition-colors duration-200 ${
                        item.dropdown.some((sub) => isActive(sub.href)) ? 'text-[#C9A227]' : ''
                      }`}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px] animate-slideDown">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-5 py-3 text-[14px] text-gray-700 hover:bg-gradient-to-r hover:from-[#C9A227]/10 hover:to-transparent hover:text-[#0A2540] transition-all duration-150 ${
                              isActive(subItem.href)
                                ? 'bg-[#C9A227]/5 text-[#C9A227] font-medium'
                                : ''
                            } ${index === 0 ? 'rounded-t-lg' : ''} ${
                              index === item.dropdown.length - 1 ? 'rounded-b-lg' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 text-[15px] font-medium text-[#0A2540] hover:text-[#C9A227] transition-colors duration-200 ${
                      isActive(item.href) ? 'text-[#C9A227]' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Book Consultation Button */}
            <Link
              to="/contact/book-consultation"
              className="ml-4 flex items-center space-x-2 px-5 py-2.5 bg-[#C9A227] text-white text-[15px] font-semibold rounded-lg hover:bg-[#B38F1F] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center space-x-2 text-[#0A2540] font-medium hover:text-[#C9A227] transition-colors duration-200 p-2"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <>
                <X className="w-6 h-6" />
                <span className="text-sm">Close</span>
              </>
            ) : (
              <>
                <Menu className="w-6 h-6" />
                <span className="text-sm">Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-fade-slide">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-2" role="navigation">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)
                      }
                      className="w-full flex justify-between items-center text-left text-[#0A2540] font-semibold text-[15px] py-3 px-2 hover:text-[#C9A227] transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileOpenDropdown === item.name ? 'rotate-180 text-[#C9A227]' : ''
                        }`}
                      />
                    </button>
                    {mobileOpenDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-1 animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                            className={`block py-2 text-[14px] text-gray-700 hover:text-[#0A2540] hover:bg-[#F8F9FA] rounded-lg px-3 transition-all ${
                              isActive(subItem.href)
                                ? 'text-[#C9A227] font-medium bg-[#C9A227]/5'
                                : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-[#0A2540] text-[15px] font-semibold hover:text-[#C9A227] transition-colors ${
                      isActive(item.href) ? 'text-[#C9A227]' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact/book-consultation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-4 text-center bg-[#C9A227] text-white py-3 rounded-lg font-semibold hover:bg-[#B38F1F] transition-all"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;