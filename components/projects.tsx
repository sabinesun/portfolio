import { FlipCard } from "@/components/ui/flip-card";
import { projectData } from "@/data/projectData";

export const Projects = () => {
  return (
    <div className="flex h-screen" id="project">
      <div className="m-6 flex  flex-col flex-wrap justify-center">
        <div className="py-4 text-7xl font-bold text-black">Mes projets</div>
        <div className="flex flex-row flex-wrap gap-5">
          {projectData.map((data) => (
            <FlipCard data={data} key={data.title + data.github} />
          ))}
        </div>
      </div>
    </div>
  );
};
