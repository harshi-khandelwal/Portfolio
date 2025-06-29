import { useEffect, useState } from "react";

export default function GalaxyBackground() {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 80 + 10; 
      const left = Math.random() * 50 + 25; 
      setShootingStars((prev) => [
        ...prev,
        { id, top, left }
      ]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const stars = Array.from({ length: 150 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const opacity = Math.random() * 0.5 + 0.5;
    const duration = `${Math.random() * 4 + 2}s`;
    const delay = `${Math.random() * 4}s`;

    return (
      <div
        key={i}
        className="absolute rounded-full bg-white twinkle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top,
          left,
          opacity,
          animationDuration: duration,
          animationDelay: delay,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="relative w-full h-full">
        {stars}
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
