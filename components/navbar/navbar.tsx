import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import resume from "@/resume.json";
import { getTranslations } from "next-intl/server";
import { LanguageToggle } from "./language-toggle";

const Navbar = async () => {
  const t = await getTranslations("resume");
  const { basics } = resume;

  return (
    <nav className="m-10 flex justify-center">
      <div className="flex w-full items-center justify-between md:max-w-xl">
        <div className="flex">
          <div className="relative mr-2 size-14">
            <Image alt="" fill src="/logo/me.svg" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{t(basics.nameKey)}</h1>
            <p className="whitespace-nowrap text-xs font-light leading-3 text-muted-foreground">
              {t(basics.labelKey)}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          <Button asChild className="w-9 p-0" variant="ghost">
            <Link href={`mailto: ${basics.email}`}>
              <EnvelopeClosedIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button asChild className="w-9 p-0" variant="ghost">
            <Link href={basics.socialMedia.linkedIn.url}>
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button asChild className="w-9 p-0" variant="ghost">
            <a href={basics.socialMedia.github.url}>
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </Button>
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
