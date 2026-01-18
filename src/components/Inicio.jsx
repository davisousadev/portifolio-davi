import { motion as Motion } from "framer-motion";
import { FaGithub, FaHandsHelping, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gradient } from "../utils/style";
import { Button } from "./ui/Button";
import daviPerfil from "../assets/davi-perfil.jpg";
import { Badges } from "./ui/badges";
import { TbDeviceDesktopCode } from "react-icons/tb";

export function Inicio() {
  return (
    <section
      id="inicio"
      className="w-full h-screen py-30 bg-gradient-to-br from-blue-50 to-white max-lg:px-10 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 flex justify-center items-center"
    >
      <Motion.div
        className="w-full flex items-center h-full p-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col justify-center items-center text-center w-[60%] h-full">
          <h1 className="text-6xl font-bold max-lg:text-4xl text-lightBlack dark:text-white">Olá, eu sou</h1>
          <h2
            className={`text-6xl font-bold ${gradient.textGradientPrimary} mb-5 max-lg:text-4xl max-sm:text-3xl`}
          >
            Davi Sousa Alves
          </h2>
          <p className="text-2xl max-w-[800px] text-center mb-5 text-gray-500 dark:text-gray-300 max-lg:text-lg">
            Desenvolvedor FullStack apaixonado por criar experiências digitais
            incríveis e soluções inovadoras que fazem a diferença
          </p>
          <div className="w-full flex gap-5 my-5 justify-center max-sm:flex-col max-sm:items-center">
            <Button
              type={"button"}
              theme={"gradient"}
              className={"max-sm:w-full"}
            >
              <a href="#projetos"> Ver Meus Projetos</a>
            </Button>
            <Button type={"button"} className={"max-sm:w-full"}>
              <a href="curriculo-davi-dev.pdf" download={"certificado-davi.pdf"}>
                Dowload CV
              </a>
            </Button>
          </div>
          <div className="flex items-center my-5 gap-5">
            <a href="https://github.com/daviiisousa" target="_blanck">
              <FaGithub className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" size={45} />
            </a>
            <a
              href="https://www.linkedin.com/in/davi-sousa-alves"
              target="_blanck"
            >
              <FaLinkedin className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" size={45} />
            </a>
            <a href="mailto:sousadavi248@gmail.com" target="_blanck">
              <MdEmail className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" size={45} />
            </a>
          </div>
        </div>
        <div className="w-[40%] h-full hidden lg:flex justify-center items-center">
          <div className="relative w-[400px] h-[400px]">
            <Badges
              titulo="Solutions"
              icon={<FaHandsHelping />}
              className="absolute bottom-[5%] left-[10%] animate-bounce z-10"
            />
            <Badges
              titulo="Web Developer"
              icon={<TbDeviceDesktopCode />}
              className="absolute top-[10%] right-[1%] animate-bounce z-20"
            />
            <img src={daviPerfil} alt="davi foto de perfil" className="w-full h-full object-cover object-top rounded-full shadow-2xl dark:shadow-gray-700" />
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
