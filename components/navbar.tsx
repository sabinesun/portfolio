import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Navbar = () => {
  const sidebarMeItems: Array<{ href: string; label: string }> = [];
  sidebarMeItems.push({ href: "#about", label: "À propos" });
  sidebarMeItems.push({ href: "#experience", label: "Mon parcours" });
  sidebarMeItems.push({ href: "#project", label: "Mes projets" });
  return (
    <div className="fixed left-0 top-0 w-full bg-white/70 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 pt-4">
        <a href="#hero">
          <div className=" flex flex-grow items-center ">
            <Image
              alt="sun Logo"
              className="h-11 w-11"
              height={44}
              priority
              src="/Image.png"
              width={44}
            />
            <div className="flex flex-col p-2">
              <span className="flex flex-wrap content-end  pb-1 ">
                Sabine SUN
              </span>
              <span className="text-xs text-slate-400  ">
                Software engineer
              </span>
            </div>
          </div>
        </a>
        <div>
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle />
                <SheetDescription>
                  <div className="my-11 flex flex-col flex-wrap content-center gap-6">
                    <ul className="my-2">
                      {sidebarMeItems.map((item) => (
                        <li
                          className="flex flex-row items-center p-2 text-xl font-semibold text-black"
                          key={item.href}
                        >
                          <SheetClose asChild>
                            <a href={item.href}>{item.label}</a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
