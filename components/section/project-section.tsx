"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import resume from "@/resume.json";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const ProjectSection = () => {
  const t = useTranslations("resume");
  const { projects } = resume;
  const { resolvedTheme } = useTheme();

  return projects.map((project) => {
    const projectDarkLogo = project.logoDark;
    const logoSrc =
      resolvedTheme === "dark" && projectDarkLogo
        ? projectDarkLogo
        : project.logo;

    const ProjectContent = (
      <div className="flex flex-1 items-center gap-4">
        <Image
          alt={`${t(project.nameKey)} Logo`}
          className="h-8 w-8"
          height={32}
          src={logoSrc}
          width={32}
        />
        <div className="flex flex-1 flex-col items-start">
          <div className="flex w-full flex-row justify-between">
            <h3 className="leading-6 group-hover:underline">
              {t(project.nameKey)}
            </h3>
            <p className="text-xs text-muted-foreground">{project.year}</p>
          </div>
          <p className="text-xs font-light text-muted-foreground">
            {t(project.descriptionKey)}
          </p>
        </div>
      </div>
    );

    return (
      <Button
        asChild
        className={`flex h-fit items-center p-4 ${!project.url && "hover:bg-transparent"}`}
        key={project.id}
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
