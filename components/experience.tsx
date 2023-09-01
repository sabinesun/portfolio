import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import Esilv from "../public/esilv-logo.png";

export default function Experience() {
  return (
    <>
      <div className={"flex h-screen flex-col justify-center"}>
        <div className={"py-4 text-7xl font-bold text-black"}>Timeline</div>

        <div className={"grid grid-cols-72 grid-rows-4 gap-y-2 border-y"}>
          <div
            className={" col-span-3 row-span-1 row-start-1 grid border-b px-2 "}
          >
            &nbsp;
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
            }
          >
            2019
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
            }
          >
            2020
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
            }
          >
            2021
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b px-2"
            }
          >
            2022
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b  px-2"
            }
          >
            2023
          </div>
          <div
            className={
              " col-span-12 row-span-1 row-start-1 grid  content-center border-b px-2"
            }
          >
            2024
          </div>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={
                "col-span-70 col-start-1 row-span-1 row-start-2 mt-1 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm "
              }
            >
              ESILV
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <div className={"flex justify-between"}>
                  <div>
                    <div className={"text-base"}>
                      ESILV : Sept 2019 - Actuellement
                    </div>

                    <div className={"pl-6 text-xs text-slate-400"}>
                      Majeure Cybersecurity & Cloud Computing
                    </div>
                  </div>
                  <Image
                    src={"/esilv-logo.png"}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <ul className={"pl-6 pt-6"}>
                  <li className={"list-disc"}>
                    Formation initiale généraliste avec les bases scientifiques
                  </li>
                  <li className={"list-disc"}>
                    Projet scientifique et techniques
                  </li>
                  <li className={"list-disc"}>
                    Disciplines transversales soft skills
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={
                "col-span-10 col-start-24 row-span-1 row-start-3 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm "
              }
            >
              Cocktail Mix
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <div className={"flex justify-between"}>
                  <div>
                    <div className={"text-base"}>
                      Cocktail Mix : Sept 2020 - Juin 2020
                    </div>

                    <div className={"pl-6 text-xs text-slate-400"}>
                      Projet d'école
                    </div>
                  </div>
                  <Image
                    src={"/esilv-logo.png"}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <ul className={"pl-6 pt-6"}>
                  <li className={"list-disc"}>
                    Sujet du projet : Construction d'un robot permettant de
                    faire un cocktail à distance à l'aide d'un gant en équipe de
                    six
                  </li>
                  <li className={"list-disc"}>
                    Missions : Élaboration d'un état de l'art, Construction d'un
                    cahier des charges, Analyse Structurelle
                  </li>
                  <li className={"list-disc"}>
                    Missions technique : Construction de la base, Écriture des
                    codes en C++ permettant de connecté le robot au gant,
                    Écriture des codes pour faire fonctionner la base
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={
                "col-span-7 col-start-48 row-span-1 row-start-3 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm "
              }
            >
              Battle Judge
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <div className={"flex justify-between"}>
                  <div>
                    <div className={"text-base"}>
                      Sopra Steria : Oct 2022 - Avril 2022
                    </div>

                    <div className={"pl-6 text-xs text-slate-400"}>
                      Projet d'école en partenariat avec Sopra Steria
                    </div>
                  </div>
                  <Image
                    src={"/sopra-steria-logo.jpeg"}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <ul className={"pl-6 pt-6"}>
                  <li className={"list-disc"}>
                    Sujet du projet : Mettre à disposition des collaborateurs
                    SopraSteria une application permettant de gérer des battles
                    de code en équipe de six
                  </li>
                  <li className={"list-disc"}>
                    Missions techniques : un écran de login avec role Admin /
                    Juge / Participant, une IHM d'administration pour saisir des
                    sujets d'exercice, modélisation des users cases
                  </li>
                  <li className={"list-disc"}>
                    Javascript, React, MySQL, Visual Studio, Gestion de projet
                    agile en tant que référente
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={
                "col-span-3 col-start-34 row-span-1 row-start-4 mb-2 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm "
              }
            >
              Dedouze
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <div className={"flex justify-between"}>
                  <div>
                    <div className={"text-base"}>
                      Dedouze : Juin 2021 - Sept 2021
                    </div>

                    <div className={"pl-6 text-xs text-slate-400"}>
                      Stage de découverte chez Dedouze
                    </div>
                  </div>
                  <Image
                    src={"/dedouze-logo.jpeg"}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <ul className={"pl-6 pt-6"}>
                  <li className={"list-disc"}>
                    Missions techniques : Gestion de base de donnée des clients
                    \& des commandes, Automatisation du Google sheet
                  </li>
                  <li className={"list-disc"}>
                    Missions manuelles : Fabrication \& envoie de posters,
                    Gestion de mails
                  </li>
                  <li className={"list-disc"}>
                    Google Sheet, Google App Script, Clip Studio Paint, Gestion
                    des commandes
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={
                "col-span-5 col-start-55 row-span-1 row-start-4  mb-2 grid h-9 place-content-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-2 shadow-sm "
              }
            >
              DCbrain{" "}
            </HoverCardTrigger>
            <HoverCardContent>
              <div>
                <div className={"flex justify-between"}>
                  <div>
                    <div className={"text-base"}>
                      DCbrain : Avril 2023 - Aout 2023
                    </div>

                    <div className={"pl-6 text-xs text-slate-400"}>
                      Stage de 4ème année chez DCbrain
                    </div>
                  </div>
                  <Image
                    src={"/dcbrain-logo.png"}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>

                <ul className={"pl-6 pt-6"}>
                  <li className={"list-disc"}>
                    Missions techniques : Développement de composant front
                  </li>
                  <li className={"list-disc"}>
                    Typescript, CSS, Jira, travail d'équipe
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
}
