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

      <section className="mt-12">
        <SobreMim />
      </section>

      <section className="mt-46">
        <Projects />
      </section>

      <section className="mt-46">
        <Timeline />
      </section>

      <section className="mt-46">
        <Contato />
      </section>
    </div>
  )
}
