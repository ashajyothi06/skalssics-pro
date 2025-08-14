// // // import React, { useEffect, useRef, useState } from 'react';
// // // import { motion, useAnimation, useInView } from 'framer-motion';
// // // import { ArrowRight, Users, Briefcase, Target, ChevronRight, Laptop, Smartphone, Cloud, Plane, BookOpen, Wrench, GraduationCap, Lightbulb, Car, Code, Zap, Building, Star, Heart, Shield, ShoppingBag, Activity, CreditCard, Utensils, Dumbbell, Calendar, Globe } from 'lucide-react';
// // // import { AnimatePresence } from 'framer-motion';
// // // import { useNavigate } from 'react-router-dom';

// // // const AboutUsSection = () => {
// // //   const navigate = useNavigate();
// // //   const [showAllServices, setShowAllServices] = useState(false);
  
// // //   // Refs for scroll animations
// // //   const aboutRef = useRef(null);
// // //   const servicesRef = useRef(null);
// // //   const missionRef = useRef(null);
  
// // //   // Check if sections are in view
// // //   const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
// // //   const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
// // //   const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
  
// // //   // Animation controls
// // //   const aboutControls = useAnimation();
// // //   const servicesControls = useAnimation();
// // //   const missionControls = useAnimation();
  
// // //   // Navigation function
// // //   const handleNavigate = (path) => {
// // //     navigate(path);
// // //   };

// // //   // Animate when sections come into view
// // //   useEffect(() => {
// // //     if (aboutInView) {
// // //       aboutControls.start('visible');
// // //     }
// // //     if (servicesInView) {
// // //       servicesControls.start('visible');
// // //     }
// // //     if (missionInView) {
// // //       missionControls.start('visible');
// // //     }
// // //   }, [aboutInView, servicesInView, missionInView, aboutControls, servicesControls, missionControls]);
  
// // //   // Animation variants
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.2,
// // //         delayChildren: 0.3,
// // //       },
// // //     },
// // //   };
  
// // //   const itemVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: {
// // //       y: 0,
// // //       opacity: 1,
// // //       transition: {
// // //         type: 'spring',
// // //         stiffness: 100,
// // //         damping: 10,
// // //       },
// // //     },
// // //   };

// // //   // Services data
// //   // const services = [
// //   //   {
// //   //     id: 1,
// //   //     title: 'HanumanCar - Premium Car Rentals',
// //   //     icon: <Car className="text-3xl text-purple-400" />,
// //   //     color: 'from-purple-600 to-indigo-600',
// //   //     description: 'Ride with Confidence: HanumanCar Rental Services',
// //   //     subtitle: 'We provide reliable and affordable car rental services across your city, 24/7.',
// //   //     website: 'hanumancars.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['24/7 Service', 'Premium Vehicles', 'City-wide Coverage'],
// //   //     path: '/HanumanCars'
// //   //   },
// //   //   {
// //   //     id: 2,
// //   //     title: 'Expert Tutors - One-on-One Guidance',
// //   //     icon: <Users className="text-3xl text-blue-400" />,
// //   //     color: 'from-blue-600 to-cyan-600',
// //   //     description: 'Learn with the Best Tutors',
// //   //     subtitle: 'Personalized learning support for students across all grades and subjects.',
// //   //     website: 'sklassicstutor.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Personalized Learning', 'All Subjects', 'Expert Tutors'],
// //   //     path: '/Tutors'
// //   //   },
// //   //   {
// //   //     id: 3,
// //   //     title: 'IT Training & Placement Programs',
// //   //     icon: <Target className="text-3xl text-cyan-400" />,
// //   //     color: 'from-cyan-600 to-teal-600',
// //   //     description: 'Industry-relevant training with placement support',
// //   //     subtitle: 'Professional IT training programs for students and professionals.',
// //   //     website: 'sklassics.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Job Ready', 'Industry Experts', 'Placement Support'],
// //   //     path: '/ItTraining'
// //   //   },
// //   //   {
// //   //     id: 4,
// //   //     title: 'Professional IT Services',
// //   //     icon: <Code className="text-3xl text-teal-400" />,
// //   //     color: 'from-teal-600 to-green-600',
// //   //     description: 'Custom web, mobile, AI, and cloud solutions',
// //   //     subtitle: 'Tailored digital solutions for businesses of all sizes.',
// //   //     website: 'sklassicstech.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Web Development', 'Mobile Apps', 'AI Solutions'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 5,
// //   //     title: 'AI & Cloud Integration Solutions',
// //   //     icon: <Zap className="text-3xl text-pink-400" />,
// //   //     color: 'from-pink-600 to-purple-600',
// //   //     description: 'Cutting-edge AI and cloud services',
// //   //     subtitle: 'Transform your business operations with advanced technology.',
// //   //     website: 'sklassics-ai.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['AI Integration', 'Cloud Services', 'Advanced Tech'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 6,
// //   //     title: 'LMS Application Services',
// //   //     icon: <BookOpen className="text-3xl text-yellow-400" />,
// //   //     color: 'from-yellow-600 to-orange-600',
// //   //     description: 'Modern learning management systems',
// //   //     subtitle: 'Comprehensive LMS solutions for schools, colleges, and corporates.',
// //   //     website: 'sklassics-lms.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Learning Management', 'Corporate Training', 'Educational Solutions'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   // ];

// //   // // Additional services for "View All Services"
// //   // const additionalServices = [
// //   //   {
// //   //     id: 7,
// //   //     title: 'Real Estate Platform Solutions',
// //   //     icon: <Building className="text-3xl text-indigo-400" />,
// //   //     color: 'from-indigo-600 to-purple-600',
// //   //     description: 'Modern real estate platforms',
// //   //     subtitle: 'Comprehensive real estate solutions for property management and sales.',
// //   //     website: 'vlrws.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Property Management', 'Sales Platform', 'Virtual Tours'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 8,
// //   //     title: 'Quiz Application Services',
// //   //     icon: <Star className="text-3xl text-yellow-400" />,
// //   //     color: 'from-yellow-600 to-orange-600',
// //   //     description: 'Interactive quiz platforms',
// //   //     subtitle: 'Engaging quiz applications for education, recruitment, and events.',
// //   //     website: 'sklassics-quiz.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Education', 'Recruitment', 'Events'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 9,
// //   //     title: 'Loan Application Services',
// //   //     icon: <Heart className="text-3xl text-red-400" />,
// //   //     color: 'from-red-600 to-pink-600',
// //   //     description: 'Secure loan management',
// //   //     subtitle: 'Automated loan application and management platform for customers and admins.',
// //   //     website: 'sklassics-loan.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Secure Platform', 'Automated Process', 'Management Tools'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 10,
// //   //     title: 'AI Interview Mock Applications',
// //   //     icon: <Shield className="text-3xl text-green-400" />,
// //   //     color: 'from-green-600 to-emerald-600',
// //   //     description: 'AI-powered interview prep',
// //   //     subtitle: 'Practice interviews with AI-driven feedback and real-world scenarios.',
// //   //     website: 'sklassics-ai.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['AI Feedback', 'Real Scenarios', 'Interview Prep'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 11,
// //   //     title: 'Travel Application Services',
// //   //     icon: <Plane className="text-3xl text-cyan-400" />,
// //   //     color: 'from-cyan-600 to-blue-600',
// //   //     description: 'Tech-enabled travel solutions',
// //   //     subtitle: 'Seamless travel booking and management tools for individuals and businesses.',
// //   //     website: 'hanumancars.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Seamless Booking', 'Management Tools', 'Business Travel'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 12,
// //   //     title: 'Workshop & Seminar Programs',
// //   //     icon: <GraduationCap className="text-3xl text-violet-400" />,
// //   //     color: 'from-violet-600 to-purple-600',
// //   //     description: 'Educational programs',
// //   //     subtitle: 'Comprehensive workshop and seminar programs for colleges and universities.',
// //   //     website: 'sklassics.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['College Programs', 'University Seminars', 'Industry Gap'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 13,
// //   //     title: 'E-Commerce Platform Solutions',
// //   //     icon: <ShoppingBag className="text-3xl text-emerald-400" />,
// //   //     color: 'from-emerald-600 to-teal-600',
// //   //     description: 'Modern e-commerce platforms',
// //   //     subtitle: 'Complete e-commerce solutions with payment integration and inventory management.',
// //   //     website: 'sklassics-ecom.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Payment Integration', 'Inventory Management', 'Analytics'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 14,
// //   //     title: 'Healthcare Management Systems',
// //   //     icon: <Activity className="text-3xl text-rose-400" />,
// //   //     color: 'from-rose-600 to-pink-600',
// //   //     description: 'Healthcare technology solutions',
// //   //     subtitle: 'Comprehensive healthcare management systems for hospitals and clinics.',
// //   //     website: 'sklassics-health.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Patient Management', 'Appointment Scheduling', 'Medical Records'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 15,
// //   //     title: 'Banking & Finance Solutions',
// //   //     icon: <CreditCard className="text-3xl text-blue-400" />,
// //   //     color: 'from-blue-600 to-indigo-600',
// //   //     description: 'Financial technology platforms',
// //   //     subtitle: 'Secure banking and financial management solutions for modern businesses.',
// //   //     website: 'sklassics-finance.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Secure Transactions', 'Financial Analytics', 'Compliance'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 16,
// //   //     title: 'Restaurant Management Systems',
// //   //     icon: <Utensils className="text-3xl text-orange-400" />,
// //   //     color: 'from-orange-600 to-red-600',
// //   //     description: 'Restaurant technology solutions',
// //   //     subtitle: 'Complete restaurant management with ordering, inventory, and analytics.',
// //   //     website: 'sklassics-restaurant.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Online Ordering', 'Inventory Management', 'Analytics'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 17,
// //   //     title: 'Fitness & Wellness Apps',
// //   //     icon: <Dumbbell className="text-3xl text-purple-400" />,
// //   //     color: 'from-purple-600 to-violet-600',
// //   //     description: 'Health and fitness platforms',
// //   //     subtitle: 'Comprehensive fitness tracking and wellness management applications.',
// //   //     website: 'sklassics-fitness.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Workout Tracking', 'Nutrition Planning', 'Progress Analytics'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   //   {
// //   //     id: 18,
// //   //     title: 'Event Management Platforms',
// //   //     icon: <Calendar className="text-3xl text-cyan-400" />,
// //   //     color: 'from-cyan-600 to-blue-600',
// //   //     description: 'Event planning and management',
// //   //     subtitle: 'Complete event management solutions for conferences, weddings, and corporate events.',
// //   //     website: 'sklassics-events.com',
// //   //     status: 'ACTIVE',
// //   //     year: '2025',
// //   //     action: 'Explore More',
// //   //     features: ['Event Planning', 'Ticket Management', 'Venue Booking'],
// //   //     path: '/projectdisplay'
// //   //   },
// //   // ];

