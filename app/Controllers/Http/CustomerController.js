'use strict'

const Customer = use('App/Models/Customer')
const Database = use('Database')

class CustomerController {
  async index({ response }) {
    const customers = await Customer.all()

    if (customers) {
      response.status(200).json({
        message: 'Here are your customers',
        data: customers
      })
    } else {
      response.status(500).json({
        message: 'Could not fetch the customers.'
      })
    }
  }

  async store({ request, response }) {
    const customer = new Customer()

    const { name, description } = request.post()

    customer.name = name
    customer.description = description

    const saved = await customer.save()

    if (saved) {
      response.status(201).json({
        message: 'Successfully created a new customer.',
        data: customer
      })
    } else {
      response.status(500).json({
        message: 'Could not create customer.',
        data: { name, description }
      })
    }
  }

  async show({ response, params: { id } }) {
    const customer = await Customer.find(id)

    if (customer) {
      response.status(200).json({
        message: 'Here is your customer.',
        customer
      })
    } else {
      response.status(404).json({
        message: 'Customer not found.',
        id
      })
    }
  }

  async update({ request, response, params: { id } }) {
    const { name, description } = request.post()

    const customer = await Customer.find(id)

    if (customer) {
      customer.name = name
      customer.description = description

      const updated = await customer.save()
      if (updated) {
        response.status(200).json({
          message: 'Successfully updated customer.',
          id
        })
      } else {
        response.status(500).json({
          message: 'Could not update customer.',
          id
        })
      }
    } else {
      response.status(404).json({
        message: 'Customer not found.',
        id
      })
    }
  }

  async delete({ response, params: { id } }) {
    const customer = await Customer.find(id)

    if (customer) {
      const deleted = await customer.delete()

      if (deleted) {
        response.status(200).json({
          message: 'Successfully deleted customer.',
          id
        })
      } else {
        response.status(500).json({
          message: 'Could not delete customer.',
          id
        })
      }
    } else {
      response.status(404).json({
        message: 'Customer not found',
        id
      })
    }
  }
}

module.exports = CustomerController
