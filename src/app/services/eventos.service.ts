/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Entidadoautoridad, Escuela, TipoContenido, TipoUsuario, Titulo, ConsultaRadicado } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

// Definimos unas constantes, una tomada del enviroment y la otra la cabecera trasnversal a todos los consumos de los servicios
const urlListaEventos = environment.urlBaseServicio;
const authorization = environment.authorization;



const token = '';



/** @todo se debe colocar la cabecera de seguridad del servicio */

const header = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH',
  'Cache-Control': 'no-cache',
  // eslint-disable-next-line quote-props
  'Authorization' : authorization
};
const httpOptions = new HttpHeaders(header);



@Injectable({
  providedIn: 'root'
})


export class EventosService {

  // Inyectamos la libreria que importada en appmodule.ts
  constructor(  private http: HttpClient,
                public datalocalService: DataLocalService

    ) {



  }

   /**
    * Creamos el servicio generico para ejecutar los servicios, se usa el docorador <T> que sera por cada interface de forma dinamica
    */

   private ejecutarQuery<T>( endpoint: string, queryParams: string = '') {


    console.log('HEADER', header);

    try {
      endpoint = urlListaEventos + endpoint;
      console.log('endpoint', endpoint);

      return this.http.get<T>(endpoint, {headers : httpOptions});
    } catch (error) {
      console.error('Error Status: '+error.status);
      console.error('Error Error: '+error.error); // Error message as string
      console.error('Error Header: '+error.headers);
    }

   }

  private ejecutarQueryPost<T>( endpoint: string, queryParams: string = '') {


    console.log('HEADER', header);

    const httpOptions2 = new HttpHeaders(header);

    try {
      endpoint = urlListaEventos + endpoint;
      console.log('endpoint', endpoint);

      return this.http.post<T>(endpoint, {headers : httpOptions2});
    } catch (error) {
      console.error('Error Status: '+error.status);
      console.error('Error Error: '+error.error); // Error message as string
      console.error('Error Header: '+error.headers);
    }
  }

  private ejecutarQueryPut<T>( endpoint: string, queryParams: string = '') {


    console.log('HEADER', header);

    const httpOptions2 = new HttpHeaders(header);

    try {
      endpoint = urlListaEventos + endpoint;
      console.log('endpoint', endpoint);

      return this.http.put<T>(endpoint, {headers : httpOptions2});
    } catch (error) {
      console.error('Error Status: '+error.status);
      console.error('Error Error: '+error.error); // Error message as string
      console.error('Error Header: '+error.headers);
    }
  }



  // REST de servicios de escuela virtual
  getTipoContenido() {
    return this.ejecutarQuery<TipoContenido>('/grupo/tipocontenido');
  }

  getEntidadoautoridad() {
    return this.ejecutarQuery<Entidadoautoridad>('/grupo/entidadoautoridad');
  }

  getTipousuario() {
    return this.ejecutarQuery<TipoUsuario>('/filtro/tipousuario');
  }

  getTitulo() {
    return this.ejecutarQuery<Titulo>('/filtro/titulo');
  }

  getEscuela(filtro){
    console.log('FILTRO ESCUELA => ', filtro);
    return this.ejecutarQuery<Escuela>(filtro);
  }




  private getQueryPQRSD<T>( endpoint: string, radicado = '', arch= '') {

    const headerPqrsd = {
      'Access-Control-Allow-Credentials': 'true',
       withCredentials: 'true',
       Authorization : environment.authorizationPqrsd,
       radicado,
       arch,
      // 'Access-Control-Allow-Headers': '*',
      //'Access-Control-Allow-Origin': '*',
      //'Content-Type': 'application/json',
      //'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH',
      //'Cache-Control': 'no-cache'

    };

    console.log('headerPqrsd', headerPqrsd);

    try {
      endpoint = environment.urlPqrsd + endpoint;
      console.log('endpoint', endpoint);



      const httpOptionsPqrsd = new HttpHeaders(headerPqrsd);


      return this.http.get<T>(endpoint, {headers : httpOptionsPqrsd});
    } catch (error) {
      console.error('Error Status: '+error.status);
      console.error('Error Error: '+error.error); // Error message as string
      console.error('Error Header: '+error.headers);
    }

  }

  private ejecutarQueryPostPQRSD<T>( endpoint: string, queryParams: string = '') {
    const headerPqrsd = {
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
       withCredentials: 'true',
       Authorization : environment.authorizationPqrsd,
    };

    const httpOptions2 = new HttpHeaders(headerPqrsd);

    try {
      endpoint = environment.urlPqrsd + endpoint;
      console.log('endpoint', endpoint);

      return this.http.post<T>(endpoint, queryParams, {headers : httpOptions2});
    } catch (error) {
      console.error('Error Status: '+error.status);
      console.error('Error Error: '+error.error); // Error message as string
      console.error('Error Header: '+error.headers);
    }
  }


  getConsultaRadicado(radicado, arch) {
    return this.getQueryPQRSD<ConsultaRadicado>('consultaRadicado', radicado, arch);
  }

  postCrearRadicado(todo){
    const body = {
      tipo_rem: '',
      nombre: '',
      prim_apell: '',
      seg_apell: '',
      direccion: '',
      telefono: '',
      mail: '',
      id_cont: '',
      id_pais: '',
      dpto: '',
      muni: '',
      folios: '',
      tdoc: '',
      documento: '',
      doc_destino: '',
      tpradicado: '',
      asunto: '',
      anexos: '',
      cuentai: '',
      medio: '',
      rad_asociado: ''
    };

    body.tipo_rem = todo.tipoDocumento;
    body.nombre = todo.nombre;
    body.prim_apell = ' ';
    body.seg_apell = ' ';
    body.direccion = todo.direccion+' '+todo.barrioVeredaCorregimiento;
    body.telefono = todo.numeroContacto;
    body.mail = todo.email;
    body.id_cont = todo.idCont;
    body.id_pais = todo.pais;
    body.dpto = todo.departamento;
    body.muni = todo.ciudad;
    body.folios = todo.folios;
    body.tdoc = todo.tdoc;
    body.documento = todo.documento;
    body.doc_destino = '75064030';
    body.tpradicado = todo.tpradicado;
    body.asunto = todo.asunto;
    body.anexos = todo.anexos;
    body.cuentai = todo.cuentai;
    body.medio = todo.medio;
    body.rad_asociado = todo.radAsociado;
    console.log('body', body);
    const bodyFinal = JSON.parse(JSON.stringify(body));

    return this.ejecutarQueryPostPQRSD<ConsultaRadicado>('crearRadicado', bodyFinal);
  }

  postcrearAnexo(idRadicado, nombreArchivo, fileb64){

    const body = {
      radicado: idRadicado,
      file: fileb64,
      filename: nombreArchivo,
      descripcion:'Anexo 1'
    };
    const bodyFinal = JSON.parse(JSON.stringify(body));
    return this.ejecutarQueryPostPQRSD<ConsultaRadicado>('crearAnexo', bodyFinal);

  }

}
