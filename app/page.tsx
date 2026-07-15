import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/Projects"
import SobreMim from "@/components/sections/SobreMim"

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
    </div>
  )
}
