import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const TransitionsDemo = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with page transition */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1B4765] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Transitions Demo</h1>
          <p className="text-xl text-gray-200">See all the smooth animations in action</p>
        </div>
      </section>

      {/* Button Hovers */}
      <AnimatedSection animation="fade" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Button Hover Effects</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-hover px-8 py-4 bg-[#C9A227] text-white rounded-lg font-semibold">
              Hover Me (btn-hover)
            </button>
            <button className="hover-lift px-8 py-4 bg-[#1B4765] text-white rounded-lg font-semibold">
              Hover Me (hover-lift)
            </button>
            <button className="bounce-subtle px-8 py-4 bg-[#0A2540] text-white rounded-lg font-semibold">
              I Bounce! (bounce-subtle)
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Card Hovers */}
      <AnimatedSection animation="slideLeft" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Card Hover Effects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Card Hover</h3>
              <p className="text-gray-600">Hover to see lift + scale effect</p>
            </div>
            <div className="premium-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Premium Card</h3>
              <p className="text-gray-600">Hover to see gold shadow effect</p>
            </div>
            <div className="hover-lift bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Hover Lift</h3>
              <p className="text-gray-600">Hover to see gentle lift effect</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Link Hovers */}
      <AnimatedSection animation="slideRight" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Link Hover Effects</h2>
          <div className="text-center space-y-4 text-xl">
            <div>
              <a href="#" className="link-hover text-[#1B4765] font-semibold">
                Hover to see underline animation
              </a>
            </div>
            <div>
              <a href="#" className="link-hover text-[#C9A227] font-semibold">
                Another link with animation
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Image Hover */}
      <AnimatedSection animation="scale" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Image Hover Effects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="img-hover rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Demo" className="w-full h-64 object-cover" />
            </div>
            <div className="img-hover rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Demo" className="w-full h-64 object-cover" />
            </div>
            <div className="img-hover rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Demo" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stagger Animation */}
      <AnimatedSection animation="fade" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Stagger Animation</h2>
          <p className="text-center text-gray-600 mb-8">Scroll to see items appear one by one</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="stagger-item bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#C9A227] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {num}
                </div>
                <p className="text-gray-600">Item {num}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Loading States */}
      <AnimatedSection animation="fade" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-8 text-center">Loading States</h2>
          <div className="flex flex-wrap gap-12 justify-center items-center">
            <div className="text-center">
              <div className="spinner mx-auto mb-4"></div>
              <p className="text-gray-600">Spinner</p>
            </div>
            <div className="text-center">
              <div className="pulse w-16 h-16 mx-auto mb-4 bg-[#C9A227] rounded-full"></div>
              <p className="text-gray-600">Pulse</p>
            </div>
            <div className="text-center">
              <div className="skeleton w-48 h-6 rounded mb-2"></div>
              <div className="skeleton w-40 h-6 rounded mb-2"></div>
              <div className="skeleton w-44 h-6 rounded"></div>
              <p className="text-gray-600 mt-4">Skeleton Loading</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Scroll Animations Summary */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">All Transitions Are Active!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every section on this page demonstrates different animation types. 
            Scroll up and down to see them trigger as elements enter the viewport.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-[#1B4765] p-6 rounded-lg">
              <h3 className="font-bold mb-2">Page Animations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Initial page load fade-in</li>
                <li>✓ Smooth scroll to top</li>
                <li>✓ Loading spinner</li>
              </ul>
            </div>
            <div className="bg-[#1B4765] p-6 rounded-lg">
              <h3 className="font-bold mb-2">Scroll Animations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Fade in scroll</li>
                <li>✓ Slide from left/right</li>
                <li>✓ Scale in</li>
                <li>✓ Stagger effects</li>
              </ul>
            </div>
            <div className="bg-[#1B4765] p-6 rounded-lg">
              <h3 className="font-bold mb-2">Hover Effects</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Button hover (ripple)</li>
                <li>✓ Card hover (lift + scale)</li>
                <li>✓ Link hover (underline)</li>
                <li>✓ Image hover (zoom)</li>
              </ul>
            </div>
            <div className="bg-[#1B4765] p-6 rounded-lg">
              <h3 className="font-bold mb-2">Accessibility</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Reduced motion support</li>
                <li>✓ Focus indicators</li>
                <li>✓ Keyboard navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransitionsDemo;
