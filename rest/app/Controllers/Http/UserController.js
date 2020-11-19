'use strict'

const user = use('App/Models/User')

class UserController {

    async register({ request, auth, response }) {
        try {
            const datos = request.only(['firt_name', 'last_name', 'email', 'password'])
            //guardar usuario persona
            let userRetorno = await user.save(datos)

            let accessToken = await auth.generate(userRetorno)
            return response.json({ "valid": true, "message": 'Persona registrada!', "data": userRetorno, "access_token": accessToken })
        }
        catch (e) {
            return response.json({ "valid": false, "message": e })
        }
    }

    async actualizar({ request, auth, response }) {
        const datos = request.only(['firt_name', 'last_name', 'email', 'id'])
        try {
            let userRetorno =await user
                .query()
                .where('id', datos.id)
                .update({ firt_name: datos.firt_name, last_name: datos.last_name })

            return response.json({ "valid": true, "message": "Persona Actualizada", "data":userRetorno })
        } catch (e) {
            return response.json({ "valid": false, "message": e })
        }

    }

    async getBy({ request, auth, response }) {
        try {
            const datos = request.only(['email'])
            let userFind = await user.findBy('email', datos.email)
            if (userFind != null) {
                return response.json({ "valid": true, "message": 'Persona encontrada!', "data": userFind })
            } else {
                return response.json({ "valid": false, "message": 'Persona no encontrada!', "data": userFind })
            }

        }
        catch (e) {
            return response.json({ "valid": false, "message": e })
        }
    }

    async update({ request, auth, response }) {
        try {
            const datos = request.only(['email'])
            let userFind = await user.findBy('email', datos.email)
            return response.json({ "valid": true, "message": 'Persona encontrada!', "data": userFind })
        }
        catch (e) {
            return response.json({ "valid": false, "message": e })
        }
    }

}

module.exports = UserController
