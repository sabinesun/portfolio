import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  TbBrandNextjs,
  TbBrandRadixUi,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
} from "react-icons/tb";

export const linkData = [
  {
    hoverColor: "hover:text-[#945455]",
    icon: EnvelopeClosedIcon,
    link: "mailto:sabine.sun@hotmail.com",
    text: "sabine.sun@hotmail.com",
    type: "contact",
  },
  {
    hoverColor: "hover:text-[#0e76a8]",
    icon: LinkedInLogoIcon,
    link: "https://www.linkedin.com/in/sabinesun/",
    text: "LinkedIn",
    type: "contact",
  },
  {
    hoverColor: "hover:text-[#6e5494]",
    icon: GitHubLogoIcon,
    link: "https://github.com/sabinesun",
    text: "Github",
    type: "contact",
  },
  {
    hoverColor: "",
    icon: TbBrandVercel,
    link: "https://vercel.com/",
    text: "Vercel",
    type: "Technologies",
  },
  {
    hoverColor: "hover:text-[#67DAFB]",
    icon: TbBrandReact,
    link: "https://react.dev/",
    text: "React",
    type: "Technologies",
  },
  {
    hoverColor: "",
    icon: TbBrandNextjs,
    link: "https://nextjs.org/ ",
    text: "Nextjs",
    type: "Technologies",
  },
  {
    hoverColor: "hover:text-[#387BC8]",
    icon: TbBrandTypescript,
    link: "https://www.typescriptlang.org/",
    text: "Typescript",
    type: "Technologies",
  },
  {
    hoverColor: "hover:text-[#41BEF8]",
    icon: TbBrandTailwind,
    link: "https://tailwindcss.com/",
    text: "Tailwind",
    type: "Technologies",
  },
  {
    hoverColor: "",
    icon: TbBrandRadixUi,
    link: "https://www.radix-ui.com/",
    text: "Radix",
    type: "Technologies",
  },
];
