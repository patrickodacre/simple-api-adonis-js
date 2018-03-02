'use strict'

const Schema = use('Schema')

class TagSchema extends Schema {
  up() {
    this.create('tags', table => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('description')
    })
  }

  down() {
    this.drop('tags')
  }
}

module.exports = TagSchema
