'use strict'

const Customer = use('App/Models/Customer')
const Database = use('Database')

class CustomerController {
  async index({ response }) {
    response.json({
      greeting: 'Here are your customers from index.'
    })
  }

  async store({ request, response, params: { id } }) {
    const body = request.post()

    response.json({
      message: 'Successfully created a new customer.',
      data: body
    })
  }

  async show({ response, params: { id } }) {
    response.json({
      message: 'Here is your customer.',
      id
    })
  }

  async update({ request, response, params: { id } }) {
    const body = request.post()

    response.json({
      message: 'Successfully updated a new customer.',
      data: body
    })
  }

  async delete({ response, params: { id } }) {
    response.json({
      message: 'Successfully deleted customer.',
      id
    })
  }
}

module.exports = CustomerController
