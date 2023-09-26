import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import { type Dispatch, type SetStateAction } from "react";

export type GanttBarProps = {
  readonly data: {
    companyLink: string;
    content: string[];
    dateBegin: Date;
    dateEnd: Date;
    hardskills: string[];
    logo: string;
    rows: number;
    softskills: string[];
    subtitle: string;
    title: string;
  };
  readonly setHover: Dispatch<SetStateAction<string[]>>;
};
export const GanttBar = ({ data, setHover }: GanttBarProps) => {
  const firstDate = new Date(2_018, 9);
  const {
    companyLink,
    dateEnd,
    dateBegin,
    rows,
    title,
    content,
    logo,
    subtitle,
    hardskills,
    softskills,
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
          setHover(hardskills.concat(softskills) ?? []);
        } else {
          setHover([]);
        }
      }}
      openDelay={100}
    >
      <HoverCardTrigger
        className="mt-1 grid h-9 place-content-center whitespace-nowrap  rounded-md border px-2 shadow-sm hover:border-[#CFBDEC]/50 "
        style={{
          gridColumn: monthStart + "/ span " + monthsBetween,
          gridRow: rows + "/ span 1",
        }}
      >
        <div className="overflow-hidden text-ellipsis">{title}</div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div>
          <div className="flex justify-between">
            <div>
              <Typography className="text-base" variant="h4">
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
              </Typography>

              <Typography variant="muted">{subtitle}</Typography>
            </div>
            <Link href={companyLink} target="_blank">
              <Image
                alt="Picture of the author"
                height={40}
                src={logo}
                width={40}
              />
            </Link>
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
