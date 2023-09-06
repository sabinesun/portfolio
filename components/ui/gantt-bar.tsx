import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GanttBarProps {
  title: string;
  startDate: Date;
  endDate: Date;
  subtitle: string;
  logo: string;
  content: string[];
  rows: number;
}
export default function GanttBar({
  title,
  subtitle,
  logo,
  content,
  startDate,
  endDate,
  rows,
}: GanttBarProps) {
  const firstDate = new Date(2018, 9);

  const months: number = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  const monthDiff: number = endDate.getMonth() - startDate.getMonth();

  const monthsBetween: number = months + monthDiff;
  const monthStart: number =
    (startDate.getFullYear() - firstDate.getFullYear()) * 12 +
      startDate.getMonth() -
      firstDate.getMonth() >
    0
      ? (startDate.getFullYear() - firstDate.getFullYear()) * 12 +
        startDate.getMonth() -
        firstDate.getMonth()
      : 1;

  return (
    <>
      <HoverCard openDelay={100} closeDelay={80}>
        <HoverCardTrigger
          className={
            " mt-1 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm hover:border-[#f5cfdc] hover:shadow-[#fae7ee]"
          }
          style={{
            gridColumn: monthStart + "/ span " + monthsBetween,
            gridRow: rows + "/ span 1",
          }}
        >
          {title}
        </HoverCardTrigger>
        <HoverCardContent>
          <div>
            <div className={"flex justify-between"}>
              <div>
                <div className={"text-base"}>
                  {title +
                    ": " +
                    startDate.toLocaleDateString("fr", {
                      year: "numeric",
                      month: "short",
                    }) +
                    " - " +
                    endDate.toLocaleDateString("fr", {
                      year: "numeric",
                      month: "short",
                    })}
                </div>

                <div className={"pl-6 text-xs text-slate-400"}>{subtitle}</div>
              </div>
              <Image
                src={logo}
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </div>

            <ul className={"pl-6 pt-6"}>
              {content.map((point, index) => (
                <li key={index} className={"list-disc"}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}
