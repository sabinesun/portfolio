// eslint-disable-next-line canonical/filename-match-exported
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { SunIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <main className="text-justify text-zinc-600">
      <Sidebar />
      <div className="fixed  right-8 top-12">
        <Button size="icon" variant="outline">
          <SunIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="relative left-72 h-screen w-9/12">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
