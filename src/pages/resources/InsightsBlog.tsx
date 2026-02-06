import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const InsightsBlog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroReady, setHeroReady] = useState(false);

  const fallbackImage =
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop";

  const posts = [
    {
      title: "2025 Tax Changes: What Australian Businesses Need to Know",
      excerpt: "Key legislative changes affecting small to medium enterprises this financial year, including new deduction rules and compliance requirements.",
      author: "Emma Finch",
      date: "15 January 2025",
      category: "Tax Advisory",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6927342/pexels-photo-6927342.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "SMSF Investment Strategies for Volatile Markets",
      excerpt: "How to protect and grow your superannuation during economic uncertainty.",
      author: "Priya Nair",
      date: "10 January 2025",
      category: "SMSF",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/7477698/pexels-photo-7477698.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "Cloud Accounting: The Complete Migration Guide",
      excerpt: "Step-by-step process for transitioning to cloud accounting systems.",
      author: "James Mitchell",
      date: "8 January 2025",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "R&D Tax Incentives: Maximising Your Claims for 2025",
      excerpt: "How to optimize eligibility, documentation, and deductions.",
      author: "Emma Finch",
      date: "3 January 2025",
      category: "Tax Advisory",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8533013/pexels-photo-8533013.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "Business Succession Planning: A Complete Guide",
      excerpt: "Strategies for transitioning ownership, minimising tax, and ensuring continuity.",
      author: "Daniel Harbour",
      date: "28 December 2024",
      category: "Business Advisory",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/8441791/pexels-photo-8441791.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    },
    {
      title: "GST Management for Property Developers",
      excerpt: "Navigating GST requirements including margin schemes and credits.",
      author: "Marcus Alexander",
      date: "20 December 2024",
      category: "Property",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
    }
  ];

  const categories = ["All", "Tax Advisory", "SMSF", "Business Advisory", "Technology", "Property"];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-[#F5F1EC]">

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
    src="/blog.webp"
    alt="Insights & Blog Fallback"
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? 'opacity-0' : 'opacity-100'
    }`}
  />

  {/* 2️⃣ Main image (fade-in) */}
  <img
    src="/blog.webp?v=6"
    alt="Insights & Blog Header"
    loading="eager"
    decoding="async"
    fetchpriority="high"
    onLoad={() => setHeroReady(true)}
    onError={() => setHeroReady(true)}
    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
      heroReady ? "opacity-100" : "opacity-0"
    }`}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br
      from-[#0A2540]/80
      via-[#18385A]/65
      to-[#AE8621]/70"
  ></div>

  {/* Hero Content */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24 lg:py-32 z-10 transition-opacity duration-700">
    <span className="inline-block rounded-full bg-white/90 text-[#0A2540] text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 mb-6 md:mb-8 shadow-md">
      Resources
    </span>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 md:mb-10 leading-tight tracking-tight">
      Insights & Blog
    </h1>

    <p className="text-[15px] md:text-lg lg:text-xl text-white/85 font-light tracking-normal leading-relaxed max-w-2xl">
      Expert analysis, industry trends, and practical advice to help you make informed business decisions.
    </p>
  </div>
</section>


      {/* Categories Filter */}
      <section className="py-6 md:py-8 bg-white sticky top-[110px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#1B4765] text-white"
                    : "bg-[#F5F1EC] text-[#222222] hover:bg-[#1B4765] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = fallbackImage)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1B4765] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h2 className="font-poppins text-lg md:text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#1B4765] transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-[#222222] leading-relaxed mb-4 md:mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                    </div>

                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>

                  <Link
                    to="#"
                    className="inline-flex items-center text-[#1B4765] font-medium hover:text-[#0A2540] transition-colors duration-300 group"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default InsightsBlog;