// // //   // Combine services based on showAllServices state
// // //   const displayedServices = showAllServices ? [...services, ...additionalServices] : services;

// // //   return (
// // //     <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
// // //       {/* About Us Section */}
// // //       <motion.section 
// // //         ref={aboutRef}
// // //         initial="hidden"
// // //         animate={aboutControls}
// // //         variants={containerVariants}
// // //         className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden"
// // //       >
// // //         {/* Background Elements */}
// // //         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// // //           <motion.div 
// // //             className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-glow blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.2, 1],
// // //               opacity: [0.2, 0.4, 0.2],
// // //               x: [0, 30, 0],
// // //               y: [0, -30, 0],
// // //               filter: ["blur(40px)", "blur(60px)", "blur(40px)"],
// // //             }}
// // //             transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
// // //           />
// // //           <motion.div 
// // //             className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-glow blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.3, 1],
// // //               opacity: [0.2, 0.5, 0.2],
// // //               x: [0, -40, 0],
// // //               y: [0, 40, 0],
// // //               filter: ["blur(50px)", "blur(70px)", "blur(50px)"],
// // //             }}
// // //             transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay: 0.5 }}
// // //           />
// // //           <motion.div 
// // //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.4, 1],
// // //               opacity: [0.1, 0.2, 0.1],
// // //               filter: ["blur(60px)", "blur(80px)", "blur(60px)"],
// // //             }}
// // //             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
// // //           />
// // //         </div>
        
// // //         {/* Content */}
// // //         <div className="max-w-7xl mx-auto relative z-10">
// // //           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
// // //             <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
// // //             <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Our Services</span>
// // //           </motion.div>
          
// // //           <motion.h2 
// // //             variants={itemVariants}
// // //             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
// // //           >
// // //             <span className="text-white">Comprehensive </span>
// // //             <span className="text-purple-400 font-extrabold">Solutions</span>
// // //           </motion.h2>
          
// // //           <motion.p 
// // //             variants={itemVariants}
// // //             className="text-xl text-gray-300 max-w-3xl mb-12"
// // //           >
// // //             We provide a comprehensive suite of offerings tailored to meet your technology and educational needs.
// // //           </motion.p>
          
// // //           <motion.div 
// // //           variants={itemVariants}
// // //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
// // //         >
// // //           {displayedServices.map((service, index) => (
// // //             <motion.div 
// // //               key={service.id}
// // //               className="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-2 card-3d-effect"
// // //               whileHover={{ 
// // //                 scale: 1.05, 
// // //                 boxShadow: `0 20px 30px -10px rgba(${service.color.includes('purple') ? '168, 85, 247' : service.color.includes('blue') ? '59, 130, 246' : service.color.includes('cyan') ? '6, 182, 212' : service.color.includes('teal') ? '20, 184, 166' : service.color.includes('green') ? '34, 197, 94' : service.color.includes('amber') ? '245, 158, 11' : service.color.includes('red') ? '239, 68, 68' : '168, 85, 247'}, 0.25)` 
// // //               }}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: 0.1 * index }}
// // //             >
// // //               <div className="card-3d-content h-full">
// // //                 <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
// // //                 <div className="p-6">
// // //                   {/* Service Header */}
// // //                   <div className="flex items-start justify-between mb-4">
// // //                     <div className="flex items-center gap-4">
// // //                       <motion.div 
// // //                         className="text-3xl"
// // //                         animate={{ 
// // //                           y: [0, -10, 0],
// // //                           rotate: [0, 5, 0],
// // //                           scale: [1, 1.1, 1]
// // //                         }}
// // //                         transition={{ 
// // //                           duration: 4, 
// // //                           repeat: Infinity, 
// // //                           delay: index * 0.2 
// // //                         }}
// // //                       >
// // //                         {service.icon}
// // //                       </motion.div>
// // //                       <div>
// // //                         <motion.h3 
// // //                           className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors"
// // //                           whileHover={{ x: 3 }}
// // //                           transition={{ type: 'spring', stiffness: 300 }}
// // //                         >
// // //                           {service.title}
// // //                         </motion.h3>
// // //                         <p className="text-sm text-gray-400 mt-1">{service.description}</p>
// // //                       </div>
// // //                     </div>
// // //                     <motion.div
// // //                       className="flex flex-col items-end gap-1"
// // //                       initial={{ opacity: 0, scale: 0.8 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       transition={{ delay: 0.3 + index * 0.1 }}
// // //                     >
// // //                       <span className="text-xs text-green-400 font-medium">{service.status}</span>
// // //                       <span className="text-xs text-gray-500">{service.year}</span>
// // //                     </motion.div>
// // //                   </div>

// // //                   {/* Service Details */}
// // //                   <motion.p 
// // //                     className="text-gray-300 mb-4 leading-relaxed"
// // //                     initial={{ opacity: 0 }}
// // //                     animate={{ opacity: 1 }}
// // //                     transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
// // //                   >
// // //                     {service.subtitle}
// // //                   </motion.p>

// // //                   {/* Features */}
// // //                   <div className="mb-4">
// // //                     <div className="flex flex-wrap gap-2">
// // //                       {service.features.map((feature, featureIndex) => (
// // //                         <motion.span
// // //                           key={feature}
// // //                           className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
// // //                           initial={{ opacity: 0, scale: 0.8 }}
// // //                           animate={{ opacity: 1, scale: 1 }}
// // //                           transition={{ delay: 0.4 + (index * 0.1) + (featureIndex * 0.1) }}
// // //                         >
// // //                           {feature}
// // //                         </motion.span>
// // //                       ))}
// // //                     </div>
// // //                   </div>

// // //                   {/* Service Footer */}
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-xs text-gray-500">•</span>
// // //                       <span className="text-sm text-gray-400 font-medium">{service.website}</span>
// // //                     </div>
// // //                     <motion.button 
// // //                       className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full font-medium flex items-center gap-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-sm"
// // //                       whileHover={{ scale: 1.05 }}
// // //                       whileTap={{ scale: 0.98 }}
// // //                       onClick={() => handleNavigate(service.path)}
// // //                     >
// // //                       <span>{service.action}</span>
// // //                       <motion.div
// // //                         animate={{ x: [0, 3, 0] }}
// // //                         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
// // //                       >
// // //                         <ChevronRight size={16} />
// // //                       </motion.div>
// // //                     </motion.button>
// // //                   </div>

// // //                   {/* Hover Arrow */}
// // //                   <motion.div
// // //                     className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
// // //                     whileHover={{ x: 3 }}
// // //                   >
// // //                     <ArrowRight className="w-4 h-4 text-purple-400" />
// // //                   </motion.div>
// // //                 </div>
// // //               </div>
// // //               <div className="card-3d-shadow"></div>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>
          
// // //           <motion.div 
// // //             variants={itemVariants}
// // //             className="flex justify-center"
// // //           >
// // //             <motion.button 
// // //               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.98 }}
// // //               animate={{ 
// // //                 boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// // //               }}
// // //               transition={{ duration: 2, repeat: Infinity }}
// // //               onClick={() => setShowAllServices(!showAllServices)}
// // //             >
// // //               <span className="animate-text-shimmer">
// // //                 {showAllServices ? 'Show Less Services' : 'View All Services'}
// // //               </span> 
// // //               <motion.div
// // //                 animate={{ rotate: showAllServices ? 180 : 0 }}
// // //                 transition={{ duration: 0.3 }}
// // //               >
// // //                 <ArrowRight size={18} />
// // //               </motion.div>
// // //             </motion.button>
// // //           </motion.div>
// // //         </div>
// // //       </motion.section>
      
