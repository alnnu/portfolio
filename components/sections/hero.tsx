import { ArrowRightIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center py-32 lg:py-0">
      <div className="w-full">
        <div className="mb-8 grid grid-cols-1 items-center gap-8 lg:mb-12 lg:grid-cols-3 lg:gap-12">
          <div className="order-2 col-span-1 flex flex-col max-lg:items-center lg:order-1 lg:col-span-2">
            <h1 className="mb-4 text-3xl leading-tight font-bold max-lg:text-center sm:text-4xl lg:text-5xl">
              Luann Ferreira
            </h1>
            <p className="mb-6 w-fit rounded-xl bg-primary/10 px-4 py-2 text-xl font-bold text-primary max-lg:mx-auto max-lg:text-center sm:text-2xl lg:text-3xl">
              Software Developer
            </p>

            <p className="mb-8 max-w-xl text-base text-muted-foreground max-lg:mx-auto max-lg:text-center sm:text-lg lg:text-xl">
              Desenvolvedor fullstack especializado em sistemas de alta
              performance com Java e Spring Boot. Apaixonado por Web3,
              arquitetura de microsserviços e soluções que escalam.
            </p>

            <div className="flex w-full flex-col items-center gap-4 max-lg:justify-center sm:w-auto sm:flex-row">
              <Button
                size="lg"
                className="w-full rounded-xl p-6 text-lg text-white sm:w-auto"
                render={<Link href="#projetos" />}
                nativeButton={false}
              >
                Ver projetos
                <ArrowRightIcon />
              </Button>
              <Button
                size="lg"
                className="w-full rounded-xl bg-primary/10 p-6 text-lg text-primary hover:text-white sm:w-auto"
                render={<a href="#" />}
                nativeButton={false}
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="order-1 col-span-1 flex justify-center lg:order-2 lg:justify-end">
            <Avatar className="size-48 border-4 border-primary/20 p-1 sm:size-64 sm:border-6 lg:size-76">
              <AvatarImage src="https://github.com/alnnu.png" />
              <AvatarFallback>LF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}
