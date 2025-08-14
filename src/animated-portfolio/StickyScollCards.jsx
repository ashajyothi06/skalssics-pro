// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const projects = [
//   {
//     key: "p1",
//     title: "IT Training and Placements 2024",
//     description:
//       "Industry-relevant IT training programs with placement support for students and professionals.",
//     link: "https://sklassics.com",
//     linkText: "Explore Sklassics.com",
//     // featured: true,
//     icon: "👨‍💻",
//     badges: ["Certification", "Job Ready", "Industry Experts"],
//   },
//   {
//     key: "p2",
//     title: "IT Services 2024",
//     description:
//       "Custom web, mobile, AI, and cloud solutions for businesses of all sizes.",
//     link: "https://sklassicstech.com",
//     linkText: "Explore Sklassicstech.com",
//     icon: "🖥️",
//     badges: ["Web", "Mobile", "AI", "Cloud"],
//   },
//   {
//     key: "p3",
//     title: "Online and Offline Tutoring Services",
//     description:
//       "Flexible tutoring for students—live, batch-based, and self-paced learning options.",
//     link: "https://sklassicstutor.com",
//     linkText: "Explore Sklassicstutor.com",
//     icon: "📚",
//     badges: ["Live Sessions", "Self-Paced", "Expert Tutors"],
//   },
//   {
//     key: "p4",
//     title: "AI Interview Mock Applications",
//     description:
//       "Practice interviews with AI-driven feedback and real-world scenarios.",
//     link: "https://sklassics-ai.com",
//     linkText: "Explore Sklassics-ai.com",
//     icon: "🤖",
//     badges: ["AI Feedback", "Real Scenarios", "Interview Prep"],
//   },
//   {
//     key: "p5",
//     title: "LMS Application Services",
//     description:
//       "Modern learning management systems for schools, colleges, and corporates.",
//     link: "https://sklassics-lms.com",
//     linkText: "Explore Sklassics-lms.com",
//     icon: "🎓",
//     badges: ["Schools", "Colleges", "Corporates"],
//   },
//   {
//     key: "p6",
//     title: "Quiz Application Services",
//     description:
//       "Interactive quiz platforms for education, recruitment, and events.",
//     link: "https://sklassics-quiz.com",
//     linkText: "Explore Sklassics-quiz.com",
//     icon: "❓",
//     badges: ["Education", "Recruitment", "Events"],
//   },
//   {
//     key: "p7",
//     title: "Travelling Services",
//     description:
//       "Reliable car rental and travel solutions for individuals and businesses.",
//     link: "https://hanumancars.com",
//     linkText: "Explore Hanumancars.com",
//     icon: "🚗",
//     badges: ["Car Rental", "Travel", "Business"],
//   },
//   {
//     key: "p8",
//     title: "Loan Application Services",
//     description:
//       "Secure, automated loan application and management platform for customers and admins.",
//     link: "https://sklassics-loan.com",
//     linkText: "Explore Sklassics-loan.com",
//     icon: "💰",
//     badges: ["Secure", "Automated", "Management"],
//   },
// ];

// const CARD_TOP_PADDING = 1.5; // em
// const CARD_HEIGHT = 87; // vh

// const StickyScrollCards = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640); // tailwind sm breakpoint
//     };

//     handleResize(); // run on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
  
//   useEffect(() => {
//     if (!isMobile) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const id = entry.target.getAttribute('data-id');
//               setActiveCard(id);
//             }
//           });
//         },
//         { threshold: 0.6 }
//       );

//       cardsRef.current.forEach((card) => {
//         if (card) observer.observe(card);
//       });

//       return () => {
//         cardsRef.current.forEach((card) => {
//           if (card) observer.unobserve(card);
//         });
//       };
//     }
//   }, [isMobile, cardsRef]);

