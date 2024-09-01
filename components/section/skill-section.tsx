import { Badge, badgeVariants } from "@/components/ui/badge";
import resume from "@/resume.json";
import Link from "next/link";

export const SkillSection = () => {
  const { skills } = resume;

  return (
    <ul className="mb-10 mt-4 flex w-full flex-wrap gap-x-2 gap-y-2 md:max-w-xl">
      {skills.map(({ name, url }) => (
        <li key={name}>
          {url ? (
            <Link
              className={badgeVariants({ variant: "secondary" })}
              href={url}
            >
              {name}
            </Link>
          ) : (
            <Badge variant="secondary"> {name}</Badge>
          )}
        </li>
      ))}
    </ul>
  );
};
