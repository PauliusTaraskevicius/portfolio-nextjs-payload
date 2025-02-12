import { getProject } from '@/actions/get'
import { ProjectDetails } from '../_components/project-details'

interface ProjectPageProps {
  params: {
    id: string
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params

  const project = await getProject(id)

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  )
}

export default ProjectPage