//   if (isMobile) {
//     // MOBILE: Enhanced vertical scroll with 3D effects - responsive sizing
//     return (
//       <div className="bg-dark-950 min-h-screen p-3 sm:p-4 space-y-8 sm:space-y-10">
//         {projects.map((project) => (
//           <motion.div
//             key={project.key}
//             initial={{ opacity: 0, y: 50, rotateX: -10 }}
//             whileInView={{ 
//               opacity: 1, 
//               y: 0, 
//               rotateX: 0,
//               transition: { 
//                 type: "spring", 
//                 stiffness: 100, 
//                 damping: 15 
//               }
//             }}
//             viewport={{ once: false, margin: "-20%" }}
//             whileHover={{ 
//               scale: 1.03,
//               rotateY: 3,
//               transition: { duration: 0.3 }
//             }}
//             className={`rounded-[20px] sm:rounded-[25px] ${project.featured ? 'gradient-border animate-pulse-glow' : 'dark-card dark-card-hover'} p-4 sm:p-6 flex flex-col items-center text-center relative overflow-hidden card-3d-effect max-w-[95%] sm:max-w-[90%] mx-auto`}
//           >
//             <div className="card-3d-shadow" />
            
//             {/* 3D Content Container */}
//             <div className="card-3d-content relative z-10 w-full">
//               {project.featured && (
//                 <>
//                   <div className="absolute top-0 right-0 bg-primary-500 text-dark-950 px-4 py-1 rounded-bl-lg font-bold text-sm z-10">
//                     Featured
//                   </div>
//                   <div className="absolute -z-10 inset-0 animate-shimmer opacity-20"></div>
//                 </>
//               )}
              
//               {/* Icon with enhanced 3D effect */}
//                 {project.icon && (
//                   <motion.div 
//                     animate={{ 
//                       y: [0, -8, 0],
//                       rotateY: [0, 10, 0, -10, 0],
//                       z: [0, 15, 0]
//                     }}
//                     transition={{ 
//                       repeat: Infinity, 
//                       duration: 5,
//                       times: [0, 0.25, 0.5, 0.75, 1]
//                     }}
//                     className="text-4xl sm:text-5xl mb-3 sm:mb-4 mx-auto"
//                     style={{ 
//                       filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.4))',
//                       transform: 'translateZ(0)',
//                       backfaceVisibility: 'hidden'
//                     }}
//                   >
//                     {project.icon}
//                   </motion.div>
//                 )}
                
//                 {/* Title with enhanced glow */}
//                 <motion.h1 
//                   animate={{ 
//                     textShadow: project.featured 
//                       ? ['0 0 8px rgba(168, 85, 247, 0.3)', '0 0 16px rgba(168, 85, 247, 0.7)', '0 0 8px rgba(168, 85, 247, 0.3)'] 
//                       : '0 0 8px rgba(168, 85, 247, 0.5)' 
//                   }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-primary-100"
//                   style={{ 
//                     transform: 'translateZ(0)',
//                     backfaceVisibility: 'hidden',
//                     textRendering: 'optimizeLegibility'
//                   }}
//                 >
//                   {project.title}
//                 </motion.h1>
                
//                 {/* Badges with staggered 3D effect */}
//                 {project.badges && (
//                   <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
//                     {project.badges.map((badge, index) => (
//                       <motion.span 
//                         key={index} 
//                         initial={{ opacity: 0, scale: 0.8, z: -10 }}
//                         animate={{ opacity: 1, scale: 1, z: 0 }}
//                         transition={{ 
//                           delay: index * 0.1,
//                           type: "spring",
//                           stiffness: 200
//                         }}
//                         whileHover={{ 
//                           scale: 1.1, 
//                           z: 20,
//                           backgroundColor: 'rgba(168, 85, 247, 0.4)'
//                         }}
//                         className="bg-primary-500 bg-opacity-20 text-primary-300 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium animate-border-pulse"
//                         style={{ 
//                           transform: 'translateZ(0)',
//                           backfaceVisibility: 'hidden'
//                         }}
//                       >
//                         {badge}
//                       </motion.span>
//                     ))}
//                   </div>
//                 )}
                
//                 {/* Description with subtle animation */}
//                 <motion.p 
//                   initial={{ opacity: 0.8 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 1 }}
//                   className="text-sm sm:text-base mb-4 sm:mb-6 text-dark-200 line-clamp-4 sm:line-clamp-none"
//                   style={{ 
//                     transform: 'translateZ(0)',
//                     backfaceVisibility: 'hidden',
//                     textRendering: 'optimizeLegibility'
//                   }}
//                 >
//                   {project.description}
//                 </motion.p>
                
