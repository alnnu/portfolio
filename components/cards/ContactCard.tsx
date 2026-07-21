import { IconGithub, IconLinkedin, IconMail } from "@/utils/icons/Techs"
import ContactInfo from "./ContactInfo"

export default function ContactCard() {
  const contatos = [
    {
      label: "GitHub",
      value: "@alnnu",
      icon: <IconGithub />,
    },
    {
      label: "LinkedIn",
      value: "Luann Felipe",
      icon: <IconLinkedin />,
    },
    {
      label: "Email",
      value: "contato.luann.ferreira@gmail.com",
      icon: <IconMail />,
    },
  ]
  return (
    <div className="rounded-xl border bg-muted p-5 sm:p-8 lg:p-10">
      <h4 className="text-lg sm:text-xl font-bold">Canais de Contato</h4>

      <div className="mt-6 flex flex-col gap-y-4">
        {contatos.map((item) => (
          <ContactInfo
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

