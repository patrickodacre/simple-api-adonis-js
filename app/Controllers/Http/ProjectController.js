'use strict'

const Project = use('App/Models/Project')
const Database = use('Database')

class ProjectController {
  async index({ response }) {
    const projects = await Project.all()

    if (projects) {
      response.status(200).json({
        message: 'Here are your projects',
        data: projects
      })
    } else {
      response.status(500).json({
        message: 'Could not get your projects.'
      })
    }
  }

  async store({ request, response }) {
    const project = new Project()

    const { name, description, customer_id } = request.post()

    project.name = name
    project.description = description
    project.customer_id = customer_id

    const saved = await project.save()

    if (saved) {
      response.status(201).json({
        message: 'Successfully created project.',
        data: project
      })
    } else {
      response.status(500).json({
        message: 'Could not create project.',
        data: { name, description }
      })
    }
  }

  async show({ response, params: { id } }) {
    const project = await Project.find(id)

    // const project = await Database.table('projects').where('id', id)

    if (project) {
      response.status(200).json({
        message: 'Here is your project.',
        data: project
      })
    } else {
      response.status(404).json({
        message: 'Project not found.',
        id
      })
    }
  }

  async update({ request, response, params: { id } }) {
    const project = await Project.find(id)

    if (project) {
      const { name, description, customer_id } = request.post()

      project.name = name
      project.description = description
      project.customer_id = customer_id

      const updated = await project.save()

      if (updated) {
        response.status(200).json({
          message: 'Project updated.',
          data: project
        })
      } else {
        response.status(500).json({
          message: 'Could not update project.',
          id
        })
      }
    } else {
      response.status(404).json({
        message: 'Project not found.',
        id
      })
    }
  }

  async delete({ response, params: { id } }) {
    const project = await Project.find(id)

    if (project) {
      const deleted = await project.delete()

      if (deleted) {
        response.status(200).json({
          message: 'Project deleted.',
          id
        })
      } else {
        response.status(500).json({
          message: 'Could not delete project.',
          id
        })
      }
    } else {
      response.status(404).json({
        message: 'Project not found.',
        id
      })
    }
  }
}

module.exports = ProjectController