//                 {/* Button with enhanced 3D effect */}
//                 <motion.a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ 
//                     scale: 1.05, 
//                     backgroundColor: project.featured ? '#9333ea' : 'rgba(168, 85, 247, 1)', 
//                     color: '#0a0a0a',
//                     z: 30,
//                     boxShadow: '0 8px 20px -4px rgba(168, 85, 247, 0.4), 0 6px 8px -5px rgba(0, 0, 0, 0.2)'
//                   }}
//                   whileTap={{ scale: 0.95, z: 5 }}
//                   className={`${project.featured ? 'bg-primary-500 text-dark-950' : 'border border-primary-500 text-primary-100 hover:bg-primary-500 hover:text-dark-950'} px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${project.featured ? 'animate-pulse-glow' : 'glow-purple'}`}
//                   style={{ 
//                     minWidth: '80%', 
//                     maxWidth: '90%',
//                     transform: 'translateZ(0)',
//                     backfaceVisibility: 'hidden'
//                   }}
//                 >
//                   {project.linkText}
//                 </motion.a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     );
//   }

//   // DESKTOP: Enhanced sticky scroll effect with immersive 3D - responsive sizing
//   return (
//     <div
//       className="w-[95%] sm:w-[90%] mx-auto bg-dark-gradient"
//       style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}
//     >
//       <ul
//         className="list-none bg-black grid grid-cols-1"
//         style={{
//             gridTemplateRows: `repeat(${projects.length}, ${CARD_HEIGHT}vh)`,
//             gap: "3vw",
//             paddingBottom: `${projects.length * CARD_TOP_PADDING}em`,
//             marginBottom: "3vw",
//           }}
//       >
//         {projects.map((project, index) => {
//           // zIndex so each next card is in front
//           const isActive = activeCard === project.key;
//           return (
//             <li
//               key={project.key}
//               ref={(el) => (cardsRef.current[index] = el)}
//               data-id={project.key}
//               className="sticky top-0 rounded-[15px] sm:rounded-[20px] bg-dark-900"
//               style={{
//                 paddingTop: `${(index + 1) * CARD_TOP_PADDING}em`,
//                 zIndex: index + 1, // <-- This makes each next card appear in front
//                 perspective: "1500px"
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0, rotateX: -5 }}
//                 animate={{ 
//                   scale: 1, 
//                   opacity: 1,
//                   rotateY: isActive ? [0, -5, 5, -5, 0] : 0,
//                   rotateX: isActive ? [0, 3, -3, 0] : 0,
//                   z: isActive ? 30 : 0,
//                   transition: {
//                     rotateY: {
//                       repeat: isActive ? Infinity : 0,
//                       repeatType: "reverse",
//                       duration: 8,
//                     },
//                     rotateX: {
//                       repeat: isActive ? Infinity : 0,
//                       repeatType: "reverse",
//                       duration: 10,
//                     },
//                     z: {
//                       repeat: isActive ? Infinity : 0,
//                       repeatType: "reverse",
//                       duration: 8
//                     }
//                   }
//                 }}
//                 transition={{ 
//                   duration: 0.5,
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 15
//                 }}
//                 className={`rounded-[20px] ${project.featured ? 'gradient-border' : 'dark-card'} h-[87vh] flex flex-col justify-center items-center transition-all duration-500 px-8 text-center card-3d-effect relative ${project.featured ? 'animate-pulse-glow' : ''}`}
//                 whileHover={{
//                   scale: 1.03,
//                   rotateY: 0,
//                   rotateX: 0,
//                   z: 50,
//                   transition: { duration: 0.3, type: "spring" }
//                 }}
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <motion.div 
//                   className="absolute inset-0 bg-purple-glow opacity-60 rounded-[20px] pointer-events-none"
//                   animate={{ opacity: [0.4, 0.7, 0.4] }}
//                   transition={{ repeat: Infinity, duration: 4 }}
//                 />
//                 <div className="card-3d-shadow" />
                
