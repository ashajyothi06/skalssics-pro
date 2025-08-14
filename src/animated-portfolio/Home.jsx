// // // import React, { useEffect, useState, useRef } from 'react';
// // // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // // import { BookOpen, ArrowRight, Play, Pause, Volume2, VolumeX, Sparkles, Zap, Target, TrendingUp, Code, Globe, Rocket, Star } from "lucide-react";
// // // import AboutMe from './AboutMe';
// // // import Profile from './Profile';
// // // import Projects from './Projects';
// // // import ContactPHX9000 from './Contact';
// // // import DynamicTimestamp from '../components/ui/DynamicTimeStamp';
// // // import WorkShowcase from "../animated-portfolio/WorkShowcase";
// // // import ProjectSections from "../animated-portfolio/ProjectSections";
// // // import Footer from '../animated-portfolio/Footer';
// // // import StickyScrollCards from './StickyScollCards';
// // // import AboutUsSection from './AboutUsSection';

// // // // Enhanced Floating Elements Component
// // // const FloatingElements = () => {
// // //   const floatingItems = [
// // //     { icon: Code, delay: 0, duration: 8, size: 28, color: "text-purple-400" },
// // //     { icon: Globe, delay: 1, duration: 10, size: 24, color: "text-blue-400" },
// // //     { icon: Rocket, delay: 2, duration: 9, size: 32, color: "text-pink-400" },
// // //     { icon: Star, delay: 3, duration: 7, size: 20, color: "text-yellow-400" },
// // //     { icon: Sparkles, delay: 4, duration: 11, size: 26, color: "text-cyan-400" },
// // //     { icon: Zap, delay: 5, duration: 6, size: 22, color: "text-green-400" },
// // //     { icon: Target, delay: 6, duration: 12, size: 30, color: "text-orange-400" },
// // //     { icon: TrendingUp, delay: 7, duration: 8, size: 24, color: "text-indigo-400" },
// // //   ];

