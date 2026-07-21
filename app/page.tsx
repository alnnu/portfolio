import Contato from "@/components/sections/Contato"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/Projects"
import SobreMim from "@/components/sections/SobreMim"
import Timeline from "@/components/sections/Timeline"

export default function Page() {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section className="mt-12" id="sobre">
        <SobreMim />
      </section>

      <section className="mt-46" id="projetos">
        <Projects />
      </section>

      <section className="mt-46" id="experiencia">
        <Timeline />
      </section>

      <section className="mt-46" id="contato">
        <Contato />
      </section>
    </div>
  )
}
