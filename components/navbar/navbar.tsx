// eslint-disable-next-line canonical/filename-match-exported
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="m-10 flex justify-center">
      <div className="flex w-full items-center justify-between md:max-w-xl">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Sabine Sun</h1>
          <p className="text-xs font-light leading-3 text-muted-foreground">
            Développeuse Front-End
          </p>
        </div>
        <div className="flex gap-0.5">
          <Button asChild className="w-9 p-0" variant="ghost">
            <Link href="https://www.linkedin.com/in/sabinesun/">
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <Button asChild className="w-9 p-0" variant="ghost">
            <Link href="https://github.com/sabinesun">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
