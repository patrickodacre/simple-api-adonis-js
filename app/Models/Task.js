'use strict'

const Model = use('Model')

class Task extends Model {
  project() {
    return this.belongsTo('App/Models/Project')
  }
}

module.exports = Task
