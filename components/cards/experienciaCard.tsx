"use client"

import { useState } from "react"
import { experienciaType } from "@/utils/types/experienciaType"
import { Badge } from "@/components/ui/badge"

export default function ExperienciaCard({ item }: { item: experienciaType }) {
  const [hovered, setHovered] = useState(false)

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative mb-4 sm:mb-6 rounded-xl border border-transparent p-4 sm:p-6 transition-all duration-300 hover:border-primary hover:p-5 sm:hover:p-8"
    >
      <div
        className={`absolute top-0 -left-[41px] sm:-left-[53px] md:-left-[73px] flex size-8 sm:size-10 md:size-12 items-center justify-center rounded-full border bg-background text-sm sm:text-lg md:text-xl font-bold transition-all duration-300 ${
          hovered
            ? "border-primary bg-primary text-white"
            : "text-muted-foreground"
        }`}
      >
        {item.id}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-bold">{item.place}</h4>
        </div>
        <div>
          <Badge variant={"outline"} className="w-fit px-3 py-1.5 text-xs sm:px-6 sm:py-4 sm:text-sm">
            {item.year}
          </Badge>
        </div>
      </div>
      <div className="mt-2">
        <p className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl text-primary font-medium">{item.title}</p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>

      <div className="mt-4 grid grid-cols-3 text-muted-foreground"></div>
    </li>
  )
}
