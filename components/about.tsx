import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export const About = () => {
  return (
    <section className="flex overflow-hidden pt-20 sm:h-screen" id="about">
      <div className="m-6 flex flex-col flex-wrap justify-center">
        <Typography variant="h2"> À propos </Typography>
        <div className="sm:flex sm:flex-row-reverse  ">
          <video
            autoPlay
            className="w-full overflow-hidden sm:w-96 md:w-4/5"
            loop
            muted
            playsInline
            src="MemojiVideo.mov"
          />
          <div className="my-6 flex max-w-3xl flex-col justify-center lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <p>
              Hey, je m'appelle Sabine SUN, je suis étudiante en 5ème année à l'{" "}
              <Link href="https://www.esilv.fr/">
                <Button className="h-auto py-0 pl-0 pr-1" variant="link">
                  ESILV
                </Button>
              </Link>
              spécialisée en Cybersécurité & Cloud Computing.
            </p>
            <p>
              Cependant, ce que j'aime c'est créer des interfaces web qui sont à
              la fois super stylées et hyper faciles à utiliser pour les gens.
            </p>
            <p>
              Je suis actuellement à la recherche d'un stage de fin d'études de
              6 mois en tant que développeuse front-end. Si tu as des projets
              cool en tête ou si tu veux simplement discuter, n'hésite pas à me
              contacter. Je suis toujours partante pour de nouvelles aventures
              dans le monde du développement web !
            </p>
            <div className="mt-6 flex w-full justify-center">
              <Link
                href="https://www.notion.so/516d5e1de36943719c169c1ed71ec3c9?pvs=4"
                target="_blank"
              >
                <Button className="mb-2" variant="outline">
                  <Link2Icon className="mr-2 h-4 w-4" /> Voir mon CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
