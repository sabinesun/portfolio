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

export const ResumeDescription = async () => {
  const t = await getTranslations("resume-description");

  return (
    <div className="text-sm">
      <div className="flex flex-col gap-1">
        <div className="flex h-6 items-center gap-4">
          <CodeIcon className="ml-2 size-5 shrink-0" />
          <p className="text-nowrap">{t("headline")}</p>
        </div>
        <div className="flex h-6 items-center gap-4">
          <HomeIcon className="ml-2 size-5 shrink-0" />
          <p>{t("location")}</p>
        </div>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link href="mailto:sabine.sun@protonmail.com">
            <EnvelopeClosedIcon className="ml-2 size-5 shrink-0" />
            <p>sabine.sun@protonmail.com</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link href="https://www.linkedin.com/in/sabinesun/" target="_blank">
            <LinkedInLogoIcon className="ml-2 size-5 shrink-0" />
            <p>linkedin.com/in/sabinesun</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-4 p-0 font-light"
        >
          <Link href="https://github.com/sabinesun" target="_blank">
            <GitHubLogoIcon className="ml-2 size-5 shrink-0" />
            <p>github.com/sabinesun</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};