//                 {/* 3D Content Container */}
//                 <div className="card-3d-content relative z-10 flex flex-col items-center w-full" style={{ transformStyle: "preserve-3d" }}>
//                   {project.featured && (
//                     <>
//                       <motion.div 
//                         className="absolute top-4 right-4 bg-primary-500 text-dark-950 px-4 py-1 rounded-lg font-bold text-sm z-20"
//                         animate={{ scale: [1, 1.1, 1], z: [20, 30, 20] }}
//                         transition={{ repeat: Infinity, duration: 3 }}
//                         style={{ transformStyle: "preserve-3d" }}
//                       >
//                         Featured
//                       </motion.div>
//                       <motion.div 
//                         className="absolute -z-10 inset-0 animate-shimmer opacity-20"
//                         animate={{ opacity: [0.1, 0.3, 0.1] }}
//                         transition={{ repeat: Infinity, duration: 3 }}
//                       />
//                     </>
//                   )}
                  
//                   {/* Icon with enhanced 3D effect */}
//                   {project.icon && (
//                     <motion.div 
//                       animate={isActive ? { 
//                         y: [0, -12, 0],
//                         rotateY: [0, 15, 0, -15, 0],
//                         z: [0, 25, 0]
//                       } : { y: 0, rotateY: 0, z: 0 }}
//                       transition={{ 
//                         repeat: isActive ? Infinity : 0, 
//                         duration: 5,
//                         times: [0, 0.25, 0.5, 0.75, 1]
//                       }}
//                       className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-5 lg:mb-6 text-primary-300 relative"
//                       style={{ 
//                         filter: isActive 
//                           ? 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))' 
//                           : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
//                         transformStyle: "preserve-3d",
//                         backfaceVisibility: 'hidden',
//                         transform: 'translateZ(0)'
//                       }}
//                     >
//                       {project.icon}
//                     </motion.div>
//                   )}
                  
//                   {/* Title with enhanced glow */}
//                   <motion.h1 
//                     animate={{ 
//                       textShadow: project.featured && isActive
//                         ? ['0 0 8px rgba(168, 85, 247, 0.3)', '0 0 20px rgba(168, 85, 247, 0.8)', '0 0 8px rgba(168, 85, 247, 0.3)'] 
//                         : isActive 
//                           ? '0 0 12px rgba(168, 85, 247, 0.5)'
//                           : '0 0 5px rgba(168, 85, 247, 0.2)',
//                       z: isActive ? 20 : 0
//                     }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                     className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 text-primary-100 relative"
//                     style={{ 
//                       transformStyle: "preserve-3d",
//                       backfaceVisibility: 'hidden',
//                       transform: 'translateZ(0)',
//                       textRendering: 'optimizeLegibility'
//                     }}
//                   >
//                     {project.title}
//                   </motion.h1>
                  
//                   {/* Badges with staggered 3D effect */}
//                   {project.badges && (
//                     <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4 md:mb-5 lg:mb-6" style={{ transformStyle: "preserve-3d" }}>
//                       {project.badges.map((badge, index) => (
//                         <motion.span 
//                           key={index} 
//                           initial={{ opacity: 0, scale: 0.8, z: -20 }}
//                           animate={{ 
//                             opacity: isActive ? 1 : 0.7, 
//                             scale: isActive ? 1 : 0.9,
//                             z: isActive ? (index % 2 === 0 ? 20 : 10) : 0,
//                             rotateX: isActive ? (index % 2 === 0 ? [0, 5, 0] : [0, -5, 0]) : 0
//                           }}
//                           transition={{ 
//                             delay: isActive ? index * 0.1 : 0,
//                             type: "spring",
//                             stiffness: 200,
//                             rotateX: {
//                               repeat: isActive ? Infinity : 0,
//                               duration: 3 + index
//                             }
//                           }}
//                           whileHover={isActive ? { 
//                             scale: 1.2, 
//                             z: 40,
//                             backgroundColor: 'rgba(168, 85, 247, 0.6)',
//                             color: '#ffffff'
//                           } : {}}
//                           className="bg-primary-500 bg-opacity-20 text-primary-300 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium animate-border-pulse"
//                           style={{ 
//                             transformStyle: "preserve-3d",
//                             backfaceVisibility: 'hidden',
//                             transform: 'translateZ(0)'
//                           }}
//                         >
//                           {badge}
//                         </motion.span>
//                       ))}
//                     </div>
//                   )}
                  
