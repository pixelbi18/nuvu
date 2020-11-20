'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersonaAgregado extends Model {

    static get table () {
        return 'persona_agregado'
    }

    persona () {
        return this.belongsToMany('App/Models/Persona')
    }

    personaAgregado () {
        return this.belongsToMany('App/Models/Persona')
    }

}

module.exports = PersonaAgregado