// // //   return (
// // //     <div className="absolute inset-0 pointer-events-none z-5">
// // //       {floatingItems.map((item, index) => (
// // //         <motion.div
// // //           key={index}
// // //           className={`absolute ${item.color}/30`}
// // //           style={{
// // //             left: `${15 + (index * 10)}%`,
// // //             top: `${20 + (index * 8)}%`,
// // //           }}
// // //           animate={{
// // //             y: [-30, 30, -30],
// // //             x: [-15, 15, -15],
// // //             rotate: [0, 360],
// // //             scale: [1, 1.1, 1],
// // //             opacity: [0.3, 0.7, 0.3],
// // //           }}
// // //           transition={{
// // //             duration: item.duration,
// // //             delay: item.delay,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //           whileHover={{
// // //             scale: 1.5,
// // //             opacity: 1,
// // //             filter: "drop-shadow(0 0 10px currentColor)",
// // //           }}
// // //         >
// // //           <item.icon size={item.size} />
// // //         </motion.div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // // Enhanced Interactive Background with Advanced Effects
// // // const InteractiveBackground = () => {
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({
// // //         x: e.clientX / window.innerWidth,
// // //         y: e.clientY / window.innerHeight,
// // //       });
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   return (
// // //     <div className="absolute inset-0 overflow-hidden">
// // //       {/* Base gradient layer with enhanced animation */}
// // //       <motion.div
// // //         className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
// // //         style={{
// // //           x: mousePosition.x * 20,
// // //           y: mousePosition.y * 20,
// // //         }}
// // //         animate={{
// // //           background: [
// // //             "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 60% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
// // //           ],
// // //         }}
// // //         transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //       />

// // //       {/* Enhanced gradient overlay with more dynamic colors */}
// // //       <motion.div
// // //         className="absolute inset-0"
// // //         style={{
// // //           x: mousePosition.x * 25,
// // //           y: mousePosition.y * 25,
// // //         }}
// // //         animate={{
// // //           background: [
// // //             "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 60% 60%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)",
// // //             "radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)",
// // //           ],
// // //         }}
// // //         transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //       />
      
// // //       {/* Enhanced grid pattern with animation */}
// // //       <motion.div 
// // //         className="absolute inset-0 opacity-12"
// // //         animate={{
// // //           opacity: [0.08, 0.15, 0.08],
// // //         }}
// // //         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // //       >
// // //         <div className="absolute inset-0" style={{
// // //           backgroundImage: `
// // //             linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
// // //             linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
// // //           `,
// // //           backgroundSize: '50px 50px'
// // //         }} />
// // //       </motion.div>

// // //       {/* Enhanced floating orbs with more variety */}
// // //       <motion.div
// // //         className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-500/8 blur-3xl"
// // //         animate={{
// // //           x: [0, 60, 0],
// // //           y: [0, -40, 0],
// // //           scale: [1, 1.2, 1],
// // //           opacity: [0.3, 0.6, 0.3],
// // //         }}
// // //         transition={{
// // //           duration: 30,
// // //           repeat: Infinity,
// // //           ease: "easeInOut"
// // //         }}
// // //       />
// // //       <motion.div
// // //         className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/8 blur-3xl"
// // //         animate={{
// // //           x: [0, -50, 0],
// // //           y: [0, 50, 0],
// // //           scale: [1, 1.3, 1],
// // //           opacity: [0.2, 0.5, 0.2],
// // //         }}
// // //         transition={{
// // //           duration: 35,
// // //           repeat: Infinity,
// // //           ease: "easeInOut",
// // //           delay: 5
// // //         }}
// // //       />
// // //       <motion.div
// // //         className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-pink-500/6 blur-3xl"
// // //         animate={{
// // //           x: [0, 30, -30, 0],
// // //           y: [0, -30, 30, 0],
// // //           scale: [1, 1.1, 1.2, 1],
// // //           opacity: [0.2, 0.4, 0.2],
// // //         }}
// // //         transition={{
// // //           duration: 25,
// // //           repeat: Infinity,
// // //           ease: "easeInOut",
// // //           delay: 10
// // //         }}
// // //       />

// // //       {/* Enhanced nebula effect with more layers */}
// // //       <motion.div
// // //         className="absolute inset-0"
// // //         animate={{
// // //           background: [
// // //             "radial-gradient(ellipse at 30% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)",
// // //             "radial-gradient(ellipse at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)",
// // //             "radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
// // //             "radial-gradient(ellipse at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 60%)",
// // //           ],
// // //         }}
// // //         transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
// // //       />

// // //       {/* Additional light rays effect */}
// // //       <motion.div
// // //         className="absolute inset-0"
// // //         animate={{
// // //           background: [
// // //             "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(168, 85, 247, 0.05) 60deg, transparent 120deg)",
// // //             "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.05) 60deg, transparent 120deg)",
// // //             "conic-gradient(from 90deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.05) 60deg, transparent 120deg)",
// // //           ],
// // //         }}
// // //         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// // //       />

// // //       {/* Matrix rain effect overlay */}
// // //       <div className="absolute inset-0 opacity-5">
// // //         {[...Array(20)].map((_, i) => (
// // //           <motion.div
// // //             key={i}
// // //             className="absolute w-px h-8 bg-gradient-to-b from-purple-400 to-transparent"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //             }}
// // //             animate={{
// // //               y: [-50, window.innerHeight + 50],
// // //               opacity: [0, 1, 0],
// // //             }}
// // //             transition={{
// // //               duration: 3 + Math.random() * 2,
// // //               delay: Math.random() * 2,
// // //               repeat: Infinity,
// // //               ease: "linear",
// // //             }}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Particle System Component
// // // const ParticleSystem = () => {
// // //   const [particles, setParticles] = useState([]);
// // //   const canvasRef = useRef(null);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext('2d');
// // //     const particles = [];

// // //     // Initialize particles
// // //     for (let i = 0; i < 50; i++) {
// // //       particles.push({
// // //         x: Math.random() * window.innerWidth,
// // //         y: Math.random() * window.innerHeight,
// // //         vx: (Math.random() - 0.5) * 0.5,
// // //         vy: (Math.random() - 0.5) * 0.5,
// // //         size: Math.random() * 2 + 1,
// // //         opacity: Math.random() * 0.5 + 0.2,
// // //       });
// // //     }

// // //     const animate = () => {
// // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // //       particles.forEach(particle => {
// // //         particle.x += particle.vx;
// // //         particle.y += particle.vy;
        
// // //         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
// // //         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
// // //         ctx.beginPath();
// // //         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
// // //         ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
// // //         ctx.fill();
// // //       });
      
// // //       requestAnimationFrame(animate);
// // //     };

// // //     const handleResize = () => {
// // //       canvas.width = window.innerWidth;
// // //       canvas.height = window.innerHeight;
// // //     };

// // //     handleResize();
// // //     window.addEventListener('resize', handleResize);
// // //     animate();

// // //     return () => window.removeEventListener('resize', handleResize);
// // //   }, []);

// // //   return (
// // //     <canvas
// // //       ref={canvasRef}
// // //       className="absolute inset-0 pointer-events-none z-0"
// // //       style={{ opacity: 0.3 }}
// // //     />
// // //   );
// // // };

// // // // Enhanced Stats Component with Counter Animation
// // // const StatsSection = () => {
// // //   const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, tech: 0 });
// // //   const [hasAnimated, setHasAnimated] = useState(false);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting && !hasAnimated) {
// // //             setHasAnimated(true);
// // //             animateCounters();
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.5 }
// // //     );

// // //     const statsElement = document.querySelector('.stats-section');
// // //     if (statsElement) {
// // //       observer.observe(statsElement);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, [hasAnimated]);

// // //   const animateCounters = () => {
// // //     const targets = { projects: 150, clients: 50, years: 5, tech: 25 };
// // //     const duration = 2000;
// // //     const steps = 60;
// // //     const stepValue = Object.keys(targets).reduce((acc, key) => {
// // //       acc[key] = targets[key] / steps;
// // //       return acc;
// // //     }, {});

// // //     let currentStep = 0;
// // //     const interval = setInterval(() => {
// // //       currentStep++;
// // //       setCounts({
// // //         projects: Math.min(Math.floor(stepValue.projects * currentStep), targets.projects),
// // //         clients: Math.min(Math.floor(stepValue.clients * currentStep), targets.clients),
// // //         years: Math.min(Math.floor(stepValue.years * currentStep), targets.years),
// // //         tech: Math.min(Math.floor(stepValue.tech * currentStep), targets.tech),
// // //       });

// // //       if (currentStep >= steps) {
// // //         clearInterval(interval);
// // //       }
// // //     }, duration / steps);
// // //   };

// // //   const stats = [
// // //     { label: "Projects Completed", value: counts.projects + "+", icon: Target, color: "purple" },
// // //     { label: "Happy Clients", value: counts.clients + "+", icon: Sparkles, color: "blue" },
// // //     { label: "Years Experience", value: counts.years + "+", icon: TrendingUp, color: "teal" },
// // //     { label: "Technologies", value: counts.tech + "+", icon: Zap, color: "purple" },
// // //   ];

// // //   return (
// // //     <motion.div 
// // //       className="stats-section absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
// // //       initial={{ opacity: 0, y: 50 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ delay: 2, duration: 1 }}
// // //     >
// // //       <div className="flex gap-4 sm:gap-8">
// // //         {stats.map((stat, index) => (
// // //           <motion.div
// // //             key={stat.label}
// // //             className="text-center"
// // //             initial={{ opacity: 0, scale: 0.8 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
// // //           >
// // //             <div className="flex items-center justify-center mb-2">
// // //               <stat.icon className={`w-5 h-5 text-${stat.color}-400 mr-2`} />
// // //               <span className="text-2xl sm:text-3xl font-bold text-white">
// // //                 {stat.value}
// // //               </span>
// // //             </div>
// // //             <div className="text-xs sm:text-sm text-gray-400 font-medium">
// // //               {stat.label}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // // Enhanced CTA Button with Hover Effects
// // // const CTAButton = () => {
// // //   const [isHovered, setIsHovered] = useState(false);

// // //   return (
// // //     <motion.div
// // //       className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20"
// // //       initial={{ opacity: 0, y: 50 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ delay: 2.5, duration: 1 }}
// // //     >
// // //       <motion.button
// // //         className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg shadow-glow-purple-lg overflow-hidden interactive-glow"
// // //         whileHover={{ scale: 1.05 }}
// // //         whileTap={{ scale: 0.95 }}
// // //         onHoverStart={() => setIsHovered(true)}
// // //         onHoverEnd={() => setIsHovered(false)}
// // //       >
// // //         {/* <motion.div
// // //           className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
// // //           initial={{ x: "-100%" }}
// // //           animate={{ x: isHovered ? "0%" : "-100%" }}
// // //           transition={{ duration: 0.3 }}
// // //         />
// // //         <span className="relative flex items-center gap-2">
// // //           Explore Our Work
// // //           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // //         </span> */}
        
// // //         {/* Ripple effect */}
// // //         <motion.div
// // //           className="absolute inset-0 rounded-full bg-white/20"
// // //           initial={{ scale: 0, opacity: 0 }}
// // //           animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
// // //           transition={{ duration: 0.3 }}
// // //         />
// // //       </motion.button>
// // //     </motion.div>
// // //   );
// // // };

// // // // Enhanced RadialMenu component with better interactions
// // // const menuItems = [
// // //   { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
// // //   { label: "Work", angle: 90, href: "#work", icon: "💼" },
// // //   { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
// // //   { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
// // // ];

// // // const RadialMenu = () => {
// // //   const radius = 120;
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [hoveredItem, setHoveredItem] = useState(null);

// // //   const handleClick = (href, e) => {
// // //     e.preventDefault();
// // //     setIsOpen(false);

// // //     setTimeout(() => {
// // //       const id = href.replace("#", "");
// // //       const el = document.getElementById(id);
// // //       if (el) {
// // //         const yOffset = -40;
// // //         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // //         window.scrollTo({ top: y, behavior: "smooth" });
// // //       }
// // //     }, 400);
// // //   };

// // //   return (
// // //     <div className="fixed top-4 right-4 z-[100] text-white">
// // //       {/* Menu button */}
// // //       <motion.div
// // //         className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
// // //         animate={{ rotate: [0, 360] }}
// // //         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
// // //       >
// // //         <motion.button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
// // //           whileHover={{ 
// // //             scale: 1.05, 
// // //             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
// // //           }}
// // //           whileTap={{ scale: 0.98 }}
// // //           animate={{ 
// // //             boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// // //           }}
// // //           transition={{ duration: 2, repeat: Infinity }}
// // //         >
// // //           <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
// // //         </motion.button>
// // //       </motion.div>

// // //       {/* Menu Items and Overlay */}
// // //       <AnimatePresence>
// // //         {isOpen && (
// // //           <>
// // //             {/* Backdrop with Enhanced Dark Theme */}
// // //             <motion.div
// // //               className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               transition={{ duration: 0.4 }}
// // //               onClick={() => setIsOpen(false)}
// // //             />

// // //             {/* Enhanced Radial Menu Circle */}
// // //             <motion.div
// // //               className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
// // //               initial={{ opacity: 0, scale: 0 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               exit={{ opacity: 0, scale: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //             >
// // //               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
// // //               <div
// // //                 className="absolute inset-0 rounded-full pointer-events-none"
// // //                 style={{
// // //                   border: "1px solid rgba(168, 85, 247, 0.5)",
// // //                   background:
// // //                     "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
// // //                   transform: "scale(1.02102) rotate(50.904deg)",
// // //                 }}
// // //               >
// // //                 <div
// // //                   className="absolute inset-[15%] rounded-full pointer-events-none"
// // //                   style={{
// // //                     border: "1px solid rgba(168, 85, 247, 0.5)",
// // //                     background:
// // //                       "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
// // //                     transform: "scale(1.01705) rotate(52.56deg)",
// // //                   }}
// // //                 />
// // //               </div>
// // //               {/* Add inner glow */}
// // //               <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

// // //               {/* Menu Items */}
// // //               {menuItems.map((item) => {
// // //                 const angleRad = (item.angle * Math.PI) / 180;
// // //                 const x = radius * Math.cos(angleRad);
// // //                 const y = radius * Math.sin(angleRad);

// // //                 return (
// // //                   <div
// // //                     key={item.label}
// // //                     className="absolute z-[60]"
// // //                     style={{
// // //                       left: `calc(50% + ${x}px - 40px)`,
// // //                       top: `calc(50% - ${y}px - 40px)`,
// // //                     }}
// // //                   >
// // //                     <motion.div 
// // //                       className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
// // //                       onHoverStart={() => setHoveredItem(item.label)}
// // //                       onHoverEnd={() => setHoveredItem(null)}
// // //                     >
// // //                       <motion.a
// // //                         href={item.href}
// // //                         className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
// // //                         whileHover={{ 
// // //                           scale: 1.1, 
// // //                           boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
// // //                         }}
// // //                         whileTap={{ scale: 0.98 }}
// // //                         animate={{ 
// // //                           boxShadow: hoveredItem === item.label 
// // //                             ? "0 0 20px rgba(168, 85, 247, 0.8)"
// // //                             : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// // //                         }}
// // //                         transition={{ duration: 2, repeat: Infinity }}
// // //                         onClick={(e) => handleClick(item.href, e)}
// // //                         tabIndex={isOpen ? 0 : -1}
// // //                         aria-label={item.label}
// // //                       >
// // //                         <span className="text-lg mb-1">{item.icon}</span>
// // //                         <span className="animate-text-shimmer text-xs">{item.label}</span>
// // //                       </motion.a>
// // //                     </motion.div>
// // //                   </div>
// // //                 );
// // //               })}
// // //               <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
// // //             </motion.div>
// // //           </>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // // Enhanced Hero Content Component
// // // const HeroContent = () => {
// // //   const [currentWord, setCurrentWord] = useState(0);
// // //   const words = ["ACCELERATING", "DIGITAL", "GROWTH"];
  
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentWord((prev) => (prev + 1) % words.length);
// // //     }, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10">
// // //       {/* Static Company Name */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -40 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.8 }}
// // //         className="mb-8"
// // //       >
// // //         <h2  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
// // //                 style={{ textShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
// // //         >
// // //           <motion.span
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.1 }}
// // //             className="inline-block animate-text-shimmer"
// // //           >
// // //             Sklassics Technologies
// // //           </motion.span>
// // //           {' '}
// // //           <motion.span
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //             className="inline-block text-blue-400 animate-text-shimmer"
// // //           >
// // //             Private Limited
// // //           </motion.span>
// // //         </h2>
// // //       </motion.div>

