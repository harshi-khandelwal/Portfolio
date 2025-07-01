
export default function Education() {
  const data = [
    {
      year: "2026 (Pursuing)",
      degree: "B.Tech, Electrical Engineering",
      institute: "Netaji Subhas University of Technology",
      result: "7.53 / 10",
    },
    {
      year: "2022",
      degree: "Class XII (Science)",
      institute: "Columbia Foundation Sr. Sec. School",
      result: "91.6%",
    },
    {
      year: "2020",
      degree: "Class X",
      institute: "Pusa Public Sr. Sec. School",
      result: "92.4%",
    },
  ];

  return (
    <div className="text-gray-400 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-4 mb-6 text-white">
        Education
      </h1>

      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full lg:w-1/3 min-h-[250px] border border-gray-700 rounded-lg p-6 bg-black/40 backdrop-blur-sm shadow-md transition duration-300 hover:scale-105"
          >
            <div>
              <h3 className="text-white text-xl font-semibold mb-1">
                {item.degree}
              </h3>
              <p className="text-gray-300 mb-2">{item.institute}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <span>{item.year}</span>
              <span className="text-white font-medium">{item.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}