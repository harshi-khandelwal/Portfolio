export default function PlanetSection({ title, children, image }) {
  return (
    <div className="flex flex-col items-center text-center w-[12.5rem] sm:w-[14rem] md:w-[16rem]">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-[12.5rem] h-[12.5rem] object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        />
      )}
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-4">{title}</h2>
      <div className="text-gray-400 text-sm sm:text-base mt-2">{children}</div>
    </div>
  );
}


