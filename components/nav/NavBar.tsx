"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const menuItens: { link: string; name: string }[] = [
    {
      link: "#",
      name: "Sobre",
    },
    {
      link: "#",
      name: "Tecnologias",
    },
    {
      link: "#",
      name: "Projetos",
    },
    {
      link: "#",
      name: "Experiência",
    },
    {
      link: "#",
      name: "Contato",
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-white shadow-none"
      )}
    >
      <nav className="flex items-center justify-between px-12 py-6">
        <div>
          <Link
            href="#"
            className="rounded-xl bg-primary p-3 font-bold text-white"
          >
            LF
          </Link>
        </div>

        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {menuItens.map((iten, i) => (
                <NavigationMenuItem key={i}>
                  <Link
                    href={iten.link}
                    className="mx-2 rounded-xl px-4 py-2 hover:bg-primary/5 hover:text-primary"
                  >
                    {iten.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Link
            href="#"
            className="inline-block rounded-xl bg-primary px-6 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90"
          >
            Vamos conversar
          </Link>
        </div>
      </nav>
    </header>
  )
}
