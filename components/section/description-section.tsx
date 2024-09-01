import { LinkDesign } from "@/components/ui/link-design";
import Image from "next/image";

export const DescriptionSection = () => {
  return (
    <div className="mb-10">
      Hey ! Ingénieure Frontend et passionnée par la création d'applications
      sobres et user-friendly en&nbsp;
      <LinkDesign href="https://fr.react.dev/">React</LinkDesign>, je suis
      toujours à la recherche des best practices et du&nbsp;
      <span className="relative w-fit">
        <Image
          alt=""
          className="absolute -left-1 bottom-0 h-3 w-3 animate-spark"
          height={12}
          src="/sparkle.png"
          width={12}
        />
        <Image
          alt=""
          className="absolute left-4 top-0 h-2 w-2 animate-spark2"
          height={12}
          src="/sparkle.png"
          width={12}
        />
        <Image
          alt=""
          className="absolute -bottom-2 left-9 h-1.5 w-1.5 animate-spark"
          height={12}
          src="/sparkle.png"
          width={12}
        />
        <Image
          alt=""
          className="absolute -top-0.5 left-14 h-2.5 w-2.5 animate-spark1"
          height={12}
          src="/sparkle.png"
          width={12}
        />
        <Image
          alt=""
          className="absolute -right-3 -top-1 h-4 w-4 animate-spark delay-75	"
          height={12}
          src="/sparkle.png"
          width={12}
        />
        pixel perfect.
      </span>
    </div>
  );
};
