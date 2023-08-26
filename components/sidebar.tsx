"use client";

import Image from "next/image";
import { useState } from "react";
export default function Sidebar() {
    return (
        <>
            <div className={"h-screen flex content-center flex-wrap"}>
                <div className={"h-24/25 w-60 bg-white m-6 rounded-md  shadow-lg shadow-slate-300"}>
                    <div className={"flex mx-5 my-8 flex-col h-24/25"}>
                        <div className={"flex content-center"}>
                        <Image
                            src="/Image.png"
                            alt="sun Logo"
                            width={44}
                            height={44}
                            className={"h-11 w-11"}
                            priority
                        />
                            <div className={"flex flex-col p-2"}>
                                <span className={"flex flex-wrap content-end pb-1"}>Sabine SUN</span>
                                <span className={"text-slate-300 text-xs"}>Software developer</span>
                            </div>
                        </div>
                        <div className={"w-full gap-4 flex my-3"}>
                            <button className={"h-8 flex flex-grow flex-wrap justify-center content-center shadow-sm shadow-slate-300 rounded-lg"}>
                                <Image
                                    src="/Github.svg"
                                    alt="Github"
                                    width={20}
                                    height={20}
                                    priority
                                    className={"animate-spin-slow"}
                                />
                            </button>
                            <button className={"h-8 flex flex-grow flex-wrap justify-center content-center shadow-sm shadow-slate-300 rounded-lg"}>
                                <Image
                                    src="/Mail.svg"
                                    alt="Mail"
                                    width={20}
                                    height={20}
                                    priority
                                    className={"animate-spin-slow"}
                                />
                            </button>
                            <button className={"h-8 flex flex-grow flex-wrap justify-center content-center shadow-sm shadow-slate-300 rounded-lg"}>
                                <Image
                                    src="/LinkedIn.svg"
                                    alt="LinkedIn"
                                    width={16}
                                    height={16}
                                    priority
                                    className={"animate-spin-slow"}
                                />
                            </button>
                        </div>
                        <div className={"flex flex-col my-11 gap-6"}>
                        <div>
                            <span className={"text-slate-300 text-xs"}>Moi</span>
                            <ul className={"list-disc mx-5 my-2"}>
                                <li> À propos </li>
                                <li> Mon parcours </li>
                                <li> Mon CV </li>
                            </ul>
                        </div>
                        <div>
                            <span className={"text-slate-300 text-xs"}>Mon travail</span>
                            <ul className={"list-disc mx-5 my-2"}>
                                <li> Snake </li>
                                <li> Délice de Yifan </li>
                                <li> DcBrain </li>
                            </ul>
                        </div>

                        </div>
                        <div className={"flex flex-wrap content-end h-full mb-6 justify-end"}>
                            Website made with
                            <Image
                                src="/heart.svg"
                                alt="LinkedIn"
                                width={16}
                                height={16}
                                priority
                                className={"animate-spin-slow mx-2"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
