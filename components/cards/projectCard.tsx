import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projectType } from "@/utils/types/projectTypes"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export default function ProjectCard({ project }: { project: projectType }) {
  return (
    <Card className="mx-auto flex w-full max-w-sm flex-col transition-transform duration-300 hover:-translate-y-2 hover:border hover:border-primary/45 hover:shadow-xl hover:shadow-primary/15">
      <img
        src={project.img}
        alt="Event cover"
        className="z-20 w-full object-cover"
      />
      <CardHeader className="flex-1">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.desc}</CardDescription>

        <div className="mt-4 grid grid-cols-3 justify-center gap-x-2 gap-y-4">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="w-full border-primary bg-primary/10 p-3 text-sm text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      {(project.git || project.demo || project.site) && (
        <CardFooter className="mt-auto">
          <div
            className={`grid h-full w-full gap-2 ${project.git && project.demo ? "grid-cols-2" : "grid-cols-1"}`}
          >
            {project.git && (
              <Button
                className="rounded-xl bg-primary/10 p-4 text-sm text-primary hover:text-white"
                render={<a href={project.git} />}
                nativeButton={false}
              >
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button
                className="rounded-xl p-4 text-sm text-white"
                render={<a href={project.demo} />}
                nativeButton={false}
              >
                Demo
              </Button>
            )}
            {project.site && (
              <Button
                className="rounded-xl p-4 text-sm text-white"
                render={<a href={project.site} />}
                nativeButton={false}
              >
                Link
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
