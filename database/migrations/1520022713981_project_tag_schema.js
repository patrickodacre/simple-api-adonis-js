'use strict'

const Schema = use('Schema')

class ProjectTagSchema extends Schema {
  up() {
    this.create('project_tag', table => {
      // use unsigned because these will never be negative numbers
      table.integer('project_id').unsigned()
      table.integer('tag_id').unsigned()
    })
  }

  down() {
    this.drop('project_tag')
  }
}

module.exports = ProjectTagSchema
