// eslint-disable-next-line canonical/filename-match-exported
import AccordionWork from "@/components/accordion/accordion-work";

const Home = () => {
  return (
    <main className="m-10 flex justify-center">
      <section className="w-full md:max-w-xl">
        <h2 className="w-full font-mono text-xl">work</h2>
        <AccordionWork />
        <h2 className="mt-10 w-full font-mono text-xl">projects</h2>
      </section>
    </main>
  );
};

export default Home;
