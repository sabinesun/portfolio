// eslint-disable-next-line canonical/filename-match-exported
import { ModeToggle } from "@/components/theme/mode-toggle";

const Navbar = () => {
  return (
    <nav className="m-10 flex justify-center">
      <div className="flex w-full justify-between md:max-w-2xl">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Sabine Sun</h1>
          <h2 className="text-xs font-light leading-3 text-muted-foreground">
            Développeuse front-end
          </h2>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
