import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Sidebar } from "@/components/sidebar";

const Home = () => {
  return (
    <main className="overflow-hidden text-justify text-zinc-600">
      <Sidebar />
      <div className="relative left-72 h-screen w-9/12 snap-y snap-mandatory overflow-y-scroll  ">
        <Hero />
        <About />
        <Experience />
        {/*
          <CurriculumVitae />
*/}

        {/*  <Dashboard />*/}
      </div>
    </main>
  );
};

export default Home;
