'use strict'
const Tag = use('App/Models/Tag')

class FindTag {
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const tag = await Tag.find(id)

    if (!tag) {
      return response.status(404).json({
        message: 'Tag not found.',
        id
      })
    }

    request.body.tag = tag

    await next()
  }
}

module.exports = FindTag
