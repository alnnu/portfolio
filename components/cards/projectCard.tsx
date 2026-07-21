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
import Link from "next/link"

export default function ProjectCard({ project }: { project: projectType }) {
  return (
    <Card className="mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-2 hover:border hover:border-primary/45 hover:shadow-xl hover:shadow-primary/15">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="flex-1 space-y-3 p-5 sm:p-6">
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="line-clamp-4 text-sm text-muted-foreground">
          {project.desc}
        </CardDescription>

        <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="outline"
              className="border-primary/40 bg-primary/10 px-2.5 py-1 text-xs text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      {(project.git || project.demo || project.site) && (
        <CardFooter className="mt-auto">
          <div className="flex w-full items-center gap-2">
            {project.git && (
              <Button
                className="flex-1 rounded-xl bg-primary/10 p-4 text-sm text-primary hover:text-white"
                render={
                  <Link
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button
                className="flex-1 rounded-xl p-4 text-sm text-white"
                render={
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                Demo
              </Button>
            )}
            {project.site && (
              <Button
                className="flex-1 rounded-xl p-4 text-sm text-white"
                render={
                  <Link
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
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
