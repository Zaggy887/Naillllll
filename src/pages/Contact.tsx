import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  // ⭐ NEW fade-in header loader
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div className="bg-[#F5F1EC]">

      {/* =====================================================
         ⭐ UPDATED HERO — instant fallback + fade system
      ====================================================== */}
      <section className="relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">

        {/* 1️⃣ Instant fallback image */}
        <img
          src="/contactus.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            heroReady ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* 2️⃣ Final header image */}
        <img
          src="/contactus.jpg?v=3"
          alt="Contact Us"
          loading="eager"
          onLoad={() => setHeroReady(true)}
          onError={() => setHeroReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-[#0A2540]/80 
          via-[#18385A]/65 
          to-[#AE8621]/70"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute top-[25%] right-[-12%] opacity-[0.14]">
            <div className="absolute top-0 right-0 
              w-[200px] h-[200px] md:w-[300px] md:h-[300px] 
              bg-[#C9A227] rotate-12" />
            <div className="absolute top-[100px] right-[50px] 
              md:top-[150px] md:right-[80px] 
              w-[150px] h-[150px] md:w-[220px] md:h-[220px] 
              bg-[#0A2540] rotate-6" />
          </div>

          <div className="hidden md:block absolute bottom-[20%] right-[5%] 
            w-[120px] h-[2px] bg-[#C9A227] opacity-[0.15] rotate-12" />
        </div>

        {/* Text */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10">
          <span className="inline-block rounded-full bg-white/90 text-[#0A2540] 
            text-xs md:text-sm font-bold tracking-widest uppercase 
            px-4 py-1.5 mb-6 md:mb-8 shadow-md">
            Contact
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white 
            mb-8 leading-tight tracking-tight">
            Contact Us
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light 
            leading-relaxed max-w-2xl">
            Ready to take the next step? Get in touch with our team of experts and discover
            how we can help you achieve your goals.
          </p>
        </div>
      </section>
      {/* ===================================================== */}



      {/* Contact Options */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">

            <Link
              to="/contact/book-consultation"
              className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl hover:shadow-lg 
              transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C9A227] rounded-xl 
              flex items-center justify-center mb-6 group-hover:bg-[#B8921F]">
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-4">
                Book a Consultation
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4 leading-relaxed">
                Schedule a complimentary consultation to discuss your needs and explore how we can help.
              </p>

              <div className="flex items-center text-sm md:text-base text-[#1B4765] font-medium 
              group-hover:text-[#0A2540] transition-colors">
                <span>Schedule now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>


            <Link
              to="/contact/office-locations"
              className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl hover:shadow-lg 
              transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0A2540] rounded-xl 
              flex items-center justify-center mb-6 group-hover:bg-[#1B4765]">
                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] mb-4">
                Office Locations
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4 leading-relaxed">
                Visit us at our Melbourne or Sydney offices, or connect with us virtually.
              </p>

              <div className="flex items-center text-sm md:text-base text-[#1B4765] font-medium 
                group-hover:text-[#0A2540] transition-colors">
                <span>Find us</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>



      {/* Quick Contact */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Get in Touch
            </h2>

            <p className="text-base md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Multiple ways to connect with our team. Choose what works best for you.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl 
                flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Call Us
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4">
                Speak directly with our team
              </p>

              <a href="tel:+61 3 9518 7499" 
                className="text-sm md:text-base text-[#1B4765] font-semibold hover:text-[#0A2540]">
                1300 000 000
              </a>
            </div>


            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl 
                flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Email Us
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4">
                Send us your enquiry
              </p>

              <a href="mailto:contact@harbourfinch.com.au" 
                className="text-sm md:text-base text-[#1B4765] font-semibold hover:text-[#0A2540]">
                contact@harbourfinch.com.au
              </a>
            </div>


            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl 
                flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Melbourne
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4">
                Level 15, 385 Bourke Street<br />Melbourne VIC 3000
              </p>

              <Link to="/contact/office-locations" 
                className="text-sm md:text-base text-[#1B4765] font-semibold hover:text-[#0A2540]">
                Get directions
              </Link>
            </div>


            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B4765] rounded-2xl flex items-center 
                justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-3">
                Sydney
              </h3>

              <p className="text-sm md:text-base text-[#222222] mb-4">
                Level 22, 1 Bligh Street<br />Sydney NSW 2000
              </p>

              <Link to="/contact/office-locations" 
                className="text-sm md:text-base text-[#1B4765] font-semibold hover:text-[#0A2540]">
                Get directions
              </Link>
            </div>

          </div>
        </div>
      </section>



      {/* Business Hours */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-8">
            Business Hours
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-6">
                Office Hours
              </h3>

              <div className="space-y-3 text-sm md:text-base text-[#222222]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:30 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>


            <div className="bg-[#F5F1EC] p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg md:text-xl font-semibold text-[#0A2540] mb-6">
                Response Times
              </h3>

              <div className="space-y-3 text-sm md:text-base text-[#222222]">
                <div className="flex justify-between">
                  <span>Phone calls</span>
                  <span className="font-medium">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span>Emails</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultation requests</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-[#0A2540] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Take the first step towards optimising your financial position.  
            Book a consultation today and discover how we can help.
          </p>

          <Link
            to="/contact/book-consultation"
            className="inline-flex items-center bg-[#C9A227] text-white px-6 md:px-8 py-3 
              md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#B8921F] 
              transition-all duration-300 space-x-2"
          >
            <span>Book consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Contact;
