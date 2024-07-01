const Habilidades = ({nome, techs}: {nome: String, techs: String[]}) => {
    return (
        <>
            <div>
                <h2 className="text-center text-2xl font-bold mb-5 ">{nome}</h2>
                <div className="flex flex-wrap auo-cols-auto  justify-center items-center gap-4">
                    {
                        techs.map((tech: any, index: number) => (
                            <div className="text-center text-white  py-1 w-36 h-9 rounded-full bg-primery">{tech}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Habilidades