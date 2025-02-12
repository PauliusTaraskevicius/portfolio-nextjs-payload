'use server'

import { payload } from '@/lib/payload'
import { NextResponse } from 'next/server'

export const getProjects = async () => {
  try {
    const projects = await payload.find({
      collection: 'projects',
    })

    return projects
  } catch (error) {
    console.error(error)
    throw new NextResponse('Server error.API getProjects', {
      status: 500,
    })
  }
}

export const getProject = async (id: string) => {
  try {
    const project = await payload.findByID({
      collection: 'projects',
      id: id,
    })

    return project
  } catch (error) {
    console.error(error)
    throw new NextResponse('Server error.API getProjects', {
      status: 500,
    })
  }
}
