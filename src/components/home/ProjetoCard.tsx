import Link from "next/link";
import {BiLogoGithub, BiArrowToRight} from "react-icons/bi";

export default function ProjetoCard ({ projeto }: {projeto : {nome: string, type: string, imagen: string, link: string, github: string}} ) {
    return (<>
        {

                <div className="card card-compact w-96 bg-base-100 shadow-xl h-60">
                    <figure><img src={projeto.imagen} alt={projeto.nome}/></figure>
                    <div className="card-body">
                        <div className="grid grid-cols-2">
                            <div>
                                <h2 className="card-title">{projeto.nome}</h2>
                            </div>
                            <div className="flex justify-end">
                                {
                                    projeto.link != "" ? <Link href={projeto.link} className="hover:bg-black rounded hover:text-white"><BiArrowToRight size="30px"/></Link> : <></>
                                }
                                {
                                    projeto.github != "" ? <Link href={projeto.github} className="hover:bg-black rounded hover:text-white ml-2.5"><BiLogoGithub size="30px"/></Link> : <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>

        }
    </>)
}