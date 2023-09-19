"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GanttBar } from "@/components/ui/gantt-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ganttBarsData } from "@/data/ganttBarsData";
import { logosData } from "@/data/logosData";
import { softskillsData } from "@/data/softskillsData";
import { UploadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

/*
text-[#E3552E] hover:text-[#E3552E] hover:border-[#E3552E]
text-[#2E53E5] hover:text-[#2E53E5] hover:border-[#2E53E5]
text-[#41BEF8] hover:text-[#41BEF8] hover:border-[#41BEF8]
text-[#DBBB36] hover:text-[#DBBB36] hover:border-[#DBBB36]
text-[#4CA53F] hover:text-[#4CA53F]
text-[#387BC8] hover:text-[#387BC8]
text-[#67DAFB] hover:text-[#67DAFB]
text-[#1278BE] hover:text-[#1278BE]
text-[#9D4F96] hover:text-[#9D4F96]
text-[#699DD3] hover:text-[#699DD3]
text-[#E59016] hover:text-[#E59016]
text-[#FD722E] hover:text-[#FD722E]
text-[#6e5494] hover:text-[#6e5494]*/

export const Experience = () => {
  const [hover, setHover] = useState<string[]>([]);

  const startYear = 2_019;
  const endYear = 2_024;
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div className="m-6 flex h-screen flex-col justify-center" id="experience">
      <div className="flex flex-row flex-wrap items-end justify-between py-4">
        <div className=" text-7xl font-bold text-black">Timeline</div>
        <Button className="mb-2" variant="outline">
          <UploadIcon className=" mr-2 h-4 w-4  " /> Télécharger le CV
        </Button>
      </div>

      <div className="flex flex-row">
        <div className="grid grid-rows-4 gap-y-2 whitespace-nowrap pb-2 pr-4">
          <div className=""> &nbsp; </div>
          <div className="flex flex-wrap content-center"> Education </div>
          <div className="flex flex-wrap content-center"> Professionel </div>
          <div className="flex flex-wrap content-center"> Projet d'école </div>
        </div>
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
      </div>

      <div className="mt-10 flex flex-row flex-wrap justify-end">
        <div className="flex w-2/5 flex-col">
          <div className="flex justify-center py-4 text-xl font-bold ">
            Softskills
          </div>

          <div className="flex flex-wrap gap-2">
            {softskillsData.map((softskillData) => (
              <div key={softskillData.label}>
                <Badge
                  className={`${
                    hover.includes(softskillData.label)
                      ? softskillData.colorClass
                      : "text-slate-300"
                  } ${softskillData.hoverColorClass} `}
                  variant="outline"
                >
                  {softskillData.label}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-2/5 flex-col">
          <div className="flex justify-center py-4 text-xl font-bold ">
            HardSkills
          </div>

          <div>
            {logosData.map((logoData) => (
              <TooltipProvider
                delayDuration={100}
                key={logoData.iconType.toString()}
              >
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className={`${
                        hover.includes(logoData.label)
                          ? logoData.colorClass
                          : "text-slate-300"
                      } ${logoData.hoverColorClass} `}
                    >
                      {logoData.iconType({ size: 60 })}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{logoData.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
