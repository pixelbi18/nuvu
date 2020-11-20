'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PublicoObjetivo extends Model {

    static get table () {
        return 'publico_objetivo'
    }

    preguntasBancos () {
        return this.hasMany('App/Models/PreguntasBancos')
    }

}

module.exports = PublicoObjetivo
