'use strict'

const Tag = use('App/Models/Tag')

class TagController {
  async index({ response }) {
    const tags = await Tag.all()

    return response.status(200).json({
      message: 'Successfully retrieved tags.',
      data: tags
    })
  }
  async store({ request, response }) {
    const tagData = request.only(['name', 'description'])

    const tag = await Tag.create(tagData)

    return response.status(201).json({
      message: 'Successfully created a new tag.',
      data: tag
    })
  }

  async show({ request, response }) {
    const { tag } = request.post()

    return response.status(200).json({
      message: 'Found your tag.',
      data: tag
    })
  }

  async update({ request, response }) {
    const { name, description, tag } = request.post()

    tag.name = name || tag.name
    tag.description = description || tag.description

    await tag.save()

    response.status(200).json({
      message: 'Successfully updated this tag.',
      data: tag
    })
  }

  async delete({ request, response }) {
    const { tag } = request.post()
    await tag.delete()

    response.status(200).json({
      message: 'Successfully deleted this tag.',
      deleted: true
    })
  }
}

module.exports = TagController
