import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  Briefcase,
  Target,
  Code,
  Lightbulb,
  Globe,
  Sparkles,
  Cpu,
  GraduationCap,
  Rocket,
  MonitorSmartphone,
  BrainCircuit,
  PlaneTakeoff,
  Presentation,
  PenTool,
  Wrench,
  Bug,
  ShoppingCart,
  BarChart3,
  LineChart,
  Database,
  Settings,
  Link2,
  ShieldCheck
} from 'lucide-react';
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";
import sklassics_logo from "../assets/sklassics_logo.jpg";

const AboutCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-dark-950 text-white font-sans px-6 py-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-900/15 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Wrapper */}
      <motion.div 
        className="pt-8 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-6 border border-dark-700/50 shadow-inner mt-6 dark-card hover:shadow-glow-purple"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Labels */}
        <motion.div className="absolute top-2 left-4 text-xs text-purple-400 tracking-widest font-medium">SKLASSICS INITIATED</motion.div>
        <motion.div className="absolute top-2 right-4 flex items-center gap-2 text-xs text-green-400 tracking-widest font-medium">
          SYSTEM LIVE
          <motion.span className="h-2 w-2 rounded-full bg-green-500" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-8" variants={itemVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <motion.h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent tracking-widest flex items-center gap-2 animate-text-shimmer">
              <Sparkles className="w-6 h-6 text-purple-400" /> ABOUT US
            </motion.h2>
            <motion.div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full mt-2 mb-4 animate-pulse" />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WHO WE ARE */}
            <motion.div className="bg-dark-800/60 backdrop-blur-md p-4 rounded-2xl border border-blue-900/40 shadow-xl" variants={itemVariants}>
              <motion.h3 className="text-lg md:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><Users className="w-5 h-5" /> WHO WE ARE</motion.h3>
              <motion.ul className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {[{text:"We’re a passionate tech team building future-ready IT solutions: consulting, apps, testing, and AI.",desktop:"We're a team of passionate tech professionals focused on building a better future through smart and modern IT solutions. We offer IT consulting, website & mobile app development, software maintenance/testing, and AI integration.",icon:<Users className="w-4 h-4 text-purple-400"/>},
                  {text:"We use modern technology with agile methods to deliver quality projects on time.",desktop:"We use the latest technology to build strong, flexible solutions for business needs. We follow agile and client-centric approaches to ensure every project meets deadlines without compromising quality.",icon:<Code className="w-4 h-4 text-green-400"/>},
                  {text:"We provide IT training & placements to help students and startups grow.",desktop:"We provide IT training and placement support to help people get real-world skills and start their careers. Whether supporting students or helping startups grow, Sklassics turns ideas into reality and makes technology work for everyone.",icon:<GraduationCap className="w-4 h-4 text-yellow-400"/>},
                  {text:"We research emerging tech & build future-ready solutions for clients.",desktop:"Our team continuously researches emerging technologies to keep solutions future-ready and competitive. We believe in long-term partnerships, offering ongoing support and optimization to help clients adapt and scale effortlessly.",icon:<Rocket className="w-4 h-4 text-pink-400"/>}
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30">
                    <motion.div className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30">{item.icon}</motion.div>
                    <span className="block sm:hidden">{item.text}</span>
                    <span className="hidden sm:block">{item.desktop}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* OUR SERVICES */}
            <motion.div className="bg-dark-800/60 backdrop-blur-md p-4 rounded-2xl border border-blue-900/40 shadow-xl" variants={itemVariants}>
              <motion.h3 className="text-lg md:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5" /> OUR SERVICES</motion.h3>
              <motion.p className="text-gray-300 mb-4 text-sm sm:text-base">We provide a comprehensive suite of offerings including:</motion.p>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[{ text: "Professional IT Training & Job Placements", icon: GraduationCap, color: "indigo" },
                  { text: "Custom Web & Mobile App Development", icon: MonitorSmartphone, color: "blue" },
                  { text: "AI & Cloud Integration Solutions", icon: BrainCircuit, color: "cyan" },
                  { text: "Travel Agency IT Solutions & Support", icon: PlaneTakeoff, color: "teal" },
                  { text: "Workshops, Webinars & Seminar Programs", icon: Presentation, color: "orange" },
                  { text: "UI/UX Design & Prototyping", icon: PenTool, color: "pink" },
                  { text: "Application Maintenance & Performance Optimization", icon: Wrench, color: "purple" },
                  { text: "Software Testing (Manual & Automation)", icon: Bug, color: "red" },
                  { text: "E-commerce Development & Integration", icon: ShoppingCart, color: "emerald" },
                  { text: "Digital Marketing & SEO Services", icon: BarChart3, color: "lime" },
                  { text: "Data Analytics & Business Intelligence", icon: LineChart, color: "amber" },
                  { text: "Custom ERP & CRM System Development", icon: Database, color: "sky" },
                  { text: "DevOps & CI/CD Pipeline Setup", icon: Settings, color: "gray" },
                  { text: "API Development & Third-party Integrations", icon: Link2, color: "violet" },
                  { text: "Cybersecurity & Compliance Consulting", icon: ShieldCheck, color: "rose" }
                ].map((service, index) => (
                  <motion.div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30 group">
                    <motion.div className={`p-2 rounded-full bg-${service.color}-500/20 border border-${service.color}-500/30`}>
                      <service.icon className={`w-4 h-4 text-${service.color}-400`} />
                    </motion.div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{service.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* OUR INITIATIVES */}
            <motion.div className="bg-dark-800/60 backdrop-blur-md p-4 rounded-2xl border border-purple-900/40 shadow-xl" variants={itemVariants}>
              <motion.h3 className="text-lg md:text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Target className="w-5 h-5" /> OUR INITIATIVES</motion.h3>
              <motion.ul className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                {[{text:"End-to-end IT services that help individuals & businesses grow.",desktop:"Deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology.",icon:<Lightbulb className="w-4 h-4 text-yellow-400"/>},
                  {text:"Simplifying digital transformation with training & AI solutions.",desktop:"Simplify digital transformation with high-quality training, reliable job placement, and custom web, mobile, and AI solutions.",icon:<Cpu className="w-4 h-4 text-blue-400"/>},
                  {text:"Create real digital experiences that boost careers.",desktop:"Create meaningful digital experiences that solve real-world problems and foster career success.",icon:<Globe className="w-4 h-4 text-green-400"/>},
                  {text:"Enabling long-term success for clients & learners.",desktop:"Enable long-term progress for every client and learner we serve.",icon:<Rocket className="w-4 h-4 text-pink-400"/>}
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30">
                    <motion.div className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30">{item.icon}</motion.div>
                    <span className="block sm:hidden">{item.text}</span>
                    <span className="hidden sm:block">{item.desktop}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Logo */}
            <motion.div className="flex justify-center items-center relative" initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}}>
              <motion.div className="relative">
                <motion.div className="rounded-full bg-white p-4 w-64 h-64 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-purple-500/30">
                  <motion.img src={sklassics_logo} alt="Sklassics Technologies" className="w-56 h-56 object-contain rounded-full" />
                </motion.div>
                <motion.div className="absolute bottom-4 right-4 bg-black/80 border border-purple-500 text-xs px-4 py-2 rounded-full text-white flex items-center gap-2">
                  <motion.span className="h-2 w-2 rounded-full bg-green-500" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  SINCE 2023
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div className="mt-12 flex justify-between text-xs text-gray-600 border-t border-gray-800 pt-4">
          <motion.span className="text-purple-400 font-medium">OPERATING WORLDWIDE</motion.span>
          <DynamicTimestamp />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutCompany;
