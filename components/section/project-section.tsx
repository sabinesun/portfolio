import resume from "../../resume.json";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ProjectSection = () => {
  const { projects } = resume;

  return projects.map((project) => {
    const ProjectContent = (
      <div className="flex flex-1 items-center gap-4">
        <Image
          alt={`${project.name} Logo`}
          className="h-8 w-8"
          height={32}
          src={project.logo}
          width={32}
        />
        <div className="flex flex-1 flex-col items-start">
          <div className="flex w-full flex-row justify-between">
            <h3 className="leading-6 group-hover:underline">{project.name}</h3>
            <p className="text-xs text-muted-foreground">{project.year}</p>
          </div>
          <p className="text-xs font-light text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    );

    return (
      <Button
        asChild
        className={`flex h-fit items-center p-4 ${!project.url && "hover:bg-white"}`}
        key={project.name}
        variant="ghost"
      >
        {project.url ? (
          <Link href={project.url} rel="noopener noreferrer" target="_blank">
            {ProjectContent}
          </Link>
        ) : (
          ProjectContent
        )}
      </Button>
    );
  });
};
