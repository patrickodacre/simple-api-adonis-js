'use strict'

const Model = use('Model')

class Project extends Model {
  customer() {
    return this.belongsTo('App/Models/Customer')
    // return this.belongsTo('App/Models/Customer', 'customer_id', 'id')
  }

  tasks() {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
