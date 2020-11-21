'use strict'
const Empresa = use('App/Models/Empresa')

class FindEmpresa {
  async handle({ request, response, params: { id } }, next) {
    
    const data = await Empresa.find(id)

    if (!data) {
      return response.status(404).json({
        message: 'Empresa no encontrada.',
        id
      })
    }

    request.body.empresa = data

    await next()
  }
}

module.exports = FindEmpresa