'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaPersonaEmpresa extends Model {

    static get table () {
        return 'respuesta_persona_empresa'
    }

    respuestaPersonaSintomas () {
        return this.belongsToMany('App/Models/RespuestaPersonaSintomas')
    }

    empleadoTamizador () {
        return this.belongsToMany('App/Models/EmpleadoTamizador')
    }

    empresaSucursal () {
        return this.belongsToMany('App/Models/EmpresaSucursal')
    }
}

module.exports = RespuestaPersonaEmpresa
