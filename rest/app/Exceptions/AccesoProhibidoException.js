'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccesoProhibidoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, {response}) {
    return response.status(403).json({
      error: 'Acceso al servicio no permitido.'
    })

  }
}

module.exports = AccesoProhibidoException
