'use strict'

const Schema = use('Schema')

class ProjectTagSchema extends Schema {
  up() {
    this.create('project_tag', table => {
      // use unsigned because these will never be negative numbers
      table
        .integer('project_id')
        .unsigned()
        .index('project_id')
      table
        .foreign('project_id')
        .references('projects.id')
        .onDelete('cascade')
      table
        .integer('tag_id')
        .unsigned()
        .index('tag_id')
      table
        .foreign('tag_id')
        .references('tags.id')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('project_tag')
  }
}

module.exports = ProjectTagSchema
