'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class CreditCard extends Model {

    static get table() {
        return 'credit_cards'
    }

    user() {
        return this.belongsToMany('App/Models/User')
    }

    static async save(data) {
        const newUser = await this.create(data);

        return newUser;
    }

}

module.exports = CreditCard
