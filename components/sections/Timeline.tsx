"use client"
import { experienciaData } from "@/utils/data/experienciaData"
import { experienciaType } from "@/utils/types/experienciaType"
import ExperienciaCard from "@/components/cards/experienciaCard"

export default function TimelineSection() {
  const experiencias: experienciaType[] = experienciaData
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center sm:mb-16 md:mb-24">
        <span className="font-mono text-sm font-semibold tracking-wider text-primary sm:text-base">
          // TRAJETORIA
        </span>
        <h2 className="mt-4 text-3xl leading-tight font-bold sm:mt-6 sm:text-4xl md:text-5xl">
          Experiência Profissional
        </h2>
      </div>
      <div className="flex justify-center">
        <ol className="ml-4 w-full max-w-full border-l-2 border-primary pl-6 sm:ml-8 sm:border-l-3 sm:pl-8 md:ml-0 md:max-w-[85%] md:pl-12 lg:max-w-[75%]">
          {experiencias.map((item, i) => (
            <ExperienciaCard key={i} item={item} />
          ))}
        </ol>
      </div>
    </div>
  )
}