//                   {/* Description with subtle animation */}
//                   <motion.p 
//                     initial={{ opacity: 0.8, z: -10 }}
//                     animate={{ 
//                       opacity: isActive ? 1 : 0.7, 
//                       z: isActive ? 15 : 0 
//                     }}
//                     transition={{ duration: 0.5 }}
//                     className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-2xl text-dark-100 relative line-clamp-4 md:line-clamp-5 lg:line-clamp-none"
//                     style={{ 
//                       transformStyle: "preserve-3d",
//                       backfaceVisibility: 'hidden',
//                       transform: 'translateZ(0)',
//                       textRendering: 'optimizeLegibility'
//                     }}
//                   >
//                     {project.description}
//                   </motion.p>
                  
//                   {/* Button with enhanced 3D effect */}
//                   <motion.button
//                     onClick={() => navigate('/projectdisplay')}
//                     whileHover={isActive ? { 
//                       scale: 1.05, 
//                       backgroundColor: project.featured ? '#9333ea' : 'rgba(168, 85, 247, 1)', 
//                       color: '#0a0a0a',
//                       z: 40,
//                       boxShadow: '0 10px 20px -5px rgba(168, 85, 247, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)'
//                     } : {}}
//                     whileTap={isActive ? { scale: 0.95, z: 20 } : {}}
//                     className={`${project.featured ? 'bg-primary-500 text-dark-950' : 'border border-primary-500 text-primary-100'} px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 text-sm md:text-base font-semibold shadow-glow-purple relative`}
//                     style={{ 
//                       width: '80%',
//                       maxWidth: '90%',
//                       textAlign: "center",
//                       transformStyle: "preserve-3d",
//                       opacity: isActive ? 1 : 0.7,
//                       transform: `translateZ(${isActive ? 30 : 0}px)`,
//                       backfaceVisibility: 'hidden'
//                     }}
//                   >
//                     {project.linkText}
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default StickyScrollCards;
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    key: "p1",
    title: "IT Training and Placements 2024",
    description:
      "Industry-relevant IT training programs with placement support for students and professionals.",
    link: "https://sklassics.com",
    linkText: "Explore Sklassics.com",
    // featured: true,
    icon: "👨‍💻",
    badges: ["Certification", "Job Ready", "Industry Experts"],
  },
  {
    key: "p2",
    title: "IT Services 2024",
    description:
      "Custom web, mobile, AI, and cloud solutions for businesses of all sizes.",
    link: "https://sklassicstech.com",
    linkText: "Explore Sklassicstech.com",
    icon: "🖥️",
    badges: ["Web", "Mobile", "AI", "Cloud"],
  },
  {
    key: "p3",
    title: "Online and Offline Tutoring Services",
    description:
      "Flexible tutoring for students—live, batch-based, and self-paced learning options.",
    link: "https://sklassicstutor.com",
    linkText: "Explore Sklassicstutor.com",
    icon: "📚",
    badges: ["Live Sessions", "Self-Paced", "Expert Tutors"],
  },
  {
    key: "p4",
    title: "AI Interview Mock Applications",
    description:
      "Practice interviews with AI-driven feedback and real-world scenarios.",
    link: "https://sklassics-ai.com",
    linkText: "Explore Sklassics-ai.com",
    icon: "🤖",
    badges: ["AI Feedback", "Real Scenarios", "Interview Prep"],
  },
  {
    key: "p5",
    title: "LMS Application Services",
    description:
      "Modern learning management systems for schools, colleges, and corporates.",
    link: "https://sklassics-lms.com",
    linkText: "Explore Sklassics-lms.com",
    icon: "🎓",
    badges: ["Schools", "Colleges", "Corporates"],
  },
  {
    key: "p6",
    title: "Quiz Application Services",
    description:
      "Interactive quiz platforms for education, recruitment, and events.",
    link: "https://sklassics-quiz.com",
    linkText: "Explore Sklassics-quiz.com",
    icon: "❓",
    badges: ["Education", "Recruitment", "Events"],
  },
  {
    key: "p7",
    title: "Travelling Services",
    description:
      "Reliable car rental and travel solutions for individuals and businesses.",
    link: "https://hanumancars.com",
    linkText: "Explore Hanumancars.com",
    icon: "🚗",
    badges: ["Car Rental", "Travel", "Business"],
  },
  {
    key: "p8",
    title: "Loan Application Services",
    description:
      "Secure, automated loan application and management platform for customers and admins.",
    link: "https://sklassics-loan.com",
    linkText: "Explore Sklassics-loan.com",
    icon: "💰",
    badges: ["Secure", "Automated", "Management"],
  },
];

