import React, { useState, useRef } from "react";
import techHero from "../../assets/tech-services.png"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaRegSquare } from "react-icons/fa";
import { 
  LucideCode,
  LucideSmartphone,
  LucideCloud,
  LucideCpu,
  LucideShield,
  LucideDatabase,
  LucideServer,
  LucideGlobe,
  LucideLayoutDashboard,
  LucideRocket
} from 'lucide-react';
import Footer from "../../animated-portfolio/Footer";

// Project Images Carousel
// const projectImages = [
//   {
//     src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
//     title: "Web Development",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
//     title: "Mobile Solutions",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
//     title: "AI Integration",
//   }
// ];
const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    title: "We Speak Fluent React, Python & TensorFlow!",
    alt: "Close-up of circuit board with glowing lights",
    // style: { width: '100%', height: '100vh', objectFit: 'cover' }
  },

  {
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    title: "Where Code Meets Business Magic!",
    alt: "Laptop with code on screen in office",
    // style: { width: '100%', height: '100vh', objectFit: 'cover' }
  },
  {
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    title: "Websites That Sell While You Sleep",
    alt: "Multiple smartphones displaying apps",
    style: { width: '100%', height: '100vh', objectFit: 'cover' }
  },


];


// const projectImages = [
//   {
//     src: "https://unsplash.com/photos/person-using-black-and-silver-laptop-computer-K5dAn1gOFEc",
//     title: "We Speak Fluent React, Python & TensorFlow!",
//   },
//   {
//     src: "https://unsplash.com/photos/a-computer-chip-with-the-word-gat-printed-on-it-Fc1GBkmV-Dw",
//     title: "Websites That Sell While You Sleep",
//   },
//   {
//     src: "https://unsplash.com/photos/an-abstract-image-of-a-sphere-with-dots-and-lines-nGoCBxiaRO0",
//     title: "Where Code Meets Business Magic!",
//     description: "Practice with an AI interviewer that adapts to your responses"
//   },
// ];

