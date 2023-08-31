import Sidebar from "@/components/sidebar";
import Screen from "@/components/home";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <>
      <main className={"text-zinc-600"}>
        <Sidebar />
        <div className={"relative left-72 w-9/12"}>
          <Screen />
          <About />
          <Experience />
        </div>
      </main>
    </>
  );
}
