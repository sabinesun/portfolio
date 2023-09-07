"use client";
import { GanttBar } from "@/components/ui/gantt-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ganttBarsData } from "@/data/ganttBarsData";
import { useState } from "react";
import { type IconType } from "react-icons";
import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

export const Experience = () => {
  const [hover, setHover] = useState<string[]>([]);
  const startYear = 2_019;
  const endYear = 2_024;
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const logos: Map<IconType, [string, string, string]> = new Map();

  logos.set(BiLogoHtml5, ["HTML", "text-[#E3552E]", "hover:text-[#E3552E]"]);
  logos.set(BiLogoCss3, ["CSS", "text-[#2E53E5]", "hover:text-[#2E53E5]"]);
  logos.set(BiLogoTailwindCss, [
    "Tailwind",
    "text-[#41BEF8]",
    "hover:text-[#41BEF8]",
  ]);
  logos.set(BiLogoJavascript, [
    "Javascript",
    "text-[#DBBB36]",
    "hover:text-[#DBBB36]",
  ]);
  logos.set(BiLogoTypescript, [
    "Typescript",
    "text-[#387BC8]",
    "hover:text-[#387BC8]",
  ]);
  logos.set(BiLogoReact, ["React", "text-[#67DAFB]", "hover:text-[#67DAFB]"]);
  logos.set(BiLogoJava, ["Java", "text-[#1278BE]", "hover:text-[#1278BE]"]);
  logos.set(TbBrandCSharp, ["C#", "text-[#9D4F96]", "hover:text-[#9D4F96]"]);
  logos.set(BiLogoCPlusPlus, ["C++", "text-[#699DD3]", "hover:text-[#699DD3]"]);
  logos.set(TbSql, ["SQL", "text-[#E59016]", "hover:text-[#E59016]"]);
  logos.set(BiLogoGitlab, ["Github", "text-[#FD722E]", "hover:text-[#FD722E]"]);
  logos.set(BiLogoGithub, ["Gitlab", "text-[#6e5494]", "hover:text-[#6e5494]"]);

  return (
    <div className="flex h-screen flex-col justify-center" id="experience">
      <div className="py-4 text-7xl font-bold text-black">Timeline</div>
      <div className="grid grid-cols-72 grid-rows-4 gap-y-2 border-y pb-2">
        <div className=" col-span-3 row-span-1 row-start-1 grid border-b px-2 ">
          &nbsp;
        </div>

        {years.map((year: number) => (
          <div
            className="col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
            key={year}
          >
            {year}
          </div>
        ))}

        {ganttBarsData.map((barData) => (
          <GanttBar
            data={barData}
            key={barData.title + barData.dateBegin}
            setHover={setHover}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col flex-wrap content-end  ">
        <div className="w-1/3">
          <div className="flex justify-center py-4 text-xl font-bold ">
            HardSkills
          </div>

          <div>
            {Array.from(logos.entries()).map(([key, value]) => {
              const iconType = key;
              const [label, colorClass, hoverClass] = value;

              return (
                <TooltipProvider delayDuration={100} key={iconType.toString()}>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <div
                        className={`${
                          hover.includes(label) ? colorClass : "text-slate-300"
                        } ${hoverClass} `}
                      >
                        {iconType({ size: 60 })}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
