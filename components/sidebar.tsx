import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  return (
    <>
      <div className={"fixed flex h-screen flex-wrap content-center"}>
        <div className={" h-full w-60 border bg-white"}>
          <div className={"mx-5 my-8 flex h-24/25 flex-col"}>
            <div className={"flex content-center"}>
              <Image
                src="/Image.png"
                alt="sun Logo"
                width={44}
                height={44}
                className={"h-11 w-11"}
                priority
              />
              <div className={"flex flex-col p-2"}>
                <span className={"flex flex-wrap content-end pb-1"}>
                  Sabine SUN
                </span>
                <span className={"text-xs text-slate-400"}>
                  Software engineer
                </span>
              </div>
            </div>
            <div className={"my-3 flex w-full justify-around"}>
              <Link href="https://github.com/sabinesun">
                <Button
                  variant="outline"
                  size="default"
                  className="hover:text-[#6e5494]"
                >
                  <GitHubLogoIcon className="hi h-4 w-4" />
                </Button>
              </Link>

              <Link href="mailto:sabine.sun@hotmail.com">
                <Button variant="outline" size="default">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/sabinesun/">
                <Button
                  variant="outline"
                  size="default"
                  className="hover:text-[#0e76a8]"
                >
                  <LinkedInLogoIcon className="h-4 w-4 " />
                </Button>
              </Link>
            </div>
            <div className={"my-11 flex flex-col gap-6"}>
              <div>
                <span className={"text-xs text-slate-300"}>Moi</span>
                <ul className={"my-2"}>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="chevron"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    À propos
                  </li>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    Mon parcours
                  </li>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    Mon CV
                  </li>
                </ul>
              </div>
              <div>
                <span className={"text-xs text-slate-300"}>Mon travail</span>
                <ul className={" my-2 "}>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    Snake
                  </li>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    Délice de Yifan
                  </li>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
                      width={12}
                      height={12}
                      priority
                      className={"mx-2"}
                    />
                    DcBrain
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={"mb-6 flex h-full flex-wrap content-end justify-end"}
            >
              Site coder avec
              <Image
                src="/heart.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                priority
                className={"mx-2"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
