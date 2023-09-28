import { FlipCard } from "@/components/ui/flip-card";
import { Typography } from "@/components/ui/typography";
import { projectData } from "@/data/projectData";

export const Projects = () => {
  return (
    <section className="flex overflow-hidden pt-20 sm:h-screen" id="project">
      <div className="m-6 flex flex-row flex-wrap justify-center sm:flex-col ">
        <Typography variant="h2"> Mes projets</Typography>
        <div className="flex flex-row flex-wrap justify-center gap-5 sm:justify-start">
          {projectData.map((data) => (
            <FlipCard data={data} key={data.title + data.github} />
          ))}
        </div>
      </div>
    </section>
  );
};
