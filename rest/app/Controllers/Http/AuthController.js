'use strict'

const user = use('App/Models/User');

class AuthController {

    async login({ request, auth, response }) {
        const datos = request.only(['email', 'password'])
        
        try {
            if (await auth.attempt(datos.email, datos.password)) {
                let userFind = await user.findBy('email', datos.email)
                let accessToken = await auth.generate(userFind)
                return response.json({ "valid":true,"message": 'Acceso al sistema!', "data": userFind, "access_token": accessToken })
            }

        }
        catch (e) {
            return response.json({ "valid":false,"message": 'You first need to register!' })
        }
    }
    
}

module.exports = AuthController
