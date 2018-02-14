'use strict'

const Schema = use('Schema')

class AddCompletedToProjectsSchema extends Schema {
  up() {
    this.table('projects', table => {
      // alter table
      table.boolean('completed').defaultTo(false)
    })
  }

  down() {
    this.table('projects', table => {
      // reverse alternations
      table.dropColumn('completed')
    })
  }
}

module.exports = AddCompletedToProjectsSchema
