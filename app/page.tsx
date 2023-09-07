// eslint-disable-next-line canonical/filename-match-exported
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

const Home = () => {
  return (
    <main className="text-justify text-zinc-600">
      <Sidebar />
      <div className="relative left-72 h-screen w-9/12">
        <Hero />
        <About />
        <Experience />
      </div>
    </main>
  );
};

export default Home;
