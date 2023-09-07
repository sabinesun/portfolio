export const ganttBarsData = [
  {
    content: [
      "Formation initiale généraliste avec les bases scientifiques",
      "Projet scientifique et techniques",
      "Disciplines transversales soft skills",
    ],
    dateBegin: new Date(2_018, 9),
    dateEnd: new Date(2_024, 7),
    hardskills: ["C++", "C#", "Javascript", "Gitlab", "Github", "SQL", "Java"],
    logo: "/esilv-logo.png",
    rows: 2,
    subtitle: "Majeure Cybersecurity & Cloud Computing",
    title: "ESILV",
  },

  {
    content: [
      "Sujet du projet : Construction d'un robot permettant de faire un cocktail à distance à l'aide d'un gant en équipe de six",
      "Missions : Élaboration d'un état de l'art, Construction d'un cahier des charges, Analyse Structurelle",
    ],
    dateBegin: new Date(2_020, 9),
    dateEnd: new Date(2_021, 6),
    hardskills: ["C++"],
    logo: "/esilv-logo.png",
    rows: 3,
    subtitle: "Projet d'école",
    title: "Cocktail Mix",
  },
  {
    content: [
      " Sujet du projet : Mettre à disposition des collaborateurs\n" +
        "                    SopraSteria une application permettant de gérer des battles\n" +
        "                    de code en équipe de six",
      " Missions techniques : un écran de login avec role Admin /\n" +
        "                    Juge / Participant, une IHM d&apos;administration pour\n" +
        "                    saisir des sujets d&apos;exercice, modélisation des users\n" +
        "                    cases",
    ],
    dateBegin: new Date(2_022, 9),
    dateEnd: new Date(2_023, 4),
    hardskills: ["Javascript", "React", "SQL", "CSS"],
    logo: "/sopra-steria-logo.jpeg",
    rows: 3,
    subtitle: " Projet d&apos;école en partenariat avec Sopra Steria",
    title: " Battle Judge",
  },

  {
    content: [
      " Missions techniques : Gestion de base de donnée des clients\n" +
        "                    \\& des commandes, Automatisation du Google sheet",
      " Missions manuelles : Fabrication \\& envoie de posters,\n" +
        "                    Gestion de mails",
    ],

    dateBegin: new Date(2_021, 6),
    dateEnd: new Date(2_021, 9),
    hardskills: [],
    logo: "/dedouze-logo.jpeg",
    rows: 4,
    subtitle: "Stage de découverte chez Dedouze",
    title: "Dedouze",
  },
  {
    content: ["  Missions techniques : Développement de composant front"],

    dateBegin: new Date(2_023, 4),
    dateEnd: new Date(2_023, 9),
    hardskills: ["Typescript", "CSS", "Gitlab"],
    logo: "/dcbrain-logo.png",
    rows: 4,
    subtitle: " Stage de 4ème année chez DCbrain",
    title: "DCbrain",
  },
];
