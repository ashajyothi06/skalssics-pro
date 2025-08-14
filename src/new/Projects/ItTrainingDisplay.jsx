// import React, { useState, useRef } from "react";
// import itTraining from "../../assets/IT-Training.png"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaRegSquare, FaRegUser, FaArrowsAltH } from "react-icons/fa";
// import { 
//   LucideSearch, 
//   LucideUsers, 
//   LucideBarChart2, 
//   LucideBell, 
//   LucideShield, 
//   LucideDownload, 
//   LucideClock, 
//   LucideMessageCircle, 
//   LucideLayoutDashboard, 
//   LucideLink 
// } from 'lucide-react';
// import Footer from "../../animated-portfolio/Footer";



// const projectImages = [
//     {
//     src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
//     title: "Code Your Way to a 6-Figure Salary!",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
//     title: "From Classroom to Paycheck – Guaranteed!",
//   },

//   {
//     src: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1600&q=80",
//     title: "Tech Jobs Won't Wait – Why Should You?",
//     description: "Ace AWS, Azure, Cisco, and more with hands-on labs"
//   },

// ];

// // Updated radial menu items
// // const menuItems = [
// //     { label: "HOME", angle: 0, href: "#home" },
// //     { label: "COURSES", angle: 72, href: "#courses" },
// //     { label: "PLACEMENT", angle: 144, href: "#placement" },
// //     { label: "ABOUT", angle: 216, href: "#about" },
// //     { label: "CONTACT", angle: 288, href: "#contact" },
// //   ];
  
// const RadialMenu = () => {
//   const radius = 100; // Reduced radius for mobile
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

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

//   return (
//     <div className="fixed top-4 right-4 z-[100] text-white">
//       <motion.div
//         className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//           }}
//           whileTap={{ scale: 0.98 }}
//           animate={{ 
//             boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
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
//               className="fixed top-8 right-8 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.5 }}
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
//                       left: `calc(50% + ${x}px - 30px)`,
//                       top: `calc(50% - ${y}px - 30px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className="relative w-[60px] h-[60px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
//                       >
//                         <span className="text-lg mb-1">{item.icon}</span>
//                         <span className="animate-text-shimmer text-xs">{item.label}</span>
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

//   const prev = () => setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1));
//   const next = () => setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));

//   return (
//     <section className="relative w-full h-screen flex items-center justify-center bg-[#1a1333] overflow-hidden">
//       {/* Background Stars */}
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
//       </div>
      
//       {/* Radial Menu */}
//       <RadialMenu />

//       <img
//         src={projectImages[current].src}
//         alt={projectImages[current].title}
//         className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-0"
//         style={{ filter: "brightness(0.7)" }}
//       />
//       <div className="relative z-10 flex pt-60 flex-col items-center justify-center w-full h-full">
//         <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-6  px-8 py-4 rounded-2xl">
//          {projectImages[current].title}
//         </h3>
//         <div className="flex justify-center gap-3 mt-8">
//           {projectImages.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrent(idx)}
//               className={`w-4 h-4 rounded-full border-2 border-purple-400 ${
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
//   const handleEnrollNow = () => {
//     window.location.href = "https://sklassics.com/";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-10 md:px-20">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Left Section */}
//         <div className="z-10">
//           <p className="text-sm text-purple-300 font-medium">
//             Your <span className="text-purple-500">career</span> transformation platform
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
//             IT Training with Guaranteed Placements<br />
//             <span className="text-purple-200">Launch Your Tech Career</span>
//           </h1>
//           <p className="text-gray-400 mt-4">
//   • IT training with guaranteed placements through industry-focused curriculum and hands-on learning.<br />
//   {/* • Launch your tech career with confidence, backed by expert mentorship and real-world projects.<br /> */}
//   • 100% placement assistance with resume building, mock interviews, and direct recruiter connections.
// </p>

//           {/* Buttons */}
//           {/* <div className="mt-8 space-y-3">
//             <button
//               onClick={handleEnrollNow}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <FaRegSquare />
//               <span className="font-medium">Enroll Now</span>
//             </button>
//             <button 
//               onClick={() => window.open("https://sklassics.com/", "_blank")}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <span>Placement Process</span>
//             </button>
//             <button 
//               onClick={() => window.open("https://sklassics.com/", "_blank")}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <span>Hire Our Graduates</span>
//             </button>
//           </div> */}
//         </div>

