import AccordionWork from "@/components/accordion/accordion-work";
import ProjectInfo from "@/components/project-section/project-info";

const Home = () => {
  return (
    <main className="m-10 flex flex-col items-center ">
      <div className="w-full md:max-w-xl">
        <section>
          <h2 className="mb-4 w-full font-mono text-xl">work</h2>
          <AccordionWork />
        </section>
        <section>
          <h2 className="mb-4 mt-10 w-full font-mono text-xl">projects</h2>
          <ProjectInfo />
        </section>
      </div>
    </main>
  );
};

export default Home;
