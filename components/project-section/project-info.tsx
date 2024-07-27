import resume from "../../resume.json";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectInfo = () => {
  const { projects } = resume;

  return projects.map((project) => {
    return (
      <Button
        asChild
        className=" flex h-fit items-center p-4 "
        key={project.name}
        variant="ghost"
      >
        <Link href={project.url}>
          <div className="flex flex-1 items-center gap-4">
            <Image
              alt="Canal Plus Logo"
              className="h-8 w-8"
              height={32}
              src={project.logo}
              width={32}
            />
            <div className="flex flex-1 flex-col items-start">
              <div className="flex w-full flex-row justify-between ">
                <h3 className="leading-6 group-hover:underline">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-foreground">{project.year}</p>
              </div>
              <p className="text-xs font-light text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      </Button>
    );
  });
};

export default ProjectInfo;
