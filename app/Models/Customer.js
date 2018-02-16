'use strict'

const Model = use('Model')

class Customer extends Model {
  projects() {
    return this.hasMany('App/Models/Project')
  }
}

module.exports = Customer
