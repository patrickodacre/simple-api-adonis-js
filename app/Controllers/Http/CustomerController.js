'use strict'
const Customer = use('App/Models/Customer')
const Database = use('Database')

class CustomerController {
  async index({ response }) {
    // LUCID
    // const customers = await Customer.all()

    // QB
    const customers = await Database.select('*').from('customers')

    response.status(200).json({
      message: 'Here are your customers.',
      data: customers
    })
  }

  async store({ request, response, params: { id } }) {
    const { name, description } = request.post()

    // LUCID
    // const customer = await Customer.create({ name, description })

    // QB
    const customerID = await Database.table('customers').insert({
      name,
      description
    })

    response.status(201).json({
      message: 'Successfully created a new customer.',
      data: customerID
    })
  }

  async show({ response, params: { id } }) {
    // LUCID
    // const customer = await Customer.find(id)

    // QB
    const customer = await Database.from('customers').where('id', id)

    if (customer) {
      response.status(200).json({
        message: 'Here is your customer.',
        data: customer
      })
    } else {
      response.status(404).json({
        message: 'Customer not found.',
        id
      })
    }
  }

  async update({ request, response, params: { id } }) {
    // LUCID
    // const customer = await Customer.find(id)

    const { name, description } = request.post()

    // QB
    const affectedRows = await Database.table('customers')
      .where('id', id)
      .update({ name, description })

    if (affectedRows) {
      response.status(200).json({
        message: 'Successfully updated this customer.',
        id
      })
    } else {
      response.status(404).json({
        message: 'Customer not found.',
        id
      })
    }
  }

  async delete({ response, params: { id } }) {
    // LUCID
    // const customer = await Customer.find(id)

    // QB
    const affectedRows = await Database.table('customers')
      .where('id', id)
      .delete()

    if (affectedRows) {
      response.status(200).json({
        message: 'Successfully deleted this customer.',
        id
      })
    } else {
      response.status(404).json({
        message: 'Customer not found.',
        id
      })
    }
  }
}

module.exports = CustomerController
