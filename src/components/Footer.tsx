import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-gold-900 to-salon-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Luxury Nails & Beauty Spa Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-base md:text-lg text-salon-cream-100">
                    Luxury Nails
                  </span>
                  <span className="text-xs text-salon-cream-200 -mt-1">& Beauty Spa</span>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-salon-cream-200 leading-relaxed mb-4 md:mb-6">
                Experience the pinnacle of luxury nail care and beauty treatments in Melbourne's most elegant salon environment.
              </p>

              <div className="flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-rose-gold-700 hover:bg-salon-cream-100 hover:text-rose-gold-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-rose-gold-700 hover:bg-salon-cream-100 hover:text-rose-gold-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-9 md:h-9 bg-rose-gold-700 hover:bg-salon-cream-100 hover:text-rose-gold-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Pinterest"
                >
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-salon-cream-100 mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2 md:space-y-2.5">
                <li>
                  <Link to="/about" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300 flex items-center">
                    About Our Salon
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                    Services & Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                    Portfolio Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about/team" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                    Meet Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                    Membership Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/contact/book-appointment" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-salon-cream-100 mb-3 md:mb-4">Contact Us</h3>
              <ul className="space-y-3 md:space-y-3.5">
                <li className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-salon-cream-100 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+61312345678" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300 block">
                      +61 3 1234 5678
                    </a>
                    <span className="text-xs text-salon-cream-300">Call for appointments</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-salon-cream-100 mt-0.5 flex-shrink-0" />
                  <a href="mailto:hello@luxurynails.com" className="text-xs md:text-sm text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300 break-all">
                    hello@luxurynails.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-salon-cream-100 mt-0.5 flex-shrink-0" />
                  <div className="text-xs md:text-sm text-salon-cream-200">
                    <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                    <div>Sunday: 10:00 AM - 6:00 PM</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-salon-cream-100 mb-3 md:mb-4">Visit Us</h3>
              <div className="space-y-4 md:space-y-5">
                <div>
                  <div className="flex items-start space-x-3 mb-1.5">
                    <MapPin className="w-4 h-4 text-salon-cream-100 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-white">Melbourne CBD</span>
                  </div>
                  <p className="text-xs md:text-sm text-salon-cream-200 leading-relaxed ml-7">
                    123 Collins Street<br />
                    Melbourne VIC 3000<br />
                    Australia
                  </p>
                </div>

                <div className="ml-7">
                  <a
                    href="/contact/locations"
                    className="inline-flex items-center text-xs md:text-sm text-salon-cream-100 hover:text-salon-cream-50 font-medium transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>

                <div className="bg-rose-gold-800 p-4 rounded-lg ml-0 border border-rose-gold-700">
                  <p className="text-xs text-salon-cream-100 font-semibold mb-2">Walk-ins Welcome!</p>
                  <p className="text-xs text-salon-cream-200">
                    Appointments preferred for guaranteed availability
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-rose-gold-700 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs text-salon-cream-200 text-center md:text-left">
              © {new Date().getFullYear()} Luxury Nails & Beauty Spa. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs">
              <Link to="/privacy-policy" className="text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/gift-cards" className="text-salon-cream-200 hover:text-salon-cream-50 transition-colors duration-300">
                Gift Cards
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
