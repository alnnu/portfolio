"use client";
import { useState } from "react";

const Experiencias = () => {
  const experiencias = [
    {
      nome: "Grupo Crias",
      titulo: "Freelacer associado ao Grupo Crias",
      data: "dezembro 2023 - atual",
      responsabilidade:
        "Trabalhar em projetos freelancers, utilizando principalmente em spring, e auxiliar nos projetos dos outros membros.",
    },
    {
      nome: "Code Tower",
      titulo: "Programador na Code Tower",
      data: "setembro 2021 - julho 2023",
      responsabilidade: `Nessa empresa júnior desenvolvi aplicativos frontend e backend utilizando ferramentas como: nextJs, adonisJs, expressJs, docker e tailwind. Alem de poder fazer um workshop de como criar um sistema CRUD em expressJs na Campus Party Goias 2`,
    },
    {
      nome: "Iniciação Cientifica",
      titulo: "Iniciação Cientifica",
      data: "setembro 2022 - setembro 2023",
      responsabilidade:
        "Pesquisei fiabilidade viabilidade financeira de aplicativos descentralizados na rede blockchain do Ethereum. Para isso, desenvolvi um aplicativo de votação simples e usei as metricas para chergar ao gusto de um aplicativo do uso diario",
    },
  ];

  const [foco, setFoco] = useState(0);

  return (
    <>
      <div className="mt-48 hidden tablet:block" id="Experiencias">
        <h1 className="text-6xl font-bold mb-8 border-b border-primery pb-3 text">
          Experiencias
        </h1>
        <div className="flex">
          <div className="border-l-4 border-primery mr-28">
            {experiencias.map((experiencia, index: number) => (
              <div
                key={index}
                className={
                  foco == index
                    ? "text-xl p-5 text-primery cursor-pointer text-nowrap"
                    : "text-xl p-5 cursor-pointer text-nowrap"
                }
                onClick={() => setFoco(index)}
              >
                {experiencia.nome}
              </div>
            ))}
          </div>
          <div>
            <div className="mt-5">
              <h2 className="text-xl font-bold">{experiencias[foco].titulo}</h2>
              <div className="mt-2 mb-5">{experiencias[foco].data}</div>
              <div className="text-lg text-justify">
                {experiencias[foco].responsabilidade}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 tablet:hidden" id="Experiencias">
        <h1 className="text-4xl tablet:text-6xl font-bold mb-8 border-b border-primery pb-3 text">
          Experiencias
        </h1>
        <div className="flex flex-wrap auo-cols-auto justify-center items-center gap-4">
          {experiencias.map((experiencia, index: number) => (
             <div>
             <div className="mt-5">
               <h2 className="text-xl font-bold">{experiencia.titulo}</h2>
               <div className="mt-2 mb-5">{experiencia.data}</div>
               <div className="text-lg text-justify">
                 {experiencia.responsabilidade}
               </div>
             </div>
           </div>
          ))}
         
        </div>
      </div>
    </>
  );
};

export default Experiencias;
