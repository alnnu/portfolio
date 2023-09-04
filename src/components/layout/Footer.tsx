import Link from "next/link";
import {BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedinSquare} from "react-icons/bi";

export default function Footer() {
    return (
        <>
           <footer className="bg-base-100 px-24 border-t-2 border-black mt-16 py-5">
               <div className="flex justify-between">
                   <div>
                       <Link href="#" className="text-2xl hover:underline">© Alnnu</Link>
                   </div>
                   <div className="grid grid-cols-3 w-32">
                       <Link href="https://github.com/alnnu"><BiLogoGithub size="30px"/></Link>
                       <Link href="https://www.linkedin.com/in/luann-felipe-b8153a25b/"><BiLogoLinkedinSquare size="30px"/></Link>
                       <Link href="#"><BiLogoInstagramAlt size="30px"/></Link>
                   </div>


               </div>
           </footer>
        </>
    )
}