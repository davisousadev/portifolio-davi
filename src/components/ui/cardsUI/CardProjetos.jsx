import { GrFormNextLink } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { gradient } from "../../../utils/style";

export function CardProjetos({
  img,
  titulo,
  descricao,
  tecnologias,
  linkProjeto,
  linkProjetoGithub,
}) {
  return (
    <div className="w-full h-full flex flex-col hover:shadow-2xl transition-all rounded-2xl">
      <div className="w-full h-[50%] max-lg:h-[300px] overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-full rounded-t-2xl object-cover"
          src={img}
          alt={titulo}
        />
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-primary dark:shadow-gray-700 p-5 rounded-b-2xl h-[50%] flex flex-col">
        <h2 className="text-3xl font-bold mb-2 max-sm:text-2xl dark:text-white">{titulo}</h2>
        <p
          className="text-lg text-zinc-500 dark:text-gray-300 h-[60%] overflow-y-auto mb-2 scrollbar-thin scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full max-sm:text-sm"
        >
          {descricao}
        </p>
        <ul className="flex flex-wrap gap-3">
          {tecnologias.map((tecnologia) => (
            <li
              key={tecnologia}
              className={`px-3 py-1 ${gradient.bgGradientSecondary} rounded-md text-blue-500 font-medium h-fit`}
            >
              {tecnologia}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between w-full h-full">
          <a
            href={linkProjetoGithub}
            target="_blank"
          >
            <FaGithub
              size={35}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white cursor-pointer transition-colors"
            />
          </a>
          <a
            href={linkProjeto}
            target="_blank"
            className="text-lg text-blue-500 dark:text-blue-400 flex items-center my-5 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-all"
          >
            Ver Projeto <GrFormNextLink />
          </a>
        </div>
      </div>
    </div>
  );
}
