'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index({ response }) {
    const projects = await Project.all()

    response.status(200).json({
      message: 'Here are your projects.',
      data: projects
    })
  }

  async store({ request, response }) {
    const { name, description, customer_id } = request.post()

    const project = await Project.create({ name, description, customer_id })

    response.status(201).json({
      message: 'Successfully created a new project.',
      data: project
    })
  }

  async show({ request, response }) {
    response.status(200).json({
      message: 'Here is your project.',
      data: request.post().project
    })
  }

  async update({ request, response }) {
    const { name, description, customer_id, project } = request.post()

    project.name = name || project.name
    project.description = description || project.description
    project.customer_id = customer_id || project.customer_id

    await project.save()

    response.status(200).json({
      message: 'Successfully updated this project.',
      data: project
    })
  }

  async delete({ request, response, params: { id } }) {
    const { project } = request.post()

    await project.delete()

    response.status(200).json({
      message: 'Successfully deleted this project.',
      id
    })
  }
}

module.exports = ProjectController
