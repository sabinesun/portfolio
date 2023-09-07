import { Experience } from "@/components/experience";

export const Dashboard = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-6 flex  flex-col justify-center">
        <div className="py-4 text-7xl font-bold text-black">Dashboard</div>

        <Experience />
      </div>
    </div>
  );
};
