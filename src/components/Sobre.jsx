import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoCode } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import imgSobre from "../assets/imgSobre.jpg";
import { IconButton } from "./ui/iconButton";
import { ScrollAnimation } from "./ui/ScrollAnimation";

export function Sobre() {
  return (
    <section id="sobre" className="p-10 md:p-20 w-full h-full dark:bg-gray-900">
      <ScrollAnimation className="flex flex-col items-center text-center">
        <div>
          <h1 className="text-5xl font-bold max-sm:text-4xl text-lightBlack dark:text-white">Sobre Mim</h1>
          <p className="text-2xl mt-5 mb-7 max-w-[800px] text-gray-500 dark:text-gray-300 max-lg:text-lg max-sm:text-sm">
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em
            busca de novos desafios e oportunidades para crescer.
          </p>
        </div>
        <div className="flex w-full h-full gap-10 max-lg:flex-col ">
          <div className="w-[50%] max-lg:w-full bg-gray-100 dark:bg-gray-100/10 rounded-2xl">
            <img
              className="w-full rounded-2xl h-full shadow-2xl transition-all duration-400 ease-in-out hover:rotate-x-50 hover:rotate-z-45 "
              src={imgSobre}
              alt="Computador com codigos"
            />
          </div>
          <div className="w-[50%] max-lg:w-full text-left">
            <p className="text-2xl max-2xl:text-[18px] text-gray-500 dark:text-gray-300">
              Com mais de 1 ano de experiência em desenvolvimento web, tenho
              paixão por criar soluções digitais que combinam funcionalidades
              expecional com design elegante. Minha jornada começou com
              curiosidade sobre como as coisas funcionam na web, e hoje trabalho
              com as tecnologias mais modernas do mercado.
            </p>
            <p className="text-2xl my-5 max-2xl:text-[18px] text-gray-500 dark:text-gray-300">
              Especializo-me em desenvolvimento FullStack, com foco particular
              em React, Node.js e banco de dados modernos. Acredito que a melhor
              tecnologia é aquela que resolve problemas reais de forma simples e
              eficiente
            </p>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <IconButton
                icon={
                  <IoCode
                    size={50}
                    className="text-blue-500 rounded-md bg-blue-200 p-3"
                  />
                }
                title="Código Limpo"
                description="Código limpo e manutenível"
              />
              <IconButton
                icon={
                  <RiTeamLine
                    size={50}
                    className="text-green-500 rounded-md bg-green-200 p-3"
                  />
                }
                title="Trabalho em Equipe"
                description="Colaboração eficaz"
              />
              <IconButton
                icon={
                  <HiOutlineRocketLaunch
                    size={50}
                    className="text-purple-500 rounded-md bg-purple-200 p-3"
                  />
                }
                title={"Perfomance"}
                description={"APlicação rapidas e otimizadas"}
              />
              <IconButton
                icon={
                  <LiaMedalSolid
                    size={50}
                    className="text-yellow-500 rounded-md bg-yellow-200 p-3"
                  />
                }
                title={"Qualidade"}
                description={"Padroẽs de Exelência"}
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
