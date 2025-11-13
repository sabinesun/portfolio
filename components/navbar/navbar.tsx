import { ModeToggle } from "@/components/theme/mode-toggle";
import { getTranslations } from "next-intl/server";
import { LanguageToggle } from "./language-toggle";

const Navbar = async () => {
  const t = await getTranslations("common");

  return (
    <nav className="m-10 flex justify-center">
      <div className="flex w-full items-center justify-between md:max-w-xl">
        <div className="flex gap-4">
          <p className="capitalize">{t("portfolio")}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
