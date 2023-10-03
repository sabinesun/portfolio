import { Button } from "@/components/ui/button";
import { linkData } from "@/data/linkData";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col text-sm sm:grid sm:grid-cols-3 sm:items-end sm:p-4 sm:text-base ">
      <div className="m-3 flex flex-col sm:m-0">
        <p className="flex justify-center border-t pt-1 sm:mb-2 sm:justify-start sm:border-none sm:pt-0 sm:font-bold ">
          Contactez-moi
        </p>
        <div className="flex flex-row justify-center sm:flex-col">
          {linkData.map(
            (link) =>
              link.type === "contact" && (
                <Link href={link.link} key={link.text} target="_blank">
                  <Button
                    className={` sm:pl-0 ${link.hoverColor}`}
                    size="default"
                    variant="link"
                  >
                    <link.icon className="h-6 w-6 sm:mr-2 sm:h-4 sm:w-4" />
                    <p className="hidden sm:flex">{link.text}</p>
                  </Button>
                </Link>
              )
          )}
        </div>
      </div>
      <div className="hidden flex-col sm:flex">
        <p className="mb-2 hidden font-bold sm:flex"> Powered by </p>
        <div className="flex justify-evenly sm:grid sm:grid-cols-2">
          {linkData
            .sort((a, b) => a.text.localeCompare(b.text))
            .map(
              (link) =>
                link.type === "Technologies" && (
                  <Link href={link.link} key={link.text} target="_blank">
                    <Button
                      className={`p-0 ${
                        link.hoverColor === ""
                          ? "hover:text-[#6e5494]"
                          : link.hoverColor
                      }`}
                      size="default"
                      variant="link"
                    >
                      <link.icon className="h-6 w-6 sm:mr-2 sm:h-4 sm:w-4" />
                      <p className="hidden sm:flex">{link.text}</p>
                    </Button>
                  </Link>
                )
            )}
        </div>
      </div>
      <div className="hidden justify-center sm:flex">
        <Image
          alt="Picture of the author"
          className="mx-4"
          height={180}
          src="/memoji-computer.png"
          width={180}
        />
      </div>
    </footer>
  );
};