// Updated radial menu items
// const menuItems = [
//     { label: "HOME", angle: 0, href: "#home" },
//     { label: "SERVICES", angle: 72, href: "#services" },
//     { label: "TECHNOLOGIES", angle: 144, href: "#technologies" },
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
    <section className="relative w-full h-screen flex items-center justify-center bg-[#1a1333] overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>
      
      <RadialMenu />

      <img
        src={projectImages[current].src}
        alt={projectImages[current].title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-0"
        style={{ filter: "brightness(0.7)" }}
      />
      <div className="relative z-10 flex pt-60 flex-col items-center justify-center w-full h-full">
        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-6  px-8 py-4 rounded-2xl text-center">
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
  const handleExploreServices = () => {
    window.location.href = "https://sklassicstech.com/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 sm:px-10 md:px-20" id="services">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="z-10">
          <p className="text-sm text-purple-300 font-medium">
            The <span className="text-purple-500">future</span> of technology
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4">
            Professional IT Solutions<br />
            <span className="text-purple-200">For Modern Businesses</span>
          </h1>
        
   <p className="text-gray-400 mt-4">
  • Custom web, mobile, AI, and cloud solutions tailored to your business needs.<br />
  {/* • Launch your tech career with confidence, backed by expert mentorship and real-world projects.<br /> */}
  • From concept to deployment - we engineer scalable solutions that drive real ROI
</p>

          {/* <div className="mt-8 space-y-3">
            <button
              onClick={handleExploreServices}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300 text-sm sm:text-base"
            >
              <FaRegSquare />
              <span className="font-medium">Our Services</span>
            </button>
            <button 
              onClick={() => window.open("https://sklassicstech.com/", "_blank")}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300 text-sm sm:text-base"
            >
              <span>Technologies</span>
            </button>
            <button 
              onClick={() => window.open("https://sklassicstech.com/", "_blank")}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300 text-sm sm:text-base"
            >
              <span>Contact Us</span>
            </button>
          </div> */}
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <img
            src={techHero}
            alt="Tech Services Platform"
            className="relative w-full max-w-[500px] h-auto object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

const Faster = () => {
  return (
    <section className="bg-[#0a1026] py-16 px-2 sm:px-6" id="technologies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Innovative. Scalable. Technology.
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
        Our platform delivers cutting-edge solutions with the latest technologies and frameworks. We ensure high performance, flexibility, and future-ready architecture for evolving business needs.
        </p>

        <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
             style={{ minHeight: 400 }}>
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              <span className="font-bold">Optimized for digital transformation</span>
            </h3>
            <p className="text-zinc-400 mb-8 text-base sm:text-lg">
              Our system provides the most effective technology solutions for your business growth.
            </p>
            <a
              href="https://sklassicstech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
            >
              Visit SKlassic Tech <span className="text-purple-400">&rarr;</span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
              alt="Tech Visualization"
              className="w-full max-w-[420px] h-auto object-contain mx-auto"
              style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyTrustUs = () => {
  const features = [
    {
      category: 'Development Services',
      items: [
        { icon: <LucideCode size={20} />, title: 'Custom Web Development' },
        { icon: <LucideSmartphone size={20} />, title: 'Mobile App Solutions' },
        { icon: <LucideCpu size={20} />, title: 'AI Integration' },
      ],
    },
    {
      category: 'Cloud Solutions',
      items: [
        { icon: <LucideCloud size={20} />, title: 'Cloud Architecture' },
        { icon: <LucideDatabase size={20} />, title: 'Database Management' },
        { icon: <LucideServer size={20} />, title: 'DevOps Services' },
      ],
    },
    {
      category: 'Security & Scalability',
      items: [
        { icon: <LucideShield size={20} />, title: 'Cybersecurity' },
        { icon: <LucideGlobe size={20} />, title: 'Global Deployment' },
        { icon: <LucideRocket size={20} />, title: 'Performance Optimization' },
      ],
    },
  ];

  return (
    <section className="bg-[#0E1321] text-white py-16 px-4 sm:px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why choose SKlassic Tech?
          </span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-12 max-w-3xl">
          We're redefining technology services with comprehensive solutions, cutting-edge development, and enterprise-grade infrastructure.
        </p>

        {features.map((group, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-sm text-purple-400 font-semibold mb-6">{group.category}</h3>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start space-x-4">
                  <div className="text-purple-300 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">
                      Our platform ensures the highest standards for your technology needs.
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

const FeatureCarousel = () => {
    const scrollRef = useRef(null);
    const cards = [
      {
        title: "Web Development",
        desc: "Custom websites and web applications with modern frameworks.",
        icon: "💻",
      },
      {
        title: "Mobile Solutions",
        desc: "iOS and Android apps built with native and cross-platform technologies.",
        icon: "📱",
      },
      {
        title: "AI Integration",
        desc: "Machine learning and AI solutions to automate and enhance your business.",
        icon: "🧠",
      },
      {
        title: "Cloud Services",
        desc: "Scalable cloud infrastructure and deployment solutions.",
        icon: "☁️",
      },
      {
        title: "DevOps",
        desc: "CI/CD pipelines and infrastructure automation for seamless deployments.",
        icon: "🔄",
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
      <div className="bg-[#0a0c1b] text-white py-16 px-4" id="contact">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm text-purple-400 font-medium">SKlassic Tech Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Your technology partner</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Experience the future of technology with our comprehensive IT solutions.
          </p>
        </div>
  
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 sm:space-x-6 px-2"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
              >
                <div className="text-2xl mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">{card.desc}</p>
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

const TechDisplay = () => {
  return (
    <div className="bg-[#0a0a23] text-white">
      <FullScreenCarousel />
      <AuthHero />
      <Faster />
      <WhyTrustUs />
      <FeatureCarousel />
      <Footer />
    </div>
  );
};

export default TechDisplay;