'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EmpleadoTamizador extends Model {

    static get table () {
        return 'empleado_tamizador'
    }

    empleado () {
        return this.hasOne('App/Models/Empleado')
    }

    respuestaPersonaEmpresa () {
        return this.hasMany('App/Models/RespuestaPersonaEmpresa')
    }

    respuestaEmpleadoEmpresa () {
        return this.hasMany('App/Models/RespuestaEmpleadoEmpresa')
    }

}

module.exports = EmpleadoTamizador
