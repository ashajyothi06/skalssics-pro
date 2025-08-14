// import React, { useState, useRef } from "react";
// import lmsHero from "../../assets/lms.png"; 
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

// // Project Images Carousel
// const projectImages = [
  
//     {
//       src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//       title: "Interviews That Get Smarter with Every Answer!",
//       alt: "AI assistant conducting virtual interview",
//       // style: { width: '100%', height: '100vh', objectFit: 'cover' }
//     },
//     // {
//     //   src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     //   title: "Real-Time Analytics",
//     //   alt: "Dashboard showing candidate assessment metrics",
//     //   style: { width: '100%', height: '100vh', objectFit: 'cover' }
//     // },
//     {
//       src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//       title: "This Is How SpaceX Interviews—Now You Can Too!",
//       alt: "Diverse candidates participating in virtual interviews",
//       // style: { width: '100%', height: '100vh', objectFit: 'cover' }
//     },
//     // {
//     //   src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     //   title: "Skill Assessments",
//     //   alt: "Coding test interface with AI evaluation",
//     //   style: { width: '100%', height: '100vh', objectFit: 'cover' }
//     // },
//     {
//       src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//       title: "From Resume to Decision in 48 Hours!",
//       alt: "Smiling candidate during video interview",
//       // style: { width: '100%', height: '100vh', objectFit: 'cover' }
//     }
//   ];

// // Updated radial menu items
// // const menuItems = [
// //     { label: "HOME", angle: 0, href: "#home" },
// //     { label: "SOLUTIONS", angle: 72, href: "#solutions" },
// //     { label: "FEATURES", angle: 144, href: "#features" },
// //     { label: "ABOUT", angle: 216, href: "#about" },
// //     { label: "CONTACT", angle: 288, href: "#contact" },
// //   ];
  
//   const RadialMenu = () => {
//     const radius = 100; // Reduced radius for mobile
//     const [isOpen, setIsOpen] = useState(false);
//     const [hoveredItem, setHoveredItem] = useState(null);
  
//     const handleClick = (href, e) => {
//       e.preventDefault();
//       setIsOpen(false);
  
//       setTimeout(() => {
//         const id = href.replace("#", "");
//         const el = document.getElementById(id);
//         if (el) {
//           const yOffset = -40;
//           const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({ top: y, behavior: "smooth" });
//         }
//       }, 400);
//     };
  
//     const menuItems = [
//       { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
//       { label: "Work", angle: 90, href: "#work", icon: "💼" },
//       { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
//       { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
//     ];
  
//     return (
//       <div className="fixed top-4 right-4 z-[100] text-white">
//         <motion.div
//           className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full border border-primary-800 flex items-center justify-center"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//         >
//           <motion.button
//             onClick={() => setIsOpen(!isOpen)}
//             className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
//             whileHover={{ 
//               scale: 1.05, 
//               boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//             }}
//             whileTap={{ scale: 0.98 }}
//             animate={{ 
//               boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
//           </motion.button>
//         </motion.div>
  
//         <AnimatePresence>
//           {isOpen && (
//             <>
//               <motion.div
//                 className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 onClick={() => setIsOpen(false)}
//               />
  
//               <motion.div
//                 className="fixed top-8 right-8 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
                
//                 {menuItems.map((item) => {
//                   const angleRad = (item.angle * Math.PI) / 180;
//                   const x = radius * Math.cos(angleRad);
//                   const y = radius * Math.sin(angleRad);
  
