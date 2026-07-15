import { projectData } from "@/utils/data/projectData"
import { projectType } from "@/utils/types/projectTypes"
import ProjectCard from "../cards/projectCard"

export default function Projects() {
  const data: projectType[] = projectData

  return (
    <div>
      <div className="mb-24 text-center">
        <span className="text-primary">// PROJETOS</span>
        <h2 className="text-5xl font-bold">Projetos em Destaque</h2>
      </div>
      <div className="grid grid-cols-3 gap-y-12">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}
