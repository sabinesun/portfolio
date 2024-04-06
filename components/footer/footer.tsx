import { HeartIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="m-10 flex justify-center">
      <div className="flex gap-1 md:max-w-xl">
        <p className="text-xs">Made with</p>
        <HeartIcon />
      </div>
    </footer>
  );
};

export default Footer;
