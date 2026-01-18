import { GoDeviceDesktop } from "react-icons/go";
import { CardHabilidades } from "./ui/cardsUI/CardHabilidades";
import { FaDatabase, FaLock } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";
import { ScrollAnimation } from "./ui/ScrollAnimation";

export function Habilidades() {
  const habilidadesFront = [
    {
      nome: "React",
      nivel: [1, 2, 3, 4, 5]
    },
    {
      nome: "Typescript",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "Tailwind",
      nivel: [1, 2, 3, 4, 5]
    },
    {
      nome: "Next",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "ContextAPI",
      nivel: [1, 2, 3, 4]
    },
  ];
  const habilidadesBack = [
    {
      nome: "Sequelize",
      nivel: [1, 2, 3]
    },
    {
      nome: "Node",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "Express",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "JWT",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "Python",
      nivel: [1, 2, 3]
    },
  ];

  const habilidadesDatabase = [
    {
      nome: "Postgres",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "Supabase",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "MariaDB",
      nivel: [1, 2, 3]
    },
  ];

  const habilidadesTools = [
    {
      nome: "Git",
      nivel: [1, 2, 3, 4, 5]
    },
    {
      nome: "Github",
      nivel: [1, 2, 3, 4, 5]
    },
    {
      nome: "ClickUp",
      nivel: [1, 2, 3, 4]
    },
    {
      nome: "Insomnia",
      nivel: [1, 2, 3, 4, 5]
    },
    {
      nome: "Bitbucket",
      nivel: [1, 2, 3, 4]
    },
  ];
  return (
    <section
      id="habilidades"
      className="bg-gradient-to-br from-blue-50 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-10 md:p-20"
    >
      <ScrollAnimation>
        <h2 className="text-5xl font-bold text-center mb-5 max-sm:text-4xl text-lightBlack dark:text-white">
          Habilidades Técnicas
        </h2>
        <p className="text-center mb-10 text-zinc-500 dark:text-gray-300 text-lg max-sm:text-sm">
          Tecnologias e ferramentas que domino para criar soluções completas
        </p>
        <div className="grid grid-cols-2 gap-10 max-sm:gap-5 max-sm:grid-cols-1">
          <CardHabilidades
            titulo={"Frontend"}
            icon={<GoDeviceDesktop size={25} className="text-blue-500" />}
            habilidades={habilidadesFront}
          />
          <CardHabilidades
            titulo={"Backend"}
            icon={<FaLock size={25} className="text-green-500" />}
            habilidades={habilidadesBack}
          />
          <CardHabilidades
            titulo={"Database"}
            icon={<FaDatabase size={25} className="text-purple-500" />}
            habilidades={habilidadesDatabase}
          />
          <CardHabilidades
            icon={<IoGitBranchOutline size={25} className="text-orange-500" />}
            titulo={"Tools"}
            habilidades={habilidadesTools}
          />
        </div>
      </ScrollAnimation>
    </section>
  );
}