//                   return (
//                     <div
//                       key={item.label}
//                       className="absolute z-[60]"
//                       style={{
//                         left: `calc(50% + ${x}px - 30px)`,
//                         top: `calc(50% - ${y}px - 30px)`,
//                       }}
//                     >
//                       <motion.div 
//                         className="relative w-[60px] h-[60px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                         onHoverStart={() => setHoveredItem(item.label)}
//                         onHoverEnd={() => setHoveredItem(null)}
//                       >
//                         <motion.a
//                           href={item.href}
//                           className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
//                           whileHover={{ 
//                             scale: 1.1, 
//                             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//                           }}
//                           whileTap={{ scale: 0.98 }}
//                           animate={{ 
//                             boxShadow: hoveredItem === item.label 
//                               ? "0 0 20px rgba(168, 85, 247, 0.8)"
//                               : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//                           }}
//                           transition={{ duration: 2, repeat: Infinity }}
//                           onClick={(e) => handleClick(item.href, e)}
//                           tabIndex={isOpen ? 0 : -1}
//                           aria-label={item.label}
//                         >
//                           <span className="text-lg mb-1">{item.icon}</span>
//                           <span className="animate-text-shimmer text-xs">{item.label}</span>
//                         </motion.a>
//                       </motion.div>
//                     </div>
//                   );
//                 })}
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     );
//   };
  

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
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
//       </div>
      
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
//   const handleExploreSolutions = () => {
//     window.location.href = "https://sklassics-ai.com/";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 sm:px-10 md:px-20">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         <div className="z-10">
//           <p className="text-sm text-purple-300 font-medium">
//             The <span className="text-purple-500">future</span> of business technology
//           </p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-4">
//             Transform Your Business<br />
//             <span className="text-purple-200">With Advanced AI Solutions</span>
//           </h1>
//           <p className="text-gray-400 mt-4">
//   • IT training with guaranteed placements through industry-focused curriculum and hands-on learning.<br />
//   {/* • AI-powered mock interview platform that simulates real-world scenarios and delivers instant, personalized feedback.<br /> */}
//   • Smart performance tracking with question analysis, scoring, and improvement tips to boost interview readiness.
// </p>



//           {/* <div className="mt-8 space-y-3">
//             <button
//               onClick={handleExploreSolutions}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <FaRegSquare />
//               <span className="font-medium">Explore Solutions</span>
//             </button>
//             <button 
//               onClick={() => window.open("https://sklassics-ai.com/", "_blank")}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <span>Platform Features</span>
//             </button>
//             <button 
//               onClick={() => window.open("https://sklassics-ai.com/contact", "_blank")}
//               className="flex items-center gap-3 px-4 py-3 border border-[#1d2033] rounded-md w-fit bg-[#101223] hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <span>Contact Our Team</span>
//             </button>
//           </div> */}
//         </div>

//         <div className="relative flex justify-center items-center">
//           <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
//           <img
//             src={lmsHero}
//             alt="AI Solutions Platform"
//             className="relative w-full max-w-[500px] h-auto object-contain z-10"
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
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mb-4">
//           Smarter Business Operations.
//         </h2>
//         <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
//         Our AI solutions deliver automation, data insights, and process optimization. They empower teams to make faster decisions, reduce manual effort, and drive measurable business growth.
//         </p>

//         <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
//              style={{ minHeight: 400 }}>
//           <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
//               <span className="font-bold">Optimized for business transformation</span>
//             </h3>
//             <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
//               Our AI systems provide the most effective solutions for automating and optimizing your business processes.
//             </p>
//             <a
//               href="https://sklassics-ai.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
//             >
//               Visit SKlassic AI <span className="text-purple-400">&rarr;</span>
//             </a>
//           </div>
//           <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
//             <img
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
//               alt="AI Solutions Visualization"
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
//       category: 'Business Solutions',
//       items: [
//         { icon: <LucideMessageCircle size={20} />, title: 'Process Automation' },
//         { icon: <LucideLayoutDashboard size={20} />, title: 'Data Analytics' },
//         { icon: <LucideSearch size={20} />, title: 'AI-Powered Insights' },
//       ],
//     },
//     {
//       category: 'Enterprise Features',
//       items: [
//         { icon: <LucideBarChart2 size={20} />, title: 'Performance Metrics' },
//         { icon: <LucideBell size={20} />, title: 'Real-time Alerts' },
//         { icon: <LucideLink size={20} />, title: 'System Integration' },
//       ],
//     },
//     {
//       category: 'Quality Standards',
//       items: [
//         { icon: <LucideShield size={20} />, title: 'Enterprise Security' },
//         { icon: <LucideDownload size={20} />, title: 'Data Export' },
//         { icon: <LucideClock size={20} />, title: '24/7 Monitoring' },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0E1321] text-white py-16 px-4 sm:px-8 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
//           <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
//             Why choose SKlassic AI?
//           </span>
//         </h2>
//         <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl">
//           We're redefining business technology with cutting-edge AI solutions, automation, and data analytics.
//         </p>

