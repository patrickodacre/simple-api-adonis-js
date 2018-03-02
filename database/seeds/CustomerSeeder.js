'use strict'

/*
|--------------------------------------------------------------------------
| CustomerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class CustomerSeeder {
  async run() {
    const customer = await Factory.model('App/Models/Customer').create()
    const project = await Factory.model('App/Models/Project').make()
    const task = await Factory.model('App/Models/Task').make()

    await customer.projects().save(project)
    await project.tasks().save(task)
  }
}

module.exports = CustomerSeeder
