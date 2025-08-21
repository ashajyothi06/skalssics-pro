import React, { useState } from "react";
import ai_inter from "../assets/5.png";
import loan from "../assets/2.png";
import travel from "../assets/3.png";
import quiz from "../assets/4.png";
import real from "../assets/1.png";
import tutor from "../assets/6.png";
import ITService from "../assets/7.png";
import ITTraining from "../assets/ITTraining.png";

const works = [
  {
    id: 1,
    image: ai_inter,
    hoverText:
      "AI Interview Panel uses NLP and machine learning to evaluate answers, provide insights, and mimic human-like interviews across various domains.",
  },
  {
    id: 2,
    image:travel,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 3,
    image: tutor,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 4,
    image:ITService,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 5,
    image:ITTraining,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 6,
    image:real,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 7,
    image:loan,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
  {
    id: 8,
    image: quiz,
    hoverText:
      "Hanuman Car Rental is a full-fledged car booking solution that streamlines both customer and admin experiences.",
  },
];

const CARD_WIDTH = 580;
const CARD_HEIGHT = 700;

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 2;

  const next = () => {
    if (currentIndex < works.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // For peeking effect
  const prevCard = works[currentIndex - 1];
  const nextCard = works[currentIndex + visibleCards];

  // Responsive card sizes (now fills most of the viewport, with padding)
  const getCardWidth = () => Math.min(window.innerWidth - 32, 480); // 32px padding, max 480px
  const getCardHeight = () => Math.min(window.innerHeight - 120, 600); // 120px padding/top space, max 600px

  // Use state to force re-render on resize for responsive sizing
  const [dimensions, setDimensions] = useState({
    width: getCardWidth(),
    height: getCardHeight(),
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: getCardWidth(),
        height: getCardHeight(),
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For mobile: show only 1 card, hide peeks, adjust dots
  const isMobile = window.innerWidth < 768;
  const cardsToShow = isMobile ? 1 : visibleCards;

  return (
    <div className="relative bg-black p-4 sm:p-8 text-white max-w-full mx-auto h-full rounded-xl overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Our Work
      </h2>
      <div
        className={`flex items-center justify-center ${isMobile ? "" : ""}`}
        style={{
          minHeight: dimensions.height + 40,
          position: "relative",
        }}
      >
        {/* Peek previous card (hide on mobile) */}
        {!isMobile && prevCard && (
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-40 scale-90 transition-all duration-300"
            style={{
              width: dimensions.width * 0.7,
              height: dimensions.height * 0.9,
              zIndex: 5,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <img
              src={prevCard.image}
              alt=""
              className="object-contain w-full h-full rounded-xl bg-black"
              draggable={false}
              style={{ filter: "blur(2px)" }}
            />
          </div>
        )}

        {/* Main visible cards */}
        <div className={`flex ${isMobile ? "gap-4" : "gap-8"} z-10`}>
          {works.slice(currentIndex, currentIndex + cardsToShow).map((work) => (
            <div
              key={work.id}
              className="relative rounded-xl cursor-pointer group flex-shrink-0 border-4 border-purple-700 overflow-hidden transition-all duration-300"
              style={{
                width: dimensions.width,
                height: dimensions.height,
                background: "#18181b",
                boxShadow: "0 8px 32px #a78bfa55",
              }}
            >
              <img
                src={work.image}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Hover overlay for hoverText */}
              <div className="absolute inset-0 bg-purple-300 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center 
                p-2 sm:p-4 md:p-6 
                text-xs sm:text-base md:text-lg font-semibold text-center leading-tight">
                {work.hoverText}
              </div>
            </div>
          ))}
        </div>

        {/* Peek next card (hide on mobile) */}
        {!isMobile && nextCard && (
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 scale-90 transition-all duration-300"
            style={{
              width: dimensions.width * 0.7,
              height: dimensions.height * 0.9,
              zIndex: 5,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <img
              src={nextCard.image}
              alt=""
              className="object-contain w-full h-full rounded-xl bg-black"
              draggable={false}
              style={{ filter: "blur(2px)" }}
            />
          </div>
        )}
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: works.length - cardsToShow + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-purple-500 scale-125 shadow"
                : "bg-gray-600 opacity-50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* ✅ Mobile Only Next Button */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <button
            onClick={next}
            disabled={currentIndex >= works.length - cardsToShow}
            className="px-6 py-2 bg-purple-600 text-white text-sm rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}

      {/* Navigation Buttons (desktop & mobile side arrows) */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className={`absolute ${isMobile ? "top-1/2 left-2" : "top-1/2 left-2"} -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center disabled:opacity-30 transition`}
        aria-label="Previous"
        style={{ fontSize: isMobile ? 18 : 24 }}
      >
        &#10094;
      </button>
      <button
        onClick={next}
        disabled={currentIndex >= works.length - cardsToShow}
        className={`absolute ${isMobile ? "top-1/2 right-2" : "top-1/2 right-2"} -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center disabled:opacity-30 transition`}
        aria-label="Next"
        style={{ fontSize: isMobile ? 18 : 24 }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default WorkShowcase;