//         {features.map((group, i) => (
//           <div key={i} className="mb-8 sm:mb-10">
//             <h3 className="text-xs sm:text-sm text-purple-400 font-semibold mb-4 sm:mb-6">{group.category}</h3>
//             <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               {group.items.map((item, j) => (
//                 <div key={j} className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="text-purple-300 mt-1">{item.icon}</div>
//                   <div>
//                     <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
//                     <p className="text-gray-400 text-xs sm:text-sm">
//                       Our platform ensures the highest standards for your business operations.
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
//     const scrollRef = useRef(null);
//     const cards = [
//       {
//         title: "Process Automation",
//         desc: "Streamline operations with intelligent automation solutions.",
//         icon: "🤖",
//       },
//       {
//         title: "Data Analytics",
//         desc: "Powerful insights from your business data in real-time.",
//         icon: "📊",
//       },
//       {
//         title: "AI Integration",
//         desc: "Seamlessly integrate AI into your existing systems.",
//         icon: "🧠",
//       },
//       {
//         title: "Enterprise Security",
//         desc: "Military-grade security for your sensitive data.",
//         icon: "🔒",
//       },
//       {
//         title: "Cloud Solutions",
//         desc: "Scalable cloud-based infrastructure for any business size.",
//         icon: "☁️",
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
//         <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
//           <p className="text-xs sm:text-sm text-purple-400 font-medium">SKlassic AI Features</p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">Your business transformation platform</h2>
//           <p className="text-gray-400 text-sm sm:text-base">
//             Experience the future of business operations with our comprehensive AI solutions.
//           </p>
//         </div>
  
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 sm:space-x-6 px-2"
//           >
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] bg-[#101223] rounded-xl border border-[#1d2033] p-4 sm:p-6 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//               >
//                 <div className="text-2xl mb-3 sm:mb-4">{card.icon}</div>
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
//                 <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{card.desc}</p>
//               </div>
//             ))}
//           </div>
  
//           <div className="flex justify-center gap-4 sm:gap-6 mt-6">
//             <button
//               onClick={() => scroll("left")}
//               className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//               aria-label="Scroll left"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
//               aria-label="Scroll right"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

// const AiInterviewDisplay = () => {
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

// export default AiInterviewDisplay;


// import React, { useState, useRef } from "react";
// import lmsHero from "../../assets/lms.png"; 
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { 
//   LucideMessageCircle, 
//   LucideLayoutDashboard, 
//   LucideSearch,
//   LucideBarChart2,
//   LucideBell,
//   LucideLink,
//   LucideShield,
//   LucideDownload,
//   LucideClock
// } from 'lucide-react';
// import Footer from "../../animated-portfolio/Footer";

// const projectImages = [
//   {
//     src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "Interviews That Get Smarter with Every Answer!",
//     alt: "AI assistant conducting virtual interview"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "This Is How SpaceX Interviews—Now You Can Too!",
//     alt: "Diverse candidates participating in virtual interviews"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
//     title: "From Resume to Decision in 48 Hours!",
//     alt: "Smiling candidate during video interview"
//   }
// ];

// const RadialMenu = () => {
//   const radius = 80; // Further reduced for mobile
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
//     { label: "Home", angle: 0, href: "#home", icon: "🏠" },
//     { label: "Features", angle: 90, href: "#features", icon: "✨" },
//     { label: "Solutions", angle: 180, href: "#solutions", icon: "🚀" },
//     { label: "Contact", angle: 270, href: "#contact", icon: "📞" },
//   ];

//   return (
//     <div className="fixed top-4 right-4 z-[100] text-white">
//       <motion.div
//         className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-[10px] md:text-xs font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
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
//               className="fixed top-8 right-8 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
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
//                       left: `calc(50% + ${x}px - 25px)`,
//                       top: `calc(50% - ${y}px - 25px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className="relative w-[50px] h-[50px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-[10px] backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
//                         <span className="text-base mb-0.5">{item.icon}</span>
//                         <span className="animate-text-shimmer text-[10px]">{item.label}</span>
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
//       <div className="relative z-10 flex pt-40 md:pt-60 flex-col items-center justify-center w-full h-full px-4">
//         <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white drop-shadow mb-4 px-4 py-2 md:px-8 md:py-4 rounded-2xl text-center  bg-opacity-30">
//           {projectImages[current].title}
//         </h3>
//         <div className="flex justify-center gap-2 mt-6">
//           {projectImages.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrent(idx)}
//               className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-purple-400 ${
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
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-0">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="z-10 order-2 md:order-1">
//           <p className="text-xs sm:text-sm text-purple-300 font-medium">
//             The <span className="text-purple-500">future</span> of business technology
//           </p>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
//             Transform Your Business<br />
//             <span className="text-purple-200">With Advanced AI Solutions</span>
//           </h1>
//           <ul className="text-gray-400 mt-4 text-sm sm:text-base">
//             <li className="flex items-start mb-2">
//               <span className="text-purple-400 mt-1 mr-2">•</span>
//               IT training with guaranteed placements through industry-focused curriculum and hands-on learning.
//             </li>
//             <li className="flex items-start">
//               <span className="text-purple-400 mt-1 mr-2">•</span>
//               Smart performance tracking with question analysis, scoring, and improvement tips to boost interview readiness.
//             </li>
//           </ul>
//         </div>

//         <div className="relative flex justify-center items-center order-1 md:order-2">
//           <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
//           <img
//             src={lmsHero}
//             alt="AI Solutions Platform"
//             className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain z-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Faster = () => {
//     return (
//       <section className="bg-[#0a1026] py-16 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mb-4">
//             Smarter Business Operations.
//           </h2>
//           <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
//           Our AI solutions deliver automation, data insights, and process optimization. They empower teams to make faster decisions, reduce manual effort, and drive measurable business growth.
//           </p>
  
//           <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
//                style={{ minHeight: 400 }}>
//             <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
//                 <span className="font-bold">Optimized for business transformation</span>
//               </h3>
//               <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
//                 Our AI systems provide the most effective solutions for automating and optimizing your business processes.
//               </p>
//               <a
//                 href="https://sklassics-ai.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
//               >
//                 Visit SKlassic AI <span className="text-purple-400">&rarr;</span>
//               </a>
//             </div>
//             <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
//               <img
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
//                 alt="AI Solutions Visualization"
//                 className="w-full max-w-[420px] h-auto object-contain mx-auto"
//                 style={{ filter: "drop-shadow(0 0 60px #a78bfa66)" }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
// const WhyTrustUs = () => {
//   const features = [
//     {
//       category: 'Business Solutions',
//       items: [
//         { icon: <LucideMessageCircle size={18} />, title: 'Process Automation' },
//         { icon: <LucideLayoutDashboard size={18} />, title: 'Data Analytics' },
//         { icon: <LucideSearch size={18} />, title: 'AI-Powered Insights' },
//       ],
//     },
//     {
//       category: 'Enterprise Features',
//       items: [
//         { icon: <LucideBarChart2 size={18} />, title: 'Performance Metrics' },
//         { icon: <LucideBell size={18} />, title: 'Real-time Alerts' },
//         { icon: <LucideLink size={18} />, title: 'System Integration' },
//       ],
//     },
//     {
//       category: 'Quality Standards',
//       items: [
//         { icon: <LucideShield size={18} />, title: 'Enterprise Security' },
//         { icon: <LucideDownload size={18} />, title: 'Data Export' },
//         { icon: <LucideClock size={18} />, title: '24/7 Monitoring' },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-[#0E1321] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
//           <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
//             Why choose SKlassic AI?
//           </span>
//         </h2>
//         <p className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-12 max-w-3xl">
//           We're redefining business technology with cutting-edge AI solutions, automation, and data analytics.
//         </p>

//         {features.map((group, i) => (
//           <div key={i} className="mb-8 sm:mb-10">
//             <h3 className="text-xs sm:text-sm text-purple-400 font-semibold mb-3 sm:mb-4">{group.category}</h3>
//             <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {group.items.map((item, j) => (
//                 <div key={j} className="flex items-start space-x-3">
//                   <div className="text-purple-300 mt-0.5">{item.icon}</div>
//                   <div>
//                     <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
//                     <p className="text-gray-400 text-xs sm:text-sm">
//                       Our platform ensures the highest standards for your business operations.
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
//   const cards = [
//     {
//       title: "Process Automation",
//       desc: "Streamline operations with intelligent automation solutions.",
//       icon: "🤖",
//     },
//     {
//       title: "Data Analytics",
//       desc: "Powerful insights from your business data in real-time.",
//       icon: "📊",
//     },
//     {
//       title: "AI Integration",
//       desc: "Seamlessly integrate AI into your existing systems.",
//       icon: "🧠",
//     },
//     {
//       title: "Enterprise Security",
//       desc: "Military-grade security for your sensitive data.",
//       icon: "🔒",
//     },
//     {
//       title: "Cloud Solutions",
//       desc: "Scalable cloud-based infrastructure for any business size.",
//       icon: "☁️",
//     },
//   ];

//   const scroll = (direction) => {
//     const scrollAmount = 300;
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="bg-[#0a0c1b] text-white py-12 sm:py-16 px-4">
//       <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
//         <p className="text-xs sm:text-sm text-purple-400 font-medium">SKlassic AI Features</p>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-3 sm:mb-4">Your business transformation platform</h2>
//         <p className="text-gray-400 text-sm sm:text-base">
//           Experience the future of business operations with our comprehensive AI solutions.
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
//               className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] bg-[#101223] rounded-xl border border-[#1d2033] p-4 sm:p-5 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
//             >
//               <div className="text-2xl mb-3">{card.icon}</div>
//               <h3 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h3>
//               <p className="text-gray-400 text-xs sm:text-sm">{card.desc}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-4 mt-6">
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

// const AiInterviewDisplay = () => {
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

// export default AiInterviewDisplay;




import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lmsHero from "../../assets/lms.png"; 
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

// const CubeGallery = () => {
//   const cubeRef = useRef(null);
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentAngleY, setCurrentAngleY] = useState(0);
//   const [draggedImages, setDraggedImages] = useState([]);
//   const [autoRotate, setAutoRotate] = useState(true);

//   const screenData = [
//     { 
//       title: "Dashboard Interface", 
//       desc: "A sleek dashboard for real-time data visualization and analytics.",
//       img: "https://media.gettyimages.com/id/2193247029/photo/business-team-analyzing-interactive-digital-dashboards-with-data-visualizations.jpg?s=612x612&w=gi&k=20&c=_NuN-BOUpDJFteOsPMsjJotFwzYAyqbe8uvfT7anT2M="
//     },
//     { 
//       title: "Analytics Module", 
//       desc: "Interactive charts and deep insights for data-driven decisions.",
//       img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
//     },
//     { 
//       title: "Settings Panel", 
//       desc: "Customizable settings panel with advanced configuration options.",
//       img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
//     },
//     { 
//       title: "Collaboration Hub", 
//       desc: "Real-time team collaboration tools and communication platform.",
//       img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
//     }
//   ];

//   const handleDragStart = (e, imageData, faceIndex) => {
//     e.dataTransfer.setData('application/json', JSON.stringify({
//       ...imageData,
//       faceIndex
//     }));
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     try {
//       const data = JSON.parse(e.dataTransfer.getData('application/json'));
//       const rect = containerRef.current?.getBoundingClientRect();
      
//       if (rect) {
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const newDraggedImage = {
//           id: `dropped-${Date.now()}-${Math.random()}`,
//           x,
//           y,
//           img: data.img,
//           title: data.title
//         };
        
//         setDraggedImages(prev => [...prev, newDraggedImage]);
//       }
//     } catch (error) {
//       console.error('Error handling drop:', error);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const nextScreen = () => {
//     setCurrentAngleY(prev => prev - 90);
//     setCurrentIndex(prev => (prev + 1) % screenData.length);
    
//     if (cubeRef.current) {
//       gsap.to(cubeRef.current, {
//         rotationY: `+=90`,
//         duration: 1,
//         ease: "power3.inOut",
//       });
//     }
//   };

//   const prevScreen = () => {
//     setCurrentAngleY(prev => prev + 90);
//     setCurrentIndex(prev => (prev - 1 + screenData.length) % screenData.length);
    
//     if (cubeRef.current) {
//       gsap.to(cubeRef.current, {
//         rotationY: `-=90`,
//         duration: 1,
//         ease: "power3.inOut",
//       });
//     }
//   };

//   const toggleAutoRotate = () => {
//     setAutoRotate(!autoRotate);
//   };

//   const removeDraggedImage = (id) => {
//     setDraggedImages(prev => prev.filter(img => img.id !== id));
//   };

//   // Auto-rotation functionality
//   useEffect(() => {
//     if (!autoRotate) return;

//     const interval = setInterval(() => {
//       nextScreen();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [autoRotate, currentAngleY, currentIndex]);

//   useEffect(() => {
//     // Cube section animations
//     const cubeTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#screens",
//         start: "top 80%",
//         toggleActions: "play none none none"
//       }
//     });
    
//     cubeTl
//       .from(".cube-container", { 
//         y: 150, 
//         opacity: 0, 
//         duration: 1.5, 
//         ease: "power3.out" 
//       })
//       .from(".cube-face", { 
//         scale: 0.8, 
//         opacity: 0, 
//         rotationX: 45, 
//         stagger: 0.1, 
//         duration: 1.2, 
//         ease: "power3.out" 
//       }, "-=1");

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <section id="screens" className="relative w-full h-screen flex items-center justify-center bg-[#1a1333] overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
//       </div>
      
//       <RadialMenu />
      
//       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//           AI-Powered Solutions
//         </h2>
        
//         <div 
//           ref={containerRef}
//           className="cube-container flex justify-center items-center relative"
//           style={{ perspective: '1500px', height: '400px', width: '100%' }}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//         >
//           <div 
//             ref={cubeRef}
//             className="cube relative"
//             style={{
//               width: '300px',
//               height: '200px',
//               transformStyle: 'preserve-3d',
//               transform: `rotateY(${currentAngleY}deg)`,
//               transition: 'transform 1s ease'
//             }}
//           >
//             {screenData.map((screen, i) => (
//               <div 
//                 key={i}
//                 className="cube-face absolute w-full h-full bg-gray-800 border-2 border-purple-400 overflow-hidden shadow-2xl"
//                 style={{ 
//                   transform: `rotateY(${i * 90}deg) translateZ(150px)`,
//                   filter: 'brightness(0.8)'
//                 }}
//               >
//                 <img 
//                   src={screen.img} 
//                   alt={screen.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-grab active:cursor-grabbing" 
//                   draggable
//                   onDragStart={(e) => handleDragStart(e, screen, i)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="flex justify-center gap-6 mt-8">
//           <button 
//             onClick={prevScreen}
//             className="font-bold px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors"
//           >
//             ← Previous
//           </button>

//           <button 
//             onClick={toggleAutoRotate}
//             className={`font-bold px-4 py-2 rounded text-white ${
//               autoRotate ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
//             } transition-colors`}
//           >
//             {autoRotate ? 'Auto ON' : 'Auto OFF'}
//           </button>

//           <button 
//             onClick={nextScreen}
//             className="font-bold px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-colors"
//           >
//             Next →
//           </button>
//         </div>
        
//         <div className="screen-info text-center mt-8 text-gray-200 max-w-lg">
//           <h3 className="text-xl font-semibold mb-2">{screenData[currentIndex].title}</h3>
//           <p className="text-sm sm:text-base">{screenData[currentIndex].desc}</p>
//         </div>
//       </div>
      
//       <div className="absolute inset-0 bg-gradient-to-t from-[#1a1333] via-transparent to-[#1a1333]/60 pointer-events-none" />
//     </section>
//   );
// };
 
const AuthHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b33] to-[#0b0e2e] text-white flex items-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="z-10 order-2 md:order-1">
          <p className="text-xs sm:text-sm text-purple-300 font-medium">
            The <span className="text-purple-500">future</span> of business technology
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Transform Your Business<br />
            <span className="text-purple-200">With Advanced AI Solutions</span>
          </h1>
          <ul className="text-gray-400 mt-4 text-sm sm:text-base">
            <li className="flex items-start mb-2">
              <span className="text-purple-400 mt-1 mr-2">•</span>
              IT training with guaranteed placements through industry-focused curriculum and hands-on learning.
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mt-1 mr-2">•</span>
              Smart performance tracking with question analysis, scoring, and improvement tips to boost interview readiness.
            </li>
          </ul>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-purple-800 blur-3xl opacity-40"></div>
          <img
            src={lmsHero}
            alt="AI Solutions Platform"
            className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain z-10"
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center mb-4">
            Smarter Business Operations.
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg">
          Our AI solutions deliver automation, data insights, and process optimization. They empower teams to make faster decisions, reduce manual effort, and drive measurable business growth.
          </p>
  
          <div className="bg-[#11182b] border border-zinc-700 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden"
               style={{ minHeight: 400 }}>
            <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
                <span className="font-bold">Optimized for business transformation</span>
              </h3>
              <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                Our AI systems provide the most effective solutions for automating and optimizing your business processes.
              </p>
              <a
                href="https://sklassics-ai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-600 text-white font-medium hover:bg-purple-700/20 transition text-sm w-auto"
              >
                Visit SKlassic AI <span className="text-purple-400">&rarr;</span>
              </a>
            </div>
            <div className="flex-1 flex items-center justify-center relative min-h-[250px] bg-transparent">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="AI Solutions Visualization"
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
      category: 'Business Solutions',
      items: [
        { icon: <LucideMessageCircle size={18} />, title: 'Process Automation' },
        { icon: <LucideLayoutDashboard size={18} />, title: 'Data Analytics' },
        { icon: <LucideSearch size={18} />, title: 'AI-Powered Insights' },
      ],
    },
    {
      category: 'Enterprise Features',
      items: [
        { icon: <LucideBarChart2 size={18} />, title: 'Performance Metrics' },
        { icon: <LucideBell size={18} />, title: 'Real-time Alerts' },
        { icon: <LucideLink size={18} />, title: 'System Integration' },
      ],
    },
    {
      category: 'Quality Standards',
      items: [
        { icon: <LucideShield size={18} />, title: 'Enterprise Security' },
        { icon: <LucideDownload size={18} />, title: 'Data Export' },
        { icon: <LucideClock size={18} />, title: '24/7 Monitoring' },
      ],
    },
  ];

  return (
    <section className="bg-[#0E1321] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Why choose SKlassic AI?
          </span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-8 sm:mb-12 max-w-3xl">
          We're redefining business technology with cutting-edge AI solutions, automation, and data analytics.
        </p>

        {features.map((group, i) => (
          <div key={i} className="mb-8 sm:mb-10">
            <h3 className="text-xs sm:text-sm text-purple-400 font-semibold mb-3 sm:mb-4">{group.category}</h3>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start space-x-3">
                  <div className="text-purple-300 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Our platform ensures the highest standards for your business operations.
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
      title: "Process Automation",
      desc: "Streamline operations with intelligent automation solutions.",
      icon: "🤖",
    },
    {
      title: "Data Analytics",
      desc: "Powerful insights from your business data in real-time.",
      icon: "📊",
    },
    {
      title: "AI Integration",
      desc: "Seamlessly integrate AI into your existing systems.",
      icon: "🧠",
    },
    {
      title: "Enterprise Security",
      desc: "Military-grade security for your sensitive data.",
      icon: "🔒",
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud-based infrastructure for any business size.",
      icon: "☁️",
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#0a0c1b] text-white py-12 sm:py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm text-purple-400 font-medium">SKlassic AI Features</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-3 sm:mb-4">Your business transformation platform</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Experience the future of business operations with our comprehensive AI solutions.
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
              className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] bg-[#101223] rounded-xl border border-[#1d2033] p-4 sm:p-5 hover:bg-gradient-to-br from-purple-800/20 to-transparent transition duration-300"
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
            aria-label="Scroll left"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#1d2033] hover:bg-[#292d45] p-2 rounded-full text-white"
            aria-label="Scroll right"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AiInterviewDisplay = () => {
  return (
    <div className="bg-[#0a0a23] text-white">
      <CubeGallery />
      <AuthHero />
      <Faster />
      <WhyTrustUs />
      <FeatureCarousel />
      <Footer />
    </div>
  );
};

export default AiInterviewDisplay;