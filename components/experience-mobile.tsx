import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Typography } from "@/components/ui/typography";
import { ganttBarsData } from "@/data/ganttBarsData";
import Image from "next/image";
import Link from "next/link";

export const ExperienceMobile = () => {
  const sortedGanttBarsData = ganttBarsData.slice().sort((a, b) => {
    const dateA = a.dateBegin.getTime();
    const dateB = b.dateBegin.getTime();
    return dateB - dateA;
  });

  return (
    <div className="sm:hidden">
      {sortedGanttBarsData.map((barData) => (
        <div key={barData.title}>
          <Accordion collapsible type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Link
                  className="w-11"
                  href={barData.companyLink}
                  target="_blank"
                >
                  <Image
                    alt="Picture of the author"
                    height={36}
                    src={barData.logo}
                    width={36}
                  />
                </Link>
                <div className="flex w-full flex-col px-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <Typography variant="h4">{barData.title}</Typography>
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
                  <Typography variant="muted">{barData.subtitle}</Typography>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-2">
                  <ul>
                    {barData.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="pt-2">
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
                        {barData.hardskills.concat(barData.softskills).length -
                          3 >
                          0 && (
                          <Button
                            className="mr-1 h-auto px-2.5 py-0.5 text-xs font-semibold"
                            variant="outline"
                          >
                            {"+ " +
                              (
                                barData.hardskills.concat(barData.softskills)
                                  .length - 3
                              ).toString()}
                          </Button>
                        )}
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="flex flex-wrap text-xs">
                          {barData.hardskills
                            .concat(barData.softskills)
                            .slice(3)
                            .join(", ")}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};
