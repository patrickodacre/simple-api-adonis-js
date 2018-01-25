'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', table => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('description')
      table.integer('project_id').unsigned()
      table
        .foreign('project_id')
        .references('projects.id')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
