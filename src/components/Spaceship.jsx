// src/components/Spaceship.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const positions = [
  { x: 100, y: 200 },
  { x: 500, y: 300 },
  { x: 800, y: 150 },
  { x: 1200, y: 350 },
];

export default function Spaceship() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const moveToNext = async () => {
      const { x, y } = positions[index];
      await controls.start({
        x,
        y,
        transition: { duration: 2, ease: "easeInOut" },
      });

      // Pause before moving to the next
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % positions.length);
      }, 1500);
    };

    moveToNext();
  }, [index]);

  return (
    <motion.img
      src="/spaceship.png"
      alt="Spaceship"
      className="absolute w-40 h-40"
      animate={controls}
      initial={positions[0]}
      style={{ zIndex: 5 }}
    />
  );
}
