'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaEmpleadoEmpresa extends Model {

    static get table () {
        return 'respuesta_empleado_empresa'
    }

    respuestaEmpleadoSintomas () {
        return this.belongsToMany('App/Models/RespuestaEmpleadoSintomas')
    }

    empleadoTamizador () {
        return this.belongsToMany('App/Models/EmpleadoTamizador')
    }

    empresaSucursal () {
        return this.belongsToMany('App/Models/EmpresaSucursal')
    }

    

}

module.exports = RespuestaEmpleadoEmpresa
