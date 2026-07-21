import { projectData } from "@/utils/data/projectData"
import { projectType } from "@/utils/types/projectTypes"
import ProjectCard from "../cards/projectCard"

export default function Projects() {
  const data: projectType[] = projectData

  return (
    <div>
      <div className="mb-12 text-center sm:mb-16 lg:mb-20">
        <span className="font-mono text-sm font-semibold tracking-wider text-primary sm:text-base">
          // PROJETOS
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:mt-6 sm:text-4xl lg:mt-8 lg:text-5xl">
          Projetos em Destaque
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}

