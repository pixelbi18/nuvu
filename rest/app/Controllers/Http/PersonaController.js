'use strict'

const Persona = use('App/Models/Persona');
const AutorizacionService = use('App/Services/AutorizacionService')

class PersonaController {

    async index ({ request, response, auth }) {

        let data = await Persona.query().fetch();

        response.status(200).json({
            Mensaje: 'Listado de Personas',
            data: data
        })

    }


}

module.exports = PersonaController
