'use strict'
const Task = use('App/Models/Task')

class FindTask {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const task = await Task.find(id)

    if (!task) {
      return response.status(404).json({
        message: 'Task not found.',
        id
      })
    }

    request.body.task = task

    await next()
  }
}

module.exports = FindTask
