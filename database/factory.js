'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Customer', faker => {
  return {
    name: faker.name(),
    description: faker.sentence()
  }
})

Factory.blueprint('App/Models/Project', faker => {
  return {
    name: faker.word(),
    description: faker.sentence()
  }
})

Factory.blueprint('App/Models/Task', faker => {
  return {
    name: faker.word(),
    description: faker.sentence()
  }
})
Factory.blueprint('App/Models/Tag', faker => {
  return {
    name: faker.word(),
    description: faker.sentence()
  }
})
