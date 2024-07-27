import ProjectInfo from "@/components/project-section/project-info";
import { ProjectSection } from "@/components/section/project-section";
import { WorkSection } from "@/components/section/work-section";

const Home = () => {
  return (
    <main className="m-10 flex flex-col items-center ">
      <div className="w-full md:max-w-xl">
        <section>
          <h2 className="mb-4 w-full font-mono text-xl">work</h2>
          <WorkSection />
        </section>
        <section>
          <h2 className="mb-4 mt-10 w-full font-mono text-xl">projects</h2>
          <ProjectSection />
        </section>
      </div>
    </main>
  );
};

export default Home;
