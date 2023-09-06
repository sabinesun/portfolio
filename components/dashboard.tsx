import Experience from "@/components/experience";

export default function Dashboard() {
  return (
    <div id="about" className="snap-center">
      <div className={"flex h-screen "}>
        <div className={"m-6 flex  flex-col justify-center"}>
          <div className={"py-4 text-7xl font-bold text-black"}>Dashboard</div>
          <Experience></Experience>
        </div>
      </div>
    </div>
  );
}
