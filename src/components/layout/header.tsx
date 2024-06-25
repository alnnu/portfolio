import { BiMessageSquareDots } from "react-icons/bi";

const Header = () => {
    return (
        <>
            <header>
                <div className="flex py-5">
                    <div className="font-bold flex-1 text-lg">
                        <a href="#">Alnnu</a>
                    </div>
                    <div className="flex flex-1 justify-center text-lg">
                        <a href="#" className="mx-5 text-primery">Home</a>
                        <a href="#Sobre" className="mx-5 hover:text-primery">Sobre</a>
                        <a href="#Experiencias" className="mx-5 hover:text-primery">Experiencias</a>
                        <a href="#Habilidades" className="mx-5 hover:text-primery">Habilidades</a>
                        <a href="#" className="mx-5 hover:text-primery" >Projetos</a>
                    </div>
                    <div className="flex flex-1 justify-end text-2xl">
                        <BiMessageSquareDots />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header