// // //       {/* Enhanced Main Title with Advanced Typewriter Effect */}
// // //       <div className="mb-8 relative">
// // //         <motion.h1
// // //           key={currentWord}
// // //           initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
// // //           animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
// // //           exit={{ opacity: 0, y: -30, scale: 0.8, rotateX: 15 }}
// // //           transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
// // //           className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 relative"
// // //           style={{ 
// // //             textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
// // //             transformStyle: "preserve-3d"
// // //           }}
// // //         >
// // //           <span className="gradient-text-animated bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
// // //             {words[currentWord]}
// // //           </span>
// // //         </motion.h1>
        
// // //         {/* Enhanced animated underline with glow */}
// // //         <motion.div
// // //           className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full mx-auto relative"
// // //           initial={{ width: 0, opacity: 0 }}
// // //           animate={{ width: "70%", opacity: 1 }}
// // //           transition={{ delay: 0.5, duration: 1.2 }}
// // //           style={{
// // //             boxShadow: "0 0 10px rgba(168, 85, 247, 0.6)",
// // //           }}
// // //         >
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
// // //             animate={{
// // //               opacity: [0.5, 1, 0.5],
// // //               scale: [1, 1.1, 1],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           />
// // //         </motion.div>
// // //       </div>

// // //       {/* Enhanced Subtitle with Staggered Animation */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 40, scale: 0.9 }}
// // //         animate={{ opacity: 1, y: 0, scale: 1 }}
// // //         transition={{ delay: 1.2, duration: 1, type: "spring" }}
// // //         className="max-w-4xl mx-auto"
// // //       >
// // //         <motion.p 
// // //           className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
// // //           animate={{
// // //             textShadow: [
// // //               "0 0 5px rgba(168, 85, 247, 0.3)",
// // //               "0 0 15px rgba(168, 85, 247, 0.6)",
// // //               "0 0 5px rgba(168, 85, 247, 0.3)",
// // //             ],
// // //           }}
// // //           transition={{ duration: 3, repeat: Infinity }}
// // //         >
// // //           Transforming ideas into{" "}
// // //           <span className="text-purple-400 font-semibold relative">
// // //             digital excellence
// // //             <motion.div
// // //               className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"
// // //               animate={{ width: [0, "100%", 0] }}
// // //               transition={{ duration: 2, repeat: Infinity, delay: 1 }}
// // //             />
// // //           </span>
// // //           {" "}with cutting-edge technology and innovative solutions
// // //         </motion.p>
// // //       </motion.div>

