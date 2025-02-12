import { Project } from '@/payload-types'
import RichText from './rich-text'

interface ProjectDetailsProps {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return <div className="text-muted-foreground"><RichText data={project.description}/></div>
}
