import resume from "../../../resume.json";
import { WorkSummary } from "@/components/section/work/work-summary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const WorkSection = () => {
  const { work } = resume;

  return (
    <Accordion collapsible type="single">
      {work.map((company) => {
        return (
          <AccordionItem key={company.name} value={company.name}>
            <AccordionTrigger>
              <div className="flex flex-1 items-center gap-4 px-4">
                <Image
                  alt={`${company.logo} Logo`}
                  className="h-8 w-8"
                  height={32}
                  src={company.logo}
                  width={32}
                />
                <div className="flex flex-1 flex-col items-start">
                  <div className="flex w-full flex-row justify-between ">
                    <h3 className="leading-6">{company.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {`${company.startDate} - ${company.endDate}`}
                    </p>
                  </div>
                  <p className="text-xs font-light text-muted-foreground">
                    {company.position}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-16">
              <p className="pb-4">
                <WorkSummary summary={company.summary} />
              </p>
              <ul className="ml-4">
                {company.highlights.map((highlight) => (
                  <li className="list-disc" key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
