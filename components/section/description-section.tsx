import { LinkDesign } from "@/components/ui/link-design";

export const DescriptionSection = () => {
  return (
    <div className="mb-10">
      Hey ! Ingénieure Frontend et passionnée par la création d'applications
      sobres et user-friendly en&nbsp;
      <LinkDesign href="https://fr.react.dev/">React</LinkDesign>, je suis
      toujours à la recherche des best practices et du&nbsp;
      <span className="relative w-fit">
        <img
          className="absolute -left-1 bottom-0 h-3 w-3 animate-spark"
          src="/sparkle.png"
        />
        <img
          className="absolute left-4 top-0 h-2 w-2 animate-spark2"
          src="/sparkle.png"
        />
        <img
          className="absolute -bottom-2 left-9 h-1.5 w-1.5 animate-spark"
          src="/sparkle.png"
        />
        <img
          className="absolute -top-0.5 left-14 h-2.5 w-2.5 animate-spark1"
          src="/sparkle.png"
        />
        <img
          className="absolute -right-3 -top-1 h-4 w-4 animate-spark delay-75	"
          src="/sparkle.png"
        />
        pixel perfect.
      </span>
    </div>
  );
};
