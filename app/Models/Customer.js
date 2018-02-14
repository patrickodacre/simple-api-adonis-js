'use strict'

const Model = use('Model')

class Customer extends Model {
  projects() {
    return this.hasMany('App/Models/Project')
    // return this.hasMany('App/Models/Project', 'id', 'customer_id')
  }
}

module.exports = Customer
