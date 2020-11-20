'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EmpresaSucursal extends Model {

    static get table () {
        return 'empresa_sucursal'
    }

    empleado () {
        return this.hasMany('App/Models/Empleado')
    }

    preguntasEmpresa () {
        return this.hasMany('App/Models/PreguntasEmpresa')
    }

    respuestaEmpleadoEmpresa () {
        return this.hasMany('App/Models/RespuestaEmpleadoEmpresa')
    }

    respuestaPersonaEmpresa () {
        return this.hasMany('App/Models/RespuestaPersonaEmpresa')
    }

    empresa(){
        return this.belongsToMany('App/Models/Empresa')
    }
    
}

module.exports = EmpresaSucursal
