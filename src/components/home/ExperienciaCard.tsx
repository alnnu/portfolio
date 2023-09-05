import Link from "next/link";
import {BiLogoGithub, BiArrowToRight} from "react-icons/bi";
import {className} from "postcss-selector-parser";

export default function ExperienciaCard ({ nome, descricao }: { nome :  string, descricao: string} ) {
    return <>
        {
            <div >
                <div className=" w-96 bg-base-100 rounded-2xl bg-gray-500 h-60">
                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-white text-center">{nome}</h2>
                    </div>
                    <div>
                        <p className="text-xl text-white text-center px-8">{descricao}</p>
                    </div>
                </div>

            </div>

        }
    </>
}