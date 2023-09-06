import GanttBar, { GanttBarProps } from "@/components/ui/gantt-bar";
import { ganttBarsData } from "@/data/ganttBarsData";

export default function Experience() {
  const startYear: number = 2019;
  const endYear: number = 2024;
  let years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div id="experience" className="snap-center">
      <div className={"flex h-screen flex-col justify-center"}>
        <div className={"py-4 text-7xl font-bold text-black"}>Timeline</div>

        <div className={"grid grid-cols-72 grid-rows-4 gap-y-2 border-y pb-2"}>
          <div
            className={" col-span-3 row-span-1 row-start-1 grid border-b px-2 "}
          >
            &nbsp;
          </div>
          {years.map((year: number) => (
            <div
              key={year}
              className={
                " col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
              }
            >
              {year}
            </div>
          ))}

          {ganttBarsData.map((barData, index: number) => (
            <GanttBar
              key={index}
              title={barData.title}
              subtitle={barData.subtitle}
              logo={barData.logo}
              content={barData.content}
              startDate={new Date(barData.startDate)}
              endDate={new Date(barData.endDate)}
              rows={barData.rows}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