//         {/* Right Section */}
//         <div className="relative flex justify-center items-center">
//           <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
//           <img
//             src={itTraining}
//             alt="IT Training and Placement"
//             className="relative w-104 h-104 object-contain z-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Faster Component
// const Faster = () => {
//   return (
//     <section className="bg-[#0a1026] py-16 px-2 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4">
//           Career-focused Training with Placement Guarantee
//         </h2>
//         <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
//   Our AI solutions deliver automation, data insights, and process optimization. Career-focused training with placement guarantee.
// </p>


//         <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
//              style={{ minHeight: 400 }}>
//           <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
//             <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
//               <span className="font-bold">From Training to Employment</span>
//             </h3>
//             <p className="text-zinc-400 mb-8 text-base sm:text-lg">
//               We don't just train - we place. Our comprehensive placement support includes resume building, interview preparation, and direct company connections.
//             </p>
//             <a
//               href="https://sklassics.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
//             >
//               Learn About Our Placement Process <span className="text-purple-400">&rarr;</span>
//             </a>
//           </div>
//           <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
//             <img
//               src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
//               alt="Placement Visualization"
//               className="w-full max-w-[420px] h-auto object-contain mx-auto"
//               style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Why Trust Us Component
// const WhyTrustUs = () => {
//   const features = [
//     {
//       category: 'Training Programs',
//       items: [
//         { icon: <LucideMessageCircle size={20} />, title: 'Industry-Aligned Curriculum' },
//         { icon: <LucideLayoutDashboard size={20} />, title: 'Hands-on Projects' },
//         { icon: <LucideSearch size={20} />, title: 'Certification Preparation' },
//       ],
//     },
//     {
//       category: 'Placement Support',
//       items: [
//         { icon: <LucideBarChart2 size={20} />, title: 'Resume Building' },
//         { icon: <LucideBell size={20} />, title: 'Mock Interviews' },
//         { icon: <LucideLink size={20} />, title: 'Company Connections' },
//       ],
//     },
//     {
//       category: 'Career Services',
//       items: [
//         { icon: <LucideShield size={20} />, title: 'Placement Guarantee' },
//         { icon: <LucideDownload size={20} />, title: 'Career Counseling' },
//         { icon: <LucideClock size={20} />, title: 'Lifetime Support' },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0E1321] text-white py-16 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-white mb-4">
//           <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
//             Why choose our IT Training & Placement?
//           </span>
//         </h2>
//         <p className="text-gray-300 text-lg mb-12 max-w-3xl">
//           We bridge the gap between education and employment with comprehensive training and dedicated placement support.
//         </p>

//         {features.map((group, i) => (
//           <div key={i} className="mb-10">
//             <h3 className="text-sm text-purple-400 font-semibold mb-6">{group.category}</h3>
//             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//               {group.items.map((item, j) => (
//                 <div key={j} className="flex items-start space-x-4">
//                   <div className="text-purple-300 mt-1">{item.icon}</div>
//                   <div>
//                     <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
//                     <p className="text-gray-400 text-sm">
//                       Our proven process has helped hundreds launch successful tech careers.
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

// // Feature Carousel Component
// const FeatureCarousel = () => {
//     const scrollRef = useRef(null);
//     const cards = [
//       {
//         title: "Certification Training",
//         desc: "Prepare for top IT certifications with expert-led training and exam preparation.",
//         icon: "📜", // Scroll emoji
//       },
//       {
//         title: "Project Experience",
//         desc: "Work on real-world projects to build your portfolio and gain practical experience.",
//         icon: "🛠️", // Hammer and Wrench emoji
//       },
//       {
//         title: "Placement Guarantee",
//         desc: "Our commitment to place you in a tech role after successful completion.",
//         icon: "✅", // Check Mark emoji
//       },
//       {
//         title: "Interview Preparation",
//         desc: "Master technical interviews with our comprehensive coaching program.",
//         icon: "💼", // Briefcase emoji
//       },
//       {
//         title: "Career Services",
//         desc: "Lifetime access to our job portal and career advancement resources.",
//         icon: "🚀", // Rocket emoji
//       },
//     ];
  
