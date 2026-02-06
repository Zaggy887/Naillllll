import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Harbour & Finch Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <span className="font-semibold text-base md:text-lg text-[#C9A227]">
                  Harbour & Finch
                </span>
              </Link>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4 md:mb-6">
                Boutique accounting and advisory firm delivering tailored solutions for businesses and individuals across Australia.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-[#1B4765] hover:bg-[#C9A227] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-[#1B4765] hover:bg-[#C9A227] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-[#1B4765] hover:bg-[#C9A227] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-[#1B4765] hover:bg-[#C9A227] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#C9A227] mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2 md:space-y-2.5">
                <li>
                  <Link to="/about" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300 flex items-center">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/about/partners" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link to="/resources/insights-blog" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Insights & Blog
                  </Link>
                </li>
                <li>
                  <Link to="/resources/calculators-templates" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Calculators
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact/book-consultation" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                    Book a Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#C9A227] mb-3 md:mb-4">Contact Us</h3>
              <ul className="space-y-3 md:space-y-3.5">
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+61395187499" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300 block">
                      +61 3 9518 7499
                    </a>
                    <span className="text-xs text-gray-400">Mon - Fri, 9:00 AM - 5:00 PM</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@harbourfinch.com.au" className="text-xs md:text-sm text-gray-300 hover:text-[#C9A227] transition-colors duration-300 break-all">
                    info@harbourfinch.com.au
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Office Locations */}
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#C9A227] mb-3 md:mb-4">Our Offices</h3>
              <div className="space-y-4 md:space-y-5">
                {/* Melbourne Office */}
                <div>
                  <div className="flex items-start space-x-3 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-white">Melbourne</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed ml-7">
                    Level 12, 120 Collins Street<br />
                    Melbourne VIC 3000<br />
                    Australia
                  </p>
                </div>

                {/* Sydney Office */}
                <div>
                  <div className="flex items-start space-x-3 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-white">Sydney</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed ml-7">
                    Suite 8, 45 Clarence Street<br />
                    Sydney NSW 2000<br />
                    Australia
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1B4765] py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Harbour & Finch Advisory. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#C9A227] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#C9A227] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-[#C9A227] transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
