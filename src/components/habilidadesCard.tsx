const Habilidades = ({nome, techs}: {nome: String, techs: String[]}) => {
    return (
        <>
            <div>
                <h2 className="text-center text-2xl font-bold mb-5">{nome}</h2>
                <div className="grid grid-cols-4 gap-4">
                    {
                        techs.map((tech: any, index: number) => (
                            <div className="text-center text-white py-1 rounded-full bg-primery">{tech}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Habilidades