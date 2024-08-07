import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

const ProjetoCard = ({
  projeto,
}: {
  projeto: {
    img: string | StaticImport;
    nome: string;
    descricao: string;
    github: string;
    link: string;
  };
}) => {
  return (
    <div className="flex flex-col desktop:flex-row mb-5">
      <div className="flex justify-center desktop:flex-none">
        <Image
          src={projeto.img}
          className="rounded-xl shadow-xl"
          width={400}
          height={400}
          alt="foto do projeto"
        />
      </div>
      <div className="mt-5 mb-5 text-center desktop:text-start desktop:ml-10">
        <h2 className="text-4xl font-bold mb-3">{projeto.nome}</h2>
        <p className="text-xl desktop:text-justify">{projeto.descricao}</p>
        <div className="flex flex-row justify-center desktop:justify-start align-bottom space-x-4 mt-3">
          {projeto.github === "" ? (
            <></>
          ) : (
            <Link href={projeto.github} target="_blank">
              <BsGithub
                size={30}
                className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
          )}
          {projeto.link === "" ? (
            <div></div>
          ) : (
            <Link href={projeto.link} target="_blank">
              <BsArrowUpRightSquare
                size={30}
                className="text-primery text-4xl hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
