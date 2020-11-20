'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PreguntasRespuesta extends Model {

    static get table () {
        return 'preguntas_respuesta'
    }

    respuestaPersonaSintomasDetalle () {
        return this.hasMany('App/Models/RespuestaPersonaSintomasDetalle')
    }

    respuestaEmpleadoSintomasDetalle () {
        return this.hasMany('App/Models/RespuestaEmpleadoSintomasDetalle')
    }

    preguntasBancos () {
        return this.belongsToMany('App/Models/PreguntasBancos')
    }

}

module.exports = PreguntasRespuesta
