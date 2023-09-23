"use client";
import { ExperienceDesktop } from "@/components/experienceDesktop";
import { ExperienceMobile } from "@/components/experienceMobile";
import { ganttBarsData } from "@/data/ganttBarsData";
import { useState } from "react";

export const Experience = () => {
  const [hover, setHover] = useState<string[]>([]);

  let earliestDate = new Date();
  let latestDate = new Date(0);

  for (const data of ganttBarsData) {
    if (data.dateBegin < earliestDate) {
      earliestDate = data.dateBegin;
    }

    if (data.dateEnd > latestDate) {
      latestDate = data.dateEnd;
    }
  }

  const startYear = earliestDate.getFullYear();
  const endYear = latestDate.getFullYear();
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div
      className="m-6 flex flex-col pt-20 sm:h-screen sm:justify-center "
      id="experience"
    >
      <div className="flex flex-row flex-wrap items-end justify-between py-4">
        <div className=" text-5xl font-bold text-black">Timeline</div>
      </div>

      <ExperienceDesktop hover={hover} setHover={setHover} years={years} />
      <ExperienceMobile />
    </div>
  );
};
