import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventosService } from 'src/app/services/eventos.service';
import { environment } from 'src/environments/environment.prod';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


//import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //banner = '/assets/img/banner-escuela.png';
  //footer = '/assets/img/footer.png';

  tipoContenido: any;
  entidad: any;
  tipoUsuario: any;
  titulo: any;

  escuela: any;
  totalResultados = 0;

  formulario: any = {};

  paso = 1;
  recursoSeleccionado: any;
  baseUrl = environment.baseUrl;


  constructor(public router: Router,private  eventosService: EventosService
    ,private screenOrientation: ScreenOrientation
    ) {
    this.setPortrait();
    this.cargueInformacion();
    this.paso = 1;
  }

  setPortrait(){
    // set to portrait
    console.log('VISTA');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  openRecurso(url){

    // esta es la palabra a buscar
    const termino = 'https:';
    let nuevaUrl = '';
    // para buscar la palabra hacemos
    const posicion = url.indexOf(termino);
    console.log('POSICION', posicion);
    if (posicion === -1){
      nuevaUrl = this.baseUrl+url;
    }
    else {
      nuevaUrl = url;
    }
    console.log('nuevaUrl', nuevaUrl);

    window.localStorage.setItem('url', nuevaUrl);
    this.router.navigateByUrl('recurso', url);
  }

  ngOnInit(){

    this.setPortrait();
  }

  ngOnChange(){
    this.setPortrait();
  }


  cargueInformacion(): void{
    this.eventosService.getTipoContenido()
    .subscribe( resp => {

      this.tipoContenido = resp;
      console.log('RESPUESTA SERVICIO getTipoContenido',this.tipoContenido);
    });

    this.eventosService.getEntidadoautoridad()
    .subscribe( resp => {
      console.log('RESPUESTA SERVICIO getEntidadoautoridad',resp);
      this.entidad = resp;
    });

    this.eventosService.getTipousuario()
    .subscribe( resp => {
      console.log('RESPUESTA SERVICIO getTipousuario',resp);

      this.tipoUsuario = resp;
    });

    this.eventosService.getTitulo()
    .subscribe( resp => {
      console.log('RESPUESTA SERVICIO getTitulo',resp);
      this.titulo = resp;
    });

  }

  consultar(): void{
    let varios = 0;
    this.paso = 2;
    const union = [];
    union[0] = '?';
    union[1] = ' and ';

    let cadena = '';
    console.log('FORMULARIO = ',this.formulario.usuario);

    // tipo de usuario
    if( this.formulario.usuario !== undefined && this.formulario.usuario !== '[]'){
      cadena+= union[varios]+'field_tipo_de_usuario='+this.formulario.usuario;
      //cadena.concat(union[varios], 'field_tipo_usuario_id='+this.formulario.usuario );
      varios = 1;
      console.log('CADENA', cadena);
    }

    // tipo de usuario
    if( this.formulario.recurso !== undefined && this.formulario.recurso !== '[]'){
      cadena+= union[varios]+'field_tipo_de_contenido='+this.formulario.recurso;
      //cadena.concat(union[varios], 'field_tipo_usuario_id='+this.formulario.usuario );
      varios = 1;
      console.log('CADENA', cadena);
    }



    // Entidad
    if( this.formulario.entidad !== undefined && this.formulario.entidad !== '[]'){
      cadena+= union[varios]+'field_aliado_o_autoridad='+this.formulario.entidad;
      //cadena.concat(union[varios], 'field_tipo_usuario_id='+this.formulario.usuario );
      varios = 1;
      console.log('CADENA', cadena);
    }

    // Tema
    if( this.formulario.tema !== undefined && this.formulario.tema !== ''){
      cadena+= union[varios]+'title='+this.formulario.tema;
      //cadena.concat(union[varios], 'field_tipo_usuario_id='+this.formulario.usuario );
      varios = 1;
      console.log('CADENA', cadena);
    }

    // titulo
    if( this.formulario.titulo !== undefined && this.formulario.titulo !== '[]'){
      cadena+= union[varios]+'title='+this.formulario.titulo;
      //cadena.concat(union[varios], 'field_tipo_usuario_id='+this.formulario.usuario );
      varios = 1;
      console.log('CADENA', cadena);
    }


    this.eventosService.getEscuela(cadena)
    .subscribe( resp => {
      //console.log('RESPUESTA SERVICIO getTitulo',resp);
      this.escuela = resp;

      console.log('escuela', this.escuela);

    });
  }

  regresarFormulario(){
    this.paso = 1;

  }

  regresarListado(){
    this.paso=2;
  }

  leerMas(es){
    this.paso = 3;
    this.recursoSeleccionado = es;
    console.log('LEER MAS', es);
  }


  cargarBot(): void {
    this.router.navigate(['/bot']);
  }


}
