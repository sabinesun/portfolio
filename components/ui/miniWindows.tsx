import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export type ProjectsProps = {
  readonly data: {
    backend: string[];
    description: string;
    frontend: string[];
    github: string;
    inProgress: boolean;
    link: string;
    subtitle: string;
    title: string;
    video: string;
    year: number;
  };
};

export const MiniWindows = ({ data }: ProjectsProps) => {
  const {
    backend,
    description,
    frontend,
    github,
    link,
    subtitle,
    title,
    video,
    year,
    inProgress,
  } = data;
  return (
    <div className="m-3 flex flex-col gap-5 sm:flex-row">
      <div className="flex flex-col items-center">
        <div className="flex aspect-[4/3] w-72 flex-col rounded-lg bg-black ">
          <div className="flex h-8 w-full items-center rounded-t-lg bg-[#F4F0F5]">
            <div className="m-2 flex flex-row gap-1">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
          </div>
          {inProgress ? (
            <div className=" flex h-full w-full flex-col items-center justify-center rounded-b-lg bg-gradient-to-bl from-rose-50 to-teal-50">
              <Typography className="mb-0 font-semibold" variant="h3">
                Coming soon
              </Typography>
              <div className="text-xs">work in progress</div>
            </div>
          ) : (
            <video
              autoPlay
              className="w-full flex-grow overflow-hidden rounded-b-lg"
              loop
              muted
              playsInline
              src={video}
            />
          )}
        </div>
      </div>
      <div className="max-w-72 m-2 h-full sm:w-full">
        <div className="flex flex-row items-baseline justify-between sm:w-1/2 ">
          <div className="flex flex-row gap-2">
            <Typography className="mt-0 " variant="h3">
              {title}
            </Typography>
            <div>
              <Badge variant="secondary">{year}</Badge>
            </div>
          </div>
          <div>
            {link && (
              <Link href={link} target="_blank">
                <Button className="p-0" size="default" variant="link">
                  <Link2Icon className="mr-2 h-4 w-4" />
                </Button>
              </Link>
            )}

            <Link href={github} target="_blank">
              <Button
                className=" items-start p-0"
                size="default"
                variant="link"
              >
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="sm:w-1/2">
            <Typography className="mb-2" variant="muted">
              {subtitle}
            </Typography>
            {description}
          </div>
          <div className="flex flex-row sm:w-1/2 sm:flex-col sm:px-6 ">
            <div className="mb-6 w-1/2 sm:w-full">
              <Typography className="font-semibold" variant="h4">
                Frontend
              </Typography>
              <div className="sm:space-x-1">
                {frontend.length === 0 ? (
                  <Badge variant="secondary">none</Badge>
                ) : (
                  frontend.map((skill) => (
                    <Badge className="mx-px" key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            <div className="mb-6 w-1/2 sm:w-full">
              <Typography className="font-semibold" variant="h4">
                Backend
              </Typography>
              <div className="sm:space-x-1">
                {backend.length === 0 ? (
                  <Badge variant="secondary">none</Badge>
                ) : (
                  backend.map((skill) => (
                    <Badge className="mx-px" key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
