import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import StatCard from "../components/StatCard";

const services = [
  {
    title: "Signature Manicures",
    description: "Luxurious nail care with premium products and impeccable attention to detail.",
    href: "/services/manicures",
  },
  {
    title: "Spa Pedicures",
    description: "Rejuvenating foot treatments in our serene spa environment.",
    href: "/services/pedicures",
  },
  {
    title: "Nail Art & Design",
    description: "Custom artistic designs from classic French to avant-garde creations.",
    href: "/services/nail-art",
  },
  {
    title: "Gel & Acrylic Extensions",
    description: "Long-lasting enhancements for beautiful, durable nails.",
    href: "/services/extensions",
  },
  {
    title: "Luxury Spa Treatments",
    description: "Premium facials, waxing, and rejuvenating beauty services.",
    href: "/services/spa-treatments",
  },
  {
    title: "Bridal & Events",
    description: "Specialized packages for weddings, parties, and special occasions.",
    href: "/services/bridal-events",
  },
];

const team = [
  {
    name: "Sophia Laurent",
    role: "Master Nail Artist & Salon Director",
    credentials: "15+ Years Experience",
    img: "/photoone.jpg",
  },
  {
    name: "Isabella Chen",
    role: "Senior Nail Technician",
    credentials: "Certified Nail Specialist",
    img: "/phototwo.png",
  },
  {
    name: "Maya Rodriguez",
    role: "Spa & Beauty Specialist",
    credentials: "Licensed Esthetician",
    img: "/photothree.jpg",
  },
];