// // //       {/* Enhanced Our Mission Section */}
// // //       <motion.section 
// // //         ref={missionRef}
// // //         initial="hidden"
// // //         animate={missionControls}
// // //         variants={containerVariants}
// // //         className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 relative overflow-hidden"
// // //       >
// // //         {/* Enhanced Background Elements */}
// // //         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
// // //           <motion.div 
// // //             className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.2, 1],
// // //               opacity: [0.2, 0.3, 0.2],
// // //               x: [0, -30, 0],
// // //               y: [0, 30, 0],
// // //             }}
// // //             transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
// // //           />
// // //           <motion.div 
// // //             className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.3, 1],
// // //               opacity: [0.2, 0.4, 0.2],
// // //               x: [0, 40, 0],
// // //               y: [0, -40, 0],
// // //             }}
// // //             transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse' }}
// // //           />
// // //           <motion.div 
// // //             className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-900/15 blur-3xl"
// // //             animate={{ 
// // //               scale: [1, 1.1, 1],
// // //               opacity: [0.1, 0.3, 0.1],
// // //               rotate: [0, 180, 360],
// // //             }}
// // //             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
// // //           />
// // //         </div>
        
// // //         {/* Content */}
// // //         <div className="max-w-7xl mx-auto relative z-10">
// // //           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
// // //             <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
// // //             <span className="text-purple-400 font-medium tracking-wider text-sm uppercase">Our Mission</span>
// // //           </motion.div>
          
// // //           <motion.h2 
// // //             variants={itemVariants}
// // //             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
// // //           >
// // //             <span className="text-white">Bridging </span>
// // //             <span className="text-purple-400 font-extrabold">Talent</span>
// // //             <span className="text-white"> & </span>
// // //             <span className="text-blue-400 font-extrabold">Technology</span>
// // //           </motion.h2>
          
// // //           <motion.p 
// // //             variants={itemVariants}
// // //             className="text-xl text-gray-300 max-w-4xl mb-16 leading-relaxed"
// // //           >
// // //             Our mission is to bridge the gap between talent and technology by delivering value-driven solutions. We aim to transform lives and businesses through quality education, digital innovation, and community engagement, creating a future where technology uplifts everyone.
// // //           </motion.p>
          
// // //           {/* Enhanced Mission Cards Grid */}
// // //           <motion.div 
// // //             variants={itemVariants}
// // //             className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
// // //           >
// // //             {/* Mission Statement Card */}
// // //             <motion.div 
// // //               className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-2 card-3d-effect order-2 lg:order-1"
// // //               whileHover={{ 
// // //                 scale: 1.02, 
// // //                 boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
// // //                 borderColor: "rgba(168, 85, 247, 0.5)",
// // //               }}
// // //               transition={{ type: 'spring', stiffness: 300 }}
// // //             >
// // //               <div className="card-3d-content relative z-10">
// // //                 <motion.div 
// // //                   className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl blur-xl"
// // //                   animate={{ 
// // //                     opacity: [0.3, 0.6, 0.3],
// // //                     scale: [0.98, 1.01, 0.98] 
// // //                   }}
// // //                   transition={{ 
// // //                     duration: 6, 
// // //                     repeat: Infinity, 
// // //                     ease: "easeInOut" 
// // //                   }}
// // //                 />
// // //                 <motion.h4 
// // //                   className="text-xl font-semibold mb-6 flex items-center gap-3 text-gradient-purple"
// // //                   whileHover={{ x: 5 }}
// // //                   transition={{ type: 'spring', stiffness: 500 }}
// // //                 >
// // //                   <motion.div
// // //                     animate={{ 
// // //                       y: [0, -5, 0],
// // //                       rotate: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// // //                   >
// // //                     <Target className="text-purple-400" />
// // //                   </motion.div>
// // //                   <span>OUR MISSION</span>
// // //                 </motion.h4>
                
// // //                 <motion.p 
// // //                   className="text-gray-300 leading-relaxed mb-6"
// // //                   initial={{ opacity: 0 }}
// // //                   animate={{ opacity: 1 }}
// // //                   transition={{ duration: 0.8, delay: 0.3 }}
// // //                 >
// // //                   Our mission at Sklassics is to deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology. We aim to simplify digital transformation by offering high-quality training, reliable job placement support, and customized web, mobile, and AI-based solutions. Through our workshops, travel tech services, and cloud integrations, we are committed to creating meaningful digital experiences that solve real-world problems, foster career success, and enable long-term progress for every client and learner we serve.
// // //                 </motion.p>
                
// // //                 <div className="space-y-4">
// // //                   <motion.div 
// // //                     className="bg-dark-900/80 p-4 rounded-xl border border-purple-900/30"
// // //                     whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(168, 85, 247, 0.5)" }}
// // //                     transition={{ type: 'spring', stiffness: 300 }}
// // //                   >
// // //                     <motion.h5 
// // //                       className="text-purple-400 font-semibold mb-2 flex items-center gap-2"
// // //                       whileHover={{ x: 3 }}
// // //                     >
// // //                       <GraduationCap className="w-5 h-5" />
// // //                       Education
// // //                     </motion.h5>
// // //                     <motion.p 
// // //                       className="text-gray-400 text-sm"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       transition={{ duration: 0.8, delay: 0.4 }}
// // //                     >
// // //                       Quality training programs that prepare students for real-world challenges
// // //                     </motion.p>
// // //                   </motion.div>
                  
// // //                   <motion.div 
// // //                     className="bg-dark-900/80 p-4 rounded-xl border border-purple-900/30"
// // //                     whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(168, 85, 247, 0.5)" }}
// // //                     transition={{ type: 'spring', stiffness: 300 }}
// // //                   >
// // //                     <motion.h5 
// // //                       className="text-purple-400 font-semibold mb-2 flex items-center gap-2"
// // //                       whileHover={{ x: 3 }}
// // //                     >
// // //                       <Zap className="w-5 h-5" />
// // //                       Innovation
// // //                     </motion.h5>
// // //                     <motion.p 
// // //                       className="text-gray-400 text-sm"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       transition={{ duration: 0.8, delay: 0.5 }}
// // //                     >
// // //                       Cutting-edge digital solutions that drive business transformation
// // //                     </motion.p>
// // //                   </motion.div>
                  
// // //                   <motion.div 
// // //                     className="bg-dark-900/80 p-4 rounded-xl border border-purple-900/30"
// // //                     whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(168, 85, 247, 0.5)" }}
// // //                     transition={{ type: 'spring', stiffness: 300 }}
// // //                   >
// // //                     <motion.h5 
// // //                       className="text-purple-400 font-semibold mb-2 flex items-center gap-2"
// // //                       whileHover={{ x: 3 }}
// // //                     >
// // //                       <Users className="w-5 h-5" />
// // //                       Community
// // //                     </motion.h5>
// // //                     <motion.p 
// // //                       className="text-gray-400 text-sm"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       transition={{ duration: 0.8, delay: 0.6 }}
// // //                     >
// // //                       Engagement initiatives that create positive social impact
// // //                     </motion.p>
// // //                   </motion.div>
// // //                 </div>
// // //               </div>
// // //               <div className="card-3d-shadow"></div>
// // //             </motion.div>
            
// // //             {/* Enhanced Vision Card with AI Image */}
// // //             <motion.div 
// // //               className="relative order-1 lg:order-2"
// // //               initial={{ opacity: 0, x: 50 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.2 }}
// // //             >
// // //               <motion.div 
// // //                 className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 shadow-xl transform transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2 card-3d-effect h-full"
// // //                 whileHover={{ 
// // //                   scale: 1.02, 
// // //                   boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
// // //                   borderColor: "rgba(59, 130, 246, 0.5)",
// // //                 }}
// // //                 transition={{ type: 'spring', stiffness: 300 }}
// // //               >
// // //                 <div className="card-3d-content relative z-10">
// // //                   <motion.div 
// // //                     className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10 rounded-2xl blur-xl"
// // //                     animate={{ 
// // //                       opacity: [0.3, 0.6, 0.3],
// // //                       scale: [0.98, 1.01, 0.98] 
// // //                     }}
// // //                     transition={{ 
// // //                       duration: 6, 
// // //                       repeat: Infinity, 
// // //                       ease: "easeInOut" 
// // //                     }}
// // //                   />
                  
// // //                   <motion.h4 
// // //                     className="text-xl font-semibold mb-6 flex items-center gap-3 text-gradient-blue"
// // //                     whileHover={{ x: 5 }}
// // //                     transition={{ type: 'spring', stiffness: 500 }}
// // //                   >
// // //                     <motion.div
// // //                       animate={{ 
// // //                         y: [0, -5, 0],
// // //                         rotate: [0, 5, 0],
// // //                       }}
// // //                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// // //                     >
// // //                       <Lightbulb className="text-blue-400" />
// // //                     </motion.div>
// // //                     <span>OUR VISION</span>
// // //                   </motion.h4>
                  
// // //                   <motion.p 
// // //                     className="text-gray-300 leading-relaxed mb-6"
// // //                     initial={{ opacity: 0 }}
// // //                     animate={{ opacity: 1 }}
// // //                     transition={{ duration: 0.8, delay: 0.3 }}
// // //                   >
// // //                     Creating a world where technology is accessible to all and empowers everyone to achieve their full potential.
// // //                   </motion.p>
                  
// // //                   {/* AI-Generated Image Placeholder */}
// // //                   <motion.div 
// // //                     className="relative w-full h-48 rounded-xl overflow-hidden mb-6"
// // //                     whileHover={{ scale: 1.05 }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-xl">
// // //                       <motion.div
// // //                         className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-cyan-600/30"
// // //                         animate={{
// // //                           background: [
// // //                             "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))",
// // //                             "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))",
// // //                             "linear-gradient(45deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
// // //                           ],
// // //                         }}
// // //                         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // //                       />
// // //                     </div>
                    
