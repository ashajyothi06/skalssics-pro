import React, { useState, useRef } from "react";
import tutor from "../../assets/Tutors.png"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaRegSquare, FaRegUser, FaArrowsAltH } from "react-icons/fa";
import { 
  LucideSearch, 
  LucideUsers, 
  LucideBarChart2, 
  LucideBell, 
  LucideShield, 
  LucideDownload, 
  LucideClock, 
  LucideMessageCircle, 
  LucideLayoutDashboard, 
  LucideLink 
} from 'lucide-react';
import Footer from "../../animated-portfolio/Footer";

// Project Images Carousel
// const projectImages = [
//   {
//     src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
//     title: "Say Goodbye to 'I Hate Math'!",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
//     title: "Your Personal Homework Bodyguard",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80",
//     title: "Like a Snack, But for Your Brain!",
//     // description: "Hands-on learning across STEM and humanities disciplines"
//   }
// ];

const projectImages = [
 
  {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
        title: "Your Personal Homework Bodyguard",
      },

  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    title: "Say Goodbye to 'I Hate Math'!",
    description: "Complex concepts broken down into easy steps"
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80",
    title: "Like a Snack, But for Your Brain!",
    description: "Transform your essays from good to great"
  }
];
// Updated radial menu items
// const menuItems = [
//     { label: "HOME", angle: 0, href: "#home" },
//     { label: "PROGRAMS", angle: 72, href: "#programs" },
//     { label: "TEACHERS", angle: 144, href: "#teachers" },
//     { label: "ABOUT", angle: 216, href: "#about" },
//     { label: "CONTACT", angle: 288, href: "#contact" },
//   ];
  
  const RadialMenu = () => {
    const radius = 100; // Reduced radius for mobile
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
  
    const handleClick = (href, e) => {
      e.preventDefault();
      setIsOpen(false);
  
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -40;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 400);
    };
  
    const menuItems = [
      { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
      { label: "Work", angle: 90, href: "#work", icon: "💼" },
      { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
      { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
    ];
  
    return (
      <div className="fixed top-4 right-4 z-[100] text-white">
        <motion.div
          className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full border border-primary-800 flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
          </motion.button>
        </motion.div>
  
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsOpen(false)}
              />
  
              <motion.div
                className="fixed top-8 right-8 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
                
                {menuItems.map((item) => {
                  const angleRad = (item.angle * Math.PI) / 180;
                  const x = radius * Math.cos(angleRad);
                  const y = radius * Math.sin(angleRad);
  
                  return (
                    <div
                      key={item.label}
                      className="absolute z-[60]"
                      style={{
                        left: `calc(50% + ${x}px - 30px)`,
                        top: `calc(50% - ${y}px - 30px)`,
                      }}
                    >
                      <motion.div 
                        className="relative w-[60px] h-[60px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
                        onHoverStart={() => setHoveredItem(item.label)}
                        onHoverEnd={() => setHoveredItem(null)}
                      >
                        <motion.a
                          href={item.href}
                          className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
                          whileHover={{ 
                            scale: 1.1, 
                            boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                          }}
                          whileTap={{ scale: 0.98 }}
                          animate={{ 
                            boxShadow: hoveredItem === item.label 
                              ? "0 0 20px rgba(168, 85, 247, 0.8)"
                              : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          onClick={(e) => handleClick(item.href, e)}
                          tabIndex={isOpen ? 0 : -1}
                          aria-label={item.label}
                        >
                          <span className="text-lg mb-1">{item.icon}</span>
                          <span className="animate-text-shimmer text-xs">{item.label}</span>
                        </motion.a>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };
  

function FullScreenCarousel() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#1a1333] overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>
      
      {/* Radial Menu */}
      <RadialMenu />

      <img
        src={projectImages[current].src}
        alt={projectImages[current].title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-0"
        style={{ filter: "brightness(0.7)" }}
      />
      <div className="relative z-10 flex pt-60 flex-col items-center justify-center w-full h-full">
        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-6  px-8 py-4 rounded-2xl">
          {projectImages[current].title}
        </h3>
        <div className="flex justify-center gap-3 mt-8">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full border-2 border-purple-400 ${
                idx === current ? "bg-purple-400" : "bg-purple-900"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1333] via-transparent to-[#1a1333]/60 pointer-events-none" />
    </section>
  );
}

const AuthHero = () => {
  const handleBookSession = () => {
    window.location.href = "https://sklassicstutor.com/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-10 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="z-10">
          <p className="text-sm text-purple-300 font-medium">
            The <span className="text-purple-500">education</span> first platform
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Premium Tutoring Services<br />
            <span className="text-purple-200">Personalized Learning</span>
          </h1>
          <p className="text-gray-400 mt-4">
  • Premium tutoring services offering high-quality, personalized sessions with expert educators.<br />
  • Customized learning plans tailored to each student’s goals, pace, and skill level.
  {/* • Real-time progress tracking and insights to keep students and parents aligned. */}
</p>


          {/* Buttons */}
          {/* <div className="mt-8 space-y-3">
  <button
    onClick={handleBookSession}
    className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
  >
    <FaRegSquare />
    <span className="font-medium">Book a Session</span>
  </button>
  <button 
    onClick={() => window.open("https://sklassicstutor.com/", "_blank")}
    className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
  >
    <span>About Our Tutors</span>
  </button>
  <button 
    onClick={() => window.open("https://sklassicstutor.com/", "_blank")}
    className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
  >
    <span>Contact Us</span>
  </button>
</div> */}
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <img
            src={tutor}
            alt="Tutor"
            className="relative w-104 h-104 object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

// Faster Component
const Faster = () => {
  return (
    <section className="bg-[#0a1026] py-16 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Smarter. Personalized Learning.
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Our platform matches students with the perfect tutor based on learning style, subject needs, and schedule.Progress Reports & Insights for parents and students to track academic growth in real-time.
        </p>

        <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
             style={{ minHeight: 400 }}>
          <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              <span className="font-bold">Optimized for learning</span>
            </h3>
            <p className="text-zinc-400 mb-8 text-base sm:text-lg">
              Our system evaluates each student's needs to provide the most effective tutoring experience.
            </p>
            <a
              href="https://sklassicstutor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
            >
              Visit SKlassic Tutors Website <span className="text-purple-400">&rarr;</span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
              alt="Tutoring Visualization"
              className="w-full max-w-[420px] h-auto object-contain mx-auto"
              style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Trust Us Component
const WhyTrustUs = () => {
  const features = [
    {
      category: 'Teaching Methods',
      items: [
        { icon: <LucideMessageCircle size={20} />, title: 'Interactive Sessions' },
        { icon: <LucideLayoutDashboard size={20} />, title: 'Progress Tracking' },
        { icon: <LucideSearch size={20} />, title: 'Customized Learning' },
      ],
    },
    {
      category: 'Student Experience',
      items: [
        { icon: <LucideBarChart2 size={20} />, title: 'Performance Analytics' },
        { icon: <LucideBell size={20} />, title: 'Session Reminders' },
        { icon: <LucideLink size={20} />, title: 'Resource Sharing' },
      ],
    },
    {
      category: 'Quality Standards',
      items: [
        { icon: <LucideShield size={20} />, title: 'Certified Tutors' },
        { icon: <LucideDownload size={20} />, title: 'Learning Materials' },
        { icon: <LucideClock size={20} />, title: 'Flexible Scheduling' },
      ],
    },
  ];

  return (
    <section className="bg-[#0E1321] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why choose SKlassic Tutors?
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          We're redefining education with expert tutors, personalized approaches, and cutting-edge teaching methods.
        </p>

        {features.map((group, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-sm text-purple-400 font-semibold mb-6">{group.category}</h3>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start space-x-4">
                  <div className="text-purple-300 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">
                      Our platform ensures the highest standards for your learning experience.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Feature Carousel Component
const FeatureCarousel = () => {
    const scrollRef = useRef(null);
    const cards = [
      {
        title: "Expert Tutors",
        desc: "Learn from certified educators with proven track records in their subjects.",
        icon: "👩‍🏫", // Teacher emoji
      },
      {
        title: "Personalized Plans",
        desc: "Customized learning approaches tailored to each student's needs.",
        icon: "📝", // Memo emoji
      },
      {
        title: "Flexible Scheduling",
        desc: "Book sessions at times that work for your busy schedule.",
        icon: "⏱️", // Timer emoji
      },
      {
        title: "Comprehensive Subjects",
        desc: "From math to languages, we cover all major academic areas.",
        icon: "📚", // Books emoji
      },
      {
        title: "Progress Tracking",
        desc: "Regular assessments to monitor and celebrate your improvement.",
        icon: "📈", // Chart emoji
      },
    ];
  
    const scroll = (direction) => {
      const scrollAmount = 350;
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <div className="bg-[#0a0c1b] text-white py-16 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm text-purple-400 font-medium">SKlassic Tutors Features</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">Your learning journey starts here</h2>
          <p className="text-gray-400">
            Experience the future of education with our innovative platform designed for academic success.
          </p>
        </div>
  
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-2"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
              >
                <div className="text-2xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 mb-4">{card.desc}</p>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={() => scroll("left")}
              className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
  };

const TutorsDisplay = () => {
  return (
    <div className="bg-[#0a0a23] text-white">
      {/* Carousel Section with Radial Menu */}
      <FullScreenCarousel />
      
      {/* Auth Hero Section */}
      <AuthHero />
      
      {/* Faster Section */}
      <Faster />
      
      {/* Why Trust Us Section */}
      <WhyTrustUs />
      
      {/* Feature Carousel */}
      <FeatureCarousel />
      
      <Footer />
    </div>
  );
};

export default TutorsDisplay;