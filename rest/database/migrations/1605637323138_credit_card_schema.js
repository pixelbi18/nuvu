'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditCardSchema extends Schema {
  up () {
    this.create('credit_cards', (table) => {
      table.increments()
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.string('own',100).notNullable()
      table.string('cvv',3).notNullable()
      table.string('expiration',7).notNullable()
      table.string('card_number',50).notNullable()
      table.string('franchise',50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('credit_cards')
  }
}

module.exports = CreditCardSchema
