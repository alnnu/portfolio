import BaseInfoCard from "../cards/BaseInfoCard"
import { Badge } from "../ui/badge"

export default function SobreMim() {
  const tags: string[] = ["backend", "Frontend", "Web3", "DevOps"]
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="grid grid-cols-2">
        <BaseInfoCard title="3+" text="Anos de experiência" />
        <BaseInfoCard title="6" text="Projetos entregues" />
      </div>

      <div className="col-start-3 grid gap-y-8">
        <span className="text-primary">\\ SOBRE_MIM</span>
        <h2 className="text-5xl font-bold">
          Construindo sistemas que{" "}
          <span className="text-primary">importam</span>
        </h2>
        <p className="text-lg">
          Sou desenvolvedor fullstack com foco em Java e Spring Boot, atuando em
          sistemas de alta disponibilidade. Tenho experiência sólida em
          arquitetura de microsserviços, monólitos e pipelines de dados em
          produção.
        </p>
        <p className="text-lg">
          Nos últimos anos, aprofundei conhecimento em Web3 e blockchain,
          desenvolvendo contratos inteligentes em Solidity para protocolos DeFi.
          Acredito que tecnologia deve resolver problemas reais — com clareza,
          performance e segurança.
        </p>
        <div className="flex gap-x-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="items-center border-primary bg-primary/10 p-4 px-4 text-lg text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
