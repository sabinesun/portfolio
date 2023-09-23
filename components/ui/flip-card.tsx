"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { BiTrafficCone } from "react-icons/bi";

export type FlipCardProps = {
  readonly data: {
    github: string;
    hardskills: string[];
    inProgress: boolean;
    link: string;
    subtitle: string;
    title: string;
  };
};

export const FlipCard = ({ data }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const { github, hardskills, inProgress, link, subtitle, title } = data;

  return (
    <div className="scene inline-block h-48 w-80 cursor-pointer ">
      <div
        className={`card relative h-full w-full ${
          isFlipped ? "is-flipped" : ""
        }`}
        onClick={handleCardClick}
      >
        <div className="card-face absolute flex h-full w-full flex-col flex-wrap content-between justify-between rounded-2xl border p-4 shadow hover:border-[#CFBDEC]/50  hover:shadow-[0px_0px_20px_0px_rgba(116,_47,_246,_0.1)]">
          <div className="flex w-full justify-end">
            <BiTrafficCone color="#ca5310" />
          </div>
          <div className="">
            <div className="flex">
              <div className="flex">{title}</div>
              <div className="flex px-2 pt-1.5 text-xs text-slate-400">
                {inProgress && "(En cours...)"}
              </div>
            </div>
            <div className="flex text-xs text-slate-400">{subtitle}</div>
            <div className="flex gap-2 pt-2">
              {hardskills.map((hardskill) => (
                <Badge key={hardskill} variant="secondary">
                  {hardskill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="card-face card-face-back absolute flex h-full w-full flex-wrap content-end rounded-2xl border shadow hover:border-[#CFBDEC]/50  hover:shadow-[0px_0px_20px_0px_rgba(116,_47,_246,_0.1)]">
          <div className=" justify-start p-5  ">
            <div className="flex flex-col ">
              <a
                className="h-6"
                href={github}
                onClick={(event) => event.stopPropagation()}
              >
                <Button className="p-0" size="default" variant="link">
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  {title}
                </Button>
              </a>
              <a
                className="h-6"
                href={link}
                onClick={(event) => event.stopPropagation()}
              >
                <Button className="p-0" size="default" variant="link">
                  <Link2Icon className="mr-2 h-4 w-4" />
                  {link.replace("https://", "").replace("github.com/", "")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
