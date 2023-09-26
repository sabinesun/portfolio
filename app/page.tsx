// eslint-disable-next-line canonical/filename-match-exported
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Sidebar } from "@/components/sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="w-auto sm:ml-60">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;
