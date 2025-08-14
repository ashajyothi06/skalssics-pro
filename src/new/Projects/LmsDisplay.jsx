import React, { useState, useRef } from "react";
import lmsHero from "../../assets/lms.png"; 
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


const projectImages = [
 
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    title: "Your 24/7 Tutor (Who Never Judges)",
    alt: "Macbook with VS Code and terminal windows",
    style: { width: '100%', height: '100vh', objectFit: 'cover' }
  }, 
 
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    title: "Turn ‘I Think I Know’ Into ‘I’m Certified!’",
    alt: "CI/CD workflow visualization on dark screen",
    style: { width: '100%', height: '100vh', objectFit: 'cover' }
  },
  {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
        title: "Skip the Lecture, Keep the Knowledge",
        alt: "Group of developers working together on laptops",
        style: { width: '100%', height: '100vh', objectFit: 'cover' }
      },
  
];

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
  const handleExploreCourses = () => {
    window.location.href = "https://sklassics-lms.com/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-10 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="z-10">
          <p className="text-sm text-purple-300 font-medium">
            The <span className="text-purple-500">future</span> of learning
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Advanced Learning Management<br />
            <span className="text-purple-200">For Modern Education</span>
          </h1>
          <p className="text-gray-400 mt-4">
  • Comprehensive courses with interactive content, progress tracking, and certification.<br />
  {/* • Seamless user experience across devices with intuitive dashboards for learners and instructors.<br /> */}
  • Real-time analytics and reporting tools to monitor learner performance and engagement.
</p>


          {/* <div className="mt-8 space-y-3">
            <button
              onClick={handleExploreCourses}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <FaRegSquare />
              <span className="font-medium">Explore Courses</span>
            </button>
            <button 
              onClick={() => window.open("https://sklassics-lms.com/", "_blank")}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <span>Platform Features</span>
            </button>
            <button 
              onClick={() => window.open("https://sklassics-lms.com/", "_blank")}
              className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <span>Contact Support</span>
            </button>
          </div> */}
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpsd%2Flearning-management-system&psig=AOvVaw1GJxYyezkw8_EtRO-RT-m5&ust=1755257285633000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKip7Y-Zio8DFQAAAAAdAAAAABAL"
            // src={lmsHero}
            // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.employeeconnect.com%2Fsite-dis202408%2Fbenefits-of-an-learning-management-system%2F&psig=AOvVaw1GJxYyezkw8_EtRO-RT-m5&ust=1755257285633000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKip7Y-Zio8DFQAAAAAdAAAAABAE"
            alt="LMS Platform"
            className="relative w-104 h-104 object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

const Faster = () => {
  return (
    <section className="bg-[#0a1026] py-16 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Smarter. Interactive Learning.
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-base sm:text-lg">
  Our platform delivers engaging content with progress tracking and certification. It empowers learners with personalized learning paths and real-time performance insights.
</p>


        <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
             style={{ minHeight: 400 }}>
          <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              <span className="font-bold">Optimized for online learning</span>
            </h3>
            <p className="text-zinc-400 mb-8 text-base sm:text-lg">
              Our system provides the most effective learning experience with interactive content.
            </p>
            <a
              href="https://sklassics-lms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
            >
              Visit SKlassic LMS <span className="text-purple-400">&rarr;</span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
              alt="LMS Visualization"
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
      category: 'Learning Features',
      items: [
        { icon: <LucideMessageCircle size={20} />, title: 'Interactive Content' },
        { icon: <LucideLayoutDashboard size={20} />, title: 'Progress Dashboard' },
        { icon: <LucideSearch size={20} />, title: 'Searchable Resources' },
      ],
    },
    {
      category: 'User Experience',
      items: [
        { icon: <LucideBarChart2 size={20} />, title: 'Performance Analytics' },
        { icon: <LucideBell size={20} />, title: 'Course Notifications' },
        { icon: <LucideLink size={20} />, title: 'Resource Sharing' },
      ],
    },
    {
      category: 'Quality Standards',
      items: [
        { icon: <LucideShield size={20} />, title: 'Certified Courses' },
        { icon: <LucideDownload size={20} />, title: 'Downloadable Materials' },
        { icon: <LucideClock size={20} />, title: 'Self-Paced Learning' },
      ],
    },
  ];

  return (
    <section className="bg-[#0E1321] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why choose SKlassic LMS?
          </span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          We're redefining online education with comprehensive courses, interactive content, and cutting-edge learning tools.
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

const FeatureCarousel = () => {
    const scrollRef = useRef(null);
    const cards = [
      {
        title: "Comprehensive Courses",
        desc: "Wide range of subjects with professionally developed content.",
        icon: "📚",
      },
      {
        title: "Interactive Learning",
        desc: "Engaging multimedia content with quizzes and exercises.",
        icon: "🖥️",
      },
      {
        title: "Progress Tracking",
        desc: "Monitor your learning journey with detailed analytics.",
        icon: "📊",
      },
      {
        title: "Certification",
        desc: "Earn recognized certificates upon course completion.",
        icon: "🏆",
      },
      {
        title: "Mobile Friendly",
        desc: "Learn anytime, anywhere with our responsive platform.",
        icon: "📱",
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
          <p className="text-sm text-purple-400 font-medium">SKlassic LMS Features</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">Your learning platform</h2>
          <p className="text-gray-400">
            Experience the future of education with our comprehensive learning management system.
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

const LMSDisplay = () => {
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

export default LMSDisplay;


// import React, { useState, useRef, useEffect } from "react";
// import lmsHero from "../../assets/lms.png"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaRegSquare } from "react-icons/fa";
// import { 
//   LucideMessageCircle, 
//   LucideBarChart2, 
//   LucideBell, 
//   LucideShield, 
//   LucideDownload, 
//   LucideClock, 
//   LucideLayoutDashboard, 
//   LucideLink,
//   LucideSearch
// } from 'lucide-react';
// import Footer from "../../animated-portfolio/Footer";

// const projectImages = [
//   {
//     src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "Your 24/7 Tutor (Who Never Judges)",
//     alt: "Macbook with VS Code and terminal windows"
//   }, 
//   {
//     src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "Turn 'I Think I Know' Into 'I'm Certified!'",
//     alt: "CI/CD workflow visualization on dark screen"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "Skip the Lecture, Keep the Knowledge",
//     alt: "Group of developers working together on laptops"
//   }
// ];

// const RadialMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleClick = (href, e) => {
//     e.preventDefault();
//     setIsOpen(false);

//     setTimeout(() => {
//       const id = href.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         const yOffset = -40;
//         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }, 400);
//   };

//   const menuItems = [
//     { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
//     { label: "Work", angle: 90, href: "#work", icon: "💼" },
//     { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
//     { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
//   ];

//   // Dynamic radius based on screen size
//   const radius = windowSize.width < 768 ? 70 : 100;
//   const menuSize = windowSize.width < 768 ? 40 : 50;
//   const menuContainerSize = windowSize.width < 768 ? 180 : 220;

//   return (
//     <div className="fixed top-4 right-4 z-[100] text-white">
//       <motion.div
//         className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`w-[${menuSize}px] h-[${menuSize}px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow`}
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//           }}
//           whileTap={{ scale: 0.98 }}
//           animate={{ 
//             boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//           style={{ width: menuSize, height: menuSize }}
//         >
//           <span className="animate-text-shimmer text-[10px] md:text-xs">{isOpen ? "CLOSE" : "MENU"}</span>
//         </motion.button>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               onClick={() => setIsOpen(false)}
//             />

//             <motion.div
//               className="fixed top-8 right-8 rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{ width: menuContainerSize, height: menuContainerSize }}
//             >
//               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
              
//               {menuItems.map((item) => {
//                 const angleRad = (item.angle * Math.PI) / 180;
//                 const x = radius * Math.cos(angleRad);
//                 const y = radius * Math.sin(angleRad);

//                 return (
//                   <div
//                     key={item.label}
//                     className="absolute z-[60]"
//                     style={{
//                       left: `calc(50% + ${x}px - ${menuSize/2}px)`,
//                       top: `calc(50% - ${y}px - ${menuSize/2}px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className={`relative rounded-full border border-[#6b21a8]/60 flex items-center justify-center`}
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                       style={{ width: menuSize + 10, height: menuSize + 10 }}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className={`rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow`}
//                         whileHover={{ 
//                           scale: 1.1, 
//                           boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                         animate={{ 
//                           boxShadow: hoveredItem === item.label 
//                             ? "0 0 20px rgba(168, 85, 247, 0.8)"
//                             : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         onClick={(e) => handleClick(item.href, e)}
//                         tabIndex={isOpen ? 0 : -1}
//                         aria-label={item.label}
//                         style={{ width: menuSize, height: menuSize }}
//                       >
//                         <span className="text-lg mb-1">{item.icon}</span>
//                         <span className="animate-text-shimmer text-[10px] md:text-xs">{item.label}</span>
//                       </motion.a>
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// function FullScreenCarousel() {
//   const [current, setCurrent] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center bg-[#1a1333] overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
//       </div>
      
//       <RadialMenu />

//       <img
//         src={projectImages[current].src}
//         alt={projectImages[current].alt}
//         className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-0"
//         style={{ filter: "brightness(0.7)" }}
//       />
//       <div className="relative z-10 flex pt-60 flex-col items-center justify-center w-full h-full px-4">
//         <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow mb-6 px-4 py-2 md:px-8 md:py-4 rounded-2xl text-center">
//           {projectImages[current].title}
//         </h3>
//         <div className="flex justify-center gap-3 mt-8">
//           {projectImages.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrent(idx)}
//               className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-purple-400 ${
//                 idx === current ? "bg-purple-400" : "bg-purple-900"
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1a1333] via-transparent to-[#1a1333]/60 pointer-events-none" />
//     </section>
//   );
// }

// const AuthHero = () => {
//   const handleExploreCourses = () => {
//     window.location.href = "https://sklassics-lms.com/";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 md:px-20 py-20">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         <div className="z-10 order-2 md:order-1">
//           <p className="text-sm text-purple-300 font-medium">
//             The <span className="text-purple-500">future</span> of learning
//           </p>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
//             Advanced Learning Management<br />
//             <span className="text-purple-200">For Modern Education</span>
//           </h1>
//           <p className="text-gray-400 mt-4 text-sm md:text-base">
//             • Comprehensive courses with interactive content, progress tracking, and certification.<br />
//             • Real-time analytics and reporting tools to monitor learner performance and engagement.
//           </p>

//           <div className="mt-8">
//             <button
//               onClick={handleExploreCourses}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-full md:w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300 text-sm md:text-base"
//             >
//               <FaRegSquare />
//               <span className="font-medium">Explore Courses</span>
//             </button>
//           </div>
//         </div>

//         <div className="relative flex justify-center items-center order-1 md:order-2">
//           <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
//           <img
//             src={lmsHero}
//             alt="LMS Platform"
//             className="relative w-full max-w-md h-auto object-contain z-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Faster = () => {
//   return (
//     <section className="bg-[#0a1026] py-16 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-4">
//           Smarter. Interactive Learning.
//         </h2>
//         <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base">
//           Our platform delivers engaging content with progress tracking and certification. It empowers learners with personalized learning paths and real-time performance insights.
//         </p>

//         <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
//              style={{ minHeight: 'auto' }}>
//           <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12">
//             <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
//               <span className="font-bold">Optimized for online learning</span>
//             </h3>
//             <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
//               Our system provides the most effective learning experience with interactive content.
//             </p>
//             <a
//               href="https://sklassics-lms.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
//             >
//               Visit SKlassic LMS <span className="text-purple-400">&rarr;</span>
//             </a>
//           </div>
//           <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent p-4">
//             <img
//               src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
//               alt="LMS Visualization"
//               className="w-full max-w-[420px] h-auto object-contain mx-auto"
//               style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const WhyTrustUs = () => {
//   const features = [
//     {
//       category: 'Learning Features',
//       items: [
//         { icon: <LucideMessageCircle size={18} />, title: 'Interactive Content' },
//         { icon: <LucideLayoutDashboard size={18} />, title: 'Progress Dashboard' },
//         { icon: <LucideSearch size={18} />, title: 'Searchable Resources' },
//       ],
//     },
//     {
//       category: 'User Experience',
//       items: [
//         { icon: <LucideBarChart2 size={18} />, title: 'Performance Analytics' },
//         { icon: <LucideBell size={18} />, title: 'Course Notifications' },
//         { icon: <LucideLink size={18} />, title: 'Resource Sharing' },
//       ],
//     },
//     {
//       category: 'Quality Standards',
//       items: [
//         { icon: <LucideShield size={18} />, title: 'Certified Courses' },
//         { icon: <LucideDownload size={18} />, title: 'Downloadable Materials' },
//         { icon: <LucideClock size={18} />, title: 'Self-Paced Learning' },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0E1321] text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
//           <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
//             Why choose SKlassic LMS?
//           </span>
//         </h2>
//         <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
//           We're redefining online education with comprehensive courses, interactive content, and cutting-edge learning tools.
//         </p>

//         {features.map((group, i) => (
//           <div key={i} className="mb-8 md:mb-10">
//             <h3 className="text-xs md:text-sm text-purple-400 font-semibold mb-4 md:mb-6">{group.category}</h3>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {group.items.map((item, j) => (
//                 <div key={j} className="flex items-start space-x-3 md:space-x-4">
//                   <div className="text-purple-300 mt-0.5">{item.icon}</div>
//                   <div>
//                     <h4 className="text-white font-semibold text-base md:text-lg mb-1">{item.title}</h4>
//                     <p className="text-gray-400 text-xs md:text-sm">
//                       Our platform ensures the highest standards for your learning experience.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const FeatureCarousel = () => {
//   const scrollRef = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const cards = [
//     {
//       title: "Comprehensive Courses",
//       desc: "Wide range of subjects with professionally developed content.",
//       icon: "📚",
//     },
//     {
//       title: "Interactive Learning",
//       desc: "Engaging multimedia content with quizzes and exercises.",
//       icon: "🖥️",
//     },
//     {
//       title: "Progress Tracking",
//       desc: "Monitor your learning journey with detailed analytics.",
//       icon: "📊",
//     },
//     {
//       title: "Certification",
//       desc: "Earn recognized certificates upon course completion.",
//       icon: "🏆",
//     },
//     {
//       title: "Mobile Friendly",
//       desc: "Learn anytime, anywhere with our responsive platform.",
//       icon: "📱",
//     },
//   ];

//   const scroll = (direction) => {
//     const scrollAmount = windowWidth < 768 ? 280 : 350;
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="bg-[#0a0c1b] text-white py-16 px-4">
//       <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
//         <p className="text-xs md:text-sm text-purple-400 font-medium">SKlassic LMS Features</p>
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3 md:mb-4">Your learning platform</h2>
//         <p className="text-gray-400 text-sm md:text-base">
//           Experience the future of education with our comprehensive learning management system.
//         </p>
//       </div>

//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-2"
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="min-w-[260px] md:min-w-[280px] lg:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-4 md:p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300 flex-shrink-0"
//             >
//               <div className="text-2xl mb-3 md:mb-4">{card.icon}</div>
//               <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{card.title}</h3>
//               <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{card.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-4 md:gap-6 mt-6">
//           <button
//             onClick={() => scroll("left")}
//             className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//             aria-label="Scroll left"
//           >
//             <FaArrowLeft size={14} />
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//             aria-label="Scroll right"
//           >
//             <FaArrowRight size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LMSDisplay = () => {
//   return (
//     <div className="bg-[#0a0a23] text-white">
//       <FullScreenCarousel />
//       <AuthHero />
//       <Faster />
//       <WhyTrustUs />
//       <FeatureCarousel />
//       <Footer />
//     </div>
//   );
// };

// export default LMSDisplay;