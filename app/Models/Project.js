'use strict'

const Model = use('Model')

class Project extends Model {
  customer() {
    return this.belongsTo('App/Models/Customer')
  }

  tasks() {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
