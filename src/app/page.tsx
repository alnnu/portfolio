import Image from "next/image";

import { FaInstagram, FaGithub } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import Experiencias from "@/components/experiencias";
import Habilidades from "@/components/habilidadesCard";
import ProjetoCard from "@/components/projetoCard";

export default function Home() {

  const habilidades = [{nome: "frontend", techs:["HTML", "CSS", "Javascript", "Nextjs", "TailWind"]}, 
                      {nome: "Backend", techs:["NodeJs", "ExpressJs", "AdonisJs", "Spring", "Postgres"]}, 
                      {nome: "Dev-Ops", techs:["Docker", "Nginx", "Git"]}, {nome: "Mobile", techs:["React Native"]}]

const projetos = [{nome: "Sistema de Comandas", descricao: "Um site feito para um lava jato cadastrar seus clientes, além de manter suas comandas e assinalas virtualmente.", img: "/projetos/Lava_Jato.png", github: "", link: "",},
                  {nome: "Site do BCC", descricao: "Um site feito para mostrar informações sobre o curso de bacharelado em Ciências da Computação no IFG de Anápolis", img: "/projetos/bccifg.png", github: "", link: "https://bcc.ifg.edu.br/",}]

  return (
   <main>
      <div className="flex flex-col-reverse desktop:flex-row mt-24 desktop:mt-52">
        <div className="desktop:w-1/2 mt-10 desktop:mt-0">
          <div className="text-2xl mb-3">
            Ola!! Sou <span className="text-primery">Luann</span>
          </div>
          <div className="text-5xl desktop:text-8xl font-bold mb-7">
            Fullstack Developer
          </div>
          <div className="text-2xl text-justify tablet:text-left">
            Sou apenas entusiasta brasileiro que ama a tecnologia no geral e vou ajudar você a desenvolver o sistema dos sonhos!    
          </div>
          <div className="flex w-60 mt-12">
            <a href="mailto:contato.alnnu@gmail.com" className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer"><BiMailSend/></a>
            <a href="https://github.com/alnnu" className="text-primery text-4xl mx-10 hover:-translate-y-1 transition-transform cursor-pointer" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/luann__felipe_/" className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer" target="_blank"><FaInstagram/></a>
          </div>
        </div>
        <div className="flex justify-center desktop:justify-end flex-1 desktop:w-1/2">
          <div className="border border-primery rounded-full p-10 size-fit">
            <Image
              src="/me.jpeg"
              className="rounded-full"
              width={320}
              height={320}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div className="mt-48 laptop:mt-96" id="Sobre">
        <h1 className="text-4xl tablet:text-6xl font-bold mb-8 border-b border-primery pb-3 text">Sobre</h1>
        <div className="text-xl text-justify">
          <p>Ola, me chamo Luann Felipe, mas pode me chamar de Alnnu. Na minha infância eu adquiri a curiosidade sobre como as coisa funcionam, por isso vivia desmontando controles, carrinhos, entre outras coisa.</p>
          <p className="mt-3 text-justify">Essa curiosidade que futuramente se tornou o amor que sinto pela a computação e suas áreas. Sendo assim, comecei a estudar a estudar programação.</p>
          <p className="mt-3 text-justify">Atualmente estou cursando ciência da computação no IFG de Anápolis e participo de um grupo de freelancers chamado Grupo Crias.</p>
        </div>
      </div>

      <Experiencias/>

      <div className="mt-48" id="Habilidades">
        <h1 className="text-4xl tablet:text-6xl font-bold mb-8 border-b border-primery pb-3 text">Habilidades</h1>
        <div className="grid grid-cols-none tablet:grid-cols-2 gap-x-48 gap-y-32">
          {
            habilidades.map((habilidade, index: number) => (
              <Habilidades nome={habilidade.nome} techs={habilidade.techs} key={index}/>
            ))
          }
        </div>
      </div>

      <div className="mt-48" id="Projetos">
        <h1 className="text-4xl tablet:text-6xl font-bold mb-8 border-b border-primery pb-3 text">Projetos</h1>
        <div>
          {
            projetos.map((projeto, index: number) => (
              <ProjetoCard projeto={projeto} key={index}/>
            ))
          }
        </div>
      </div>

   </main>
  );
}
