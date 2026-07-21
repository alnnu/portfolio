"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const menuItens: { link: string; name: string }[] = [
    { link: "#sobre", name: "Sobre" },
    { link: "#projetos", name: "Projetos" },
    { link: "#experiencia", name: "Experiência" },
    { link: "#contato", name: "Contato" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-background/80 shadow-sm backdrop-blur-md border-b border-border/40"
          : "bg-background shadow-none"
      )}
    >
      <nav className="flex items-center justify-between px-3 sm:px-8 lg:px-12 py-3 sm:py-4 md:py-6">
        <div>
          <Link
            href="/"
            className="rounded-xl bg-primary p-2.5 sm:p-3 font-bold text-white text-sm sm:text-base"
          >
            LF
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0.5 sm:gap-2">
              {menuItens.map((iten, i) => (
                <NavigationMenuItem key={i}>
                  <Link
                    href={iten.link}
                    className="mx-0.5 sm:mx-2 rounded-xl px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {iten.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden sm:block">
          <Link
            href="#contato"
            className="inline-block rounded-xl bg-primary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90 whitespace-nowrap"
          >
            Vamos conversar
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden p-2 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-4 pb-4 gap-1">
          {menuItens.map((iten, i) => (
            <Link
              key={i}
              href={iten.link}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {iten.name}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white text-center transition-all duration-200 hover:brightness-90"
          >
            Vamos conversar
          </Link>
        </div>
      </div>
    </header>
  )
}