// // //                     {/* Floating Elements */}
// // //                     <motion.div
// // //                       className="absolute top-4 left-4 w-8 h-8 bg-purple-400/80 rounded-full"
// // //                       animate={{ y: [0, -10, 0], rotate: [0, 360] }}
// // //                       transition={{ duration: 3, repeat: Infinity }}
// // //                     />
// // //                     <motion.div
// // //                       className="absolute top-8 right-8 w-6 h-6 bg-blue-400/80 rounded-full"
// // //                       animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
// // //                       transition={{ duration: 4, repeat: Infinity, delay: 1 }}
// // //                     />
// // //                     <motion.div
// // //                       className="absolute bottom-8 left-8 w-4 h-4 bg-cyan-400/80 rounded-full"
// // //                       animate={{ x: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
// // //                       transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
// // //                     />
                    
// // //                     {/* Central Icon */}
// // //                     <motion.div
// // //                       className="absolute inset-0 flex items-center justify-center"
// // //                       animate={{ scale: [1, 1.1, 1] }}
// // //                       transition={{ duration: 4, repeat: Infinity }}
// // //                     >
// // //                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
// // //                         <motion.div
// // //                           animate={{ rotate: [0, 360] }}
// // //                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// // //                         >
// // //                           <Globe className="w-8 h-8 text-white" />
// // //                         </motion.div>
// // //                       </div>
// // //                     </motion.div>
// // //                   </motion.div>
                  
// // //                   <motion.div 
// // //                     className="bg-dark-900/80 p-4 rounded-xl border border-blue-900/30"
// // //                     whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
// // //                     transition={{ type: 'spring', stiffness: 300 }}
// // //                   >
// // //                     <motion.h5 
// // //                       className="text-blue-400 font-semibold mb-2 flex items-center gap-2"
// // //                       whileHover={{ x: 3 }}
// // //                     >
// // //                       <Users className="w-5 h-5" />
// // //                       Team Collaboration
// // //                     </motion.h5>
// // //                     <motion.p 
// // //                       className="text-gray-400 text-sm"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       transition={{ duration: 0.8, delay: 0.7 }}
// // //                     >
// // //                       Fostering collaborative environments where diverse talents unite to create innovative solutions
// // //                     </motion.p>
// // //                   </motion.div>
// // //                 </div>
// // //                 <div className="card-3d-shadow"></div>
// // //               </motion.div>
// // //             </motion.div>
// // //           </motion.div>
          
// // //           <motion.div 
// // //             variants={itemVariants}
// // //             className="flex justify-center"
// // //           >
// // //             <motion.button 
// // //               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
// // //               whileHover={{ 
// // //                 scale: 1.05, 
// // //                 boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
// // //               }}
// // //               whileTap={{ scale: 0.98 }}
// // //               animate={{ 
// // //                 boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
// // //               }}
// // //               transition={{ duration: 2, repeat: Infinity }}
// // //             >
// // //               <span className="animate-text-shimmer">Join Our Mission</span> <ArrowRight size={18} />
// // //             </motion.button>
// // //           </motion.div>
// // //         </div>
// // //       </motion.section>
// // //     </div>
// // //   );
// // // };

// // // export default AboutUsSection;
// // import React, { useEffect, useRef, useState } from 'react';
// // import { motion, useAnimation, useInView } from 'framer-motion';
// // import { ArrowRight, Users, Target, Code, Zap, BookOpen, Car, ChevronRight } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // const AboutUsSection = () => {
// //   try {
// //     const navigate = useNavigate();
// //     const [showAllServices, setShowAllServices] = useState(false);
// //     const [isMobile, setIsMobile] = useState(false);
    
// //     // Mobile detection
// //     useEffect(() => {
// //       const checkMobile = () => {
// //         try {
// //           setIsMobile(window.innerWidth < 768 || 
// //                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
// //         } catch (error) {
// //           console.error("Mobile detection error:", error);
// //           setIsMobile(false);
// //         }
// //       };
      
// //       checkMobile();
// //       window.addEventListener('resize', checkMobile);
// //       return () => window.removeEventListener('resize', checkMobile);
// //     }, []);

// //     // Refs and animations
// //     const servicesRef = useRef(null);
// //     const servicesInView = useInView(servicesRef, { once: false, amount: isMobile ? 0.1 : 0.3 });
// //     const servicesControls = useAnimation();

// //     useEffect(() => {
// //       try {
// //         if (servicesInView) {
// //           servicesControls.start('visible').catch(e => console.error("Animation error:", e));
// //         }
// //       } catch (error) {
// //         console.error("useEffect error:", error);
// //       }
// //     }, [servicesInView]);

// //     // Simplified animation variants
// //     const containerVariants = {
// //       hidden: { opacity: 0 },
// //       visible: {
// //         opacity: 1,
// //         transition: {
// //           staggerChildren: isMobile ? 0.1 : 0.2,
// //           delayChildren: isMobile ? 0.1 : 0.3,
// //         },
// //       },
// //     };
    
// //     const itemVariants = {
// //       hidden: { y: isMobile ? 10 : 20, opacity: 0 },
// //       visible: {
// //         y: 0,
// //         opacity: 1,
// //         transition: {
// //           type: 'spring',
// //           stiffness: isMobile ? 80 : 100,
// //           damping: isMobile ? 15 : 10,
// //         },
// //       },
// //     };

// //     // Services data (simplified)
// //     const services = [
// //       {
// //         id: 1,
// //         title: 'HanumanCar - Premium Car Rentals',
// //         icon: <Car className="text-3xl text-purple-400" />,
// //         color: 'from-purple-600 to-indigo-600',
// //         description: 'Ride with Confidence: HanumanCar Rental Services',
// //         subtitle: 'We provide reliable and affordable car rental services across your city, 24/7.',
// //         website: 'hanumancars.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['24/7 Service', 'Premium Vehicles', 'City-wide Coverage'],
// //         path: '/HanumanCars'
// //       },
// //       {
// //         id: 2,
// //         title: 'Expert Tutors - One-on-One Guidance',
// //         icon: <Users className="text-3xl text-blue-400" />,
// //         color: 'from-blue-600 to-cyan-600',
// //         description: 'Learn with the Best Tutors',
// //         subtitle: 'Personalized learning support for students across all grades and subjects.',
// //         website: 'sklassicstutor.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Personalized Learning', 'All Subjects', 'Expert Tutors'],
// //         path: '/Tutors'
// //       },
// //       {
// //         id: 3,
// //         title: 'IT Training & Placement Programs',
// //         icon: <Target className="text-3xl text-cyan-400" />,
// //         color: 'from-cyan-600 to-teal-600',
// //         description: 'Industry-relevant training with placement support',
// //         subtitle: 'Professional IT training programs for students and professionals.',
// //         website: 'sklassics.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Job Ready', 'Industry Experts', 'Placement Support'],
// //         path: '/ItTraining'
// //       },
// //       {
// //         id: 4,
// //         title: 'Professional IT Services',
// //         icon: <Code className="text-3xl text-teal-400" />,
// //         color: 'from-teal-600 to-green-600',
// //         description: 'Custom web, mobile, AI, and cloud solutions',
// //         subtitle: 'Tailored digital solutions for businesses of all sizes.',
// //         website: 'sklassicstech.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Web Development', 'Mobile Apps', 'AI Solutions'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 5,
// //         title: 'AI & Cloud Integration Solutions',
// //         icon: <Zap className="text-3xl text-pink-400" />,
// //         color: 'from-pink-600 to-purple-600',
// //         description: 'Cutting-edge AI and cloud services',
// //         subtitle: 'Transform your business operations with advanced technology.',
// //         website: 'sklassics-ai.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['AI Integration', 'Cloud Services', 'Advanced Tech'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 6,
// //         title: 'LMS Application Services',
// //         icon: <BookOpen className="text-3xl text-yellow-400" />,
// //         color: 'from-yellow-600 to-orange-600',
// //         description: 'Modern learning management systems',
// //         subtitle: 'Comprehensive LMS solutions for schools, colleges, and corporates.',
// //         website: 'sklassics-lms.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Learning Management', 'Corporate Training', 'Educational Solutions'],
// //         path: '/projectdisplay'
// //       },
// //     ];
  
