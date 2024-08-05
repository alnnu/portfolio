import React from "react";

import Image from "next/image";

import { BiMailSend, BiPhone } from "react-icons/bi";

function Contato() {
  return (
    <main>
      <div className="flex flex-col-reverse desktop:flex-row mt-24 desktop:mt-52 desktop:mb-96">
        <div className="desktop:w-1/2 mt-10 desktop:mt-0">
          <div className="text-5xl desktop:text-6xl font-bold mb-7">
            Entre em contato
          </div>
          <div className="text-2xl text-justify tablet:text-left">
            Se você tem um projeto em mente, uma dúvida sobre meu trabalho ou
            apenas deseja conversar, por favor, entre em contato. Responderei o
            mais rápido possível.
          </div>
          <div className="mt-12">
            <a
              href="mailto:contato.alnnu@gmail.com"
              className="text-primery text-lg hover:-translate-y-1 transition-transform cursor-pointer flex  space-x-5 mb-5"
            >
              <div>
                <BiMailSend className="text-3xl" />
              </div>
              <div>contato.alnnu@gmail.com</div>
            </a>
            <a
              href="tel:6296423546"
              className="text-primery text-lg hover:-translate-y-1 transition-transform cursor-pointer flex space-x-5 "
            >
              <div>
                <BiPhone className="text-3xl " />
              </div>
              <div>(62) 9642-3546</div>
            </a>
            
          </div>
          
        </div>
        <div className="flex justify-center desktop:justify-end flex-1 desktop:w-1/2">
          <div className="border border-primery rounded-full p-10 size-fit">
            <Image
              src="/me.jpeg"
              className="rounded-full"
              width={320}
              height={320}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contato;
