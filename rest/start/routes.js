'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')


Route.get('/Hello', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user/register', 'UserController.register')
Route.post('/auth/login', 'AuthController.login')
Route.post('/user/getBy', 'UserController.getBy').middleware('auth')
Route.post('/user/actualizar', 'UserController.actualizar').middleware('auth')

Route.post('/card/registro', 'CreditCardController.registro').middleware('auth')
Route.post('/card/getByUserId', 'CreditCardController.getByUserId').middleware('auth')
Route.post('/card/actualizar', 'CreditCardController.actualizar').middleware('auth')