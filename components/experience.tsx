import { GanttBar } from "@/components/ui/gantt-bar";
import { ganttBarsData } from "@/data/ganttBarsData";

export const Experience = () => {
  const startYear = 2_019;
  const endYear = 2_024;
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return (
    <div className="" id="experience">
      <div className="flex h-screen flex-col justify-center">
        <div className="py-4 text-7xl font-bold text-black">Timeline</div>
        <div className="grid grid-cols-72 grid-rows-4 gap-y-2 border-y pb-2">
          <div className=" col-span-3 row-span-1 row-start-1 grid border-b px-2 ">
            &nbsp;
          </div>
          {years.map((year: number) => (
            <div
              className=" col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
              key={year}
            >
              {year}
            </div>
          ))}

          {ganttBarsData.map((barData) => (
            <GanttBar data={barData} key={barData.title + barData.dateBegin} />
          ))}
        </div>
      </div>
    </div>
  );
};