const gallery = [
  {
    title: "Luxury Gel Manicure Collection",
    excerpt: "Explore our latest premium gel designs featuring rose gold accents.",
    date: "Recent Work",
    category: "Nail Art",
    href: "/gallery",
    img: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Bridal Nail Design Portfolio",
    excerpt: "Elegant and timeless designs perfect for your special day.",
    date: "Featured",
    category: "Bridal",
    href: "/gallery",
    img: "https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    title: "Artistic Nail Creations",
    excerpt: "Bold, creative designs showcasing the artistry of our technicians.",
    date: "New",
    category: "Art",
    href: "/gallery",
    img: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [videoReady, setVideoReady] = useState(false);

  const handleFadeNavigate = (e: any, href: string) => {
    e.preventDefault();
    document.body.classList.add("opacity-0", "transition-opacity", "duration-500");
    setTimeout(() => {
      navigate(href);
      document.body.classList.remove("opacity-0");
    }, 300);
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden py-20 md:py-24 bg-salon-cream-50">
        <img
          src="/homeimagee.webp"
          alt="Luxury Nail Salon"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/homeimagee.webp"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
          className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/homeimagee.webp"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
          className={`block md:hidden absolute inset-0 w-full h-full object-cover object-[70%_70%] transition-opacity duration-700 ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/homevideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-rose-gold-900/70 via-salon-pink-900/60 to-salon-cream-900/70" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 md:mb-10 leading-tight">
            Where Beauty Meets <span className="text-rose-gold-300">Artistry</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-salon-cream-100 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience luxury nail care and beauty treatments in an elegant, serene environment designed for your ultimate relaxation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 md:mb-24">
            <Link
              to="/contact/book-appointment"
              onClick={(e) => handleFadeNavigate(e, "/contact/book-appointment")}
              className="px-8 py-4 bg-rose-gold-600 text-white rounded-lg font-semibold hover:bg-rose-gold-700 transition shadow-lg"
            >
              Book Your Appointment
            </Link>

            <Link
              to="/services"
              onClick={(e) => handleFadeNavigate(e, "/services")}
              className="px-8 py-4 border-2 border-rose-gold-300 text-white rounded-lg font-semibold hover:bg-rose-gold-600 hover:border-rose-gold-600 transition"
            >
              View Services & Pricing
            </Link>
          </div>

          <div className="flex flex-row justify-center items-start gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto px-4">
            <StatCard value={5000} label="Clients Served" suffix="+" duration={2500} />
            <StatCard
              value={15}
              label="Years of Excellence"
              suffix="+"
              duration={2000}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white text-center px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-gold-800 mb-3 md:mb-4">
          Luxury Nail & Beauty Sanctuary
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
          Step into our elegant salon where sophistication meets comfort. We specialize in premium nail care,
          artistic designs, and rejuvenating spa treatments delivered by our team of certified professionals.
          Each service is crafted to provide you with an exceptional experience that leaves you feeling pampered,
          confident, and beautiful.
        </p>

        <Link
          to="/about"
          onClick={(e) => handleFadeNavigate(e, "/about")}
          className="inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-salon-pink-600 text-white rounded-lg text-sm md:text-base font-semibold hover:bg-salon-pink-700 transition space-x-2"
        >
          <span>Discover Our Story</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <section
        className="py-6 shadow-inner"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FDF2F8 45%, #FCE7F3 100%)",
          borderBottom: "1px solid rgba(183, 110, 121, 0.1)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-rose-gold-800 mb-6">
            Premium Products & Trusted Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div>
              <img
                src="/cpaaus.png"
                alt="OPI"
                className="h-10 mx-auto hover:scale-105 transition opacity-60"
              />
              <p className="text-xs text-rose-gold-700 font-medium mt-2">
                OPI Professional
              </p>
            </div>

            <div>
              <img
                src="/cpaanz.png"
                alt="CND"
                className="h-10 mx-auto hover:scale-105 transition opacity-60"
              />
              <p className="text-xs text-rose-gold-700 font-medium mt-2">
                CND Shellac
              </p>
            </div>

            <div>
              <img
                src="/taxagent.png"
                alt="Essie"
                className="h-10 mx-auto hover:scale-105 transition opacity-60"
              />
              <p className="text-xs text-rose-gold-700 font-medium mt-2">
                Essie Collection
              </p>
            </div>

            <div>
              <img
                src="/xero.jpg"
                alt="Dermalogica"
                className="h-10 mx-auto hover:scale-105 transition rounded-sm opacity-60"
              />
              <p className="text-xs text-rose-gold-700 font-medium mt-2">
                Dermalogica Skincare
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-gold-800 mb-8 md:mb-12">
            Our Signature Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 md:p-8 bg-gradient-to-br from-salon-cream-50 to-salon-pink-50 rounded-2xl shadow-sm border border-rose-gold-100 text-left hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-rose-gold-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-rose-gold-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-rose-gold-800 mb-3 md:mb-4">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  onClick={(e) => handleFadeNavigate(e, s.href)}
                  className="inline-flex items-center text-salon-pink-600 font-semibold hover:text-rose-gold-700 transition"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Link
              to="/services"
              onClick={(e) => handleFadeNavigate(e, "/services")}
              className="inline-flex items-center bg-salon-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-salon-pink-700 transition space-x-2 shadow-lg"
            >
              <span>View All Services & Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-20 bg-salon-cream-50 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-gold-800 mb-8 md:mb-12">
            Meet Our Expert Team
          </h2>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {team.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-rose-gold-100 hover:shadow-xl transition"
              >
                <div className="h-24 w-24 md:h-28 md:w-28 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden shadow-md ring-4 ring-rose-gold-200">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-rose-gold-800 mb-1">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-salon-pink-600 font-medium mb-1">
                  {p.role}
                </p>
                <p className="text-xs md:text-sm text-gray-600">{p.credentials}</p>
              </div>
            ))}
          </div>

          <div className="sm:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide">
            {team.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80%] snap-center bg-white p-6 rounded-2xl shadow-md border border-rose-gold-100"
              >
                <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden shadow ring-4 ring-rose-gold-200">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-rose-gold-800 mb-1">
                  {p.name}
                </h3>
                <p className="text-salon-pink-600 text-sm font-medium mb-1">
                  {p.role}
                </p>
                <p className="text-xs text-gray-600">{p.credentials}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <Link
              to="/about/team"
              onClick={(e) => handleFadeNavigate(e, "/about/team")}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-rose-gold-600 text-white rounded-lg text-sm md:text-base font-semibold hover:bg-rose-gold-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-salon-pink-50 to-salon-cream-100 border-t border-rose-gold-100">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-gold-800 mb-3 md:mb-4">
            Book Your Appointment Today
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Experience luxury nail care and beauty treatments. Choose from our extensive menu
            of services or create a custom package tailored to your needs.
          </p>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border-2 border-rose-gold-200 mb-6 md:mb-8">
            <Calendar className="w-16 h-16 text-rose-gold-600 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-rose-gold-800 mb-4">
              Walk-ins Welcome | Appointments Preferred
            </h3>
            <p className="text-gray-600 mb-6">
              Book online for guaranteed availability and exclusive member benefits
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="bg-salon-pink-50 p-4 rounded-xl border border-salon-pink-200">
                <h4 className="font-semibold text-salon-pink-700 mb-2">Opening Hours</h4>
                <p className="text-sm text-gray-700">
                  Mon-Sat: 9AM - 7PM<br />
                  Sunday: 10AM - 6PM
                </p>
              </div>

              <div className="bg-rose-gold-50 p-4 rounded-xl border border-rose-gold-200">
                <h4 className="font-semibold text-rose-gold-700 mb-2">Contact Us</h4>
                <p className="text-sm text-gray-700">
                  (03) 1234 5678<br />
                  hello@luxurynails.com
                </p>
              </div>

              <div className="bg-salon-cream-100 p-4 rounded-xl border border-salon-gold-300">
                <h4 className="font-semibold text-salon-gold-700 mb-2">Location</h4>
                <p className="text-sm text-gray-700">
                  123 Collins Street<br />
                  Melbourne, VIC 3000
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contact/book-appointment"
              onClick={(e) => handleFadeNavigate(e, "/contact/book-appointment")}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-rose-gold-600 text-white rounded-lg text-base md:text-lg font-semibold hover:bg-rose-gold-700 transition shadow-lg space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Online Now</span>
            </Link>

            <Link
              to="/services"
              onClick={(e) => handleFadeNavigate(e, "/services")}
              className="inline-flex items-center text-sm md:text-base text-salon-pink-600 font-semibold hover:text-rose-gold-700 transition"
            >
              View full service menu & pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-gold-800 mb-8 md:mb-12">
            Featured Gallery
          </h2>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {gallery.map((i, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-rose-gold-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 md:p-6 text-left">
                  <span className="inline-block px-3 py-1 bg-salon-pink-100 text-salon-pink-700 text-xs font-semibold rounded-full mb-2">
                    {i.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-rose-gold-800 mb-2">
                    {i.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{i.excerpt}</p>
                  <Link
                    to={i.href}
                    onClick={(e) => handleFadeNavigate(e, i.href)}
                    className="inline-flex items-center text-salon-pink-600 font-medium hover:text-rose-gold-700 transition text-sm"
                  >
                    View Gallery
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-hide">
            {gallery.map((i, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] snap-center bg-white rounded-2xl overflow-hidden shadow-md border border-rose-gold-100"
              >
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 text-left">
                  <span className="inline-block px-3 py-1 bg-salon-pink-100 text-salon-pink-700 text-xs font-semibold rounded-full mb-2">
                    {i.category}
                  </span>
                  <h3 className="text-base font-semibold text-rose-gold-800 mb-2">
                    {i.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{i.excerpt}</p>
                  <Link
                    to={i.href}
                    onClick={(e) => handleFadeNavigate(e, i.href)}
                    className="inline-flex items-center text-salon-pink-600 text-sm font-medium hover:text-rose-gold-700 transition"
                  >
                    View Gallery
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/gallery"
              onClick={(e) => handleFadeNavigate(e, "/gallery")}
              className="inline-flex items-center bg-salon-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-salon-pink-700 transition space-x-2 shadow-lg"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-rose-gold-800 to-salon-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-salon-pink-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-gold-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Indulge in Luxury
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-salon-cream-100 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Treat yourself to an unforgettable beauty experience. Book your appointment today and discover why we're Melbourne's premier destination for luxury nail and beauty services.
          </p>

          <Link
            to="/contact/book-appointment"
            onClick={(e) => handleFadeNavigate(e, "/contact/book-appointment")}
            className="inline-flex items-center px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-white text-rose-gold-800 rounded-lg text-sm md:text-base font-semibold hover:bg-salon-cream-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 min-h-[44px]"
          >
            <span>Book Your Appointment</span>
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
