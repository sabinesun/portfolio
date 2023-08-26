import Image from "next/image";
export default function Sidebar() {
  return (
    <>
      <div className={"fixed flex h-screen flex-wrap content-center"}>
        <div
          className={
            "m-6 h-24/25 w-60 rounded-xl bg-white  shadow-lg shadow-slate-300"
          }
        >
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
                <span className={"text-xs text-slate-300"}>
                  Software developer
                </span>
              </div>
            </div>
            <div className={"my-3 flex w-full gap-4"}>
              <a
                href="https://github.com/sabinesun"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "flex h-8 flex-grow flex-wrap content-center justify-center rounded-lg shadow-sm shadow-slate-300"
                }
              >
                <Image
                  src="/Github.svg"
                  alt="Github"
                  width={20}
                  height={20}
                  priority
                />
              </a>

              <a
                href="mailto:sabine.sun@hotmail.com"
                className={
                  "flex h-8 flex-grow flex-wrap content-center justify-center rounded-lg shadow-sm shadow-slate-300"
                }
              >
                <Image
                  src="/envelope.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                  priority
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sabinesun/"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "flex h-8 flex-grow flex-wrap content-center justify-center rounded-lg shadow-sm shadow-slate-300"
                }
              >
                <Image
                  src="/LinkedIn.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  priority
                />
              </a>
            </div>
            <div className={"my-11 flex flex-col gap-6"}>
              <div>
                <span className={"text-xs text-slate-300"}>Moi</span>
                <ul className={"my-2"}>
                  <li className={"flex flex-row"}>
                    <Image
                      src="/chevron-right.svg"
                      alt="LinkedIn"
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
