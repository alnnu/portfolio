"use client"
import { useState } from "react"

const Experiencias = () => {
    const experiencias: any = [{nome:"Grupo Crias", titulo:"Freelacer associado ao Grupo Crias", data: "desembro 2023 - atual", responsabilidade:"Trabalhar em projetos freelancers, utilizando pricipalmente em spring, e auxiliar nos projetos dos outros menbros."},
                                {nome:"Code Tower", titulo:"Programador na Code Tower", data:"setemro 2021 - julho 2023", responsabilidade:`Nessa empresa junior desenvolvi aplicativos frontend e backend utilisando ferramentas como: nextJs, adonisJs, expressJs, docker e tailwind. Alem de poder fazer um workshop de como criar um sistema CRUD em expressJs na Campus Party Goias 2`},
                                {nome:"Iniciação Cientifica", titulo:"Iniciação Cientifica", data:"setemro 2022 - setembro 2023", responsabilidade:"Pesquicei fiabilidade vinbilidade finaceira de aplicativos desentralizados na rede blockchain do Ethereum. Para isso, desenvolvi um aplicativo de votação simples e usei as metricas para chergar ao gusto de um aplicativo do uso diario"}
    ]

    const [foco, setFoco] = useState(0); 
    return (
        <>
            <div className="mt-48" id="Experiencias">
                <h1 className="text-6xl font-bold mb-8 border-b border-primery pb-3 text">Experiencias</h1>
                <div className="flex">
                    <div className="border-l-4 border-primery mr-28">   
                        {
                            experiencias.map((experiencia:any, index: number) => (
                                <div 
                                key={index} 
                                className={foco == index ? "text-xl p-5 text-primery cursor-pointer w-fit" : "text-xl p-5 cursor-pointer w-fit"}
                                onClick={() => setFoco(index)}
                                >{experiencia.nome}</div>
                            ))
                        }
                    </div>
                    <div>
                        <div className="mt-5">
                            <h2 className="text-xl font-bold">{experiencias[foco].titulo}</h2>
                            <div className="mt-2 mb-5">{experiencias[foco].data}</div>
                            <div className="text-lg text-justify">{experiencias[foco].responsabilidade}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiencias