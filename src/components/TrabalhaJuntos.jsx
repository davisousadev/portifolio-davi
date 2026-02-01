import { IconButton } from "./ui/iconButton";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { FiSend } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { ScrollAnimation } from "./ui/ScrollAnimation";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export function TrabalharJuntos() {
  const form = useRef(null);
  const [loadingEmail, setLoadingEmail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingEmail(true);
    emailjs
      .sendForm(
        "service_qsuo9la",
        "template_ixhwsqt",
        form.current,
        "byD9OdMvcESAfTtuN"
      )
      .then(
        () => {
          toast.success("Email enviado com sucesso!");
          form.current?.reset();
        },
        () => {
          toast.error("Erro ao enviar email.");
        }
      );
  };
  return (
    <section
      id="contato"
      className="w-full bg-gradient-to-br from-blue-50 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-10 md:p-20"
    >
      <ScrollAnimation>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold py-10 text-center w-full max-lg:text-4xl max-lg:py-5 dark:text-white text-lightBlack">
            Vamos Trabalhar Juntos
          </h1>
          <p className="text-2xl text-center text-zinc-500 dark:text-gray-300 max-w-1/2 mb-10 max-lg:text-lg max-md:text-sm max-sm:max-w-full">
            Tem um projeto em mente? Adoraria saber mais sobre sua ideia e como
            posso ajudar a torná-la realidade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 max-md:flex max-md:flex-col ">
          <div className="space-y-3 max-md:text-center">
            <h2 className="text-4xl font-bold max-sm:text-3xl text-lightBlack dark:text-white">
              Entre em Contato
            </h2>
            <p className="text-lg text-zinc-500 dark:text-gray-300 max-md:text-sm">
              Estou sempre aberto a discutir novos projetos, oportunidades
              criativas ou parcerias. Não hesite em entrar em contato se quiser
              conversar sobre tecnologia, desenvolvimento ou qualquer ideia
              interessante.
            </p>
            <div className="flex flex-col gap-5 max-md:flex-row max-md:text-left flex-wrap">
              <IconButton
                icon={
                  <MdOutlineEmail
                    size={50}
                    className="text-red-500 rounded-md bg-red-200 p-3"
                  />
                }
                title={"Email"}
                description={"sousadavi248@gmail.com"}
              />
              <IconButton
                icon={
                  <FiPhone
                    size={50}
                    className="text-green-500 rounded-md bg-green-200 p-3"
                  />
                }
                title={"Telefone"}
                description={"(85) 98787-7534"}
              />
              <IconButton
                icon={
                  <RiMapPin2Line
                    size={50}
                    className="text-purple-500 bg-purple-200 rounded-md p-3"
                  />
                }
                title={"Localizção"}
                description={"Fortaleza, Ceará, Brasil"}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] font-medium dark:text-white">Me encontre nas redes</h3>
              <div className="flex gap-2 max-md:justify-center">
                <a href="https://github.com/davisousadev" target="_blanck">
                  <IconButton
                    icon={
                      <FiGithub
                        size={50}
                        className="p-3 rounded-md shadow-primary dark:shadow-gray-700 dark:bg-gray-700 dark:text-white"
                      />
                    }
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/davi-sousa-alves"
                  target="_blanck"
                >
                  <IconButton
                    icon={
                      <CiLinkedin
                        size={50}
                        className="p-3 rounded-md shadow-primary dark:shadow-gray-700 dark:bg-gray-700 text-blue-500"
                      />
                    }
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-10 bg-white dark:bg-gray-800 rounded-md w-full shadow-primary dark:shadow-gray-700 space-y-3 max-sm:p-5"
            >
              <h2 className="font-bold text-2xl dark:text-white text-lightBlack">Envie uma Mensagem</h2>
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-3">
                <Input
                  label={"Nome"}
                  id={"nome"}
                  name={"name"}
                  type={"text"}
                  placeholder={"Seu nome"}
                />
                <Input
                  label={"Email"}
                  id={"email"}
                  name={"email"}
                  placeholder={"seu@email.com"}
                  type={"email"}
                />
              </div>
              <Input
                label={"Assunto"}
                id={"assunto"}
                name={"assunto"}
                type={"text"}
                placeholder={"Assunto da mensagem"}
              />
              <Input
                label={"Mensagem"}
                id={"mensagem"}
                name={"message"}
                type={"text"}
                isInput={false}
                placeholder={"Conte-me sobre seu projeto ou ideia"}
              />
              <Button
                disabled={loadingEmail}
                theme={"gradient"}
                type={"submit"}
                className={"w-full flex items-center justify-center gap-3"}
              >
                <FiSend />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
