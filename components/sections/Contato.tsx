import ContactCard from "../cards/ContactCard"
import ContactForm from "../forms/ContactForm"

export default function Contato() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center sm:mb-16 lg:mb-20">
        <span className="font-mono text-sm font-semibold tracking-wider text-primary sm:text-base">
          // ENTRE_EM_CONTATO
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:mt-6 sm:text-4xl lg:mt-8 lg:text-5xl">
          Vamos Trabalhar Juntos
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  )
}



