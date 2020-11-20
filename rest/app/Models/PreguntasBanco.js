'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PreguntasBanco extends Model {

    static get table () {
        return 'preguntas_banco'
    }

    preguntasEmpresa () {
        return this.hasMany('App/Models/PreguntasEmpresa')
    }

    preguntasRespuesta () {
        return this.hasMany('App/Models/PreguntasRespuesta')
    }

    publicoObjetivo () {
        return this.belongsToMany('App/Models/PublicoObjetivo')
    }

}

module.exports = PreguntasBanco
