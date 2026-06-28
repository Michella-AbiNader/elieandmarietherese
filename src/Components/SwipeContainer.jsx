import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeContainer({ sections, isEnabled = true }) {
  const [[page, direction], setPage] = useState([0, 0]);

  // 🔥 this freezes the visible slide during animation
  const currentSection = sections[page];

  const paginate = (newDirection) => {
    setPage(([prev]) => {
      let next = prev + newDirection;

      if (next < 0) next = 0;
      if (next >= sections.length) next = sections.length - 1;

      return [next, newDirection];
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#000", // 🔥 prevents grey flash
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0 },
          }}
          drag={isEnabled ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDragEnd={(e, { offset, velocity }) => {
            if (!isEnabled) return;

            const swipe = offset.x + velocity.x * 50;

            if (swipe > 100) paginate(1);
            else if (swipe < -100) paginate(-1);
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* 🔥 BACKGROUND LAYER INSIDE MOTION */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.20)), url(${sections[page].background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          />

          {/* CONTENT */}
          <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
            {currentSection.component}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}