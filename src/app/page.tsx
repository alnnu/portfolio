import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import MinhasTech from "@/components/home/MinhasTech";
import Projetos from "@/components/home/Projetos";
import Experiencias from "@/components/home/Experiencias";

export default function Home() {
  return (
      <>
          <Hero/>
          <Sobre/>
          <MinhasTech/>
          <Projetos/>
          <Experiencias/>
      </>
  )
}
