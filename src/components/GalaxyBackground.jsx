export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
      <div className="w-full h-full relative">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
