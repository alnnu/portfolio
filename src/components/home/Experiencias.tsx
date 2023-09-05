import ExperienciaCard from "@/components/home/ExperienciaCard";

export default function Experiencias() {

    return (<>
        <div className="mt-14 mx-24">
            <div>
                <div className="flex justify-end items-center">
                    <span className="inline-block align-top w-80 mr-10 text-xl">Minha jornada esta apenas começando, sempre aprendendo</span>
                    <h2 className="text-5xl font-bold">Experiência <br/> Profissional</h2>
                </div>
            </div>
            <div className="flex justify-center mt-14">
                <ExperienciaCard nome={"Code Tower"} descricao={"Trabalhei no desenvolvimento de aplicativos web usando: NextJs, AdonisJs, NodeJs, HTML, CSS, Tailwind e Docker"}/>
            </div>
        </div>
    </>)
}