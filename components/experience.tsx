"use client";
import { ExperienceDesktop } from "@/components/experienceDesktop";
import { ExperienceMobile } from "@/components/experienceMobile";
import { Typography } from "@/components/ui/typography";
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
    <section
      className="m-6 flex flex-col overflow-hidden pt-20 sm:min-h-screen sm:justify-center "
      id="experience"
    >
      <Typography variant="h2">Timeline</Typography>
      <ExperienceDesktop hover={hover} setHover={setHover} years={years} />
      <ExperienceMobile />
    </section>
  );
};
