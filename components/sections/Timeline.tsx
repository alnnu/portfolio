"use client"
import { experienciaData } from "@/utils/data/experienciaData"
import { experienciaType } from "@/utils/types/experienciaType"
import { Badge } from "../ui/badge"
import { useState } from "react"

export default function TimelineSection() {
  const experiencias: experienciaType[] = experienciaData
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <div>
      <div className="mb-24 text-center">
        <span className="text-primary">// TRAJETORIA</span>
        <h2 className="mt-8 text-5xl font-bold">Experiência Profissional</h2>
      </div>
      <div className="flex justify-center">
        <ol className="max-w-[75%] border-l-3 border-primary pl-12">
          {experiencias.map((item, i) => (
            <li
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative mb-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-primary hover:p-8"
            >
              <div
                className={`absolute top-0 -left-[73px] flex size-12 items-center justify-center rounded-full border bg-background text-xl font-bold transition-all duration-300 ${hoveredIndex === i ? "border-primary bg-primary text-white" : "text-muted-foreground"}`}
              >
                {item.id}
              </div>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">{item.place}</h4>
                </div>
                <div>
                  <Badge variant={"outline"} className="px-6 py-4">
                    {item.year}
                  </Badge>
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-4 text-xl text-primary">{item.title}</p>
                <p>{item.desc}</p>
              </div>

              <div className="mt-4 grid grid-cols-3 text-muted-foreground"></div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