const CARD_TOP_PADDING = 1.5; // em
const CARD_HEIGHT = 87; // vh

const StickyScrollCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // tailwind sm breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('data-id');
              setActiveCard(id);
            }
          });
        },
        { threshold: 0.6 }
      );

      cardsRef.current.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => {
        cardsRef.current.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      };
    }
  }, [isMobile, cardsRef]);

  if (isMobile) {
    // MOBILE: Enhanced vertical scroll with 3D effects - responsive sizing
    return (
      <div className="bg-dark-950 min-h-screen p-3 sm:p-4 space-y-8 sm:space-y-10">
        {projects.map((project) => (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
              }
            }}
            viewport={{ once: false, margin: "-20%" }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 3,
              transition: { duration: 0.3 }
            }}
            className={`rounded-[20px] sm:rounded-[25px] ${project.featured ? 'gradient-border animate-pulse-glow' : 'dark-card dark-card-hover'} p-4 sm:p-6 flex flex-col items-center text-center relative overflow-hidden card-3d-effect max-w-[95%] sm:max-w-[90%] mx-auto`}
          >
            <div className="card-3d-shadow" />
            
            {/* 3D Content Container */}
            <div className="card-3d-content relative z-10 w-full">
              {project.featured && (
                <>
                  <div className="absolute top-0 right-0 bg-primary-500 text-dark-950 px-4 py-1 rounded-bl-lg font-bold text-sm z-10">
                    Featured
                  </div>
                  <div className="absolute -z-10 inset-0 animate-shimmer opacity-20"></div>
                </>
              )}
              
              {/* Icon with enhanced 3D effect */}
                {project.icon && (
                  <motion.div 
                    animate={{ 
                      y: [0, -8, 0],
                      rotateY: [0, 10, 0, -10, 0],
                      z: [0, 15, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 5,
                      times: [0, 0.25, 0.5, 0.75, 1]
                    }}
                    className="text-4xl sm:text-5xl mb-3 sm:mb-4 mx-auto"
                    style={{ 
                      filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.4))',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {project.icon}
                  </motion.div>
                )}
                
                {/* Title with enhanced glow */}
                <motion.h1 
                  animate={{ 
                    textShadow: project.featured 
                      ? ['0 0 8px rgba(168, 85, 247, 0.3)', '0 0 16px rgba(168, 85, 247, 0.7)', '0 0 8px rgba(168, 85, 247, 0.3)'] 
                      : '0 0 8px rgba(168, 85, 247, 0.5)' 
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-primary-100"
                  style={{ 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    textRendering: 'optimizeLegibility'
                  }}
                >
                  {project.title}
                </motion.h1>
                
                {/* Badges with staggered 3D effect */}
                {project.badges && (
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.badges.map((badge, index) => (
                      <motion.span 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.8, z: -10 }}
                        animate={{ opacity: 1, scale: 1, z: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          z: 20,
                          backgroundColor: 'rgba(168, 85, 247, 0.4)'
                        }}
                        className="bg-primary-500 bg-opacity-20 text-primary-300 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium animate-border-pulse"
                        style={{ 
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                )}
                
                {/* Description with subtle animation */}
                <motion.p 
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-sm sm:text-base mb-4 sm:mb-6 text-dark-200 line-clamp-4 sm:line-clamp-none"
                  style={{ 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    textRendering: 'optimizeLegibility'
                  }}
                >
                  {project.description}
                </motion.p>
                
                {/* Button with enhanced 3D effect */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: project.featured ? '#9333ea' : 'rgba(168, 85, 247, 1)', 
                    color: '#0a0a0a',
                    z: 30,
                    boxShadow: '0 8px 20px -4px rgba(168, 85, 247, 0.4), 0 6px 8px -5px rgba(0, 0, 0, 0.2)'
                  }}
                  whileTap={{ scale: 0.95, z: 5 }}
                  className={`${project.featured ? 'bg-primary-500 text-dark-950' : 'border border-primary-500 text-primary-100 hover:bg-primary-500 hover:text-dark-950'} px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${project.featured ? 'animate-pulse-glow' : 'glow-purple'}`}
                  style={{ 
                    minWidth: '80%', 
                    maxWidth: '90%',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {project.linkText}
                </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // DESKTOP: Enhanced sticky scroll effect with immersive 3D - responsive sizing
  return (
    <div
      className="w-[95%] sm:w-[90%] mx-auto bg-dark-gradient"
      style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif" }}
    >
      <ul
        className="list-none bg-black grid grid-cols-1"
        style={{
            gridTemplateRows: `repeat(${projects.length}, ${CARD_HEIGHT}vh)`,
            gap: "3vw",
            paddingBottom: `${projects.length * CARD_TOP_PADDING}em`,
            marginBottom: "3vw",
          }}
      >
        {projects.map((project, index) => {
          const isActive = activeCard === project.key;
          return (
            <li
              key={project.key}
              ref={(el) => (cardsRef.current[index] = el)}
              data-id={project.key}
              className="sticky top-0 rounded-[15px] sm:rounded-[20px] bg-dark-900"
              style={{
                paddingTop: `${(index + 1) * CARD_TOP_PADDING}em`,
                zIndex: index + 1,
                perspective: "1500px"
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, rotateX: -5 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotateY: isActive ? [0, -5, 5, -5, 0] : 0,
                  rotateX: isActive ? [0, 3, -3, 0] : 0,
                  z: isActive ? 30 : 0,
                  transition: {
                    rotateY: {
                      repeat: isActive ? Infinity : 0,
                      repeatType: "reverse",
                      duration: 8,
                    },
                    rotateX: {
                      repeat: isActive ? Infinity : 0,
                      repeatType: "reverse",
                      duration: 10,
                    },
                    z: {
                      repeat: isActive ? Infinity : 0,
                      repeatType: "reverse",
                      duration: 8
                    }
                  }
                }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`rounded-[20px] ${project.featured ? 'gradient-border' : 'dark-card'} h-[87vh] flex flex-col justify-center items-center transition-all duration-500 px-8 text-center card-3d-effect relative ${project.featured ? 'animate-pulse-glow' : ''}`}
                whileHover={{
                  scale: 1.03,
                  rotateY: 0,
                  rotateX: 0,
                  z: 50,
                  transition: { duration: 0.3, type: "spring" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-purple-glow opacity-60 rounded-[20px] pointer-events-none"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
                <div className="card-3d-shadow" />
                
                {/* 3D Content Container */}
                <div className="card-3d-content relative z-10 flex flex-col items-center w-full" style={{ transformStyle: "preserve-3d" }}>
                  {project.featured && (
                    <>
                      <motion.div 
                        className="absolute top-4 right-4 bg-primary-500 text-dark-950 px-4 py-1 rounded-lg font-bold text-sm z-20"
                        animate={{ scale: [1, 1.1, 1], z: [20, 30, 20] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        Featured
                      </motion.div>
                      <motion.div 
                        className="absolute -z-10 inset-0 animate-shimmer opacity-20"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      />
                    </>
                  )}
                  
                  {/* Icon with enhanced 3D effect */}
                  {project.icon && (
                    <motion.div 
                      animate={isActive ? { 
                        y: [0, -12, 0],
                        rotateY: [0, 15, 0, -15, 0],
                        z: [0, 25, 0]
                      } : { y: 0, rotateY: 0, z: 0 }}
                      transition={{ 
                        repeat: isActive ? Infinity : 0, 
                        duration: 5,
                        times: [0, 0.25, 0.5, 0.75, 1]
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-5 lg:mb-6 text-primary-300 relative"
                      style={{ 
                        filter: isActive 
                          ? 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))' 
                          : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                        transformStyle: "preserve-3d",
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  )}
                  
                  {/* Title with enhanced glow */}
                  <motion.h1 
                    animate={{ 
                      textShadow: project.featured && isActive
                        ? ['0 0 8px rgba(168, 85, 247, 0.3)', '0 0 20px rgba(168, 85, 247, 0.8)', '0 0 8px rgba(168, 85, 247, 0.3)'] 
                        : isActive 
                          ? '0 0 12px rgba(168, 85, 247, 0.5)'
                          : '0 0 5px rgba(168, 85, 247, 0.2)',
                      z: isActive ? 20 : 0
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 text-primary-100 relative"
                    style={{ 
                      transformStyle: "preserve-3d",
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      textRendering: 'optimizeLegibility'
                    }}
                  >
                    {project.title}
                  </motion.h1>
                  
                  {/* Badges with staggered 3D effect */}
                  {project.badges && (
                    <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-4 md:mb-5 lg:mb-6" style={{ transformStyle: "preserve-3d" }}>
                      {project.badges.map((badge, index) => (
                        <motion.span 
                          key={index} 
                          initial={{ opacity: 0, scale: 0.8, z: -20 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0.7, 
                            scale: isActive ? 1 : 0.9,
                            z: isActive ? (index % 2 === 0 ? 20 : 10) : 0,
                            rotateX: isActive ? (index % 2 === 0 ? [0, 5, 0] : [0, -5, 0]) : 0
                          }}
                          transition={{ 
                            delay: isActive ? index * 0.1 : 0,
                            type: "spring",
                            stiffness: 200,
                            rotateX: {
                              repeat: isActive ? Infinity : 0,
                              duration: 3 + index
                            }
                          }}
                          whileHover={isActive ? { 
                            scale: 1.2, 
                            z: 40,
                            backgroundColor: 'rgba(168, 85, 247, 0.6)',
                            color: '#ffffff'
                          } : {}}
                          className="bg-primary-500 bg-opacity-20 text-primary-300 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium animate-border-pulse"
                          style={{ 
                            transformStyle: "preserve-3d",
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)'
                          }}
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  )}
                  
                  {/* Description with subtle animation */}
                  <motion.p 
                    initial={{ opacity: 0.8, z: -10 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.7, 
                      z: isActive ? 15 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-2xl text-dark-100 relative line-clamp-4 md:line-clamp-5 lg:line-clamp-none"
                    style={{ 
                      transformStyle: "preserve-3d",
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      textRendering: 'optimizeLegibility'
                    }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Button with enhanced 3D effect - Now properly links to project.link */}
                  <motion.button
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    whileHover={isActive ? { 
                      scale: 1.05, 
                      backgroundColor: project.featured ? '#9333ea' : 'rgba(168, 85, 247, 1)', 
                      color: '#0a0a0a',
                      z: 40,
                      boxShadow: '0 10px 20px -5px rgba(168, 85, 247, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)'
                    } : {}}
                    whileTap={isActive ? { scale: 0.95, z: 20 } : {}}
                    className={`${project.featured ? 'bg-primary-500 text-dark-950' : 'border border-primary-500 text-primary-100'} px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 text-sm md:text-base font-semibold shadow-glow-purple relative`}
                    style={{ 
                      width: '80%',
                      maxWidth: '90%',
                      textAlign: "center",
                      transformStyle: "preserve-3d",
                      opacity: isActive ? 1 : 0.7,
                      transform: `translateZ(${isActive ? 30 : 0}px)`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {project.linkText}
                  </motion.button>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StickyScrollCards;