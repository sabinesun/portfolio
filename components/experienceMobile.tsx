import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ganttBarsData } from "@/data/ganttBarsData";

export const ExperienceMobile = () => {
  return (
    <div className="sm:hidden">
      {ganttBarsData.map((barData) => (
        <div className="mx-4 my-8" key={barData.title + barData.dateBegin}>
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-md font-bold">{barData.title}</div>

            <div className="text-xs ">
              {barData.dateBegin.toLocaleDateString("fr", {
                month: "short",
                year: "numeric",
              }) +
                " - " +
                barData.dateEnd.toLocaleDateString("fr", {
                  month: "short",
                  year: "numeric",
                })}
            </div>
          </div>
          <div className="text-xs text-slate-400">{barData.subtitle}</div>
          <ul className="py-2">
            {barData.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {barData.hardskills
            .concat(barData.softskills)
            .slice(0, 3)
            .map((skill) => (
              <Badge className="mr-1" key={skill} variant="outline">
                {skill}
              </Badge>
            ))}

          <Popover>
            <PopoverTrigger asChild>
              {barData.hardskills.concat(barData.softskills).length - 3 > 0 && (
                <Button
                  className="mr-1 h-auto px-2.5 py-0.5 text-xs font-semibold"
                  variant="outline"
                >
                  {"+ " +
                    (
                      barData.hardskills.concat(barData.softskills).length - 3
                    ).toString()}
                </Button>
              )}
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-wrap">
                {barData.hardskills
                  .concat(barData.softskills)
                  .slice(3)
                  .map((skill) => (
                    <div className="mr-1" key={skill}>
                      {skill}
                    </div>
                  ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  );
};