//     const scroll = (direction) => {
//       const scrollAmount = 350;
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({
//           left: direction === "left" ? -scrollAmount : scrollAmount,
//           behavior: "smooth",
//         });
//       }
//     };
  
//     return (
//       <div className="bg-[#0a0c1b] text-white py-16 px-4">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <p className="text-sm text-purple-400 font-medium">SKlassic IT Training & Placement</p>
//           <h2 className="text-4xl font-bold mt-2 mb-4">Your Tech Career Launchpad</h2>
//           <p className="text-gray-400">
//             Comprehensive training and placement services designed to launch your career in technology.
//           </p>
//         </div>
  
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-6 px-2"
//           >
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="min-w-[280px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//               >
//                 <div className="text-2xl mb-4">{card.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//                 <p className="text-gray-400 mb-4">{card.desc}</p>
//               </div>
//             ))}
//           </div>
  
//           <div className="flex justify-center gap-6 mt-6">
//             <button
//               onClick={() => scroll("left")}
//               className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

// const ItTrainingDisplay = () => {
//   return (
//     <div className="bg-[#0a0a23] text-white">
//       {/* Carousel Section with Radial Menu */}
//       <FullScreenCarousel />
      
//       {/* Auth Hero Section */}
//       <AuthHero />
      
//       {/* Faster Section */}
//       <Faster />
      
//       {/* Why Trust Us Section */}
//       <WhyTrustUs />
      
//       {/* Feature Carousel */}
//       <FeatureCarousel />
      
//       <Footer />
//     </div>
//   );
// };

// export default ItTrainingDisplay;



// import React, { useState, useRef } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaRegSquare, FaRegUser, FaArrowsAltH } from "react-icons/fa";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import itTraining from "../../assets/IT-Training.png"; 
// import lmsHero from "../../assets/lms.png"; 
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { 
  LucideMessageCircle, 
  LucideLayoutDashboard, 
  LucideSearch,
  LucideBarChart2,
  LucideBell,
  LucideLink,
  LucideShield,
  LucideDownload,
  LucideClock
} from 'lucide-react';
import Footer from "../../animated-portfolio/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const RadialMenu = () => {
  const radius = 80;
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
    { label: "Home", angle: 0, href: "#home", icon: "🏠" },
    { label: "Features", angle: 90, href: "#features", icon: "✨" },
    { label: "Solutions", angle: 180, href: "#solutions", icon: "🚀" },
    { label: "Contact", angle: 270, href: "#contact", icon: "📞" },
  ];

  return (
    <div className="fixed top-4 right-4 z-[100] text-white">
      <motion.div
        className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-primary-800 flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-[10px] md:text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
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
              className="fixed top-8 right-8 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
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
                      left: `calc(50% + ${x}px - 25px)`,
                      top: `calc(50% - ${y}px - 25px)`,
                    }}
                  >
                    <motion.div 
                      className="relative w-[50px] h-[50px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
                      onHoverStart={() => setHoveredItem(item.label)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <motion.a
                        href={item.href}
                        className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-[10px] backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
                        <span className="text-base mb-0.5">{item.icon}</span>
                        <span className="animate-text-shimmer text-[10px]">{item.label}</span>
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


const CubeGallery = () => {
  const cubeRef = useRef(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAngleY, setCurrentAngleY] = useState(0);
  const [draggedImages, setDraggedImages] = useState([]);
  const [autoRotate, setAutoRotate] = useState(true);

  const rotateCubeLeft = () => {
    setCurrentAngleY(prev => prev + 90);
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationY: `+=90`,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateY(${currentAngleY + 90}deg)`;
          }
        }
      });
    }
  };
  
  const rotateCubeRight = () => {
    setCurrentAngleY(prev => prev - 90);
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationY: `-=90`,
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateY(${currentAngleY - 90}deg)`;
          }
        }
      });
    }
  };

  const screenData = [
    { 
      title: "Dashboard Interface", 
      desc: "A sleek dashboard for real-time data visualization and analytics.",
      img: "https://media.gettyimages.com/id/2193247029/photo/business-team-analyzing-interactive-digital-dashboards-with-data-visualizations.jpg?s=612x612&w=gi&k=20&c=_NuN-BOUpDJFteOsPMsjJotFwzYAyqbe8uvfT7anT2M="
    },
    { 
      title: "Analytics Module", 
      desc: "Interactive charts and deep insights for data-driven decisions.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    { 
      title: "Settings Panel", 
      desc: "Customizable settings panel with advanced configuration options.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    { 
      title: "Collaboration Hub", 
      desc: "Real-time team collaboration tools and communication platform.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    { 
      title: "Task Manager", 
      desc: "Streamlined task tracking and project management interface.",
      img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    { 
      title: "Reports Generator", 
      desc: "Automated report creation and comprehensive data export tools.",
      img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop"
    }
  ];

  // Auto-rotation functionality - only horizontal
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      nextScreen();
    }, 4000); // Auto rotate every 4 seconds

    return () => clearInterval(interval);
  }, [autoRotate, currentAngleY, currentIndex]);

  // Handle drag start
  const handleDragStart = (e, imageData, faceIndex) => {
    e.dataTransfer.setData('application/json', JSON.stringify({
      ...imageData,
      faceIndex
    }));
  };

  // Handle drop outside cube
  const handleDrop = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      const rect = containerRef.current?.getBoundingClientRect();
      
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const newDraggedImage = {
          id: `dropped-${Date.now()}-${Math.random()}`,
          x,
          y,
          img: data.img,
          title: data.title
        };
        
        setDraggedImages(prev => [...prev, newDraggedImage]);
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Navigation functions - only horizontal rotation
  const nextScreen = () => {
    setCurrentAngleY(prev => prev - 90);
    setCurrentIndex(prev => (prev + 1) % screenData.length);
    
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationY: currentAngleY - 90,
        duration: 1,
        ease: "power3.inOut",
      });
    }
  };

  const prevScreen = () => {
    setCurrentAngleY(prev => prev + 90);
    setCurrentIndex(prev => (prev - 1 + screenData.length) % screenData.length);
    
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotationY: currentAngleY + 90,
        duration: 1,
        ease: "power3.inOut",
      });
    }
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  const removeDraggedImage = (id) => {
    setDraggedImages(prev => prev.filter(img => img.id !== id));
  };
