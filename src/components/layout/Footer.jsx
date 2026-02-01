import { gradient } from "../../utils/style";
import { IconButton } from "../ui/iconButton";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

export function Footer() {
  return (
    <footer className="w-full p-10 bg-gray-950  grid grid-cols-[700px_1fr_1fr] gap-5 text-white max-xl:flex max-xl:flex-col ">
      <div className="space-y-5">
        <h2 className={`text-3xl ${gradient.textGradientPrimary} font-bold `}>
          Davi Sousa Alves
        </h2>
        <p className="text-gray-400 text-lg">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais
          incríveis. Sempre em busca de novos desafios e tecnologias
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/davisousadev" target="_blanck">
            <IconButton
              icon={
                <LuGithub size={50} className="p-3 rounded-2xl bg-gray-800" />
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/davi-sousa-alves"
            target="_blanck"
          >
            <IconButton
              icon={
                <CiLinkedin size={50} className="p-3 rounded-2xl bg-gray-800" />
              }
            />
          </a>
        </div>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl font-medium">Navegação</h2>
        <ul className="text-gray-400 space-y-3 text-lg">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl font-medium">Contato</h2>
        <div className="text-gray-400 space-y-3 text-lg">
          <p>sousadavi248@gmail.com</p>
          <p>+55 85 98787-7534</p>
          <p>Brasil, Ceará - Fortaleza</p>
        </div>
      </div>
      <hr className="col-span-3 text-gray-500" />
      <p className="text-gray-400">
        © 2025 Dev.Portfolio. Feito com amor e muito código
      </p>
    </footer>
  );
}
