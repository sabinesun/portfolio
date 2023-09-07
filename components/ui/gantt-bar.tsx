import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { type Dispatch, type SetStateAction } from "react";

export type GanttBarProps = {
  readonly data: {
    content: string[];
    dateBegin: Date;
    dateEnd: Date;
    hardskills: string[];
    logo: string;
    rows: number;
    subtitle: string;
    title: string;
  };
  readonly setHover: Dispatch<SetStateAction<string[]>>;
};
export const GanttBar = ({ data, setHover }: GanttBarProps) => {
  const firstDate = new Date(2_018, 9);
  const {
    dateEnd,
    dateBegin,
    rows,
    title,
    content,
    logo,
    subtitle,
    hardskills,
  } = data;

  const months: number = (dateEnd.getFullYear() - dateBegin.getFullYear()) * 12;
  const monthDiff: number = dateEnd.getMonth() - dateBegin.getMonth();

  const monthsBetween: number = months + monthDiff;
  const monthStart: number =
    (dateBegin.getFullYear() - firstDate.getFullYear()) * 12 +
      dateBegin.getMonth() -
      firstDate.getMonth() >
    0
      ? (dateBegin.getFullYear() - firstDate.getFullYear()) * 12 +
        dateBegin.getMonth() -
        firstDate.getMonth()
      : 1;

  return (
    <HoverCard
      closeDelay={80}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          setHover(hardskills ?? []);
        } else {
          setHover([]);
        }
      }}
      openDelay={100}
    >
      <HoverCardTrigger
        className=" mt-1 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm hover:border-[#f5cfdc] hover:shadow-[#fae7ee]"
        style={{
          gridColumn: monthStart + "/ span " + monthsBetween,
          gridRow: rows + "/ span 1",
        }}
      >
        {title}
      </HoverCardTrigger>
      <HoverCardContent>
        <div>
          <div className="flex justify-between">
            <div>
              <div className="text-base">
                {title +
                  ": " +
                  dateBegin.toLocaleDateString("fr", {
                    month: "short",
                    year: "numeric",
                  }) +
                  " - " +
                  dateEnd.toLocaleDateString("fr", {
                    month: "short",
                    year: "numeric",
                  })}
              </div>

              <div className="pl-6 text-xs text-slate-400">{subtitle}</div>
            </div>
            <Image
              alt="Picture of the author"
              height={40}
              src={logo}
              width={40}
            />
          </div>

          <ul className="pl-6 pt-6">
            {content.map((point) => (
              <li className="list-disc" key={point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
