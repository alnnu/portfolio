import ContactCard from "../cards/ContactCard"
import ContactForm from "../forms/ContactForm"

export default function Contato() {
  return (
    <div>
      <div className="mb-24 text-center">
        <span className="text-primary">// ENTRE_EM_CONTATO</span>
        <h2 className="mt-8 text-5xl font-bold">Vamos Trabalhar Juntos</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-8">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  )
}
