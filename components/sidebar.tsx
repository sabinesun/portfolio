import { Button } from "@/components/ui/button";
import {
  CaretRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HeartFilledIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const sidebarMeItems: Array<{ href: string; label: string }> = [];
  sidebarMeItems.push({ href: "#about", label: "À propos" });
  sidebarMeItems.push({ href: "#experience", label: "Mon parcours" });
  sidebarMeItems.push({ href: "#curriculumVitae", label: "Mon CV" });

  const sidebarProjectItems: Array<{ href: string; label: string }> = [];
  sidebarProjectItems.push({ href: "#test", label: "Snake" });
  sidebarProjectItems.push({ href: "#test", label: "Délice de Yifan" });
  sidebarProjectItems.push({ href: "#test", label: "To-do List" });

  return (
    <div className="fixed flex h-screen flex-wrap content-center ">
      <div className=" h-full w-60 border bg-white shadow-sm">
        <div className="mx-5 my-8 flex h-24/25 flex-col">
          <a href="#hero">
            <div className="flex flex-grow items-center">
              <Image
                alt="sun Logo"
                className="h-11 w-11"
                height={44}
                priority
                src="/Image.png"
                width={44}
              />
              <div className="flex flex-col p-2">
                <span className="flex flex-wrap content-end pb-1">
                  Sabine SUN
                </span>
                <span className="text-xs text-slate-400">
                  Software engineer
                </span>
              </div>
            </div>
          </a>

          <div className="my-3 flex w-full justify-around ">
            <Link href="https://github.com/sabinesun">
              <Button
                className="hover:border-[rgba(110,_84,_148,_0.2)] hover:bg-transparent hover:text-[#6e5494] hover:shadow-[0px_0px_10px_0px_rgba(110,_84,_148,_0.1)] "
                size="default"
                variant="outline"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="mailto:sabine.sun@hotmail.com">
              <Button
                className="hover:border-[rgba(148,_84,_85,_0.2)] hover:bg-transparent hover:text-[#945455] hover:shadow-[0px_0px_10px_0px_rgba(148,_84,_85,_0.1)] "
                size="default"
                variant="outline"
              >
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/sabinesun/">
              <Button
                className="hover:border-[rgba(14,_118,_168,_0.2)] hover:bg-transparent hover:text-[#0e76a8] hover:shadow-[0px_0px_10px_0px_rgba(14,_118,_168,_0.1)] "
                size="default"
                variant="outline"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="my-11 flex flex-col gap-6">
            <div>
              <span className="text-xs text-slate-300">Moi</span>
              <ul className="my-2">
                {sidebarMeItems.map((item) => (
                  <li className="flex flex-row items-center" key={item.href}>
                    <CaretRightIcon className="h-4 w-4" />
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs text-slate-300">Mon travail</span>
              <ul className=" my-2 ">
                {sidebarProjectItems.map((item) => (
                  <li className="flex flex-row items-center" key={item.href}>
                    <CaretRightIcon className="h-4 w-4" />

                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6 flex h-full flex-wrap content-end justify-end">
            <div className="flex  items-center justify-end ">
              Site codé avec
              <div className="p-2 hover:animate-pulse hover:text-red-400">
                <HeartFilledIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
