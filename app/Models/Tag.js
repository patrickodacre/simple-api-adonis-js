'use strict'

const Model = use('Model')

class Tag extends Model {
  projects() {
    return this.belongsToMany('App/Models/Project')
  }
}

module.exports = Tag
