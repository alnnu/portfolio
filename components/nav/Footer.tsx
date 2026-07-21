import { IconGithub, IconLinkedin, IconMail } from "@/utils/icons/Techs"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-6 sm:flex-row sm:items-center sm:justify-between bg-body px-6 py-8 sm:px-12 sm:py-12 md:py-16 text-white text-center sm:text-left">
      <div>
        <h2 className="text-lg sm:text-xl font-bold">Luann Felipe</h2>
        <p className="text-xs sm:text-sm text-white/80 mt-1">© 2026 Todos os direitos reservados.</p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Link
          href={"https://www.linkedin.com/in/luann-felipe/"}
          className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 [&>svg]:size-5 sm:[&>svg]:size-6"
          aria-label="LinkedIn"
        >
          <IconLinkedin />
        </Link>
        <Link
          href={"https://github.com/alnnu"}
          className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 [&>svg]:size-5 sm:[&>svg]:size-6"
          aria-label="GitHub"
        >
          <IconGithub />
        </Link>
        <Link
          href={"mailto:contato.luann.ferreira@gmail.com"}
          className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 [&>svg]:size-5 sm:[&>svg]:size-6"
          aria-label="Email"
        >
          <IconMail />
        </Link>
      </div>
    </footer>
  )
}

