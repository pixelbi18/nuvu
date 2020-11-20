'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaEmpleadoSintomas extends Model {

    static get table () {
        return 'respuesta_Empleado_sintomas'
    }

    empleado () {
        return this.belongsToMany('App/Models/empleado')
    }

    respuestaEmpleadoEmpresa () {
        return this.hasMany('App/Models/RespuestaEmpleadoEmpresa')
    }

    respuestaEmpleadoSintomasDetalle () {
        return this.belongsToMany('App/Models/RespuestaEmpleadoSintomasDetalle')
    }

}

module.exports = RespuestaEmpleadoSintomas
