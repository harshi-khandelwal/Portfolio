import PlanetSection from "./PlanetSection";
import { projectData } from "../data/projectData";


export default function Projects() {
  return (
    <div className="relative flex flex-col items-center px-4 py-10">
      <h1 className="text-5xl font-bold flex items-center justify-center gap-4 mb-6 text-white">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {projectData.map((proj) => (
          <a
            key={proj.id}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <PlanetSection title={proj.name} image={proj.image}>
              Click to explore!
            </PlanetSection>
          </a>
        ))}
      </div>
    </div>
  );
}
