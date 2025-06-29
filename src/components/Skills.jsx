
export default function Skills() {
  const skills = {
    "Languages & Core": ["C", "C++", "JavaScript", "HTML", "CSS"],
    "Frontend Libraries": ["React.js", "Tailwind CSS", "Bootstrap"],
    "Backend & Stack": ["Node.js", "Express.js", "MongoDB", "MERN Stack"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Vercel"],
    "Academic/Other": ["DSA", "DBMS", "Operating Systems", "Theatre Direction"],
  };

  const highlight = ["React.js", "Node.js", "C++", "MERN Stack", "DSA"];

  return (
    <div className="px-6 max-w-7xl mx-auto text-center text-gray-400">
    <h1 className="text-5xl font-bold flex items-center justify-center gap-4 mb-6 text-white">
        
          Skills
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-left shadow-md"
          >
            <h3 className="text-white text-xl font-semibold mb-3">{category}</h3>
            <ul className="space-y-2 pl-4 list-disc marker:text-white/70">
              {items.map((skill, index) => (
                <li
                  key={index}
                  className={`${
                    highlight.includes(skill) ? "text-white" : "text-gray-300"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
