export default function Sobre() {
    const info: string = "Olá👋, me chamo Luann Felipe, mas pode me chamar apenas de Alnnu, tenho 20 anos. Atualmente estou cursando o 6 período de ciência da computação no IFG Anápolis"
    return (
        <div>
            <div className="flex justify-center">
                <div className="avatar">
                    <div className="w-32 mask mask-hexagon-2 ">
                        <img src="foto-palestra.jpeg" />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold mt-4">Luann Felipe</h2>
                <p className="text-xl mx-24">{info}</p>
            </div>
        </div>
    )
}