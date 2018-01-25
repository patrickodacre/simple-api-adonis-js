'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index({ response }) {
    const tasks = await Task.all()

    if (tasks) {
      response.status(200).json({
        message: 'Here are your tasks',
        data: tasks
      })
    } else {
      response.status(500).json({
        message: 'Could not get your tasks.'
      })
    }
  }

  async store({ request, response }) {
    const task = new Task()

    const { name, description, project_id } = request.post()

    task.name = name
    task.description = description
    task.project_id = project_id

    const saved = await task.save()

    if (saved) {
      response.status(201).json({
        message: 'Created a new task.',
        data: task
      })
    } else {
      response.status(500).json({
        message: 'Could not create your task.',
        data: { name, description, project_id }
      })
    }
  }

  async show({ request, response, params: { id } }) {
    const task = await Task.find(id)

    if (task) {
      response.status(200).json({
        message: 'Here is your task.',
        data: task
      })
    } else {
      response.status(404).json({
        message: 'Task not found.',
        id
      })
    }
  }

  async update({ request, response, params: { id } }) {
    const task = await Task.find(id)

    if (task) {
      const { name, description, project_id } = request.post()

      task.name = name
      task.description = description
      task.project_id = project_id

      const saved = await task.save()

      if (saved) {
        response.status(200).json({
          message: 'Updated task.',
          data: task
        })
      } else {
        response.status(500).json({
          message: 'Could not update your task.',
          data: { name, description, project_id }
        })
      }
    } else {
      response.status(404).json({
        message: 'Task not found.',
        id
      })
    }
  }

  async delete({ response, params: { id } }) {
    const task = await Task.find(id)

    if (task) {
      const deleted = await task.delete()

      if (deleted) {
        response.status(200).json({
          message: 'Deleted task.',
          id
        })
      } else {
        response.status(500).json({
          message: 'Could not delete your task.',
          id
        })
      }
    } else {
      response.status(404).json({
        message: 'Task not found.',
        id
      })
    }
  }
}

module.exports = TaskController
