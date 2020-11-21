'use strict'

const Empresa = use('App/Models/Empresa');
const AutorizacionService = use('App/Services/AutorizacionService')
class EmpresaController {

    
    async index ({ request, response }) {
        let dataEmpresa = await Empresa.query().with('empresaSucursal').fetch();

        response.status(200).json({
            Mensaje: 'Listado de Empresas',
            data: dataEmpresa
        })

    }
    
    async store ({ request, response}) {

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
        response.status(201).json({
            Mensaje: 'Empresa Creada',
            data: dataEmpresa
        })

        
    }
    
    async buscar ({ request, response, params, auth}) {
         // recibimos las variables del request
        //const { campo, valor } = request.all();
        const user = await auth.getUser();
        AutorizacionService.verificarPermiso(user);

        let campo = params.campo;
        let valor = params.valor;
        
         // Instanciamos un objeto de empresa
        let dataEmpresa =  new Empresa();
        
        // Intentamos hacer la respectiva busqueda
        try {
            
            //dataEmpresa = await Empresa.findBy(campo, valor);
            
        
            dataEmpresa = await Empresa
                                    .query()
                                    .where(campo, valor)
                                    //.orWhere( 'email', 'contacto@pixelbi.co')
                                    .with('empresaSucursal')
                                    .fetch();

            
            
           
        } catch (error) {
            response.json({Mensaje : "Error"});
        }

        response.status(200).json({
            Mensaje: 'Resultado Busqueda',
            data: dataEmpresa
        })
    }

    
    async show ({ params, request, response, auth}) {
        
       
        const user = await auth.getUser();
        AutorizacionService.verificarPermiso(user);

        response.status(200).json({
            Mensaje: 'Datos Empresa',
            data: request.post().empresa
          })
    }
    

    async update ({ params, request, response }) {

        const { tipo_documento,numero_documento,nombre,ubicacion,direccion,telefono,email, empresa } = request.post()

        empresa.tipo_documento = tipo_documento;
        empresa.numero_documento = numero_documento;
        empresa.nombre = nombre;
        empresa.ubicacion = ubicacion;
        empresa.direccion = direccion;
        empresa.telefono = telefono;
        empresa.email = email;

        await empresa.save()

        response.status(200).json({
            Mensaje: 'Actualización de empresa exitosa',
            data: empresa
        })
    }
    
    async delete ( {auth, request, response, params: { id } }) {
        const user = await auth.getUser();

        const { empresa } = request.post();

        AutorizacionService.verificarPermiso(user);
        await empresa.delete();

        response.status(200).json({
            message: 'Empresa Eliminada',
            id
        })

    }

}

module.exports = EmpresaController
