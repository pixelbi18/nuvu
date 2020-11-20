'use strict'

const Empresa = use('App/Models/Empresa');

class EmpresaController {

    
    async index ({ request, response }) {
        let dataEmpresa = await Empresa.query().fetch()
        return response.json(dataEmpresa)
    }
    
    async create ({ request, response}) {

        // @todo : hacer las validaciones de variables, validacion de existencia de registro
        // @todo : estandarizar la forma de respuesta del servicio ( mensaje y datos)

        // recibimos las variables del request
        const { tipo_documento,numero_documento,nombre,ubicacion,direccion,telefono,email } = request.all();
        
        // Instanciamos un objeto de empresa
        const dataEmpresa =  new Empresa();
        
        // utilizamos el metodo fill para llenarlo con los valores que recibimos anteriormente
        dataEmpresa.fill({
            tipo_documento,numero_documento,nombre,ubicacion,direccion,telefono,email
        });

        // realizamos la inserción de los datos
        await dataEmpresa.save ( dataEmpresa );
        // realizamos respuesta
        return response.json(dataEmpresa)
        
    }
    
    async buscar ({ request, response }) {
         // recibimos las variables del request
        const { campo, valor } = request.all();
        
        // Instanciamos un objeto de empresa
        const dataEmpresa =  new Empresa();

        
        // Intentamos hacer la respectiva busqueda
        try {
            const dataEmpresa = await Empresa.findBy(campo, valor);
            console.log(dataEmpresa)
        } catch (error) {
            response.json({"mensaje" : "error"});
        }

        return await dataEmpresa.empresaSucursal().fetch();
    }

    * querySingle(request, response) {
        const users = yield Empresa.query().where('telefono', '3115732418').first()
        response.ok(Empresa)
    }


    async store ({ request, response }) {
    }
    
    async show ({ params, request, response, view }) {
    }
    

    async edit ({ params, request, response, view }) {

        const dataempresa = await empresa.find(params.id)

    }
    
    async update ({ params, request, response }) {
    }
    
    async destroy ({ params, request, response }) {
    }

}

module.exports = EmpresaController
