import { CardProjetos } from "./ui/cardsUI/CardProjetos";
import desculpaAIImg from "../assets/projetos/desculpaAI.png";
import todoImg from "../assets/projetos/Todo.png";
import automacaoImg from "../assets/projetos/geradorCertificado.png";
import TicketGeneretor from "../assets/projetos/ticketGeneretor.png";
import portifolioImg from "../assets/projetos/portifolio.png";
import r3fImg from "../assets/projetos/r3f.png";
import weatherNow from "../assets/projetos/weatherNow.png";
import userLoginImg from "../assets/projetos/userLogin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";
import { ScrollAnimation } from "./ui/ScrollAnimation";
import { useScroll } from "../hooks/useScroll";

export function Projetos() {

  const {
    scrollRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseMove,
  } = useScroll();

  const tecnologiasDesculpaAI = [
    "React",
    "Prisma",
    "Typescript",
    "Tailwind",
    "API Gemini",
  ];

  const tecnologiasTodo = [
    "React",
    "Typescrit",
    "ShadCN",
    "Express",
    "Sequelize",
  ];

  const tecnologiasAutomacaoCertificados = [
    "N8N",
    "Python",
    "Render",
    "Fpdf-lib",
    "Pillow",
  ];

  const tecnologiasUserLogin = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
  ];

  const tecnologiasTicketGeneretor = ["htnml", "css", "javascript"];

  const tecnologiasPortifolio = ["React", "Tailwind", "Vite", "javascript"];

  return (
    <section id="projetos" className="p-10 md:p-20 dark:bg-gray-900">
      <ScrollAnimation>
        <h2 className="text-5xl font-bold text-center mb-3 max-sm:text-4xl text-lightBlack dark:text-white">
          Projetos em Destaque
        </h2>
        <p className="text-zinc-500 dark:text-gray-300 text-lg text-center">
          Uma seleção dos meus trabalhos mais recentes e impactantes
        </p>
        <div className="grid grid-cols-2 my-10 gap-5 py-5 max-lg:flex max-lg:flex-col">
          <CardProjetos
            img={desculpaAIImg}
            descricao={
              "Aplicação fullstack que utiliza inteligência artificial para gerar pedidos de desculpa criativos e convincentes para diferentes situações do cotidiano."
            }
            tecnologias={tecnologiasDesculpaAI}
            titulo={"Desculp.AI"}
            linkProjeto={"https://desculpai.vercel.app/"}
            linkProjetoGithub={"https://github.com/davisousadev/desculpai-web"}
          />

          <CardProjetos
            img={automacaoImg}
            titulo={"Automação de Certificados"}
            descricao={
              "Sistema de automação para geração de certificados personalizados. Preenchimento automático de dados e download dos certificados em PDF."
            }
            tecnologias={tecnologiasAutomacaoCertificados}
            linkProjeto={"https://gerador-certificado-web.vercel.app/"}
            linkProjetoGithub={
              "https://github.com/davisousadev/gerador-certificado-web"
            }
          />
        </div>
        <ScrollAnimation>
          <h2 className="py-5 text-4xl font-bold text-center max-sm:text-3xl text-lightBlack dark:text-white">
            Outros Projetos
          </h2>
          <Motion.div
            initial={{ x: 0 }}
            animate={{ x: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaRegHandPointRight
              size={25}
              className="text-zinc-500 dark:text-gray-400 md:hidden mx-auto"
            />
          </Motion.div>
          <div className="w-full py-5">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="flex gap-10 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 dark:scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full select-none "
            >
              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={todoImg}
                  titulo={"Todo Tarefa"}
                  descricao={
                    "Aplicação web completa (frontend + backend) para gerenciamento de tarefas. O usuário pode criar, editar, concluir e excluir tarefas. Desenvolvido com foco em boas práticas, arquitetura MVC e integração via API RESTful."
                  }
                  tecnologias={tecnologiasTodo}
                  linkProjeto={"https://todo-tarefa.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/Todo-tarefa"
                  }
                />
              </div>

              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={userLoginImg}
                  titulo={"Usuarios e Autenticação"}
                  descricao={
                    "Sistema de gerenciamento de usuários com autenticação JWT. Permite registro, login e gerenciamento de perfis."
                  }
                  tecnologias={tecnologiasUserLogin}
                  linkProjeto={"https://user-login-one.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/User-Login"
                  }
                />
              </div>

              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={TicketGeneretor}
                  titulo={"Gerador de Tickets"}
                  descricao={
                    "Aplicação para geração de tickets personalizados. Permite criar tickets com informações dinâmicas e exportar em PDF."
                  }
                  tecnologias={tecnologiasTicketGeneretor}
                  linkProjeto={"https://ticket-generator-kappa.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/Ticket-generator.git"
                  }
                />
              </div>
              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={portifolioImg}
                  titulo={"Portfólio Pessoal"}
                  descricao={
                    "Meu portfólio pessoal, onde apresento meus projetos, habilidades e experiências. Desenvolvido com foco em design responsivo e usabilidade."
                  }
                  tecnologias={tecnologiasPortifolio}
                  linkProjeto={"https://portifolio-davi-rose.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/portifolio-davi"
                  }
                />
              </div>
              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={r3fImg}
                  titulo={"Ref + Framer Motion"}
                  descricao={
                    "Projeto 3D interativo utilizando React Three Fiber e Framer Motion. Criação de animações e interações avançadas para uma experiência imersiva."
                  }
                  tecnologias={tecnologiasPortifolio}
                  linkProjeto={"https://poc-r3f-framer.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/poc-R3f-Framer"
                  }
                />
              </div>
              <div className="flex-shrink-0 w-[500px] max-sm:w-full">
                <CardProjetos
                  img={weatherNow}
                  titulo={"Weather Now"}
                  descricao={
                    "Aplicação de previsão do tempo que fornece informações meteorológicas em tempo real para qualquer localização. Integração de API de clima."
                  }
                  tecnologias={["JavaScript", "API de Clima", "CSS", "html"]}
                  linkProjeto={"https://weather-app-main-flax.vercel.app/"}
                  linkProjetoGithub={
                    "https://github.com/davisousadev/weather-app-main"
                  }
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
}
