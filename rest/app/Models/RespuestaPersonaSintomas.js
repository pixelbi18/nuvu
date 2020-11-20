'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaPersonaSintomas extends Model {

    static get table () {
        return 'respuesta_persona_sintomas'
    }

    rersona () {
        return this.belongsToMany('App/Models/Persona')
    }

    respuestaPersonaSintomasDetalle () {
        return this.hasMany('App/Models/RespuestaPersonaSintomasDetalle')
    }

    respuestaPersonaEmpresa () {
        return this.hasMany('App/Models/RespuestaPersonaEmpresa')
    }

}

module.exports = RespuestaPersonaSintomas
