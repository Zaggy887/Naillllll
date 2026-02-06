import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, ArrowRight, Shield, FileText, Calendar, MessageCircle } from 'lucide-react';

const ClientPortal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const features = [
    {
      icon: FileText,
      title: 'Document Access',
      description: 'View and download your tax returns, financial statements, and other important documents'
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule meetings with your advisor and view upcoming appointments'
    },
    {
      icon: MessageCircle,
      title: 'Secure Messaging',
      description: 'Communicate directly with your accounting team through encrypted messaging'
    },
    {
      icon: Shield,
      title: 'Secure File Sharing',
      description: 'Upload documents and share sensitive information safely and securely'
    }
  ];

  return (
    <div className="bg-[#F5F1EC] min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.8), rgba(201, 162, 39, 0.6)), url('https://images.pexels.com/photos/3760111/pexels-photo-3760111.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-6">
            Client Portal
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Secure access to your documents, appointments, and communication with your accounting team.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Login Form */}
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-poppins text-3xl font-bold text-[#0A2540] mb-4">
                  Client Login
                </h2>
                <p className="text-[#222222] leading-relaxed">
                  Access your secure client portal to manage your account and documents.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#222222] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4765] focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#1B4765] focus:ring-[#1B4765] border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#222222]">
                      Remember me
                    </label>
                  </div>

                  <button type="button" className="text-sm text-[#1B4765] hover:text-[#0A2540] transition-colors">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A227] text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-[#222222] mb-4">
                  Don't have portal access yet?
                </p>
                <Link
                  to="/contact"
                  className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
                >
                  Contact us to set up your account
                </Link>
              </div>
            </div>

            {/* Portal Features */}
            <div>
              <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-8">
                Portal Features
              </h2>
              <p className="text-lg text-[#222222] leading-relaxed mb-8">
                Our secure client portal provides 24/7 access to your important documents 
                and enables seamless communication with your accounting team.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1B4765] rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-semibold text-[#0A2540] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#222222] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-[#1B4765] rounded-full flex items-center justify-center mb-8 mx-auto">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-6">
            Bank-Level Security
          </h2>
          
          <p className="text-xl text-[#222222] leading-relaxed mb-8">
            Your data is protected with enterprise-grade security measures including 
            256-bit SSL encryption, multi-factor authentication, and regular security audits.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1EC] p-6 rounded-xl">
              <h3 className="font-poppins text-lg font-semibold text-[#0A2540] mb-3">
                Data Encryption
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                All data is encrypted both in transit and at rest using industry-standard protocols.
              </p>
            </div>

            <div className="bg-[#F5F1EC] p-6 rounded-xl">
              <h3 className="font-poppins text-lg font-semibold text-[#0A2540] mb-3">
                Access Controls
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Role-based access ensures you only see information relevant to your account.
              </p>
            </div>

            <div className="bg-[#F5F1EC] p-6 rounded-xl">
              <h3 className="font-poppins text-lg font-semibold text-[#0A2540] mb-3">
                Regular Backups
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Automated backups ensure your data is always safe and recoverable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-4xl font-bold text-[#0A2540] mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-[#222222] leading-relaxed mb-8">
            Our team is here to help you make the most of your client portal experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-poppins text-xl font-semibold text-[#0A2540] mb-4">
                Technical Support
              </h3>
              <p className="text-[#222222] leading-relaxed mb-4">
                Having trouble logging in or accessing your documents? Our technical support team can help.
              </p>
              <a
                href="mailto:support@harbourfinch.com.au"
                className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
              >
                support@harbourfinch.com.au
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-poppins text-xl font-semibold text-[#0A2540] mb-4">
                Account Questions
              </h3>
              <p className="text-[#222222] leading-relaxed mb-4">
                Questions about your account, documents, or services? Contact your dedicated advisor.
              </p>
              <Link
                to="/contact"
                className="text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors"
              >
                Contact your advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-4xl font-bold text-white mb-6">
            Not a client yet?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the convenience of our client portal and comprehensive accounting services. 
            Book a consultation to get started.
          </p>
          <Link
            to="/contact/book-consultation"
            className="inline-flex items-center bg-[#C9A227] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
          >
            <span>Book consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientPortal;