import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-[#F5F1EC] min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <div className="text-8xl font-bold text-[#1B4765] mb-4">404</div>
          <h1 className="font-poppins text-4xl font-bold text-[#0A2540] mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-[#222222] leading-relaxed mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been 
            moved, deleted, or the URL may have been mistyped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center bg-[#C9A227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8921F] transition-all duration-300 space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Go to Homepage</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center bg-[#0A2540] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0F3A5F] transition-all duration-300 space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;