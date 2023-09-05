"use client";
import React, { useState} from 'react';
import ProjetoCard from "@/components/home/ProjetoCard";

export default function Projetos() {
    const types: string[] = ["todos", "web", "mobile"]

    const projetos: {nome: string, type: string, imagen: string, link: string, github: string}[] = [{nome: "Grupo Benser", type: "web", imagen:"/benser.png", link: "https://grupobenser.com", github: ""},
                                                                        {nome: "Chat App", type: "mobile", imagen:"/chatapp.png", link: "", github: "https://github.com/alnnu/chatApp"},
                                                                        {nome: "Arduino", type: "web", imagen:"/arduino.png", link: "https://arduino.alnnu.dev/index.html", github: "https://github.com/alnnu/atividade-de-IHM"}]

    const [filtro, setFiltro]: any = useState("todos")


    return (<>
g        <div className="mt-14 mx-24 mb-32">
            <div>
                <h2 className="text-5xl font-bold">Meus <br/> Projetos</h2>
                <div className="flex mt-5 mb-10">
                    {
                        types.map((type, index) => (
                            <div>
                                <button className={filtro==type ? "btn mr-5 bg-black text-white hover:text-black" : "btn mr-5 bg-black bg-transparent/20 "} onClick={() => setFiltro(type)}>{type}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="grid grid-cols-3 gap-y-10 gap-x-28">
                {
                    filtro=="todos" ?
                                    projetos.map((projeto) => (
                                        <ProjetoCard projeto={projeto}/>
                                    )) :
                                    projetos.filter((projeto) => projeto.type == filtro)
                                            .map((projeto) => (
                                                                                        <ProjetoCard projeto={projeto}/>
                                                                                    ))
        }
            </div>
        </div>
    </>)
}