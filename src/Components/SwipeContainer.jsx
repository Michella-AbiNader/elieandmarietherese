import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SwipeContainer({ sections, isEnabled }) {
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
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "100vh" }}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          drag={isEnabled ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) {
              // 👉 swipe RIGHT → NEXT (RTL)
              paginate(1);
            } else if (offset.x < -100) {
              // 👉 swipe LEFT → PREVIOUS
              paginate(-1);
            }
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {sections[page]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}