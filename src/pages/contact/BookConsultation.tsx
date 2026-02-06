import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceArea: string;
  preferredTime: string;
  message: string;
  consent: boolean;
}

const BookConsultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const serviceAreas = [
    'Tax Advisory',
    'Business Services & CFO',
    'Audit & Assurance',
    'SMSF & Superannuation',
    'Bookkeeping & Payroll',
    'Cloud Accounting & Xero Migration',
    'General Business Advisory'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F5F1EC] min-h-screen flex items-center justify-center py-8 md:py-20">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-white p-5 md:p-12 rounded-2xl shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            <h1 className="text-xl md:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
              Consultation Booked Successfully!
            </h1>

            <p className="text-sm md:text-lg text-[#222222] leading-relaxed mb-4 md:mb-6">
              Thank you for your interest in Harbour & Finch Advisory. We've received your consultation 
              request and will contact you within 24 hours to confirm your appointment time.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#0A2540] text-white px-5 md:px-8 py-2.5 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#0F3A5F] transition-all duration-300"
            >
              Book Another Consultation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F1EC] min-h-screen">

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
    src="/bookconsult.webp"
    alt="Book Consultation Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/bookconsult.webp?v=6"
    alt="Book Consultation Header"
    loading="eager"
    decoding="async"
    fetchpriority="high"
    onLoad={() => setHeroReady(true)}
    onError={() => setHeroReady(true)}
    className={`absolute inset-0 w-full h-full object-cover object-center md:object-[center_30%] transition-opacity duration-700 ${
      heroReady ? 'opacity-100' : 'opacity-0'
    }`}
  />

  {/* 3️⃣ Gold–navy gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#18385A]/65 to-[#AE8621]/70"></div>

  {/* 4️⃣ Text */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10">
    <span className="inline-block rounded-full bg-white/90 text-[#0A2540] text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
      Contact
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Book a Consultation
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Take the first step towards optimising your financial position. Schedule a complimentary consultation with our experts.
    </p>
  </div>
</section>

      {/* What to Expect */}
      <section className="py-8 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-3 md:mb-6">
              What to expect from your consultation
            </h2>
            <p className="text-sm md:text-lg text-[#222222] max-w-3xl mx-auto leading-relaxed">
              Our initial consultation is designed to understand your needs and show you 
              how we can help achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                <Calendar className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-[#0A2540] mb-2 md:mb-4">
                45-Minute Session
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Comprehensive discussion of your current situation, challenges, and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-[#0A2540] mb-2 md:mb-4">
                No Obligation
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Free consultation with no commitment required. Just valuable insights and advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1B4765] rounded-2xl flex items-center justify-center mb-3 md:mb-6 mx-auto">
                <Clock className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-[#0A2540] mb-2 md:mb-4">
                Quick Follow-up
              </h3>
              <p className="text-sm md:text-base text-[#222222] leading-relaxed">
                Receive a detailed proposal within 48 hours if you choose to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-3xl font-bold text-[#0A2540] mb-3 md:mb-4">
                Schedule Your Consultation
              </h2>
              <p className="text-sm md:text-lg text-[#222222] leading-relaxed">
                Fill out the form below and we'll contact you to confirm your preferred time.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#222222] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#222222] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#222222] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="0400 000 000"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#222222] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  {...register('company')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="serviceArea" className="block text-sm font-medium text-[#222222] mb-2">
                    Service Area of Interest *
                  </label>
                  <select
                    id="serviceArea"
                    {...register('serviceArea', { required: 'Please select a service area' })}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service area</option>
                    {serviceAreas.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                  </select>
                  {errors.serviceArea && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.serviceArea.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-[#222222] mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    {...register('preferredTime')}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                  >
                    <option value="">Any time</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                  Tell us about your situation
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors resize-none"
                  placeholder="Brief description of your needs, challenges, or questions..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  {...register('consent', { required: 'You must agree to the privacy policy' })}
                  className="mt-1 h-4 w-4 text-[#1B4765] focus:ring-[#1B4765] border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-[#222222] leading-relaxed">
                  I agree to Harbour & Finch Advisory collecting and using my personal information 
                  in accordance with their Privacy Policy to contact me regarding my consultation request. *
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.consent.message}
                </p>
              )}

              <div className="pt-2 md:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A227] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Book My Consultation</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-5 md:mt-8 p-3 md:p-4 bg-[#F5F1EC] rounded-lg">
              <p className="text-sm text-[#222222] leading-relaxed">
                <strong>Note:</strong> This consultation request is not a confirmed appointment. 
                Our team will contact you within 24 hours to confirm your preferred time and 
                provide meeting details. All consultations can be conducted in-person at our 
                Melbourne or Sydney offices, or via video conference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
