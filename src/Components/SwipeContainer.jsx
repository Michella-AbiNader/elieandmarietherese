import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeContainer({ sections, isEnabled = true }) {
  const [[page, direction], setPage] = useState([0, 0]);

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
    x: direction > 0 ? "-100%" : "100%", // ✅ flipped
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "100%" : "-100%", // ✅ flipped
    opacity: 0,
  }),
};

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "relative",
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
            x: { type: "tween", duration: 0.6 },
            opacity: { duration: 0.4 },
          }}
          drag={isEnabled ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0} // 🚫 no stretch
          onDragEnd={(e, { offset, velocity }) => {
            if (!isEnabled) return;

            const swipe = offset.x + velocity.x * 50;

            if (swipe > 100) {
              // 👉 RIGHT → NEXT (RTL)
              paginate(1);
            } else if (swipe < -100) {
              // 👉 LEFT → PREVIOUS
              paginate(-1);
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute", // 🔥 prevents white gaps
            top: 0,
            left: 0,
          }}
        >
          <div className="section-wrapper">
  {sections[page]}
</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}