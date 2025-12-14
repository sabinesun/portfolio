import { HeartIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");

  return (
    <footer className="m-10 flex justify-center">
      <div className="flex gap-1 md:max-w-xl">
        <p className="text-xs">{t("made-with")}</p>
        <HeartIcon />
      </div>
    </footer>
  );
};

export default Footer;
