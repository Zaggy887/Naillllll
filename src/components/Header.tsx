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
        { name: 'Our Salon Story', href: '/about/our-salon' },
        { name: 'Meet the Team', href: '/about/team' },
        { name: 'Community & Values', href: '/about/community' },
      ],
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Signature Manicures', href: '/services/manicures' },
        { name: 'Spa Pedicures', href: '/services/pedicures' },
        { name: 'Nail Art & Design', href: '/services/nail-art' },
        { name: 'Gel & Acrylic Extensions', href: '/services/extensions' },
        { name: 'Luxury Spa Treatments', href: '/services/spa-treatments' },
        { name: 'Bridal & Events', href: '/services/bridal-events' },
      ],
    },
    {
      name: 'Gallery',
      href: '/gallery',
    },
    {
      name: 'Membership',
      href: '/membership',
    },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-rose-gold-100 shadow-sm">
      <div className="bg-gradient-to-r from-rose-gold-600 to-salon-pink-600 text-white text-[13px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-9 sm:h-10">
          <a
            href="mailto:hello@luxurynails.com"
            className="flex items-center space-x-1 font-semibold text-white hover:text-salon-cream-100 transition-colors duration-300"
            aria-label="Email Luxury Nail Salon"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="tracking-wide">hello@luxurynails.com</span>
          </a>

          <a
            href="tel:+61312345678"
            className="flex items-center space-x-1 font-semibold text-white hover:text-salon-cream-100 transition-colors duration-300"
            aria-label="Call Luxury Nail Salon"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tracking-wide">+61 3 1234 5678</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            onClick={(e) => handleFadeNavigate(e, "/")}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Luxury Nail & Beauty Salon Logo"
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl sm:text-2xl tracking-tight text-rose-gold-800">
                Luxury Nails
              </span>
              <span className="text-sm text-salon-pink-600 font-medium -mt-1">& Beauty Spa</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 text-[15px] font-medium text-rose-gold-800 hover:text-salon-pink-600 transition-colors duration-200 ${
                        item.dropdown.some((sub) => isActive(sub.href)) ? 'text-salon-pink-600' : ''
                      }`}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="bg-white rounded-lg shadow-xl border border-rose-gold-100 py-2 min-w-[260px] animate-slideDown">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-5 py-3 text-[14px] text-gray-700 hover:bg-gradient-to-r hover:from-salon-pink-50 hover:to-transparent hover:text-rose-gold-800 transition-all duration-150 ${
                              isActive(subItem.href)
                                ? 'bg-salon-pink-50 text-salon-pink-600 font-medium'
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
                    className={`block px-4 py-2 text-[15px] font-medium text-rose-gold-800 hover:text-salon-pink-600 transition-colors duration-200 ${
                      isActive(item.href) ? 'text-salon-pink-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact/book-appointment"
              className="ml-4 flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-rose-gold-600 to-salon-pink-600 text-white text-[15px] font-semibold rounded-lg hover:from-rose-gold-700 hover:to-salon-pink-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center space-x-2 text-rose-gold-800 font-medium hover:text-salon-pink-600 transition-colors duration-200 p-2"
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

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white border-t border-rose-gold-100 shadow-2xl animate-fade-slide">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-2" role="navigation">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-salon-pink-50 pb-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)
                      }
                      className="w-full flex justify-between items-center text-left text-rose-gold-800 font-semibold text-[15px] py-3 px-2 hover:text-salon-pink-600 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileOpenDropdown === item.name ? 'rotate-180 text-salon-pink-600' : ''
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
                            className={`block py-2 text-[14px] text-gray-700 hover:text-rose-gold-800 hover:bg-salon-pink-50 rounded-lg px-3 transition-all ${
                              isActive(subItem.href)
                                ? 'text-salon-pink-600 font-medium bg-salon-pink-50'
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
                    className={`block py-3 text-rose-gold-800 text-[15px] font-semibold hover:text-salon-pink-600 transition-colors ${
                      isActive(item.href) ? 'text-salon-pink-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/contact/book-appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-4 text-center bg-gradient-to-r from-rose-gold-600 to-salon-pink-600 text-white py-3 rounded-lg font-semibold hover:from-rose-gold-700 hover:to-salon-pink-700 transition-all shadow-lg"
            >
              Book Your Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