// //     // Additional services for "View All Services"
// //     const additionalServices = [
// //       {
// //         id: 7,
// //         title: 'Real Estate Platform Solutions',
// //         icon: <Building className="text-3xl text-indigo-400" />,
// //         color: 'from-indigo-600 to-purple-600',
// //         description: 'Modern real estate platforms',
// //         subtitle: 'Comprehensive real estate solutions for property management and sales.',
// //         website: 'vlrws.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Property Management', 'Sales Platform', 'Virtual Tours'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 8,
// //         title: 'Quiz Application Services',
// //         icon: <Star className="text-3xl text-yellow-400" />,
// //         color: 'from-yellow-600 to-orange-600',
// //         description: 'Interactive quiz platforms',
// //         subtitle: 'Engaging quiz applications for education, recruitment, and events.',
// //         website: 'sklassics-quiz.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Education', 'Recruitment', 'Events'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 9,
// //         title: 'Loan Application Services',
// //         icon: <Heart className="text-3xl text-red-400" />,
// //         color: 'from-red-600 to-pink-600',
// //         description: 'Secure loan management',
// //         subtitle: 'Automated loan application and management platform for customers and admins.',
// //         website: 'sklassics-loan.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Secure Platform', 'Automated Process', 'Management Tools'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 10,
// //         title: 'AI Interview Mock Applications',
// //         icon: <Shield className="text-3xl text-green-400" />,
// //         color: 'from-green-600 to-emerald-600',
// //         description: 'AI-powered interview prep',
// //         subtitle: 'Practice interviews with AI-driven feedback and real-world scenarios.',
// //         website: 'sklassics-ai.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['AI Feedback', 'Real Scenarios', 'Interview Prep'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 11,
// //         title: 'Travel Application Services',
// //         icon: <Plane className="text-3xl text-cyan-400" />,
// //         color: 'from-cyan-600 to-blue-600',
// //         description: 'Tech-enabled travel solutions',
// //         subtitle: 'Seamless travel booking and management tools for individuals and businesses.',
// //         website: 'hanumancars.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Seamless Booking', 'Management Tools', 'Business Travel'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 12,
// //         title: 'Workshop & Seminar Programs',
// //         icon: <GraduationCap className="text-3xl text-violet-400" />,
// //         color: 'from-violet-600 to-purple-600',
// //         description: 'Educational programs',
// //         subtitle: 'Comprehensive workshop and seminar programs for colleges and universities.',
// //         website: 'sklassics.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['College Programs', 'University Seminars', 'Industry Gap'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 13,
// //         title: 'E-Commerce Platform Solutions',
// //         icon: <ShoppingBag className="text-3xl text-emerald-400" />,
// //         color: 'from-emerald-600 to-teal-600',
// //         description: 'Modern e-commerce platforms',
// //         subtitle: 'Complete e-commerce solutions with payment integration and inventory management.',
// //         website: 'sklassics-ecom.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Payment Integration', 'Inventory Management', 'Analytics'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 14,
// //         title: 'Healthcare Management Systems',
// //         icon: <Activity className="text-3xl text-rose-400" />,
// //         color: 'from-rose-600 to-pink-600',
// //         description: 'Healthcare technology solutions',
// //         subtitle: 'Comprehensive healthcare management systems for hospitals and clinics.',
// //         website: 'sklassics-health.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Patient Management', 'Appointment Scheduling', 'Medical Records'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 15,
// //         title: 'Banking & Finance Solutions',
// //         icon: <CreditCard className="text-3xl text-blue-400" />,
// //         color: 'from-blue-600 to-indigo-600',
// //         description: 'Financial technology platforms',
// //         subtitle: 'Secure banking and financial management solutions for modern businesses.',
// //         website: 'sklassics-finance.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Secure Transactions', 'Financial Analytics', 'Compliance'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 16,
// //         title: 'Restaurant Management Systems',
// //         icon: <Utensils className="text-3xl text-orange-400" />,
// //         color: 'from-orange-600 to-red-600',
// //         description: 'Restaurant technology solutions',
// //         subtitle: 'Complete restaurant management with ordering, inventory, and analytics.',
// //         website: 'sklassics-restaurant.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Online Ordering', 'Inventory Management', 'Analytics'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 17,
// //         title: 'Fitness & Wellness Apps',
// //         icon: <Dumbbell className="text-3xl text-purple-400" />,
// //         color: 'from-purple-600 to-violet-600',
// //         description: 'Health and fitness platforms',
// //         subtitle: 'Comprehensive fitness tracking and wellness management applications.',
// //         website: 'sklassics-fitness.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Workout Tracking', 'Nutrition Planning', 'Progress Analytics'],
// //         path: '/projectdisplay'
// //       },
// //       {
// //         id: 18,
// //         title: 'Event Management Platforms',
// //         icon: <Calendar className="text-3xl text-cyan-400" />,
// //         color: 'from-cyan-600 to-blue-600',
// //         description: 'Event planning and management',
// //         subtitle: 'Complete event management solutions for conferences, weddings, and corporate events.',
// //         website: 'sklassics-events.com',
// //         status: 'ACTIVE',
// //         year: '2025',
// //         action: 'Explore More',
// //         features: ['Event Planning', 'Ticket Management', 'Venue Booking'],
// //         path: '/projectdisplay'
// //       },
// //     ];
  

// //     const displayedServices = showAllServices ? [...services, ...additionalServices] : services;

// //     // Simplified card animation
// //     const cardAnimation = {
// //       hidden: { opacity: 0, y: 20 },
// //       visible: {
// //         opacity: 1,
// //         y: 0,
// //         transition: { duration: 0.5 }
// //       }
// //     };

// //     return (
// //       <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white">
// //         {/* Services Section */}
// //         <motion.section 
// //           ref={servicesRef}
// //           initial="hidden"
// //           animate={servicesControls}
// //           variants={containerVariants}
// //           className="py-12 px-4 sm:px-6 md:px-8 lg:px-12"
// //         >
// //           <div className="max-w-7xl mx-auto">
// //             <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
// //               <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
// //               <span className="text-blue-400 font-medium text-sm uppercase">Our Services</span>
// //             </motion.div>
            
// //             <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-4">
// //               <span className="text-white">Comprehensive </span>
// //               <span className="text-purple-400">Solutions</span>
// //             </motion.h2>
            
// //             <motion.p variants={itemVariants} className="text-lg text-gray-300 max-w-3xl mb-8">
// //               We provide a comprehensive suite of offerings tailored to meet your technology and educational needs.
// //             </motion.p>
            
// //             <motion.div 
// //               variants={containerVariants}
// //               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
// //             >
// //               {displayedServices.map((service, index) => (
// //                 <motion.div 
// //                   key={service.id}
// //                   variants={cardAnimation}
// //                   className="relative bg-dark-800 rounded-lg border border-gray-800 overflow-hidden shadow-md"
// //                   whileHover={!isMobile ? { scale: 1.03 } : {}}
// //                 >
// //                   <div className={`h-2 w-full bg-gradient-to-r ${service.color}`} />
// //                   <div className="p-4">
// //                     <div className="flex items-start gap-3 mb-3">
// //                       <div className="text-2xl">
// //                         {service.icon}
// //                       </div>
// //                       <div>
// //                         <h3 className="text-lg font-semibold text-white">
// //                           {service.title}
// //                         </h3>
// //                       </div>
// //                     </div>

// //                     <p className="text-sm text-gray-300 mb-3">
// //                       {service.subtitle}
// //                     </p>

// //                     <button 
// //                       className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
// //                       onClick={() => navigate(service.path)}
// //                     >
// //                       Explore More <ChevronRight size={14} />
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
            
// //             <motion.div variants={itemVariants} className="flex justify-center">
// //               <button 
// //                 className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 text-sm"
// //                 onClick={() => setShowAllServices(!showAllServices)}
// //               >
// //                 {showAllServices ? 'Show Less' : 'View All Services'}
// //                 <ArrowRight size={16} />
// //               </button>
// //             </motion.div>
// //           </div>
// //         </motion.section>
// //       </div>
// //     );
// //   } catch (error) {
// //     console.error("Error in AboutUsSection:", error);
// //     return (
// //       <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white p-8 text-center">
// //         <h2 className="text-2xl text-red-400 mb-4">Something went wrong</h2>
// //         <p className="text-gray-300">We're having trouble loading this section. Please try again later.</p>
// //       </div>
// //     );
// //   }
// // };

// // export default AboutUsSection;



// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { ArrowRight, Users, Briefcase, Target, ChevronRight, Laptop, Smartphone, Cloud, Plane, BookOpen, Wrench, GraduationCap, Lightbulb, Car, Code, Zap, Building, Star, Heart, Shield, ShoppingBag, Activity, CreditCard, Utensils, Dumbbell, Calendar, Globe } from 'lucide-react';
// import { AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const AboutUsSection = () => {
//   const navigate = useNavigate();
//   const [showAllServices, setShowAllServices] = useState(false);
  
//   // Refs for scroll animations
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const missionRef = useRef(null);
  
//   // Check if sections are in view
//   const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
//   const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
//   const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
  
//   // Animation controls
//   const aboutControls = useAnimation();
//   const servicesControls = useAnimation();
//   const missionControls = useAnimation();
  
//   // Navigation function
//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   // Animate when sections come into view
//   useEffect(() => {
//     if (aboutInView) {
//       aboutControls.start('visible');
//     }
//     if (servicesInView) {
//       servicesControls.start('visible');
//     }
//     if (missionInView) {
//       missionControls.start('visible');
//     }
//   }, [aboutInView, servicesInView, missionInView, aboutControls, servicesControls, missionControls]);
  
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   // Services data
//   const services = [
//     {
//       id: 1,
//       title: 'HanumanCar - Premium Car Rentals',
//       icon: <Car className="text-3xl text-purple-400" />,
//       color: 'from-purple-600 to-indigo-600',
//       description: 'Ride with Confidence: HanumanCar Rental Services',
//       subtitle: 'We provide reliable and affordable car rental services across your city, 24/7.',
//       website: 'hanumancars.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['24/7 Service', 'Premium Vehicles', 'City-wide Coverage'],
//       path: '/HanumanCars'
//     },
//     {
//       id: 2,
//       title: 'Expert Tutors - One-on-One Guidance',
//       icon: <Users className="text-3xl text-blue-400" />,
//       color: 'from-blue-600 to-cyan-600',
//       description: 'Learn with the Best Tutors',
//       subtitle: 'Personalized learning support for students across all grades and subjects.',
//       website: 'sklassicstutor.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Personalized Learning', 'All Subjects', 'Expert Tutors'],
//       path: '/Tutors'
//     },
//     {
//       id: 3,
//       title: 'IT Training & Placement Programs',
//       icon: <Target className="text-3xl text-cyan-400" />,
//       color: 'from-cyan-600 to-teal-600',
//       description: 'Industry-relevant training with placement support',
//       subtitle: 'Professional IT training programs for students and professionals.',
//       website: 'sklassics.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Job Ready', 'Industry Experts', 'Placement Support'],
//       path: '/ItTraining'
//     },
//     {
//       id: 4,
//       title: 'Professional IT Services',
//       icon: <Code className="text-3xl text-teal-400" />,
//       color: 'from-teal-600 to-green-600',
//       description: 'Custom web, mobile, AI, and cloud solutions',
//       subtitle: 'Tailored digital solutions for businesses of all sizes.',
//       website: 'sklassicstech.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Web Development', 'Mobile Apps', 'AI Solutions'],
//       path: '/tech'
//     },
 
