'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PreguntasEmpresa extends Model {

    static get table () {
        return 'preguntas_empresa'
    }

    preguntasBancos () {
        return this.belongsToMany('App/Models/PreguntasBancos')
    }

    empresaSucursal () {
        return this.belongsToMany('App/Models/EmpresaSucursal')
    }

    respuestaEmpleadoSintomasDetalle () {
        return this.hasMany('App/Models/RespuestaEmpleadoSintomasDetalle')
    }

}

module.exports = PreguntasEmpresa
