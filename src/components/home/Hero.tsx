import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-2 gap-x-32">
                <div>
                    <div className="mb-5">
                        <h1 className="text-5xl font-bold">Hello world!!!</h1>
                        <p className="text-3xl">Seja bem-vindo(a) ao meu portfólio.</p>
                    </div>
                    <div className="grid grid-cols-3 w-32">
                        <Link href="https://github.com/alnnu"><BiLogoGithub size="30px"/></Link>
                        <Link href="https://www.linkedin.com/in/luann-felipe-b8153a25b/"><BiLogoLinkedinSquare size="30px"/></Link>
                        <Link href="#"><BiLogoInstagramAlt size="30px"/></Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="fotinha.png" alt="foto do hero"/>
                </div>

            </div>
        </div>
    )
}