//     {
//       id: 5,
//       title: 'AI Interview Mock Applications',
//       icon: <Shield className="text-3xl text-green-400" />,
//       color: 'from-green-600 to-emerald-600',
//       description: 'AI-powered interview prep',
//       subtitle: 'Practice interviews with AI-driven feedback and real-world scenarios.',
//       website: 'sklassics-ai.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['AI Feedback', 'Real Scenarios', 'Interview Prep'],
//       path: '/AiInterview'
//     },
//     {
//       id: 6,
//       title: 'LMS Application Services',
//       icon: <BookOpen className="text-3xl text-yellow-400" />,
//       color: 'from-yellow-600 to-orange-600',
//       description: 'Modern learning management systems',
//       subtitle: 'Comprehensive LMS solutions for schools, colleges, and corporates.',
//       website: 'sklassics-lms.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Learning Management', 'Corporate Training', 'Educational Solutions'],
//       path: '/LMS'
//     },
//   ];

//   // Additional services for "View All Services"
//   const additionalServices = [
//     {
//       id: 7,
//       title: 'Real Estate Platform Solutions',
//       icon: <Building className="text-3xl text-indigo-400" />,
//       color: 'from-indigo-600 to-purple-600',
//       description: 'Modern real estate platforms',
//       subtitle: 'Comprehensive real estate solutions for property management and sales.',
//       website: 'vlrws.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Property Management', 'Sales Platform', 'Virtual Tours'],
//       path: '/RealEstate'
//     },
//     {
//       id: 8,
//       title: 'Quiz Application Services',
//       icon: <Star className="text-3xl text-yellow-400" />,
//       color: 'from-yellow-600 to-orange-600',
//       description: 'Interactive quiz platforms',
//       subtitle: 'Engaging quiz applications for education, recruitment, and events.',
//       website: 'sklassics-quiz.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Education', 'Recruitment', 'Events'],
//       path: '/projectdisplay'
//     },
//     {
//       id: 9,
//       title: 'Loan Application Services',
//       icon: <Heart className="text-3xl text-red-400" />,
//       color: 'from-red-600 to-pink-600',
//       description: 'Secure loan management',
//       subtitle: 'Automated loan application and management platform for customers and admins.',
//       website: 'sklassics-loan.com',
//       status: 'ACTIVE',
//       year: '2025',
//       action: 'Explore More',
//       features: ['Secure Platform', 'Automated Process', 'Management Tools'],
//       path: '/projectdisplay'
//     },
//      // {
//     //   id: 5,
//     //   title: 'AI & Cloud Integration Solutions',
//     //   icon: <Zap className="text-3xl text-pink-400" />,
//     //   color: 'from-pink-600 to-purple-600',
//     //   description: 'Cutting-edge AI and cloud services',
//     //   subtitle: 'Transform your business operations with advanced technology.',
//     //   website: 'sklassics-ai.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['AI Integration', 'Cloud Services', 'Advanced Tech'],
//     //   path: '/AiInterview'
//     // },
//     // {
//     //   id: 11,
//     //   title: 'Travel Application Services',
//     //   icon: <Plane className="text-3xl text-cyan-400" />,
//     //   color: 'from-cyan-600 to-blue-600',
//     //   description: 'Tech-enabled travel solutions',
//     //   subtitle: 'Seamless travel booking and management tools for individuals and businesses.',
//     //   website: 'hanumancars.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Seamless Booking', 'Management Tools', 'Business Travel'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 12,
//     //   title: 'Workshop & Seminar Programs',
//     //   icon: <GraduationCap className="text-3xl text-violet-400" />,
//     //   color: 'from-violet-600 to-purple-600',
//     //   description: 'Educational programs',
//     //   subtitle: 'Comprehensive workshop and seminar programs for colleges and universities.',
//     //   website: 'sklassics.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['College Programs', 'University Seminars', 'Industry Gap'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 13,
//     //   title: 'E-Commerce Platform Solutions',
//     //   icon: <ShoppingBag className="text-3xl text-emerald-400" />,
//     //   color: 'from-emerald-600 to-teal-600',
//     //   description: 'Modern e-commerce platforms',
//     //   subtitle: 'Complete e-commerce solutions with payment integration and inventory management.',
//     //   website: 'sklassics-ecom.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Payment Integration', 'Inventory Management', 'Analytics'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 14,
//     //   title: 'Healthcare Management Systems',
//     //   icon: <Activity className="text-3xl text-rose-400" />,
//     //   color: 'from-rose-600 to-pink-600',
//     //   description: 'Healthcare technology solutions',
//     //   subtitle: 'Comprehensive healthcare management systems for hospitals and clinics.',
//     //   website: 'sklassics-health.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Patient Management', 'Appointment Scheduling', 'Medical Records'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 15,
//     //   title: 'Banking & Finance Solutions',
//     //   icon: <CreditCard className="text-3xl text-blue-400" />,
//     //   color: 'from-blue-600 to-indigo-600',
//     //   description: 'Financial technology platforms',
//     //   subtitle: 'Secure banking and financial management solutions for modern businesses.',
//     //   website: 'sklassics-finance.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Secure Transactions', 'Financial Analytics', 'Compliance'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 16,
//     //   title: 'Restaurant Management Systems',
//     //   icon: <Utensils className="text-3xl text-orange-400" />,
//     //   color: 'from-orange-600 to-red-600',
//     //   description: 'Restaurant technology solutions',
//     //   subtitle: 'Complete restaurant management with ordering, inventory, and analytics.',
//     //   website: 'sklassics-restaurant.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Online Ordering', 'Inventory Management', 'Analytics'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 17,
//     //   title: 'Fitness & Wellness Apps',
//     //   icon: <Dumbbell className="text-3xl text-purple-400" />,
//     //   color: 'from-purple-600 to-violet-600',
//     //   description: 'Health and fitness platforms',
//     //   subtitle: 'Comprehensive fitness tracking and wellness management applications.',
//     //   website: 'sklassics-fitness.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Workout Tracking', 'Nutrition Planning', 'Progress Analytics'],
//     //   path: '/projectdisplay'
//     // },
//     // {
//     //   id: 18,
//     //   title: 'Event Management Platforms',
//     //   icon: <Calendar className="text-3xl text-cyan-400" />,
//     //   color: 'from-cyan-600 to-blue-600',
//     //   description: 'Event planning and management',
//     //   subtitle: 'Complete event management solutions for conferences, weddings, and corporate events.',
//     //   website: 'sklassics-events.com',
//     //   status: 'ACTIVE',
//     //   year: '2025',
//     //   action: 'Explore More',
//     //   features: ['Event Planning', 'Ticket Management', 'Venue Booking'],
//     //   path: '/projectdisplay'
//     // },
//   ];

//   // Combine services based on showAllServices state
//   const displayedServices = showAllServices ? [...services, ...additionalServices] : services;

//   return (
//     <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
//       {/* About Us Section */}
//       <motion.section 
//         ref={aboutRef}
//         initial="hidden"
//         animate={aboutControls}
//         variants={containerVariants}
//         className="py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden"
//       >
//         {/* Content */}
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
//             <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
//             <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Our Services</span>
//           </motion.div>
          
//           <motion.h2 
//             variants={itemVariants}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
//           >
//             <span className="text-white">Comprehensive </span>
//             <span className="text-purple-400 font-extrabold">Solutions</span>
//           </motion.h2>
          
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg sm:text-xl text-gray-300 max-w-3xl mb-8 sm:mb-12"
//           >
//             We provide a comprehensive suite of offerings tailored to meet your technology and educational needs.
//           </motion.p>
          
//           <motion.div 
//             variants={itemVariants}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
//           >
//             {displayedServices.map((service, index) => (
//               <motion.div 
//                 key={service.id}
//                 className="group relative bg-dark-800 rounded-xl border border-gray-800 overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-500/50"
//                 whileHover={{ scale: 1.02 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 * index }}
//               >
//                 <div className="h-full flex flex-col">
//                   <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
//                   <div className="p-4 sm:p-6 flex-grow">
//                     {/* Service Header */}
//                     <div className="flex items-start justify-between mb-3 sm:mb-4">
//                       <div className="flex items-center gap-3 sm:gap-4">
//                         <div className="text-2xl sm:text-3xl">
//                           {service.icon}
//                         </div>
//                         <div>
//                           <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
//                             {service.title}
//                           </h3>
//                           <p className="text-xs sm:text-sm text-gray-400 mt-1">{service.description}</p>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-end gap-1">
//                         <span className="text-xs text-green-400 font-medium">{service.status}</span>
//                         <span className="text-xs text-gray-500">{service.year}</span>
//                       </div>
//                     </div>

