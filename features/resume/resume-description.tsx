import { Button } from "@/components/ui/button";
import {
  CodeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { type ReactNode } from "react";

export const ResumeDescription = async () => {
  const t = await getTranslations("resume-description");
  const company = (chunks: ReactNode) => (
    <Link
      className="group relative inline-flex items-center"
      href="https://www.meetkiosk.com/"
      rel="noreferrer"
      target="_blank"
    >
      <p className="relative inline-flex items-center gap-1">
        <span className="inline-block translate-x-4 opacity-0 transition duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 ">
          🍃
        </span>
        <span className="inline-block -translate-x-4  transition  duration-200 ease-out group-hover:translate-x-0 group-hover:font-medium group-hover:text-green-700">
          {chunks}
        </span>
      </p>
    </Link>
  );

  return (
    <div className="text-sm">
      <div className="flex flex-col gap-1">
        <div className="flex h-6 w-fit items-center gap-4 whitespace-nowrap p-0 font-light">
          <CodeIcon className="ml-2 size-5 shrink-0" />
          <span>{t.rich("headline", { company })}</span>
        </div>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link
            href="https://www.google.com/maps/place/Paris/"
            rel="noreferrer"
            target="_blank"
          >
            <HomeIcon className="ml-2 size-5 shrink-0" />
            <p>{t("location")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link href="mailto:sabine.sun@protonmail.com">
            <EnvelopeClosedIcon className="ml-2 size-5 shrink-0" />
            <p>{t("email")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link
            href="https://www.linkedin.com/in/sabinesun/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogoIcon className="ml-2 size-5 shrink-0" />
            <p>{t("linkedin")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link
            href="https://github.com/sabinesun"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="ml-2 size-5 shrink-0" />
            <p>{t("github")}</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};