// In the CubeGallery component, update the useEffect with animations:

useEffect(() => {
  // Only run animations if elements exist
  if (!parallaxRef.current || !heroRef.current) return;

  // Hero section animations with null checks
  const heroTl = gsap.timeline();
  
  if (parallaxRef.current) {
    heroTl.from(parallaxRef.current, { 
      scale: 1.3, 
      opacity: 0, 
      duration: 2.5, 
      ease: "power4.out" 
    });
  }

  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTl.from(heroTitle, { 
      y: 120, 
      opacity: 0, 
      duration: 1.5, 
      ease: "power4.out" 
    }, "-=2");
  }

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) {
    heroTl.from(heroSubtitle, { 
      y: 100, 
      opacity: 0, 
      duration: 1.2, 
      ease: "power4.out" 
    }, "-=1");
  }

  const heroButton = document.querySelector(".hero-button");
  if (heroButton) {
    heroTl.from(heroButton, { 
      y: 80, 
      opacity: 0, 
      duration: 1, 
      ease: "elastic.out(1, 0.5)" 
    }, "-=0.8");
  }

  // Parallax effect with null check
  if (parallaxRef.current && heroRef.current) {
    gsap.to(parallaxRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Cube section animations with null checks
  const screensSection = document.querySelector("#screens");
  if (screensSection) {
    const cubeTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#screens",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    const cubeContainer = document.querySelector(".cube-container");
    if (cubeContainer) {
      cubeTl.from(cubeContainer, { 
        y: 150, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      });
    }

    const cubeFaces = document.querySelectorAll(".cube-face");
    if (cubeFaces.length > 0) {
      cubeTl.from(cubeFaces, { 
        scale: 0.8, 
        opacity: 0, 
        rotationX: 45, 
        stagger: 0.1, 
        duration: 1.2, 
        ease: "power3.out" 
      }, "-=1");
    }

    const navButtons = document.querySelectorAll(".nav-button");
    if (navButtons.length > 0) {
      cubeTl.from(navButtons, { 
        y: 50, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.5");
    }

    const screenInfo = document.querySelector(".screen-info");
    if (screenInfo) {
      cubeTl.from(screenInfo, { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.3");
    }
  }

  // About section animations with null checks
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    const aboutTitle = document.querySelector(".about-title");
    if (aboutTitle) {
      aboutTl.from(aboutTitle, { 
        y: 60, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power4.out" 
      });
    }

    const aboutTexts = document.querySelectorAll(".about-text");
    if (aboutTexts.length > 0) {
      aboutTl.from(aboutTexts, { 
        x: -120, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.3, 
        ease: "power3.out" 
      }, "-=0.8");
    }

    const aboutButton = document.querySelector(".about-button");
    if (aboutButton) {
      aboutTl.from(aboutButton, { 
        scale: 0.7, 
        opacity: 0, 
        duration: 1, 
        ease: "elastic.out(1, 0.5)" 
      }, "-=0.5");
    }
  }

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []); // Empty dependency array ensures this runs once after mount

  // Update cube rotation
  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateY(${currentAngleY}deg)`;
    }
  }, [currentAngleY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white overflow-x-hidden">
      <RadialMenu />

      {/* Screens Section (3D Cube Gallery) */}
      <section id="screens" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white text-center  mb-12 bg-gradient-to-r from-red-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Project Screens
          </h2>
          
          <div 
            ref={containerRef}
            className="cube-container flex justify-center items-center relative"
            style={{ perspective: '1500px', height: '500px' }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div 
              ref={cubeRef}
              className="cube relative"
              style={{
                width: '440px',
                height: '300px',
                transformStyle: 'preserve-3d',
                transition: 'transform 1s ease'
              }}
            >
              {/* Front Face */}
              <div className="cube-face absolute w-full h-full bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateY(0deg) translateZ(200px)' }}>
                <img 
                  src={screenData[0].img} 
                  alt={screenData[0].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[0], 0)}
                />
              </div>
              
              {/* Right Face */}
              <div className="cube-face absolute w-full h-full bg-gradient-to-br from-[#1a1661] to-[#0b0e2e] border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateY(90deg) translateZ(200px)' }}>
                <img 
                  src={screenData[1].img} 
                  alt={screenData[1].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[1], 1)}
                />
              </div>
              
              {/* Back Face */}
              <div className="cube-face absolute w-full h-full bg-gray-800 border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateY(180deg) translateZ(200px)' }}>
                <img 
                  src={screenData[2].img} 
                  alt={screenData[2].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[2], 2)}
                />
              </div>
              
              {/* Left Face */}
              <div className="cube-face absolute w-full h-full bg-gray-800 border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateY(-90deg) translateZ(200px)' }}>
                <img 
                  src={screenData[3].img} 
                  alt={screenData[3].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[3], 3)}
                />
              </div>
              
              {/* Top Face */}
              <div className="cube-face absolute w-full h-full bg-gray-800 border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateX(90deg) translateZ(200px)' }}>
                <img 
                  src={screenData[4].img} 
                  alt={screenData[4].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[4], 4)}
                />
              </div>
              
              {/* Bottom Face */}
              <div className="cube-face absolute w-full h-full bg-gray-800 border-2 border-teal-400 overflow-hidden shadow-2xl"
                   style={{ transform: 'rotateX(-90deg) translateZ(200px)' }}>
                <img 
                  src={screenData[5].img} 
                  alt={screenData[5].title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
                  draggable
                  onDragStart={(e) => handleDragStart(e, screenData[5], 5)}
                />
              </div>
            </div>
            
            {/* Dragged Images - Larger Size */}
            {draggedImages.map((img) => (
              <div
                key={img.id}
                className="absolute w-48 h-36 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                style={{ left: img.x - 96, top: img.y - 72 }}
                onClick={() => removeDraggedImage(img.id)}
                title={`${img.title} - Click to remove`}
              >
                <img 
                  src={img.img} 
                  alt={img.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-1 right-1 bg-red-500 text-white text-sm px-2 py-1 rounded-full font-bold hover:bg-red-600">×</div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons - Outside of cube */}
          <div className="flex justify-center gap-6 mb-8">
            <button 
              onClick={prevScreen}
              className="font-bold px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              ← Previous
            </button>

            <button 
              onClick={toggleAutoRotate}
              className={`font-bold px-4 py-2 rounded text-white ${
                autoRotate ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {autoRotate ? 'Auto ON' : 'Auto OFF'}
            </button>

            <button 
              onClick={nextScreen}
              className="font-bold px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
            >
              Next →
            </button>
          </div>
          
          <div className="screen-info text-center mt-8 text-gray-300">
            <h3 className="text-2xl font-semibold mb-3">{screenData[currentIndex].title}</h3>
            <p className="max-w-lg mx-auto text-lg leading-relaxed">{screenData[currentIndex].desc}</p>
            {draggedImages.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-900 bg-opacity-30 rounded-lg inline-block">
                <p className="text-sm text-yellow-300">
                  📸 {draggedImages.length} screenshot(s) dropped. Click on them to remove.
                </p>
              </div>
            )}
            {/* <div className="mt-4 text-sm text-gray-400">
              Auto-rotate: {autoRotate ? 'ON (4s intervals)' : 'OFF'} | Current: {currentIndex + 1}/{screenData.length}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

const AuthHero = () => {
  const handleEnrollNow = () => {
    window.location.href = "https://sklassics.com/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 md:px-20 py-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="z-10 order-2 md:order-1">
          <p className="text-sm text-purple-300 font-medium">
            Your <span className="text-purple-500">career</span> transformation platform
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
            IT Training with Guaranteed Placements<br />
            <span className="text-purple-200">Launch Your Tech Career</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            • IT training with guaranteed placements through industry-focused curriculum and hands-on learning.<br />
            • 100% placement assistance with resume building, mock interviews, and direct recruiter connections.
          </p>

          
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <img
            src={itTraining}
            alt="IT Training and Placement"
            className="relative w-full max-w-md h-auto object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

const Faster = () => {
  return (
    <section className="bg-[#0a1026] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Career-focused Training with Placement Guarantee
        </h2>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
          Our AI solutions deliver automation, data insights, and process optimization. Career-focused training with placement guarantee.
        </p>

        <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
             style={{ minHeight: 400 }}>
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              <span className="font-bold">From Training to Employment</span>
            </h3>
            <p className="text-zinc-400 mb-8 text-sm sm:text-base">
              We don't just train - we place. Our comprehensive placement support includes resume building, interview preparation, and direct company connections.
            </p>
            <a
              href="https://sklassics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
            >
              Learn About Our Placement Process <span className="text-purple-400">&rarr;</span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
              alt="Placement Visualization"
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
      category: 'Training Programs',
      items: [
        { icon: <LucideMessageCircle size={20} />, title: 'Industry-Aligned Curriculum' },
        { icon: <LucideLayoutDashboard size={20} />, title: 'Hands-on Projects' },
        { icon: <LucideSearch size={20} />, title: 'Certification Preparation' },
      ],
    },
    {
      category: 'Placement Support',
      items: [
        { icon: <LucideBarChart2 size={20} />, title: 'Resume Building' },
        { icon: <LucideBell size={20} />, title: 'Mock Interviews' },
        { icon: <LucideLink size={20} />, title: 'Company Connections' },
      ],
    },
    {
      category: 'Career Services',
      items: [
        { icon: <LucideShield size={20} />, title: 'Placement Guarantee' },
        { icon: <LucideDownload size={20} />, title: 'Career Counseling' },
        { icon: <LucideClock size={20} />, title: 'Lifetime Support' },
      ],
    },
  ];

  return (
    <section className="bg-[#0E1321] text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why choose our IT Training & Placement?
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-3xl">
          We bridge the gap between education and employment with comprehensive training and dedicated placement support.
        </p>

        {features.map((group, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-sm text-purple-400 font-semibold mb-6">{group.category}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start space-x-4">
                  <div className="text-purple-300 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Our proven process has helped hundreds launch successful tech careers.
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
      title: "Certification Training",
      desc: "Prepare for top IT certifications with expert-led training and exam preparation.",
      icon: "📜",
    },
    {
      title: "Project Experience",
      desc: "Work on real-world projects to build your portfolio and gain practical experience.",
      icon: "🛠️",
    },
    {
      title: "Placement Guarantee",
      desc: "Our commitment to place you in a tech role after successful completion.",
      icon: "✅",
    },
    {
      title: "Interview Preparation",
      desc: "Master technical interviews with our comprehensive coaching program.",
      icon: "💼",
    },
    {
      title: "Career Services",
      desc: "Lifetime access to our job portal and career advancement resources.",
      icon: "🚀",
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth < 768 ? 280 : 350;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#0a0c1b] text-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <p className="text-sm text-purple-400 font-medium">SKlassic IT Training & Placement</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Your Tech Career Launchpad</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Comprehensive training and placement services designed to launch your career in technology.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-2"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[260px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">{card.desc}</p>
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

const ItTrainingDisplay = () => {
  return (
    <div className="bg-[#0a0a23] text-white">
      {/* Carousel Section with Radial Menu */}
      <CubeGallery />
      
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

export default ItTrainingDisplay;