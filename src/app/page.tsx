import Image from "next/image";

import { FaInstagram, FaGithub } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";

export default function Home() {
  return (
   <main>
      <div className="flex mt-52 h-96">
        <div className="flex w-1/2 flex-col align-middle">
          <div className="text-2xl mb-3">
            Ola!! Sou <span className="text-primery">Alnnu</span>
          </div>
          <div className="text-7xl font-bold mb-7">
            Fullstack <br/>Developer
          </div>
          <div className="text-2xl">
            Sou apenas entusiasta brasileiro que ama a tecnologia no geral e vou ajudar você a desenvolver o sistema dos sonhos!    
          </div>
          <div className="flex  w-60 mt-12">
            <a href="mailto:contato.alnnu@gmail.com" className="text-primery text-4xl"><BiMailSend/></a>
            <a href="https://github.com/alnnu" className="text-primery text-4xl mx-10" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/luann__felipe_/" className="text-primery text-4xl" target="_blank"><FaInstagram/></a>
          </div>
        </div>
        <div className="flex justify-end flex-1 h-fit">

          <div className="border border-primery rounded-full p-10">
            <Image
              src="/me.jpeg"
              className="rounded-full"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
   </main>
  );
}
