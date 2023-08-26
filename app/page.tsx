import Sidebar from "@/components/sidebar";
import Screen from "@/components/home";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <main>
        <Sidebar />
        <div className={"relative left-72 w-9/12"}>
          <Screen />
          <About />
        </div>
      </main>
    </>
  );
}
