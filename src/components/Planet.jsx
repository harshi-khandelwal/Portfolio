export default function Planet({ img, name, top, left, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute flex flex-col items-center text-center"
      style={{ top, left }}
    >
      <img
        src={img}
        alt={name}
        className="w-50 h-50 hover:scale-110 transition-transform drop-shadow-lg"
      />
      <span className="text-white mt-1 text-xs">{name}</span>
    </a>
  );
}
