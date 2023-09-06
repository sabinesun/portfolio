import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon , GitHubLogoIcon , LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
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
            <div className="my-3 flex w-full justify-around">
              <Link href="https://github.com/sabinesun">
                <Button
                  className="hover:text-[#6e5494]"
                  size="default"
                  variant="outline"
                >
                  <GitHubLogoIcon className=" h-4 w-4" />
                </Button>
              </Link>

              <Link href="mailto:sabine.sun@hotmail.com">
                <Button size="default" variant="outline">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/sabinesun/">
                <Button
                  className="hover:text-[#0e76a8]"
                  size="default"
                  variant="outline"
                >
                  <LinkedInLogoIcon className="h-4 w-4 " />
                </Button>
              </Link>
            </div>
            <div className="my-11 flex flex-col gap-6">
              <div>
                <span className="text-xs text-slate-300">Moi</span>
                <ul className="my-2">
                  <li className="flex flex-row">
                    <Image
                      alt="chevron"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />

                    <a href="#about">À propos</a>
                  </li>
                  <li className="flex flex-row">
                    <Image
                      alt="LinkedIn"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />
                    <a href="#experience"> Mon parcours</a>
                  </li>
                  <li className="flex flex-row">
                    <Image
                      alt="LinkedIn"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />
                    <a href="#curriculumVitae"> Mon CV</a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-xs text-slate-300">Mon travail</span>
                <ul className=" my-2 ">
                  <li className="flex flex-row">
                    <Image
                      alt="LinkedIn"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />
                    Snake
                  </li>
                  <li className="flex flex-row">
                    <Image
                      alt="LinkedIn"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />
                    Délice de Yifan
                  </li>
                  <li className="flex flex-row">
                    <Image
                      alt="LinkedIn"
                      className="mx-2"
                      height={12}
                      priority
                      src="/chevron-right.svg"
                      width={12}
                    />
                    DcBrain
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="mb-6 flex h-full flex-wrap content-end justify-end"
            >
              Site codé avec
              <Image
                alt="LinkedIn"
                className="mx-2"
                height={16}
                priority
                src="/heart.svg"
                width={16}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
