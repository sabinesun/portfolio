import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { workData } from "@/data/work-data";
import Image from "next/image";

const AccordionWork = () => {
  return (
    <Accordion collapsible type="single">
      {workData.map((item) => {
        return (
          <AccordionItem key={item.company} value={item.company}>
            <AccordionTrigger>
              <div className="flex flex-1 items-center gap-4 px-4">
                <Image
                  alt="Canal Plus Logo"
                  className="h-8 w-8"
                  height={32}
                  src={item.logo}
                  width={32}
                />
                <div className="flex flex-1 flex-col items-start">
                  <div className="flex w-full flex-row justify-between ">
                    <h3 className="leading-6 group-hover:underline">
                      {item.company}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {`${item.dateBegin.toLocaleDateString("fr-FR", {
                        month: "numeric",
                        year: "2-digit",
                      })} - ${item.dateEnd.toLocaleDateString("fr-FR", {
                        month: "numeric",
                        year: "2-digit",
                      })}`}
                    </p>
                  </div>
                  <p className="text-xs font-light text-muted-foreground">
                    {item.jobTitle}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-16">
              {item.description.map((bullet) => (
                <li key={bullet}> {bullet}</li>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionWork;
