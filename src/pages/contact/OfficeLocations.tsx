import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, Car, Brain as Train } from 'lucide-react';

const OfficeLocations = () => {
  const [heroReady, setHeroReady] = useState(false);

  const offices = [
    {
      city: 'Melbourne',
      address: 'Level 15, 385 Bourke Street',
      suburb: 'Melbourne VIC 3000',
      phone: '+61 3 9000 0001',
      email: 'melbourne@harbourfinch.com.au',
      image:
        'https://images.pexels.com/photos/6501953/pexels-photo-6501953.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1200&fit=crop',
      parking: 'Wilson Parking – 350 Bourke Street (2 min walk)',
      publicTransport: [
        'Parliament Station (5 min walk)',
        'Melbourne Central Station (8 min walk)',
        'Tram stops on Bourke Street',
      ],
      nearby: [
        'Parliament House Victoria',
        'Royal Exhibition Building',
        'Fitzroy Gardens',
        'Collins Street shopping',
      ],
    },
    {
      city: 'Sydney',
      address: 'Level 22, 1 Bligh Street',
      suburb: 'Sydney NSW 2000',
      phone: '+61 2 9000 0001',
      email: 'sydney@harbourfinch.com.au',
      image:
        'https://images.pexels.com/photos/17908344/pexels-photo-17908344.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1200&fit=crop',
      parking: 'Secure Parking – 1 Bligh Street (same building)',
      publicTransport: [
        'Circular Quay Station (3 min walk)',
        'Wynyard Station (5 min walk)',
        'Bus stops on George Street',
      ],
      nearby: [
        'Sydney Harbour Bridge',
        'Royal Botanic Gardens',
        'Museum of Contemporary Art',
        'The Rocks markets',
      ],
    },
  ];

  return (
    <div className="bg-[#F5F1EC]">

      {/* =====================================================
         ⭐ HERO (Tax Advisory Style)
      ====================================================== */}
      <section className="relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">

        {/* 1️⃣ Fallback Image */}
        <img
          src="/locations.webp"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            heroReady ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* 2️⃣ Main Image (fade-in) */}
        <img
          src="/locations.webp?v=5"
          alt="Office Locations Header"
          loading="eager"
          onLoad={() => setHeroReady(true)}
          onError={() => setHeroReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            heroReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 3️⃣ Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br
          from-[#0A2540]/80 
          via-[#18385A]/65 
          to-[#AE8621]/70"
        ></div>

        {/* 4️⃣ Text */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10">
          <span className="inline-block rounded-full bg-white/90 text-[#0A2540]
            text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
            Offices
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Office Locations
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl">
            Visit us at our CBD offices or meet with us virtually from anywhere in Australia.
          </p>
        </div>
      </section>

      {/* =====================================================
         ⭐ Office Details
      ====================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
                }`}
              >
                {/* Image */}
                <div>
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-4">
                      {office.city} Office
                    </h2>

                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#1B4765] mt-1" />
                      <div>
                        <p className="text-lg text-[#222222] font-medium">{office.address}</p>
                        <p className="text-lg text-[#222222]">{office.suburb}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Phone className="w-5 h-5 text-[#1B4765]" />
                        <span className="text-[#222222] font-medium">Phone</span>
                      </div>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-[#1B4765] hover:text-[#0A2540] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Mail className="w-5 h-5 text-[#1B4765]" />
                        <span className="text-[#222222] font-medium">Email</span>
                      </div>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#1B4765] hover:text-[#0A2540] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Parking */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Car className="w-5 h-5 text-[#1B4765]" />
                      <span className="text-[#222222] font-medium">Parking</span>
                    </div>
                    <p className="text-[#222222]">{office.parking}</p>
                  </div>

                  {/* Transport */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Train className="w-5 h-5 text-[#1B4765]" />
                      <span className="text-[#222222] font-medium">Public Transport</span>
                    </div>
                    <ul className="space-y-1">
                      {office.publicTransport.map((transport, i) => (
                        <li key={i} className="text-[#222222] flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#1B4765] rounded-full mr-3"></div>
                          {transport}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to="/contact/book-consultation"
                      className="inline-flex items-center bg-[#C9A227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
                    >
                      <span>Book consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
         ⭐ Business Hours
      ====================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-6">
              Business Hours
            </h2>
            <p className="text-xl text-[#222222]">
              Both offices operate on the same schedule for your convenience.
            </p>
          </div>

          <div className="bg-[#F5F1EC] p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-[#1B4765] mr-3" />
              <h3 className="font-poppins text-2xl font-semibold text-[#0A2540]">
                Office Hours
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#222222] font-medium">Monday – Friday</span>
                  <span className="text-[#0A2540] font-semibold">8:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-[#222222] font-medium">Saturday</span>
                  <span className="text-[#0A2540] font-semibold">By appointment only</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#222222] font-medium">Sunday</span>
                  <span className="text-[#0A2540] font-semibold">Closed</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-poppins text-lg font-semibold text-[#0A2540] mb-4">
                  After Hours Support
                </h4>
                <p className="text-[#222222] mb-4 leading-relaxed">
                  For urgent matters outside business hours, please email us and we’ll respond
                  as soon as possible. Emergency tax deadlines and time-sensitive issues receive
                  priority attention.
                </p>
                <a
                  href="mailto:urgent@harbourfinch.com.au"
                  className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
                >
                  urgent@harbourfinch.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         ⭐ Virtual Meetings
      ====================================================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-6">
              Virtual Meetings Available
            </h2>
            <p className="text-xl text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Can’t visit us in person? We offer secure virtual meetings for clients across
              Australia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0A2540] mb-4">
                Flexible Scheduling
              </h3>
              <p className="text-[#222222] leading-relaxed">
                Book times that work for your schedule — including early mornings and evenings.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0A2540] mb-4">
                Australia-Wide Service
              </h3>
              <p className="text-[#222222] leading-relaxed">
                Connect with our specialists from anywhere — same high-quality service online.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-[#0A2540] mb-4">
                Secure Platform
              </h3>
              <p className="text-[#222222] leading-relaxed">
                All virtual consultations are conducted through encrypted, secure platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         ⭐ CTA
      ====================================================== */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-4xl font-bold text-white mb-6">
            Ready to Visit or Connect?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you meet us in person or online, we’re here to help you
            achieve your financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Book Consultation */}
            <Link
              to="/contact/book-consultation"
              className="inline-flex items-center bg-[#C9A227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
            >
              <span>Book consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Call */}
            <a
              href="tel:+61 3 9518 7499"
              className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0A2540] transition-all duration-300 space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeLocations;