//                     {/* Service Details */}
//                     <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
//                       {service.subtitle}
//                     </p>

//                     {/* Features */}
//                     <div className="mb-3 sm:mb-4">
//                       <div className="flex flex-wrap gap-1 sm:gap-2">
//                         {service.features.map((feature) => (
//                           <span
//                             key={feature}
//                             className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
//                           >
//                             {feature}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Service Footer */}
//                     <div className="flex items-center justify-between mt-auto">
//                       <div className="flex items-center gap-1 sm:gap-2">
//                         <span className="text-xs text-gray-500">•</span>
//                         <span className="text-xs sm:text-sm text-gray-400 font-medium">{service.website}</span>
//                       </div>
//                       <button 
//                         className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-medium flex items-center gap-1 hover:shadow-md transition-all duration-300 text-xs sm:text-sm"
//                         onClick={() => handleNavigate(service.path)}
//                       >
//                         <span>{service.action}</span>
//                         <ChevronRight size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
          
//           <motion.div 
//             variants={itemVariants}
//             className="flex justify-center"
//           >
//             <button 
//               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
//               onClick={() => setShowAllServices(!showAllServices)}
//             >
//               <span>
//                 {showAllServices ? 'Show Less Services' : 'View All Services'}
//               </span> 
//               <ArrowRight size={16} />
//             </button>
//           </motion.div>
//         </div>
//       </motion.section>
      
//       {/* Enhanced Our Mission Section */}
//       <motion.section 
//         ref={missionRef}
//         initial="hidden"
//         animate={missionControls}
//         variants={containerVariants}
//         className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden"
//       >
//         {/* Content */}
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
//             <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
//             <span className="text-purple-400 font-medium tracking-wider text-sm uppercase">Our Mission</span>
//           </motion.div>
          
//           <motion.h2 
//             variants={itemVariants}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//           >
//             <span className="text-white">Bridging </span>
//             <span className="text-purple-400 font-extrabold">Talent</span>
//             <span className="text-white"> & </span>
//             <span className="text-blue-400 font-extrabold">Technology</span>
//           </motion.h2>
          
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg sm:text-xl text-gray-300 max-w-4xl mb-8 sm:mb-16 leading-relaxed"
//           >
//             Our mission is to bridge the gap between talent and technology by delivering value-driven solutions. We aim to transform lives and businesses through quality education, digital innovation, and community engagement, creating a future where technology uplifts everyone.
//           </motion.p>
          
//           {/* Enhanced Mission Cards Grid */}
//           <motion.div 
//             variants={itemVariants}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16"
//           >
//             {/* Mission Statement Card */}
//             <div 
//               className="bg-dark-800 p-6 sm:p-8 rounded-xl border border-purple-900/30 shadow-lg transform transition-all duration-300 hover:-translate-y-1"
//             >
//               <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-purple-400">
//                 <Target className="text-purple-400" />
//                 <span>OUR MISSION</span>
//               </h4>
              
//               <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
//                 Our mission at Sklassics is to deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology. We aim to simplify digital transformation by offering high-quality training, reliable job placement support, and customized web, mobile, and AI-based solutions. Through our workshops, travel tech services, and cloud integrations, we are committed to creating meaningful digital experiences that solve real-world problems, foster career success, and enable long-term progress for every client and learner we serve.
//               </p>
              
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="bg-dark-900/80 p-3 sm:p-4 rounded-lg border border-purple-900/30">
//                   <h5 className="text-purple-400 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
//                     <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Education
//                   </h5>
//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Quality training programs that prepare students for real-world challenges
//                   </p>
//                 </div>
                
//                 <div className="bg-dark-900/80 p-3 sm:p-4 rounded-lg border border-purple-900/30">
//                   <h5 className="text-purple-400 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
//                     <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Innovation
//                   </h5>
//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Cutting-edge digital solutions that drive business transformation
//                   </p>
//                 </div>
                
//                 <div className="bg-dark-900/80 p-3 sm:p-4 rounded-lg border border-purple-900/30">
//                   <h5 className="text-purple-400 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
//                     <Users className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Community
//                   </h5>
//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Engagement initiatives that create positive social impact
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Enhanced Vision Card */}
//             <div className="relative">
//               <div className="bg-dark-800 p-6 sm:p-8 rounded-xl border border-blue-900/30 shadow-lg transform transition-all duration-300 hover:-translate-y-1 h-full">
//                 <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-blue-400">
//                   <Lightbulb className="text-blue-400" />
//                   <span>OUR VISION</span>
//                 </h4>
                
//                 <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
//                   Creating a world where technology is accessible to all and empowers everyone to achieve their full potential.
//                 </p>
                
//                 {/* Image Placeholder */}
//                 <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-4 sm:mb-6 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                       <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-dark-900/80 p-3 sm:p-4 rounded-lg border border-blue-900/30">
//                   <h5 className="text-blue-400 font-semibold mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
//                     <Users className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Team Collaboration
//                   </h5>
//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Fostering collaborative environments where diverse talents unite to create innovative solutions
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             variants={itemVariants}
//             className="flex justify-center"
//           >
//             <button 
//               className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
//             >
//               <span>Join Our Mission</span> <ArrowRight size={16} />
//             </button>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default AboutUsSection;


