const AccesoProhibidoException = use ('App/Exceptions/AccesoProhibidoException');
class AutorizacionService{

    verificarPermiso(user){

       
        if(!user.id){
            throw new AccesoProhibidoException();
        }
    }

}

module.exports = new AutorizacionService();