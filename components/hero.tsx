import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <div className="snap-center" id="hero">
      <div className="flex h-screen flex-col p-6 ">
        <div
          className=" flex w-full flex-1 flex-col flex-wrap justify-center"
        >
          <div className="py-4 text-9xl font-black text-black">Hey !</div>
          <div>
            {" "}
            Software engineer en devenir, mais surtout front developer.{" "}
          </div>
          <div>
            J'aime coder de belle interface, si c'est ce que tu recherches,
            contactes moi !
          </div>
        </div>
        <div className="flex animate-bounce flex-wrap justify-center ">
          <Button className="rounded-2xl" size="icon" variant="ghost">
            <ChevronDownIcon className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
