import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const sidebarMeItems: Array<{ href: string; label: string }> = [];
  sidebarMeItems.push({ href: "#about", label: "À propos" });
  sidebarMeItems.push({ href: "#experience", label: "Mon parcours" });
  sidebarMeItems.push({ href: "#project", label: "Mes projets" });

  return (
    <div className="fixed hidden h-screen flex-wrap content-center sm:flex">
      <div className=" h-full w-60 border bg-white shadow-sm">
        <div className="mx-5 my-8 flex h-24/25 flex-col">
          <a href="#hero">
            <div className="flex flex-grow items-center">
              <Image
                alt="sun Logo"
                className="h-11 w-11"
                height={44}
                priority
                src="/memoji.png"
                width={44}
              />
              <div className="flex flex-col p-2">
                <span className="flex flex-wrap content-end pb-1">
                  Sabine SUN
                </span>
                <Typography variant="muted">Software engineer</Typography>
              </div>
            </div>
          </a>

          <div className="my-3 flex w-full justify-around ">
            <Link href="https://github.com/sabinesun" target="_blank">
              <Button
                className="hover:border-[rgba(110,_84,_148,_0.2)] hover:bg-transparent hover:text-[#6e5494] hover:shadow-[0px_0px_10px_0px_rgba(110,_84,_148,_0.1)] "
                size="default"
                variant="outline"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="mailto:sabine.sun@hotmail.com" target="_blank">
              <Button
                className="hover:border-[rgba(148,_84,_85,_0.2)] hover:bg-transparent hover:text-[#945455] hover:shadow-[0px_0px_10px_0px_rgba(148,_84,_85,_0.1)] "
                size="default"
                variant="outline"
              >
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/sabinesun/" target="_blank">
              <Button
                className="hover:border-[rgba(14,_118,_168,_0.2)] hover:bg-transparent hover:text-[#0e76a8] hover:shadow-[0px_0px_10px_0px_rgba(14,_118,_168,_0.1)] "
                size="default"
                variant="outline"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="my-11 flex flex-col">
            <Typography variant="muted">Moi</Typography>
            <Typography variant="list">
              {sidebarMeItems.map((item) => (
                <a href={item.href} key={item.href}>
                  <li>{item.label}</li>
                </a>
              ))}
            </Typography>
          </div>

          <div className="mb-6 flex h-full flex-wrap content-end justify-end">
            <div className="flex  items-center justify-end ">
              Site codé avec
              <div className="cursor-default p-2 hover:animate-pulse-fast">
                &#129728;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