import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Users, Target, ChevronRight, Car, Code, Zap, BookOpen, Building, Star, Heart, Shield, Plane, GraduationCap, ShoppingBag, Activity, CreditCard, Utensils, Dumbbell, Calendar, Globe, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUsSection = () => {
  const navigate = useNavigate();
  const [showAllServices, setShowAllServices] = useState(false);
  
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const missionRef = useRef(null);
  
  // Check if sections are in view
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
  
  // Animation controls
  const aboutControls = useAnimation();
  const servicesControls = useAnimation();
  const missionControls = useAnimation();
  
  // Navigation function
  const handleNavigate = (path) => {
    navigate(path);
  };

  // Animate when sections come into view
  useEffect(() => {
    if (aboutInView) {
      aboutControls.start('visible');
    }
    if (servicesInView) {
      servicesControls.start('visible');
    }
    if (missionInView) {
      missionControls.start('visible');
    }
  }, [aboutInView, servicesInView, missionInView, aboutControls, servicesControls, missionControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Services data
  const services = [
    {
      id: 1,
      title: 'HanumanCar - Premium Car Rentals',
      icon: <Car className="text-2xl text-purple-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Ride with Confidence: HanumanCar Rental Services',
      subtitle: 'We provide reliable and affordable car rental services across your city, 24/7.',
      website: 'hanumancars.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['24/7 Service', 'Premium Vehicles', 'City-wide Coverage'],
      path: '/HanumanCars'
    },
    {
      id: 2,
      title: 'Expert Tutors - One-on-One Guidance',
      icon: <Users className="text-2xl text-blue-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Learn with the Best Tutors',
      subtitle: 'Personalized learning support for students across all grades and subjects.',
      website: 'sklassicstutor.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Personalized Learning', 'All Subjects', 'Expert Tutors'],
      path: '/Tutors'
    },
    {
      id: 3,
      title: 'IT Training & Placement Programs',
      icon: <Target className="text-2xl text-cyan-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Industry-relevant training with placement support',
      subtitle: 'Professional IT training programs for students and professionals.',
      website: 'sklassics.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Job Ready', 'Industry Experts', 'Placement Support'],
      path: '/ItTraining'
    },
    {
      id: 4,
      title: 'Professional IT Services',
      icon: <Code className="text-2xl text-teal-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Custom web, mobile, AI, and cloud solutions',
      subtitle: 'Tailored digital solutions for businesses of all sizes.',
      website: 'sklassicstech.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Web Development', 'Mobile Apps', 'AI Solutions'],
      path: '/tech'
    },
    // {
    //   id: 5,
    //   title: 'AI & Cloud Integration Solutions',
    //   icon: <Zap className="text-2xl text-pink-400" />,
    //   color: 'from-pink-600 to-purple-600',
    //   description: 'Cutting-edge AI and cloud services',
    //   subtitle: 'Transform your business operations with advanced technology.',
    //   website: 'sklassics-ai.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['AI Integration', 'Cloud Services', 'Advanced Tech'],
    //   path: '/AiInterview'
    // },

    {
      id: 5,
      title: 'AI Interview Mock Applications',
      icon: <Shield className="text-2xl text-green-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'AI-powered interview prep',
      subtitle: 'Practice interviews with AI-driven feedback and real-world scenarios.',
      website: 'sklassics-ai.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['AI Feedback', 'Real Scenarios', 'Interview Prep'],
       path: '/AiInterview'
    },
    {
      id: 6,
      title: 'LMS Application Services',
      icon: <BookOpen className="text-2xl text-yellow-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Modern learning management systems',
      subtitle: 'Comprehensive LMS solutions for schools, colleges, and corporates.',
      website: 'sklassics-lms.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Learning Management', 'Corporate Training', 'Educational Solutions'],
      path: '/LMS'
    },
  ];

  // Additional services for "View All Services"
  const additionalServices = [
    {
      id: 7,
      title: 'Real Estate Platform Solutions',
      icon: <Building className="text-2xl text-indigo-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Modern real estate platforms',
      subtitle: 'Comprehensive real estate solutions for property management and sales.',
      website: 'vlrws.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Property Management', 'Sales Platform', 'Virtual Tours'],
      path: '/RealEstate'
    },
    {
      id: 8,
      title: 'Quiz Application Services',
      icon: <Star className="text-2xl text-yellow-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Interactive quiz platforms',
      subtitle: 'Engaging quiz applications for education, recruitment, and events.',
      website: 'sklassics-quiz.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Education', 'Recruitment', 'Events'],
      path: '/projectdisplay'
    },
    {
      id: 9,
      title: 'Loan Application Services',
      icon: <Heart className="text-2xl text-red-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Secure loan management',
      subtitle: 'Automated loan application and management platform for customers and admins.',
      website: 'sklassics-loan.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Secure Platform', 'Automated Process', 'Management Tools'],
      path: '/loan'
    },

     {
      id: 10,
      title: 'AI & Cloud Integration Solutions',
      icon: <Zap className="text-2xl text-pink-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Cutting-edge AI and cloud services',
      subtitle: 'Transform your business operations with advanced technology.',
      website: 'sklassics-ai.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['AI Integration', 'Cloud Services', 'Advanced Tech'],
      path: '/AiInterview'
    },
    
    // {
    //   id: 11,
    //   title: 'Travel Application Services',
    //   icon: <Plane className="text-2xl text-cyan-400" />,
    //   color: 'from-cyan-600 to-blue-600',
    //   description: 'Tech-enabled travel solutions',
    //   subtitle: 'Seamless travel booking and management tools for individuals and businesses.',
    //   website: 'hanumancars.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Seamless Booking', 'Management Tools', 'Business Travel'],
    //   path: '/projectdisplay'
    // },
     {
      id: 12,
      title: 'Workshop & Seminar Programs',
      icon: <GraduationCap className="text-2xl text-violet-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Educational programs',
      subtitle: 'Comprehensive workshop and seminar programs for colleges and universities.',
      website: 'sklassics.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['College Programs', 'University Seminars', 'Industry Gap'],
      path: '/projectdisplay'
    },
    {
      id: 13,
      title: 'E-Commerce Platform Solutions',
      icon: <ShoppingBag className="text-2xl text-emerald-400" />,
      color: 'from-purple-600 to-indigo-600',
      description: 'Modern e-commerce platforms',
      subtitle: 'Complete e-commerce solutions with payment integration and inventory management.',
      website: 'sklassics-ecom.com',
      status: 'ACTIVE',
      year: '2025',
      action: 'Explore More',
      features: ['Payment Integration', 'Inventory Management', 'Analytics'],
      path: '/projectdisplay'
    },
    // {
    //   id: 14,
    //   title: 'Healthcare Management Systems',
    //   icon: <Activity className="text-2xl text-rose-400" />,
    //   color: 'from-rose-600 to-pink-600',
    //   description: 'Healthcare technology solutions',
    //   subtitle: 'Comprehensive healthcare management systems for hospitals and clinics.',
    //   website: 'sklassics-health.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Patient Management', 'Appointment Scheduling', 'Medical Records'],
    //   path: '/projectdisplay'
    // },
    // {
    //   id: 15,
    //   title: 'Banking & Finance Solutions',
    //   icon: <CreditCard className="text-2xl text-blue-400" />,
    //   color: 'from-blue-600 to-indigo-600',
    //   description: 'Financial technology platforms',
    //   subtitle: 'Secure banking and financial management solutions for modern businesses.',
    //   website: 'sklassics-finance.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Secure Transactions', 'Financial Analytics', 'Compliance'],
    //   path: '/projectdisplay'
    // },
    // {
    //   id: 16,
    //   title: 'Restaurant Management Systems',
    //   icon: <Utensils className="text-2xl text-orange-400" />,
    //   color: 'from-orange-600 to-red-600',
    //   description: 'Restaurant technology solutions',
    //   subtitle: 'Complete restaurant management with ordering, inventory, and analytics.',
    //   website: 'sklassics-restaurant.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Online Ordering', 'Inventory Management', 'Analytics'],
    //   path: '/projectdisplay'
    // },
    // {
    //   id: 17,
    //   title: 'Fitness & Wellness Apps',
    //   icon: <Dumbbell className="text-2xl text-purple-400" />,
    //   color: 'from-purple-600 to-violet-600',
    //   description: 'Health and fitness platforms',
    //   subtitle: 'Comprehensive fitness tracking and wellness management applications.',
    //   website: 'sklassics-fitness.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Workout Tracking', 'Nutrition Planning', 'Progress Analytics'],
    //   path: '/projectdisplay'
    // },
    // {
    //   id: 18,
    //   title: 'Event Management Platforms',
    //   icon: <Calendar className="text-2xl text-cyan-400" />,
    //   color: 'from-cyan-600 to-blue-600',
    //   description: 'Event planning and management',
    //   subtitle: 'Complete event management solutions for conferences, weddings, and corporate events.',
    //   website: 'sklassics-events.com',
    //   status: 'ACTIVE',
    //   year: '2025',
    //   action: 'Explore More',
    //   features: ['Event Planning', 'Ticket Management', 'Venue Booking'],
    //   path: '/projectdisplay'
    // },
  ];

  // Combine services based on showAllServices state
  const displayedServices = showAllServices ? [...services, ...additionalServices] : services;

  return (
    <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
      {/* About Us Section */}
      <motion.section 
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={containerVariants}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden"
      >
        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
            <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Our Services</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            <span className="text-white">Comprehensive </span>
            <span className="text-purple-400 font-extrabold">Solutions</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mb-8 md:mb-12"
          >
            We provide a comprehensive suite of offerings tailored to meet your technology and educational needs.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            
            {displayedServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="group relative bg-dark-800 rounded-lg border border-gray-800 overflow-hidden shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px -5px rgba(168, 85, 247, 0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex flex-col h-full">
                  <div className={`h-2.5 w-full bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-4 flex-grow">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-green-400 font-medium">{service.status}</span>
                        <span className="text-xs text-gray-500">{service.year}</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Features */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Service Footer */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-400 font-medium">{service.website}</span>
                      </div>
                      <button 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full font-medium flex items-center gap-1 hover:shadow-md transition-all duration-300 text-xs"
                        onClick={() => handleNavigate(service.path)}
                      >
                        <span>{service.action}</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300 text-sm"
              onClick={() => setShowAllServices(!showAllServices)}
            >
              <span>
                {showAllServices ? 'Show Less Services' : 'View All Services'}
              </span> 
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Enhanced Our Mission Section */}
      <motion.section 
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={containerVariants}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden"
      >
        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
            <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <span className="text-purple-400 font-medium tracking-wider text-sm uppercase">Our Mission</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            <span className="text-white">Bridging </span>
            <span className="text-purple-400 font-extrabold">Talent</span>
            <span className="text-white"> & </span>
            <span className="text-blue-400 font-extrabold">Technology</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-4xl mb-8 md:mb-12 leading-relaxed"
          >
            Our mission is to bridge the gap between talent and technology by delivering value-driven solutions. We aim to transform lives and businesses through quality education, digital innovation, and community engagement, creating a future where technology uplifts everyone.
          </motion.p>
          
          {/* Enhanced Mission Cards Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {/* Mission Statement Card */}
            <div 
              className="bg-dark-800 p-4 md:p-6 rounded-lg border border-purple-900/30 shadow-md transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50"
            >
              <h4 className="text-lg font-semibold mb-3 md:mb-4 flex items-center gap-3 text-purple-400">
                <Target className="text-purple-400" />
                <span>OUR MISSION</span>
              </h4>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-3 md:mb-4">
                Our mission at Sklassics is to deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology. We aim to simplify digital transformation by offering high-quality training, reliable job placement support, and customized web, mobile, and AI-based solutions.
              </p>
              
              <div className="space-y-2 md:space-y-3">
                <div className="bg-dark-900/80 p-2 md:p-3 rounded-md border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-1 flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h5>
                  <p className="text-gray-400 text-xs">
                    Quality training programs that prepare students for real-world challenges
                  </p>
                </div>
                
                <div className="bg-dark-900/80 p-2 md:p-3 rounded-md border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-1 flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4" />
                    Innovation
                  </h5>
                  <p className="text-gray-400 text-xs">
                    Cutting-edge digital solutions that drive business transformation
                  </p>
                </div>
                
                <div className="bg-dark-900/80 p-2 md:p-3 rounded-md border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-1 flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" />
                    Community
                  </h5>
                  <p className="text-gray-400 text-xs">
                    Engagement initiatives that create positive social impact
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Vision Card */}
            <div className="bg-dark-800 p-4 md:p-6 rounded-lg border border-blue-900/30 shadow-md transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50">
              <h4 className="text-lg font-semibold mb-3 md:mb-4 flex items-center gap-3 text-blue-400">
                <Lightbulb className="text-blue-400" />
                <span>OUR VISION</span>
              </h4>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-3 md:mb-4">
                Creating a world where technology is accessible to all and empowers everyone to achieve their full potential.
              </p>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-32 md:h-40 rounded-md overflow-hidden mb-3 md:mb-4 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-900/80 p-2 md:p-3 rounded-md border border-blue-900/30">
                <h5 className="text-blue-400 font-semibold mb-1 flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4" />
                  Team Collaboration
                </h5>
                <p className="text-gray-400 text-xs">
                  Fostering collaborative environments where diverse talents unite to create innovative solutions
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition-all duration-300 text-sm"
            >
              <span>Join Our Mission</span> <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsSection;