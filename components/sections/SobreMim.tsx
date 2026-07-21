import BaseInfoCard from "../cards/BaseInfoCard"
import { Badge } from "../ui/badge"

export default function SobreMim() {
  const tags: string[] = ["Backend", "Frontend", "Web3", "DevOps"]
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="order-2 col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:order-1 lg:col-span-5">
        <BaseInfoCard title="3+" text="Anos de experiência" />
        <BaseInfoCard title="6+" text="Projetos entregues" />
      </div>

      <div className="order-1 col-span-1 flex flex-col gap-y-6 sm:gap-y-8 lg:order-2 lg:col-span-7">
        <span className="font-mono text-sm font-semibold text-primary sm:text-base">
          // SOBRE_MIM
        </span>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Construindo sistemas que{" "}
          <span className="text-primary">importam</span>
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          Sou desenvolvedor fullstack com foco em Java e Spring Boot, atuando em
          sistemas de alta disponibilidade. Tenho experiência sólida em
          arquitetura de microsserviços, monólitos e pipelines de dados em
          produção.
        </p>
        <p className="text-base text-muted-foreground sm:text-lg">
          Nos últimos anos, aprofundei conhecimento em Web3 e blockchain,
          desenvolvendo contratos inteligentes em Solidity para protocolos DeFi.
          Acredito que tecnologia deve resolver problemas reais — com clareza,
          performance e segurança.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="border-primary bg-primary/10 px-3 py-2 text-sm text-primary sm:px-4 sm:text-base"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

