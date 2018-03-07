'use strict'

const Project = use('App/Models/Project')
const Database = use('Database')

class ProjectController {
  async index({ response }) {
    const projects = await Project.all()

    response.status(200).json({
      message: 'Here are your projects.',
      data: projects
    })
  }

  async store({ request, response }) {
    let tags

    const { name, description, customer_id, tags: chosenTags } = request.post()

    const project = await Project.create({ name, description, customer_id })

    if (chosenTags && chosenTags.length > 0) {
      await project.tags().attach(chosenTags)
      tags = await project.tags().fetch()
      project.tags = tags
    }

    response.status(201).json({
      message: 'Successfully created a new project.',
      data: project
    })
  }

  async show({ request, response, params: { id } }) {
    const { project } = request.post()

    const tags = await project.tags().fetch()

    project.tags = tags

    response.status(200).json({
      message: 'Here is your project.',
      data: project
    })
  }

  async update({ request, response }) {
    let tags
    const {
      name,
      description,
      customer_id,
      project,
      tags: updatedTags
    } = request.post()

    project.name = project.name || name
    project.description = project.description || description
    project.customer_id = project.customer_id || customer_id

    await project.save()

    if (updatedTags && updatedTags.length > 0) {
      await project.tags().detach()
      await project.tags().attach(updatedTags)
      tags = await project.tags().fetch()
      project.tags = tags
    }

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
      deleted: true
    })
  }
}

module.exports = ProjectController
