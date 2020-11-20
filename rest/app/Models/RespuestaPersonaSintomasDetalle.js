'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RespuestaPersonaSintomasDetalle extends Model {

    static get table () {
        return 'respuesta_personas_sintomas_detalle'
    }

    pespuestaPersonaSintomas () {
        return this.belongsToMany('App/Models/RespuestaPersonaSintomas')
    }

    preguntasRespuesta () {
        return this.belongsToMany('App/Models/PreguntasRespuesta')
    }


}

module.exports = RespuestaPersonaSintomasDetalle