// // //       {/* Enhanced Stats Grid with Advanced Animations */}
// // //       <motion.div
// // //         className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
// // //         initial={{ opacity: 0, y: 60, scale: 0.8 }}
// // //         animate={{ opacity: 1, y: 0, scale: 1 }}
// // //         transition={{ delay: 1.8, duration: 1.2, type: "spring" }}
// // //       >
// // //         {[
// // //           { label: "Issues Resolve", value: "1000+", icon: Target, color: "purple", delay: 0 },
// // //           { label: "Client Retention Rate", value: "80%", icon: Sparkles, color: "blue", delay: 0.1 },
// // //           { label: "Workshops Conducted", value: "50+", icon: TrendingUp, color: "teal", delay: 0.2 },
// // //           { label: "Technologies", value: "25+", icon: Zap, color: "purple", delay: 0.3 },
// // //         ].map((stat, index) => (
// // //           <motion.div
// // //             key={stat.label}
// // //             className="text-center group relative"
// // //             initial={{ opacity: 0, scale: 0.5, y: 50 }}
// // //             animate={{ opacity: 1, scale: 1, y: 0 }}
// // //             transition={{ delay: 2 + stat.delay, duration: 0.8, type: "spring" }}
// // //             whileHover={{ 
// // //               scale: 1.08, 
// // //               y: -5,
// // //               transition: { duration: 0.3 }
// // //             }}
// // //           >
// // //             <div className="relative p-6 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-glow-purple-lg group-hover:bg-dark-800/60">
// // //               {/* Animated background glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-20"
// // //                 animate={{
// // //                   background: [
// // //                     "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
// // //                     "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
// // //                     "radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
// // //                   ],
// // //                 }}
// // //                 transition={{ duration: 3, repeat: Infinity }}
// // //               />
              
// // //               <div className="flex flex-col items-center space-y-4 relative z-10">
// // //                 <motion.div 
// // //                   className={`p-4 rounded-full bg-${stat.color}-500/15 border border-${stat.color}-500/40 group-hover:bg-${stat.color}-500/25`}
// // //                   whileHover={{ scale: 1.1, rotate: 5 }}
// // //                   animate={{
// // //                     boxShadow: [
// // //                       `0 0 10px rgba(${stat.color === 'purple' ? '168, 85, 247' : stat.color === 'blue' ? '59, 130, 246' : stat.color === 'teal' ? '20, 184, 166' : '168, 85, 247'}, 0.3)`,
// // //                       `0 0 20px rgba(${stat.color === 'purple' ? '168, 85, 247' : stat.color === 'blue' ? '59, 130, 246' : stat.color === 'teal' ? '20, 184, 166' : '168, 85, 247'}, 0.6)`,
// // //                       `0 0 10px rgba(${stat.color === 'purple' ? '168, 85, 247' : stat.color === 'blue' ? '59, 130, 246' : stat.color === 'teal' ? '20, 184, 166' : '168, 85, 247'}, 0.3)`,
// // //                     ],
// // //                   }}
// // //                   transition={{ duration: 2, repeat: Infinity }}
// // //                 >
// // //                   <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
// // //                 </motion.div>
// // //                 <motion.div 
// // //                   className="text-4xl md:text-5xl font-bold text-white"
// // //                   animate={{
// // //                     textShadow: [
// // //                       "0 0 5px rgba(168, 85, 247, 0.3)",
// // //                       "0 0 15px rgba(168, 85, 247, 0.6)",
// // //                       "0 0 5px rgba(168, 85, 247, 0.3)",
// // //                     ],
// // //                   }}
// // //                   transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
// // //                 >
// // //                   {stat.value}
// // //                 </motion.div>
// // //                 <div className="text-sm text-gray-400 font-medium">
// // //                   {stat.label}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>

// // //       {/* Enhanced CTA Button with Advanced Effects */}
// // //       <motion.div
// // //         className="mt-16"
// // //         initial={{ opacity: 0, y: 40, scale: 0.8 }}
// // //         animate={{ opacity: 1, y: 0, scale: 1 }}
// // //         transition={{ delay: 3, duration: 1, type: "spring" }}
// // //       >
// // //         <motion.button
// // //           className="group relative px-5 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full text-white font-semibold text-xl shadow-glow-purple-lg overflow-hidden"
// // //           whileHover={{ 
// // //             scale: 1.05, 
// // //             y: -3,
// // //             boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.6)",
// // //           }}
// // //           whileTap={{ scale: 0.98 }}
// // //           animate={{
// // //             boxShadow: [
// // //               "0 0 20px rgba(168, 85, 247, 0.4)",
// // //               "0 0 40px rgba(168, 85, 247, 0.7)",
// // //               "0 0 20px rgba(168, 85, 247, 0.4)"
// // //             ]
// // //           }}
// // //           transition={{ duration: 3, repeat: Infinity }}
// // //         >
// // //           <span className="relative flex items-center gap-4 z-10">
// // //             <span>Explore Our Work</span>
// // //             <motion.div
// // //               animate={{ x: [0, 5, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ArrowRight className="w-4 h-4" />
// // //             </motion.div>
// // //           </span>
          
// // //           {/* Enhanced animated gradient overlay */}
// // //           <motion.div
// // //             className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20"
// // //             animate={{
// // //               x: ["-100%", "100%"],
// // //               opacity: [0.3, 0.6, 0.3],
// // //             }}
// // //             transition={{
// // //               duration: 4,
// // //               repeat: Infinity,
// // //               ease: "linear"
// // //             }}
// // //           />
          
// // //           {/* Ripple effect on hover */}
// // //           <motion.div
// // //             className="absolute inset-0 rounded-full bg-white/10"
// // //             initial={{ scale: 0, opacity: 0 }}
// // //             whileHover={{ scale: 1, opacity: 1 }}
// // //             transition={{ duration: 0.3 }}
// // //           />
// // //         </motion.button>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // const sectionLinks = [
// // //   { label: "Profile", href: "#profile" },
// // //   { label: "Work", href: "#work" },
// // //   { label: "Projects", href: "#projects" },
// // //   { label: "About", href: "#about" },
// // // ];

// // // const Navbar = () => {}
 
// // // const Home = () => {
// // //   const [rotation, setRotation] = useState(0);
// // //   const [scrollY, setScrollY] = useState(0);
// // //   const containerRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end start"]
// // //   });

// // //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
// // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setRotation((prev) => prev + 0.1);
// // //     }, 50);

