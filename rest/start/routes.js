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

Route.group(() => {
  // Todos los registros
  Route.get('empresa', 'EmpresaController.index');
  // Busqueda por ID
  Route.get('empresa/:id', 'EmpresaController.show').middleware(['findEmpresa'])
  // Guardar un nuevo registro
  Route.post('empresa/registro', 'EmpresaController.store');
  //Busqueda general solo un campo y valor
  Route.post('empresa/:campo/:valor', 'EmpresaController.buscar');

  //Actualizar un registro
  Route.patch('empresa/:id', 'ProjectController.update').middleware(['FindEmpresa'])
  //Borrar un registro
  Route.delete('empresa/:id', 'ProjectController.delete').middleware(['FindEmpresa'])
}).prefix('api/v1/');
