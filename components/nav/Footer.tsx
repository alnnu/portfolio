import { IconGithub, IconLinkedin, IconMail } from "@/utils/icons/Techs"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-body px-12 py-18 text-white">
      <div>
        <h2 className="text-xl font-bold">Luann Felipe</h2>
        <p>© 2026 Todos os direitos reservados.</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Link
          href={"https://www.linkedin.com/in/luann-felipe/"}
          className="inline-block rounded-md border border-white p-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90"
        >
          <IconLinkedin />
        </Link>
        <Link
          href={"https://github.com/alnnu"}
          className="inline-block rounded-md border border-white p-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90"
        >
          <IconGithub />
        </Link>
        <Link
          href={"mailto:contato.luann.ferreira@gmail.com"}
          className="inline-block rounded-md border border-white p-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90"
        >
          <IconMail />
        </Link>
      </div>
    </footer>
  )
}