// // //     const handleScroll = () => {
// // //       setScrollY(window.scrollY);
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => {
// // //       clearInterval(interval);
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div ref={containerRef} id="home" className="relative w-full min-h-screen bg-dark-950 overflow-hidden">
// // //         <Navbar />
        
// // //         {/* Interactive Background */}
// // //         <InteractiveBackground />
        
// // //         {/* Particle System */}
// // //         <ParticleSystem />
        
// // //         {/* Floating Elements */}
// // //         <FloatingElements />
        
// // //         {/* RadialMenu */}
// // //         <RadialMenu />

// // //         {/* Enhanced Hero Content */}
// // //         <motion.div
// // //           style={{ opacity }}
// // //           className="absolute inset-0 z-10"
// // //         >
// // //           <HeroContent />
// // //         </motion.div>

// // //         {/* Enhanced Scroll Down Indicator */}
// // //         <motion.div
// // //           className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-300 text-sm flex flex-col items-center z-10"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 4, duration: 1 }}
// // //         >
// // //           <motion.span 
// // //             className="tracking-widest mb-4 text-xs font-medium"
// // //             animate={{
// // //               textShadow: [
// // //                 "0 0 5px rgba(168, 85, 247, 0.3)",
// // //                 "0 0 10px rgba(168, 85, 247, 0.6)",
// // //                 "0 0 5px rgba(168, 85, 247, 0.3)",
// // //               ],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             SCROLL DOWN
// // //           </motion.span>
// // //           <motion.div
// // //             className="relative w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center pt-3 shadow-glow-purple"
// // //             animate={{ 
// // //               y: [0, 10, 0],
// // //               boxShadow: [
// // //                 "0 0 10px rgba(168, 85, 247, 0.4)",
// // //                 "0 0 20px rgba(168, 85, 247, 0.7)",
// // //                 "0 0 10px rgba(168, 85, 247, 0.4)",
// // //               ],
// // //             }}
// // //             transition={{ 
// // //               y: { repeat: Infinity, duration: 2 },
// // //               boxShadow: { repeat: Infinity, duration: 3 }
// // //             }}
// // //           >
// // //             <motion.div 
// // //               animate={{ 
// // //                 height: [8, 16, 8],
// // //                 opacity: [0.5, 1, 0.5],
// // //               }}
// // //               transition={{ repeat: Infinity, duration: 2 }}
// // //               className="w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"
// // //             />
// // //             {/* Pulsing dots */}
// // //             <motion.div
// // //               className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
// // //               animate={{
// // //                 scale: [1, 1.5, 1],
// // //                 opacity: [0.5, 1, 0.5],
// // //               }}
// // //               transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
// // //             />
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
      
// // //       <div id="profile" className="scroll-mt-20">
// // //         <Profile />
// // //       </div>

// // //       <div id="work" className="scroll-mt-20">
// // //         <WorkShowcase />
// // //       </div>

// // //       <div id="projects" className="scroll-mt-80">
// // //         <StickyScrollCards />
// // //       </div>

// // //       <div id="about" className="scroll-mt-20">
// // //         <AboutUsSection />
// // //       </div>

// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState, useRef } from 'react';
// // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // import { BookOpen, ArrowRight, Play, Pause, Volume2, VolumeX, Sparkles, Zap, Target, TrendingUp, Code, Globe, Rocket, Star } from "lucide-react";
// // import AboutMe from './AboutMe';
// // import Profile from './Profile';
// // import Projects from './Projects';
// // import ContactPHX9000 from './Contact';
// // import DynamicTimestamp from '../components/ui/DynamicTimeStamp';
// // import WorkShowcase from "../animated-portfolio/WorkShowcase";
// // import ProjectSections from "../animated-portfolio/ProjectSections";
// // import Footer from '../animated-portfolio/Footer';
// // import StickyScrollCards from './StickyScollCards';
// // import AboutUsSection from './AboutUsSection';

// // // Enhanced Interactive Background with Simplified Effects
// // const InteractiveBackground = () => {
// //   return (
// //     <div className="absolute inset-0 overflow-hidden bg-black">
// //       {/* Enhanced Globe with better visibility */}
// //       <motion.div
// //         animate={{ rotate: 360 }}
// //         transition={{ 
// //           repeat: Infinity, 
// //           duration: 120,  // Slower rotation
// //           ease: "linear" 
// //         }}
// //         className="absolute inset-0 flex justify-center items-center z-0"
// //       >
// //         <img
// //           src="https://matthewparrilla.com/static/img/earth_at_night.gif"
// //           alt="Globe"
// //           className="w-full max-w-[900px] h-auto object-contain"
// //           style={{
// //             opacity: 0.8,
// //             filter: "brightness(1.3) contrast(1.2) saturate(1.5)"
// //           }}
// //         />
// //       </motion.div>
      
// //       {/* Dark overlay to ensure text readability */}
// //       <div className="absolute inset-0 bg-black/40 z-1"></div>
// //     </div>
// //   );
// // };
// // // const InteractiveBackground = () => {
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({
// // //         x: e.clientX / window.innerWidth,
// // //         y: e.clientY / window.innerHeight,
// // //       });
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   return (
// // //     <div className="absolute inset-0 overflow-hidden">
// // //       {/* Rotating Globe - Keeping this */}
// // //       <motion.div
// // //         animate={{ rotate: 360 }}
// // //         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
// // //         className="absolute inset-0 flex justify-center items-center z-0 opacity-10"
// // //       >
// // //         <img
// // //           src="https://matthewparrilla.com/static/img/earth_at_night.gif"
// // //           alt="Globe"
// // //           className="w-[900px] h-[900px] object-contain"
// // //         />
// // //       </motion.div>

// // //       {/* Base gradient layer */}
// // //       <motion.div
// // //         className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
// // //         style={{
// // //           x: mousePosition.x * 20,
// // //           y: mousePosition.y * 20,
// // //         }}
// // //       />

// // //       {/* Simple grid pattern without animation */}
// // //       <div className="absolute inset-0 opacity-12">
// // //         <div className="absolute inset-0" style={{
// // //           backgroundImage: `
// // //             linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
// // //             linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
// // //           `,
// // //           backgroundSize: '50px 50px'
// // //         }} />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // Particle System Component - Keeping this
// // const ParticleSystem = () => {
// //   const [particles, setParticles] = useState([]);
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext('2d');
// //     const particles = [];

// //     // Initialize particles
// //     for (let i = 0; i < 50; i++) {
// //       particles.push({
// //         x: Math.random() * window.innerWidth,
// //         y: Math.random() * window.innerHeight,
// //         vx: (Math.random() - 0.5) * 0.5,
// //         vy: (Math.random() - 0.5) * 0.5,
// //         size: Math.random() * 2 + 1,
// //         opacity: Math.random() * 0.5 + 0.2,
// //       });
// //     }

// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// //       particles.forEach(particle => {
// //         particle.x += particle.vx;
// //         particle.y += particle.vy;
        
// //         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
// //         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
// //         ctx.beginPath();
// //         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
// //         ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
// //         ctx.fill();
// //       });
      
// //       requestAnimationFrame(animate);
// //     };

// //     const handleResize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };

// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     animate();

// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className="absolute inset-0 pointer-events-none z-0"
// //       style={{ opacity: 0.3 }}
// //     />
// //   );
// // };
// // // Enhanced Stats Component with Counter Animation
// // const StatsSection = () => {
// //   const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, tech: 0 });
// //   const [hasAnimated, setHasAnimated] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting && !hasAnimated) {
// //             setHasAnimated(true);
// //             animateCounters();
// //           }
// //         });
// //       },
// //       { threshold: 0.5 }
// //     );

// //     const statsElement = document.querySelector('.stats-section');
// //     if (statsElement) {
// //       observer.observe(statsElement);
// //     }

// //     return () => observer.disconnect();
// //   }, [hasAnimated]);

// //   const animateCounters = () => {
// //     const targets = { projects: 150, clients: 50, years: 5, tech: 25 };
// //     const duration = 2000;
// //     const steps = 60;
// //     const stepValue = Object.keys(targets).reduce((acc, key) => {
// //       acc[key] = targets[key] / steps;
// //       return acc;
// //     }, {});

// //     let currentStep = 0;
// //     const interval = setInterval(() => {
// //       currentStep++;
// //       setCounts({
// //         projects: Math.min(Math.floor(stepValue.projects * currentStep), targets.projects),
// //         clients: Math.min(Math.floor(stepValue.clients * currentStep), targets.clients),
// //         years: Math.min(Math.floor(stepValue.years * currentStep), targets.years),
// //         tech: Math.min(Math.floor(stepValue.tech * currentStep), targets.tech),
// //       });

// //       if (currentStep >= steps) {
// //         clearInterval(interval);
// //       }
// //     }, duration / steps);
// //   };

// //   const stats = [
// //     { label: "Projects Completed", value: counts.projects + "+", icon: Target, color: "purple" },
// //     { label: "Happy Clients", value: counts.clients + "+", icon: Sparkles, color: "blue" },
// //     { label: "Years Experience", value: counts.years + "+", icon: TrendingUp, color: "teal" },
// //     { label: "Technologies", value: counts.tech + "+", icon: Zap, color: "purple" },
// //   ];

// //   return (
// //     <motion.div 
// //       className="stats-section absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ delay: 2, duration: 1 }}
// //     >
// //       <div className="flex gap-4 sm:gap-8">
// //         {stats.map((stat, index) => (
// //           <motion.div
// //             key={stat.label}
// //             className="text-center"
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
// //           >
// //             <div className="flex items-center justify-center mb-2">
// //               <stat.icon className={`w-5 h-5 text-${stat.color}-400 mr-2`} />
// //               <span className="text-2xl sm:text-3xl font-bold text-white">
// //                 {stat.value}
// //               </span>
// //             </div>
// //             <div className="text-xs sm:text-sm text-gray-400 font-medium">
// //               {stat.label}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // Enhanced RadialMenu component with better interactions
// // const menuItems = [
// //   { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
// //   { label: "Work", angle: 90, href: "#work", icon: "💼" },
// //   { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
// //   { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
// // ];

// // const RadialMenu = () => {
// //   const radius = 120;
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [hoveredItem, setHoveredItem] = useState(null);

// //   const handleClick = (href, e) => {
// //     e.preventDefault();
// //     setIsOpen(false);

// //     setTimeout(() => {
// //       const id = href.replace("#", "");
// //       const el = document.getElementById(id);
// //       if (el) {
// //         const yOffset = -40;
// //         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //         window.scrollTo({ top: y, behavior: "smooth" });
// //       }
// //     }, 400);
// //   };

// //   return (
// //     <div className="fixed top-4 right-4 z-[100] text-white">
// //       {/* Menu button */}
// //       <motion.div
// //         className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
// //         animate={{ rotate: [0, 360] }}
// //         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
// //       >
// //         <motion.button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
// //           whileHover={{ 
// //             scale: 1.05, 
// //             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
// //           }}
// //           whileTap={{ scale: 0.98 }}
// //           animate={{ 
// //             boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// //           }}
// //           transition={{ duration: 2, repeat: Infinity }}
// //         >
// //           <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
// //         </motion.button>
// //       </motion.div>

// //       {/* Menu Items and Overlay */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <>
// //             {/* Backdrop with Enhanced Dark Theme */}
// //             <motion.div
// //               className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.4 }}
// //               onClick={() => setIsOpen(false)}
// //             />

// //             {/* Enhanced Radial Menu Circle */}
// //             <motion.div
// //               className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
// //               initial={{ opacity: 0, scale: 0 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0 }}
// //               transition={{ duration: 0.5 }}
// //             >
// //               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
// //               <div
// //                 className="absolute inset-0 rounded-full pointer-events-none"
// //                 style={{
// //                   border: "1px solid rgba(168, 85, 247, 0.5)",
// //                   background:
// //                     "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
// //                   transform: "scale(1.02102) rotate(50.904deg)",
// //                 }}
// //               >
// //                 <div
// //                   className="absolute inset-[15%] rounded-full pointer-events-none"
// //                   style={{
// //                     border: "1px solid rgba(168, 85, 247, 0.5)",
// //                     background:
// //                       "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
// //                     transform: "scale(1.01705) rotate(52.56deg)",
// //                   }}
// //                 />
// //               </div>
// //               {/* Add inner glow */}
// //               <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

// //               {/* Menu Items */}
// //               {menuItems.map((item) => {
// //                 const angleRad = (item.angle * Math.PI) / 180;
// //                 const x = radius * Math.cos(angleRad);
// //                 const y = radius * Math.sin(angleRad);

// //                 return (
// //                   <div
// //                     key={item.label}
// //                     className="absolute z-[60]"
// //                     style={{
// //                       left: `calc(50% + ${x}px - 40px)`,
// //                       top: `calc(50% - ${y}px - 40px)`,
// //                     }}
// //                   >
// //                     <motion.div 
// //                       className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
// //                       onHoverStart={() => setHoveredItem(item.label)}
// //                       onHoverEnd={() => setHoveredItem(null)}
// //                     >
// //                       <motion.a
// //                         href={item.href}
// //                         className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
// //                         whileHover={{ 
// //                           scale: 1.1, 
// //                           boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
// //                         }}
// //                         whileTap={{ scale: 0.98 }}
// //                         animate={{ 
// //                           boxShadow: hoveredItem === item.label 
// //                             ? "0 0 20px rgba(168, 85, 247, 0.8)"
// //                             : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// //                         }}
// //                         transition={{ duration: 2, repeat: Infinity }}
// //                         onClick={(e) => handleClick(item.href, e)}
// //                         tabIndex={isOpen ? 0 : -1}
// //                         aria-label={item.label}
// //                       >
// //                         <span className="text-lg mb-1">{item.icon}</span>
// //                         <span className="animate-text-shimmer text-xs">{item.label}</span>
// //                       </motion.a>
// //                     </motion.div>
// //                   </div>
// //                 );
// //               })}
// //               <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // // Enhanced Hero Content Component
// // const HeroContent = () => {
// //   const [currentWord, setCurrentWord] = useState(0);
// //   const words = ["ACCELERATING", "DIGITAL", "GROWTH"];
  
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentWord((prev) => (prev + 1) % words.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10">
// //       {/* Static Company Name */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="mb-8"
// //       >
// //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// //           <motion.span
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.1 }}
// //           >
// //             Sklassics Technologies
// //           </motion.span>
// //           {' '}
// //           <motion.span
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //             className="text-blue-400"
// //           >
// //             Private Limited
// //           </motion.span>
// //         </h2>
// //       </motion.div>

// //       {/* Main Title with Typewriter Effect - Now in purple */}
// //       <div className="mb-8 relative">
// //         <motion.h1
// //           key={currentWord}
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -30 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-purple-400"
// //         >
// //           {words[currentWord]}
// //         </motion.h1>
        
// //         {/* Simple animated underline */}
// //         <motion.div
// //           className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
// //           initial={{ width: 0 }}
// //           animate={{ width: "70%" }}
// //           transition={{ delay: 0.5, duration: 1.2 }}
// //         />
// //       </div>

// //       {/* Subtitle */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 1.2, duration: 1 }}
// //         className="max-w-4xl mx-auto"
// //       >
// //         <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
// //           Transforming ideas into{" "}
// //           <span className="text-purple-400 font-semibold">
// //             digital excellence
// //           </span>
// //           {" "}with cutting-edge technology and innovative solutions
// //         </p>
// //       </motion.div>

// //       {/* Stats Grid */}
// //       <motion.div
// //         className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
// //         initial={{ opacity: 0, y: 60 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 1.8, duration: 1.2 }}
// //       >
// //         {[
// //           { label: "Issues Resolve", value: "1000+", icon: Target, color: "purple", delay: 0 },
// //           { label: "Client Retention Rate", value: "80%", icon: Sparkles, color: "blue", delay: 0.1 },
// //           { label: "Workshops Conducted", value: "50+", icon: TrendingUp, color: "teal", delay: 0.2 },
// //           { label: "Technologies", value: "25+", icon: Zap, color: "purple", delay: 0.3 },
// //         ].map((stat, index) => (
// //           <motion.div
// //             key={stat.label}
// //             className="text-center p-4 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-purple-500/30"
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 2 + stat.delay, duration: 0.8 }}
// //           >
// //             <div className="flex flex-col items-center space-y-3">
// //               <div className={`p-3 rounded-full bg-${stat.color}-500/15 border border-${stat.color}-500/40`}>
// //                 <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
// //               </div>
// //               <div className="text-3xl md:text-4xl font-bold text-white">
// //                 {stat.value}
// //               </div>
// //               <div className="text-xs text-gray-400 font-medium">
// //                 {stat.label}
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // };
// // const sectionLinks = [
// //   { label: "Profile", href: "#profile" },
// //   { label: "Work", href: "#work" },
// //   { label: "Projects", href: "#projects" },
// //   { label: "About", href: "#about" },
// // ];

// // const Navbar = () => {}

// // const Home = () => {
// //   const [rotation, setRotation] = useState(0);
// //   const [scrollY, setScrollY] = useState(0);
// //   const containerRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end start"]
// //   });

// //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
// //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setRotation((prev) => prev + 0.1);
// //     }, 50);

// //     const handleScroll = () => {
// //       setScrollY(window.scrollY);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => {
// //       clearInterval(interval);
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div ref={containerRef} id="home" className="relative w-full min-h-screen bg-dark-950 overflow-hidden">
// //         <Navbar />
        
// //         {/* Interactive Background - Now simplified */}
// //         <InteractiveBackground />
        
// //         {/* Particle System - Keeping this */}
// //         <ParticleSystem />
        
// //         {/* RadialMenu - Keeping this */}
// //         <RadialMenu />

// //         {/* Enhanced Hero Content - Keeping this */}
// //         <motion.div
// //           style={{ opacity }}
// //           className="absolute inset-0 z-10"
// //         >
// //           <HeroContent />
// //         </motion.div>

// //         {/* Enhanced Scroll Down Indicator - Keeping this */}
// //         <motion.div
// //           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-300 text-sm flex flex-col items-center z-10"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 4, duration: 1 }}
// //         >
// //           <motion.span 
// //             className="tracking-widest mb-4 text-xs font-medium"
// //             animate={{
// //               textShadow: [
// //                 "0 0 5px rgba(168, 85, 247, 0.3)",
// //                 "0 0 10px rgba(168, 85, 247, 0.6)",
// //                 "0 0 5px rgba(168, 85, 247, 0.3)",
// //               ],
// //             }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             SCROLL DOWN
// //           </motion.span>
// //           <motion.div
// //             className="relative w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center pt-3 shadow-glow-purple"
// //             animate={{ 
// //               y: [0, 10, 0],
// //               boxShadow: [
// //                 "0 0 10px rgba(168, 85, 247, 0.4)",
// //                 "0 0 20px rgba(168, 85, 247, 0.7)",
// //                 "0 0 10px rgba(168, 85, 247, 0.4)",
// //               ],
// //             }}
// //             transition={{ 
// //               y: { repeat: Infinity, duration: 2 },
// //               boxShadow: { repeat: Infinity, duration: 3 }
// //             }}
// //           >
// //             <motion.div 
// //               animate={{ 
// //                 height: [8, 16, 8],
// //                 opacity: [0.5, 1, 0.5],
// //               }}
// //               transition={{ repeat: Infinity, duration: 2 }}
// //               className="w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"
// //             />
// //             <motion.div
// //               className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
// //               animate={{
// //                 scale: [1, 1.5, 1],
// //                 opacity: [0.5, 1, 0.5],
// //               }}
// //               transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
// //             />
// //           </motion.div>
// //         </motion.div>
// //       </div>
      
// //       <div id="profile" className="scroll-mt-20">
// //         <Profile />
// //       </div>

// //       <div id="work" className="scroll-mt-20">
// //         <WorkShowcase />
// //       </div>

// //       <div id="projects" className="scroll-mt-80">
// //         <StickyScrollCards />
// //       </div>

// //       <div id="about" className="scroll-mt-20">
// //         <AboutUsSection />
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // };

// // export default Home;


// import React, { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { Target, Sparkles, TrendingUp, Zap, ArrowRight } from "lucide-react";
// import Footer from '../animated-portfolio/Footer';
// import StickyScrollCards from './StickyScollCards';
// import AboutUsSection from './AboutUsSection';
// import WorkShowcase from "../animated-portfolio/WorkShowcase";
// import Profile from './Profile';

// const InteractiveBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden bg-black">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ 
//           repeat: Infinity, 
//           duration: 120,
//           ease: "linear" 
//         }}
//         className="absolute inset-0 flex justify-center items-center z-0"
//       >
//         <img
//           src="https://matthewparrilla.com/static/img/earth_at_night.gif"
//           alt="Globe"
//           className="w-full max-w-[900px] h-auto object-contain"
//           style={{
//             opacity: 0.8,
//             filter: "brightness(1.3) contrast(1.2) saturate(1.5)"
//           }}
//         />
//       </motion.div>
//       <div className="absolute inset-0 bg-black/40 z-1"></div>
//     </div>
//   );
// };

// const ParticleSystem = () => {
//   const [particles, setParticles] = useState([]);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const particles = [];

//     for (let i = 0; i < 50; i++) {
//       particles.push({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.2,
//       });
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;
        
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
//         ctx.fill();
//       });
      
//       requestAnimationFrame(animate);
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     animate();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-none z-0"
//       style={{ opacity: 0.3 }}
//     />
//   );
// };

// const RadialMenu = () => {
//   const radius = 120;
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
//         className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
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
//               className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
//               <div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 style={{
//                   border: "1px solid rgba(168, 85, 247, 0.5)",
//                   background:
//                     "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                   transform: "scale(1.02102) rotate(50.904deg)",
//                 }}
//               >
//                 <div
//                   className="absolute inset-[15%] rounded-full pointer-events-none"
//                   style={{
//                     border: "1px solid rgba(168, 85, 247, 0.5)",
//                     background:
//                       "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                     transform: "scale(1.01705) rotate(52.56deg)",
//                   }}
//                 />
//               </div>
//               <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

//               {menuItems.map((item) => {
//                 const angleRad = (item.angle * Math.PI) / 180;
//                 const x = radius * Math.cos(angleRad);
//                 const y = radius * Math.sin(angleRad);

//                 return (
//                   <div
//                     key={item.label}
//                     className="absolute z-[60]"
//                     style={{
//                       left: `calc(50% + ${x}px - 40px)`,
//                       top: `calc(50% - ${y}px - 40px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
//               <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const HeroSection = () => {
//   const [currentWord, setCurrentWord] = useState(0);
//   const words = ["ACCELERATING", "DIGITAL", "GROWTH"];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex flex-col items-center justify-center text-white px-4 text-center z-10">
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mb-8"
//       >
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//           <motion.span
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//           >
//             Sklassics Technologies
//           </motion.span>
//           {' '}
//           <motion.span
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-blue-400"
//           >
//             Private Limited
//           </motion.span>
//         </h2>
//       </motion.div>

//       <div className="mb-8 relative">
//         <motion.h1
//           key={currentWord}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-purple-400"
//         >
//           {words[currentWord]}
//         </motion.h1>
        
//         <motion.div
//           className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
//           initial={{ width: 0 }}
//           animate={{ width: "70%" }}
//           transition={{ delay: 0.5, duration: 1.2 }}
//         />
//       </div>
//     </div>
//   );
// };

// const DigitalExcellenceSection = () => {
//   return (
//     <div className="relative w-full min-h-screen bg-dark-950 flex flex-col items-center justify-center px-4 py-20 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="max-w-4xl mx-auto mb-16"
//       >
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//           Transforming ideas into <span className="text-purple-400">digital excellence</span>
//         </h2>
//         <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
//           with cutting-edge technology and innovative solutions
//         </p>
//       </motion.div>

//       <motion.div
//         className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 1 }}
//       >
//         {[
//           { label: "Issues Resolve", value: "1000+", icon: Target, color: "purple" },
//           { label: "Client Retention Rate", value: "80%", icon: Sparkles, color: "blue" },
//           { label: "Workshops Conducted", value: "50+", icon: TrendingUp, color: "teal" },
//           { label: "Technologies", value: "25+", icon: Zap, color: "purple" },
//         ].map((stat, index) => (
//           <motion.div
//             key={stat.label}
//             className="text-center p-6 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all"
//             whileHover={{ 
//               scale: 1.05,
//               y: -5,
//               boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
//             }}
//             transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
//           >
//             <div className="flex flex-col items-center space-y-4">
//               <div className={`p-4 rounded-full bg-${stat.color}-500/15 border border-${stat.color}-500/40`}>
//                 <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
//               </div>
//               <div className="text-4xl md:text-5xl font-bold text-white">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-400 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const Home = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <>
//       <div ref={containerRef} className="relative w-full min-h-screen bg-dark-950 overflow-hidden">
//         <InteractiveBackground />
//         <ParticleSystem />
//         <RadialMenu />
//         <HeroSection />
//       </div>

//       <DigitalExcellenceSection />

//       <div id="profile" className="scroll-mt-20">
//         <Profile />
//       </div>

//       <div id="work" className="scroll-mt-20">
//         <WorkShowcase />
//       </div>

//       <div id="projects" className="scroll-mt-80">
//         <StickyScrollCards />
//       </div>

//       <div id="about" className="scroll-mt-20">
//         <AboutUsSection />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;




import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Target, Sparkles, TrendingUp, Zap, ArrowRight, ChevronDown } from "lucide-react";
import Footer from '../animated-portfolio/Footer';
import StickyScrollCards from './StickyScollCards';
import AboutUsSection from './AboutUsSection';
import WorkShowcase from "../animated-portfolio/WorkShowcase";
import Profile from './Profile';

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 120,
          ease: "linear" 
        }}
        className="absolute inset-0 flex justify-center items-center z-0"
      >
        <img
          src="https://matthewparrilla.com/static/img/earth_at_night.gif"
          alt="Globe"
          className="w-full max-w-[900px] h-auto object-contain"
          style={{
            opacity: 0.8,
            filter: "brightness(1.3) contrast(1.2) saturate(1.5)"
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-1"></div>
    </div>
  );
};

