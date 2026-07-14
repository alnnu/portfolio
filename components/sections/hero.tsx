"use cliente"
import { ArrowRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <div className="py-25">
      <div>
        <Badge
          variant="outline"
          className="mb-6 items-center border-primary bg-primary/10 p-4 px-4 text-lg text-primary"
        >
          <div className="mr-2 size-2 rounded-full bg-emerald"></div>
          Disponível para novos projetos
        </Badge>
      </div>
      <div className="mb-4 grid grid-cols-3">
        <div className="col-span-2">
          <h1 className="mb-4 text-3xl leading-[1.29167] font-bold max-lg:text-center sm:text-4xl lg:text-5xl">
            Luann Ferreira
          </h1>
          <p className="mb-8 w-fit rounded-xl bg-primary/10 px-4 py-2 text-3xl font-bold text-primary">
            Software Developer
          </p>

          <p className="max-w-xl text-xl text-muted-foreground max-lg:text-center">
            Desenvolvedor fullstack especializado em sistemas de alta
            performance com Java e Spring Boot. Apaixonado por Web3, arquitetura
            de microsserviços e soluções que escalam.
          </p>
        </div>
        <div className="flex justify-end">
          <Avatar className="size-76 border-6 border-primary/20 p-1">
            <AvatarImage src="https://github.com/alnnu.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          size="lg"
          className="rounded-xl p-6 text-lg text-white"
          render={<a href="#" />}
          nativeButton={false}
        >
          Ver projetos
          <ArrowRightIcon />
        </Button>
        <Button
          size="lg"
          className="rounded-xl bg-primary/10 p-6 text-lg text-primary hover:text-white"
          render={<a href="#" />}
          nativeButton={false}
        >
          Download CV
        </Button>
      </div>
    </div>
  )
}
