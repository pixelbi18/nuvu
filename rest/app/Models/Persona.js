'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Persona extends Model {

    static get table () {
        return 'persona'
    }

    respuestaPersonaSintomas () {
        return this.hasMany('App/Models/RespuestaPersonaSintomas')
    }

    empleado () {
        return this.hasMany('App/Models/Empleado')
    }

    personaAgregadoPersonaId () {
        return this.hasMany('App/Models/PersonaAgregado')
    }

    personaAgregadoPersonaAgregadoId () {
        return this.hasMany('App/Models/PersonaAgregado')
    }

}

module.exports = Persona