const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

// const RadialMenu = () => {
//   const radius = 120;
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
//         className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
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
//               className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
//               <div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 style={{
//                   border: "1px solid rgba(168, 85, 247, 0.5)",
//                   background:
//                     "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                   transform: "scale(1.02102) rotate(50.904deg)",
//                 }}
//               >
//                 <div
//                   className="absolute inset-[15%] rounded-full pointer-events-none"
//                   style={{
//                     border: "1px solid rgba(168, 85, 247, 0.5)",
//                     background:
//                       "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                     transform: "scale(1.01705) rotate(52.56deg)",
//                   }}
//                 />
//               </div>
//               <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

//               {menuItems.map((item) => {
//                 const angleRad = (item.angle * Math.PI) / 180;
//                 const x = radius * Math.cos(angleRad);
//                 const y = radius * Math.sin(angleRad);

//                 return (
//                   <div
//                     key={item.label}
//                     className="absolute z-[60]"
//                     style={{
//                       left: `calc(50% + ${x}px - 40px)`,
//                       top: `calc(50% - ${y}px - 40px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
//               <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
const RadialMenu = () => {
  const radius = 120;
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
    <div className="fixed top-4 right-[15%] sm:right-4 z-[100] text-white">
      <motion.div
        className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
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
              className="fixed top-8 right-[15%] sm:right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(168, 85, 247, 0.5)",
                  background:
                    "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
                  transform: "scale(1.02102) rotate(50.904deg)",
                }}
              >
                <div
                  className="absolute inset-[15%] rounded-full pointer-events-none"
                  style={{
                    border: "1px solid rgba(168, 85, 247, 0.5)",
                    background:
                      "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
                    transform: "scale(1.01705) rotate(52.56deg)",
                  }}
                />
              </div>
              <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

              {menuItems.map((item) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <div
                    key={item.label}
                    className="absolute z-[60]"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% - ${y}px - 40px)`,
                    }}
                  >
                    <motion.div 
                      className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
                      onHoverStart={() => setHoveredItem(item.label)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <motion.a
                        href={item.href}
                        className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
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
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["ACCELERATING", "DIGITAL", "GROWTH"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white px-4 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-2" // Reduced margin-bottom
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"> {/* Reduced margin-bottom */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Sklassics Technologies
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blue-400"
          >
            Private Limited
          </motion.span>
        </h2>
      </motion.div>

      <div className="mb-4 relative"> 
        <motion.h1
          key={currentWord}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-purple-400" // Reduced margin-bottom
        >
          {words[currentWord]}
        </motion.h1>
        
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ delay: 0.5, duration: 1.2 }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span 
          className="text-xs text-gray-400 mb-2 tracking-wider"
        >
          SCROLL DOWN
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const DigitalExcellenceSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-dark-950 flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Transforming ideas into <span className="text-purple-400">digital excellence</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          with cutting-edge technology and innovative solutions
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {[
          { label: "Issues Resolve", value: "1000+", icon: Target, color: "purple" },
          { label: "Client Retention Rate", value: "80%", icon: Sparkles, color: "blue" },
          { label: "Workshops Conducted", value: "50+", icon: TrendingUp, color: "teal" },
          { label: "Technologies", value: "25+", icon: Zap, color: "purple" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
            }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full bg-${stat.color}-500/15 border border-${stat.color}-500/40`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div ref={containerRef} className="relative w-full min-h-screen bg-dark-950 overflow-hidden">
        <InteractiveBackground />
        <ParticleSystem />
        <RadialMenu />
        <HeroSection />
      </div>

      <DigitalExcellenceSection />

      <div id="profile" className="scroll-mt-20">
        <Profile />
      </div>

      <div id="work" className="scroll-mt-20">
        <WorkShowcase />
      </div>

      <div id="projects" className="scroll-mt-80">
        <StickyScrollCards />
      </div>

      <div id="about" className="scroll-mt-20">
        <AboutUsSection />
      </div>

      <Footer />
    </>
  );
};

export default Home;