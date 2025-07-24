import React from "react";
import blogData from "../../data/blogData";
import Link from "next/link";
import Topbar from "../Topbar";
import GradientGlowText from "@/Component/Typography/Heading";

const BlogHome = () => {
  return (
    <div className="min-h-screen bg-black text-white w-full px-4 relative overflow-x-hidden">
      {/* Blue radial spot left */}
      <div className="pointer-events-none select-none absolute left-0 top-0 bottom-0 w-[700px] h-full z-0" style={{background: 'radial-gradient(ellipse 60% 60% at 0% 50%, rgba(48,160,255,0.32) 0%, transparent 100%)'}} />
      {/* Purple radial spot right */}
      <div className="pointer-events-none select-none absolute right-0 top-0 bottom-0 w-[700px] h-full z-0" style={{background: 'radial-gradient(ellipse 60% 60% at 100% 60%, rgba(177,69,255,0.28) 0%, transparent 100%)'}} />
      <Topbar />
      <div className="w-full max-w-6xl mx-auto py-6 md:py-12">
        <div className="text-center mb-6">
          <GradientGlowText
            className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-sora font-bold mb-4"
            circleSize={120}
            baseTextColor="text-gray-600"
          >
            GTM BLOGS
          </GradientGlowText>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-4 font-sora font- bg-gradient-to-r from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent" style={{letterSpacing: '0.01em'}}>
          Ideas. Insights. Innovation.
        </h2>
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto font-sora">
          We help future-forward start-ups tackle traction, community, and business with full-stack growth, marketing, and development services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-y-8 md:space-y-0 mb-16">
          {blogData.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
              <div className="min-h-[340px] p-4 w-full max-w-[95vw] mx-auto">
                <div className="rounded-xl border border-[#5B5B7B] border-opacity-40 bg-transparent mb-4 overflow-hidden">
                  <img
                    src={blog.coverImage.formats.small.url}
                    alt={blog.title}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-sora font-normal mb-2 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-base font-sora mb-2">
                  {blog.content[0]?.children[0]?.text}
                </p>
                <div className="flex items-center justify-between text-xs text-white/90 font-sora gap-2">
                  <span>GTM Labs</span>
                  <span className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="14" height="13" rx="2" fill="url(#calendar-gradient)"/>
                      <rect x="3" y="4" width="14" height="13" rx="2" stroke="url(#calendar-gradient)" strokeWidth="1.5"/>
                      <rect x="7" y="2" width="1.5" height="3" rx="0.75" fill="url(#calendar-gradient)"/>
                      <rect x="11.5" y="2" width="1.5" height="3" rx="0.75" fill="url(#calendar-gradient)"/>
                      <defs>
                        <linearGradient id="calendar-gradient" x1="3" y1="4" x2="17" y2="17" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#30A0FF"/>
                          <stop offset="1" stopColor="#B145FF"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    {new Date(blog.published).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center cursor-pointer font-sora mt-4">
          <span className="inline-flex items-center text-xl font-sora font-normal bg-gradient-to-r from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent">
            Read More
            <svg className="ml-1 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="url(#chevron-gradient)" strokeWidth="2">
              <defs>
                <linearGradient id="chevron-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#30A0FF"/>
                  <stop offset="1" stopColor="#B145FF"/>
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
      <section className="py-8 sm:py-12 mt-8 flex items-center justify-center bg-transparent relative overflow-hidden px-4">
        {/* Subtle radial light spot background */}
        <div className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] z-0" style={{background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 100%)'}} />
        <div className="max-w-[95vw] md:max-w-2xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font- mb-4 sm:mb-6 text-white font-sora">Join Our Newsletter</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto font-sora">Get the latest from GTM Labs delivered straight to your inbox. Subscribe now and never miss an update on Web3, blockchain, and tech innovation.</p>
          <form className="w-full max-w-md sm:max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row bg-transparent border border-white/30 rounded-full overflow-hidden w-full">
              <input 
                type="email" 
                placeholder="Enter your Email ID" 
                className="w-full sm:flex-1 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base lg:text-lg focus:outline-none placeholder:text-white/60 font-sora mb-3 sm:mb-0" 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-white text-sm sm:text-base lg:text-lg rounded-full font-semibold focus:outline-none transition-all hover:scale-105 cursor-pointer font-sora"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-[95vw] md:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {/* Quick Links */}
            <div className="py-6 border-b border-white/10 last:border-b-0 md:border-b-0 text-center md:text-left w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white font-sora">Quick links</h4>
              <ul className="space-y-2 text-sm sm:text-base text-white/70 font-sora">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            {/* Help */}
            <div className="py-6 border-b border-white/10 last:border-b-0 md:border-b-0 text-center md:text-left w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white font-sora">Help</h4>
              <ul className="space-y-2 text-sm sm:text-base text-white/70 font-sora">
                <li><a href="#" className="hover:text-white transition">Help Centre</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Forum</a></li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="py-6 border-b border-white/10 last:border-b-0 md:border-b-0 text-center md:text-left w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white font-sora">Social Media</h4>
              <ul className="space-y-2 text-sm sm:text-base text-white/70 font-sora">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="py-6 border-b border-white/10 last:border-b-0 md:border-b-0 text-center md:text-left w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white font-sora">Join our mailing list</h4>
              <form className="flex flex-col gap-3 w-full">
                <label htmlFor="footer-email" className="sr-only">Your email address</label>
                <div className="flex items-center border-b border-white/30 py-2">
                  <input id="footer-email" type="email" placeholder="Your email address" className="w-full bg-transparent border-none outline-none text-white text-sm sm:text-base placeholder:text-white/60 px-2 py-1 font-sora" />
                  <button type="submit" className="ml-0 sm:ml-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#B145FF] to-[#30A0FF] flex items-center justify-center cursor-pointer transition-all hover:scale-105">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center text-white/50 text-xs sm:text-sm mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 font-sora">
            © 2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogHome; 