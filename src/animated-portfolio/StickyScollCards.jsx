import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    key: "p1",
    title: "IT Training and Placements 2024",
    description:
      "Industry-relevant IT training programs with placement support for students and professionals. Offers personalized online and offline tutoring with expert educators, tailored to every learner's pace and style.",
    link: "https://sklassics.com",
    linkText: "Explore Sklassics.com",
    badges: ["Certification", "Job Ready", "Industry Experts"],
    image: "/IT-Train.jpg"
  },
  {
    key: "p2",
    title: "IT Services 2024",
    description:
      "Custom web, mobile, AI, and cloud solutions for businesses of all sizes. Tailored to meet your unique goals with scalable, future-ready technology.",
    link: "https://sklassicstech.com",
    linkText: "Explore Sklassicstech.com",
    badges: ["Web", "Mobile", "AI", "Cloud"],
    image: "/upda.jpg"
  },
  {
    key: "p3",
    title: "Online and Offline Tutoring Services",
    description:
      "Flexible tutoring for students—live, batch-based, and self-paced learning options. Modern learning management systems for Schools and Colleges.",
    link: "https://sklassicstutor.com",
    linkText: "Explore Sklassicstutor.com",
    badges: ["Live Sessions", "Self-Paced", "Expert Tutors"],
    image: "/tutup.jpg"
  },
  {
    key: "p4",
    title: "AI Interview Mock Applications",
    description:
      "Practice interviews with AI-driven feedback and real-world scenarios. Identify strengths and areas for improvement with detailed performance analysis.",
    link: "https://sklassics-ai.com",
    linkText: "Explore Sklassics-ai.com",
    badges: ["AI Feedback", "Real Scenarios", "Interview Prep"],
    image: "/AI-Intup.jpg"
  },
  {
    key: "p5",
    title: "LMS Application Services",
    description:
      "Modern learning management systems for schools, colleges, and corporates. Smart, user-friendly LMS solutions designed to streamline learning and training processes.",
    link: "https://sklassics-lms.com",
    linkText: "Explore Sklassics-lms.com",
    badges: ["Schools", "Colleges", "Corporates"],
    image: "/lms.jpg"
  },
  {
    key: "p6",
    title: "Quiz Application Services",
    description:
      "Interactive quiz platforms for education, recruitment, and events. Create engaging assessments with our customizable quiz solutions.",
    link: "https://sklassics-quiz.com",
    linkText: "Explore Sklassics-quiz.com",
    badges: ["Education", "Recruitment", "Events"],
    image: "/quiz.jpg"
  },
  {
    key: "p7",
    title: "Travelling Services",
    description:
      "Reliable car rental and travel solutions for individuals and businesses. Enjoy premium vehicles with professional drivers for all your travel needs.",
    link: "https://hanumancars.com",
    linkText: "Explore Hanumancars.com",
    badges: ["Car Rental", "Travel", "Business"],
    image: "/updatecar.jpg"
  },
  {
    key: "p8",
    title: "Loan Application Services ",
    description:
      "Secure, automated loan application and management platform for customers and admins. Streamlined digital process with instant approvals and transparent terms.",
    link: "https://sklassics-loan.com",
    linkText: "Explore Sklassics-loan.com",
    badges: ["Secure", "Automated", "Management"],
    image: "/loanup.jpg"
  }
];

const CARD_TOP_PADDING = 1.0; // em
const CARD_HEIGHT = 80; // vh

const StickyScrollCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("data-id");
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

  // ---------- MOBILE ----------
  if (isMobile) {
    return (
      <div className="bg-dark-950 min-h-screen p-4 space-y-6 flex flex-col items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
              }
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-4 flex flex-col relative overflow-hidden w-full max-w-full border border-gray-700 shadow-lg"
          >
            {/* Image at the top */}
            {project.image && (
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-black">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Content below the image */}
            <div className="flex flex-col">
              <motion.h3 className="text-xl font-bold mb-3 text-white">
                {project.title}
              </motion.h3>

              {project.badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, badgeIndex) => (
                    <motion.span
                      key={badgeIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: badgeIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="bg-purple-900 bg-opacity-50 text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              )}

              <motion.p className="text-gray-300 mb-5 text-sm leading-relaxed">
                {project.description}
              </motion.p>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(168, 85, 247, 1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-800 text-white text-center py-3 rounded-lg transition-all duration-300 text-sm font-semibold"
              >
                {project.linkText}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // ---------- DESKTOP ----------
  return (
    <div
      className="w-[95%] sm:w-[90%] mx-auto bg-dark-gradient"
      style={{ minHeight: "100vh" }}
    >
      <ul
        className="list-none bg-black grid grid-cols-1"
        style={{
          gridTemplateRows: `repeat(${projects.length}, ${CARD_HEIGHT}vh)`,
          gap: "3vw",
          paddingBottom: `${projects.length * CARD_TOP_PADDING}em`,
          marginBottom: "3vw"
        }}
      >
        {projects.map((project, index) => {
          const isActive = activeCard === project.key;
          const isEven = index % 2 === 0;

          return (
            <li
              key={project.key}
              ref={(el) => (cardsRef.current[index] = el)}
              data-id={project.key}
              className="sticky top-0 rounded-[15px] sm:rounded-[20px]"
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
                  z: isActive ? 30 : 0
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`rounded-[20px] dark-card h-[87vh] flex transition-all duration-500 px-0 text-center card-3d-effect relative border-2 border-purple border-opacity-20 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
                whileHover={{
                  scale: 1.03,
                  rotateY: 0,
                  rotateX: 0,
                  z: 50,
                  transition: { duration: 0.3, type: "spring" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Content */}
                <div className="w-[60%] h-full flex flex-col justify-center p-8 relative z-10">
                  <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-purple-300 text-left">
                    {project.title}
                  </motion.h1>

                  {project.badges && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.badges.map((badge, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isActive ? 1 : 0.7,
                            scale: isActive ? 1 : 0.9
                          }}
                          transition={{
                            delay: idx * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="bg-primary-500 bg-opacity-20 text-primary-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  <motion.p className="text-sm md:text-base lg:text-lg mb-8 leading-relaxed text-dark-100 text-left">
                    {project.description}
                  </motion.p>

                  <motion.button
                    onClick={() =>
                      window.open(project.link, "_blank", "noopener,noreferrer")
                    }
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(168, 85, 247, 1)",
                      color: "#0a0a0a",
                      boxShadow:
                        "0 10px 20px -5px rgba(168, 85, 247, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-primary-500 text-primary-100 px-6 py-2.5 rounded-lg transition-all duration-300 text-base font-semibold shadow-glow-purple"
                  >
                    {project.linkText}
                  </motion.button>
                </div>

                {/* Image */}
                {project.image && (
                  <div className="w-[40%] h-full relative overflow-hidden flex items-center justify-center p-8 bg-black">
                    <motion.div
                      className="w-full h-[70%] relative rounded-lg overflow-hidden border-2 border-purple border-opacity-20"
                      initial={{ scale: 1 }}
                      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-${
                          isEven ? "r" : "l"
                        } from-dark-900 via-dark-900/70 to-transparent`}
                      ></div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StickyScrollCards;
