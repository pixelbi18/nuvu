'use strict'

const mod = use('App/Models/CreditCard')

class CreditCardController {

    async registro({ request, auth, response }) {
        const datos = request.only(['users_id', 'own', 'cvv', 'expiration', 'card_number', 'franchise'])
        try {
            
            
            let retorno = await mod.save(datos)

            return response.json({ "valid": true, "message": 'tarjeta registrada!', "data": retorno })

        }
        catch (e) {
            return response.json({ "valid": false, "message": e })
        }


    }

    async actualizar({ request, auth, response }) {
        const datos = request.only(['own', 'cvv', 'expiration', 'card_number', 'franchise', 'id'])
        try {
            let userRetorno = await mod
                .query()
                .where('id', datos.id)
                .update({ own: datos.own, cvv: datos.cvv, expiration: datos.expiration, card_number: datos.card_number, franchise: datos.franchise })

            return response.json({ "valid": true, "message": "Tarjeta de Credito Actualizada", "data": userRetorno })
        } catch (e) {
            return response.json({ "valid": false, "message": e })
        }

    }

    async getByUserId({ request, auth, response }) {
        try {
            const datos = request.only(['users_id'])
            let userFind = await mod.query().where('users_id', datos.users_id).fetch()
            if (userFind != null) {
                return response.json({ "valid": true, "message": 'tarjetas encontradas!', "data": userFind })
            } else {
                return response.json({ "valid": false, "message": 'tarjetas no encontradas!', "data": userFind })
            }

        }
        catch (e) {
            return response.json({ "valid": false, "message": e })
        }
    }

}

module.exports = CreditCardController
