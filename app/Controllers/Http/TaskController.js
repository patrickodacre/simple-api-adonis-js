'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index({ response }) {
    const tasks = await Task.all()

    response.status(200).json({
      message: 'Here are your tasks',
      data: tasks
    })
  }

  async store({ request, response }) {
    const { name, description, project_id } = request.post()

    const task = await Task.create({ name, description, project_id })

    response.status(201).json({
      message: 'Successfully created a new task.',
      data: task
    })
  }

  async show({ request, response }) {
    response.status(200).json({
      message: 'Here is your task.',
      data: request.post().task
    })
  }

  async update({ request, response, params: { id } }) {
    const { name, description, project_id, task } = request.post()

    task.name = name || task.name
    task.description = description || task.description
    task.project_id = project_id || task.project_id

    await task.save()

    response.status(200).json({
      message: 'Successfully updated this task.',
      data: task
    })
  }

  async delete({ request, response, params: { id } }) {
    const { task } = request.post()

    await task.delete()

    response.status(200).json({
      message: 'Deleted task.',
      id
    })
  }
}

module.exports = TaskController
