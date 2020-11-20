'use strict'

const PublicoOjetivo = use('PublicoOjetivo')

class PublicoOjetivoController {

    async index({ response }) {

        const publicoOjetivo = await PublicoOjetivo.query().fetch()
    
        response.status(200).json({
            message: 'Datos Publico Objetivo',
            data: publicoOjetivo

        })
    
    }

}

module.exports = PublicoOjetivoController
