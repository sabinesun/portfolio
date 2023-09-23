import { Button } from "@/components/ui/button";
import { UploadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const About = () => {
  return (
    <div className="flex h-screen" id="about">
      <div className="m-6 flex flex-col flex-wrap justify-center">
        <div className="py-4 text-5xl font-bold text-black">À propos</div>

        <div className="sm:flex sm:flex-row-reverse  ">
          <video
            autoPlay
            className="w-full overflow-hidden sm:w-96 md:w-4/5"
            loop
            muted
            playsInline
            src="MemojiVideo.mov"
          />
          <div className="flex flex-col justify-center">
            <div>
              Actuellement en 5ème année à l'ESILV dans la majeure Cybersécurité
              & Cloud Computing. Je vise à devenir une développeuse fullstack
              avec une préférence pour le frontend à la sortie de l'école.
            </div>
            <div className="mt-6 flex w-full justify-center">
              <Button className="mb-2" variant="outline">
                <UploadIcon className="mr-2 h-4 w-4" /> Télécharger le CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
