import { Typography } from "@/components/ui/typography";
import { BiMouse } from "react-icons/bi";

export const Hero = () => {
  return (
    <section className="flex h-screen flex-col overflow-hidden p-6 " id="hero">
      <div className=" flex w-full flex-1 flex-col flex-wrap justify-center">
        <Typography variant="h1">Hey !</Typography>
        <p>Bienvenue sur mon portfolio !</p>
        <div className="flex flex-wrap items-center">
          Découvre qui suis-je
          <a className="px-2" href="#about">
            &#128071;
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        <a className="flex animate-bounce items-center" href="#about">
          <BiMouse className="h-6 w-6" />
          <p className="text-sm">scroll</p>
        </a>
      </div>
    </section>
  );
};
