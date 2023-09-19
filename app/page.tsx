// eslint-disable-next-line canonical/filename-match-exported
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Sidebar } from "@/components/sidebar";

const Home = () => {
  return (
    <main className="text-justify text-zinc-600">
      <div className=" sm:hidden">
        <Navbar />
      </div>
      <div className="hidden sm:flex">
        <Sidebar />
      </div>
      <div className="w-auto sm:ml-60">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
