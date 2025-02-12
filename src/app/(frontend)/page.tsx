import { getProjects } from '@/actions/get'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="h-full flex flex-col gap-4">
      {projects.docs.map((project) => (
        <div key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <h1 className="text-muted-foreground">{project.title}</h1>
            <Image width={50} height={50} src={project.image.url} alt={`${project.title}`} />
          </Link>
        </div>
      ))}
    </div>
  )
}
