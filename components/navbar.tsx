"use client";

import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-blackish transition ease transform duration-300`;

  return (
    <>
      <div
        className={
          "fixed flex w-full flex-row items-center justify-between p-8 md:p-14"
        }
      >
        <div className={"flex flex-row items-center"}>
          <Image
            src="/sun.svg"
            alt="sun Logo"
            width={50}
            height={50}
            priority
            className={"animate-spin-slow"}
          />
          <span className={"px-2"}>Sabine Sun</span>
        </div>

        <button
          className="z-10 flex h-10 w-12 flex-col items-center justify-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${isOpen && "translate-y-2"}`}
          />
          <div className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`} />
          <div
            className={`${genericHamburgerLine} ${isOpen && "-translate-y-2"}`}
          />
        </button>

        <div className={"hidden md:flex"}>
          <ul className={"flex flex-row"}>
            <li className={"m-2"}>À propos</li>
            <li className={"m-2"}>Mes compétences</li>
            <li className={"m-2"}>Mon parcours</li>
            <li className={"m-2"}>Contact</li>
          </ul>
        </div>
      </div>
      <div
        className={
          "absolute left-1/2 top-1/2  flex -translate-x-1/2 -translate-y-1/2 justify-center align-middle"
        }
      >
        <div
          className={`${
            isOpen
              ? "flex h-screen w-screen justify-center bg-white align-middle"
              : "hidden"
          }`}
        >
          <ul className={"flex flex-col justify-center align-middle"}>
            <li className={"m-2"}>À propos</li>
            <li className={"m-2"}>Mes compétences</li>
            <li className={"m-2"}>Mon parcours</li>
            <li className={"m-2"}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
