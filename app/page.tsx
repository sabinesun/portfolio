import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import CurriculumVitae from "@/components/curriculum-vitae";

export default function Home() {
  return (
    <>
      <main className={"overflow-hidden text-zinc-600"}>
        <Sidebar />
        <div
          className={
            "relative left-72 h-screen w-9/12 snap-y snap-mandatory overflow-y-scroll  "
          }
        >
          <Hero />
          <About />
          <Experience />
          <CurriculumVitae />
        </div>
      </main>
    </>
  );
}
