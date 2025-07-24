import React from "react";
import { useRouter } from "next/router";
import blogData from "../../data/blogData";
import Topbar from "../Topbar";
import Link from "next/link";

const SingleBlog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Topbar />
        <div className="text-center w-full">Blog not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Topbar />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-[#5B5B7B] border-opacity-40 bg-transparent mb-8 overflow-hidden mx-auto flex items-center justify-center shadow-[0_0_32px_4px_rgba(255,255,255,0.15)]" style={{width: 'min(700px, 90vw)', height: '400px', boxShadow: '0 0 32px 4px rgba(255,255,255,0.15), 0 0 0 2px #5B5B7B'}}>
          <img
            src={blog.coverImage.formats.small.url}
            alt={blog.title}
            className="max-w-full max-h-full object-contain rounded-2xl mx-auto"
            style={{margin: 'auto'}}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-sora font-normal mt-8 mb-4 text-center">
          {blog.title}
        </h1>
        <MetaRow blog={blog} />
        <div className="mb-8 max-w-[98vw] md:max-w-6xl mx-auto font-sora">
          <div className="bg-[#232323] rounded-2xl p-6 md:p-6 font-sora">
            <div className="font-sora text-2xl font-normal mb-6 text-white">TABLE OF CONTENT</div>
            <div className="bg-[#181818] rounded-xl border border-[#333] overflow-hidden font-sora">
              <ul className="divide-y divide-[#333] font-sora">
                <li className="px-4 py-3 text-white font-sora text-lg text-left uppercase">WHAT’S BROKEN IN TODAY’S AI</li>
                <li className="px-4 py-3 text-white font-sora text-lg text-left uppercase">FRACTION AI IS CHANGING THE GAME</li>
                <li className="px-4 py-3 text-white font-sora text-lg text-left uppercase">WHY GTM IS THE RIGHT FIT</li>
                <li className="px-4 py-3 text-white font-sora text-lg text-left uppercase">INSIDE THE PARTNERSHIP</li>
                <li className="px-4 py-3 text-white font-sora text-lg text-left uppercase">WHAT’S NEXT</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="prose prose-invert max-w-none mb-8 font-sora">
          {blog.content.map((block, idx) => (
            <p key={idx}>{block.children[0].text}</p>
          ))}
        </div>
        <h2 className="text-4xl md:text-5xl font-sora font-normal mt-20 mb-8 text-white text-center">What’s Broken In Today’s AI</h2>
        <p className="text-gray-300 mb-16 max-w-5xl mx-auto text-lg font-sora text-center">The future of AI doesn’t power limited rules, restricted networks, or untrusted agents. It becomes open, composable, and trustless. But today’s AI is limited by closed data, centralized control, and opaque models. It’s time to break these barriers and unlock the next wave of innovation.</p>
        <h2 className="text-4xl md:text-5xl font-sora font-normal mt-20 mb-8 text-white text-center">What’s Next?</h2>
        <p className="text-gray-300 mb-16 max-w-5xl mx-auto text-lg font-sora text-center">The next wave of AI goes beyond rules, new network protocols, or composable agents. It’s about open data, trustless computation, and decentralized intelligence. GTM Labs is at the forefront, helping teams build, launch, and scale the next generation of AI-powered products and services.</p>
      </div>
      <section className="py-12 sm:py-16 mt-8 flex items-center justify-center bg-transparent relative overflow-hidden px-4">
        {/* Subtle radial light spot background */}
        <div className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] z-0" style={{background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 100%)'}} />
        <div className="max-w-[98vw] md:max-w-4xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-normal mb-6 text-white">Join Our Newsletter</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-1xl mx-auto font-sora">Get the latest from GTM Labs delivered straight to your inbox. Subscribe now and never miss an update on Web3, blockchain, and tech innovation.</p>
          <form className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row bg-transparent border border-white/30 rounded-full overflow-hidden w-full">
              <input 
                type="email" 
                placeholder="Enter your Email ID" 
                className="w-full sm:flex-1 px-6 py-4 bg-transparent text-white text-lg focus:outline-none placeholder:text-white/60 font-sora mb-3 sm:mb-0" 
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-white text-lg rounded-full font-semibold focus:outline-none transition-all hover:scale-105 cursor-pointer font-sora"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="w-full flex justify-center items-center mt-16 mb-8">
        <span className="inline-flex items-center text-xl font-sora font-normal bg-gradient-to-r from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent cursor-pointer">
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.filter((b) => b.id !== blog.id).slice(0, 3).map((related) => (
            <Link key={related.id} href={`/blog/${related.slug}`} className="group">
              <div className="min-h-[340px] p-4 w-full max-w-[95vw] mx-auto">
                <div className="rounded-xl border border-[#5B5B7B] border-opacity-40 bg-transparent mb-4 overflow-hidden">
                  <img
                    src={related.coverImage.formats.small.url}
                    alt={related.title}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </div>
                <h4 className="text-lg font-sora font-normal mb-2 group-hover:text-blue-400 transition-colors">
                  {related.title}
                </h4>
                <p className="text-gray-300 text-base font-sora mb-2 line-clamp-2">
                  {related.content[0]?.children[0]?.text}
                </p>
                <div className="flex items-center justify-between text-sm text-white font-sora mt-6">
                  <span>GTM Networks</span>
                  <span className="flex items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="book-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#30A0FF"/>
                          <stop offset="1" stopColor="#B145FF"/>
                        </linearGradient>
                      </defs>
                      <path d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" stroke="url(#book-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" stroke="url(#book-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 7v12" stroke="url(#book-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 7v12" stroke="url(#book-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    3 min read
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
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

// Meta row component with share popover
function MetaRow({ blog }) {
  const [showShare, setShowShare] = React.useState(false);
  const shareRef = React.useRef(null);
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShareClick = () => setShowShare((v) => !v);
  const handleCopy = () => {
    navigator.clipboard.writeText(blogUrl);
    setShowShare(false);
    alert('Link copied!');
  };
  const handleTwitter = () => {
    const text = encodeURIComponent(blog.title + ' ' + blogUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    setShowShare(false);
  };

  // Close popover on click outside
  React.useEffect(() => {
    function handleClick(e) {
      if (showShare && shareRef.current && !shareRef.current.contains(e.target)) {
        setShowShare(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showShare]);

  return (
    <div className="flex items-center justify-center gap-8 text-base text-white font-sora mb-8">
      <span className="font-sora">GTM Labs</span>
      <span className="flex items-center gap-2 font-sora">
        {/* Calendar Icon */}
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        {new Date(blog.published).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
      </span>
      <span className="relative" ref={shareRef}>
        <button onClick={handleShareClick} className="flex items-center gap-2 font-sora focus:outline-none cursor-pointer">
          {/* Paper plane icon with gradient stroke */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#plane-gradient)" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="plane-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#30A0FF"/>
                <stop offset="1" stopColor="#B145FF"/>
              </linearGradient>
            </defs>
            <path d="M3 20l18-8-18-8v7l13 1-13 1v7z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Share
        </button>
        {showShare && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#181824] border border-[#2d2d4d] rounded-lg shadow-lg p-2 z-50 min-w-[140px] flex flex-col gap-2">
            <button onClick={handleTwitter} className="flex items-center gap-2 px-3 py-1 hover:bg-[#23234b] rounded text-white font-sora text-sm">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#1DA1F2" d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.488 0-4.505 2.02-4.505 4.51 0 .353.04.697.116 1.025-3.746-.188-7.066-1.983-9.29-4.71a4.51 4.51 0 00-.61 2.27c0 1.566.797 2.948 2.01 3.76a4.48 4.48 0 01-2.04-.564v.057c0 2.188 1.556 4.014 3.624 4.43-.38.104-.78.16-1.194.16-.292 0-.573-.028-.85-.08.574 1.792 2.24 3.096 4.215 3.13A8.98 8.98 0 012 19.54a12.67 12.67 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.54.697z"/></svg>
              Twitter
            </button>
            <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank')} className="flex items-center gap-2 px-3 py-1 hover:bg-[#23234b] rounded text-white font-sora text-sm">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#0077B5" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </button>
            <button onClick={() => window.open(`https://www.instagram.com/?url=${encodeURIComponent(blogUrl)}`, '_blank')} className="flex items-center gap-2 px-3 py-1 hover:bg-[#23234b] rounded text-white font-sora text-sm">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><radialGradient id="ig-gradient" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f9ce34"/><stop offset="50%" stopColor="#ee2a7b"/><stop offset="100%" stopColor="#6228d7"/></radialGradient><rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-gradient)" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="5" stroke="url(#ig-gradient)" strokeWidth="2" fill="none"/><circle cx="17" cy="7" r="1.5" fill="url(#ig-gradient)"/></svg>
              Instagram
            </button>
            <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1 hover:bg-[#23234b] rounded text-white font-sora text-sm">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" stroke="#30A0FF" strokeWidth="2"/><rect x="2" y="2" width="13" height="13" rx="2" stroke="#B145FF" strokeWidth="2"/></svg>
              Copy Link
            </button>
          </div>
        )}
      </span>
    </div>
  );
}

export default SingleBlog; 