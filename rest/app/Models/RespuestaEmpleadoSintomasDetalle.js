'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaEmpleadoSintomasDetalle extends Model {

    static get table () {
        return 'respuesta_empleado_sintomas_detalle'
    }

    preguntasRespuesta () {
        return this.belongsToMany('App/Models/PreguntasRespuesta')
    }

    preguntasEmpresa () {
        return this.belongsToMany('App/Models/PreguntasEmpresa')
    }
    
    respuestaEmpleadoSintomas () {
        return this.belongsToMany('App/Models/RespuestaEmpleadoSintomas')
    }

}

module.exports = RespuestaEmpleadoSintomasDetalle
