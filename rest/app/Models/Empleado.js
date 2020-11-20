'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empleado extends Model {

    static get table () {
        return 'empleado'
    }

    empleadoTamizador () {
        return this.hasOne('App/Models/EmpleadoTamizador')
    }

    respuestaEmpleadoSintomas () {
        return this.hasMany('App/Models/RespuestaEmpleadoSintomas')
    }

    empresaSucursal(){
        return this.belongsToMany('App/Models/EmpresaSucursal')
    }

    persona(){
        return this.belongsToMany('App/Models/Persona')
    }

}

module.exports = Empleado
