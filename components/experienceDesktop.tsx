import { Badge } from "@/components/ui/badge";
import { GanttBar } from "@/components/ui/gantt-bar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import { ganttBarsData } from "@/data/ganttBarsData";
import { logosData } from "@/data/logosData";
import { softskillsData } from "@/data/softskillsData";
import { type Dispatch, type SetStateAction } from "react";

/*
text-[#E3552E] hover:text-[#E3552E]
text-[#2E53E5] hover:text-[#2E53E5]
text-[#41BEF8] hover:text-[#41BEF8]
text-[#DBBB36] hover:text-[#DBBB36]
text-[#4CA53F] hover:text-[#4CA53F]
text-[#387BC8] hover:text-[#387BC8]
text-[#67DAFB] hover:text-[#67DAFB]
text-[#1278BE] hover:text-[#1278BE]
text-[#9D4F96] hover:text-[#9D4F96]
text-[#699DD3] hover:text-[#699DD3]
text-[#E59016] hover:text-[#E59016]
text-[#FD722E] hover:text-[#FD722E]
text-[#6e5494] hover:text-[#6e5494]*/

export type ExperienceDesktopProps = {
  readonly hover: string[];
  readonly setHover: Dispatch<SetStateAction<string[]>>;

  readonly years: number[];
};

export const ExperienceDesktop = ({
  years,
  hover,
  setHover,
}: ExperienceDesktopProps) => {
  return (
    <div className="hidden sm:flex sm:flex-col">
      <div className="flex flex-row">
        <div className="grid grid-rows-4 gap-y-2 whitespace-nowrap pb-2 pr-4">
          <div className=""> &nbsp; </div>
          <div className="flex flex-wrap content-center"> Formation </div>
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
          <Typography className="flex justify-center" variant="h3">
            Softskills
          </Typography>

          <div className="flex flex-wrap gap-2">
            {softskillsData
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((softskillData) => (
                <div key={softskillData.label}>
                  <Badge
                    className={`${
                      hover.includes(softskillData.label)
                        ? "border-[#CFBDEC]/50 text-[#6e5494] shadow-[0px_0px_20px_0px_rgba(116,_47,_246,_0.1)]"
                        : "text-slate-300"
                    } "hover:border-[#CFBDEC]/50 hover:text-[#6e5494] hover:shadow-[0px_0px_20px_0px_rgba(116,_47,_246,_0.1)]`}
                    variant="outline"
                  >
                    {softskillData.label}
                  </Badge>
                </div>
              ))}
          </div>
        </div>

        <div className="flex w-2/5 flex-col">
          <Typography className="flex justify-center" variant="h3">
            HardSkills
          </Typography>

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
