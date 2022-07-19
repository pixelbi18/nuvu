import { Component, OnInit } from '@angular/core';

import { EventosService } from 'src/app/services/eventos.service';

//import { FileOpener } from '@ionic-native/file-opener/ngx';
//import { File } from '@ionic-native/file/ngx';

import { Platform } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pqrsd-consulta',
  templateUrl: './pqrsd-consulta.page.html',
  styleUrls: ['./pqrsd-consulta.page.scss'],
})
export class PqrsdConsultaPage implements OnInit {
  user: FormGroup;
  todo = {
    idRadicado: '',
    codever: ''
  };

  datosPQRSD: any = '';
  consulta = 0;

  b64Data: any = '';

  src: any = '';

  mensajeError:  any = '';

  verArchivo = 0;
  radicados: any;
  verListaRadicados = 0;

  constructor(private  eventosService: EventosService,  public router: Router,
              //private opener: FileOpener,
              //private file: File,
              public platform: Platform) {
    this.datosPQRSD = '';
    this.radicados = JSON.parse(window.localStorage.getItem('radicados') || '[]');
  }

  ngOnInit() {
    this.radicados = JSON.parse(window.localStorage.getItem('radicados') || '[]');
  }

  logForm() {
    console.log('=====> ', this.todo);
    this.cargueInformacion();
  }

  cargueInformacion(): void{


    this.consulta = 1;
    this.verArchivo = 0;
    this.datosPQRSD = '';
    this.eventosService.getConsultaRadicado(this.todo.idRadicado, '1')
      .subscribe( resp => {
        console.log('RESPUESTA SERVICIO getConsultaRadicado ',resp);
        this.datosPQRSD = resp;
        console.log('this.datosPQRSD', this.datosPQRSD);

        if (resp.message.RADICADO === null){
          this.mensajeError = 'Por favor ingrese un número de radicado';
        }
        else if (resp.message.RADICADO === ''){
          this.mensajeError = 'El número del radicado no existe, por favor verifique';
        }
        else {
          this.mensajeError = '';
        }

        if(resp.message.RADICADO !== ''){
          if(resp.message.ARCHIVO !== '' && resp.message.ARCHIVO !== 'No tiene imagen Digitalizada'){
            this.src = this.base64ToArrayBuffer(resp.message.ARCHIVO);
          }
        }
        this.consulta = 0;
      });
    this.consulta = 0;
    /*
    const jsonString =`{
      "status": 2,
      "message": {
          "RADICADO": "20229000000402",
          "FECHA_RADICADO": "2022-01-14 10:16:11",
          "RADICADO_ASOCIADO": "",
          "ASUNTO": "RESPUESTA LA RADICADO _-",
          "TIPO_DOCUMENTAL": "No Definido",
          "DESTINATARIO": "CARLOS ALBERTO BARRERO CANTOR  ",
          "DIRECCION": "GRUPO INTERNO DE TRABAJO DE TIC",
          "MUNICIPIO": "BOGOTA D.C.",
          "DEPARTAMENTO": "D. C.",
          "FOLIOS": "1",
          "FOLIOS_DIGITALIZADOS": "",
          "DESC_ANEXOS": "",
          "CUENTA_INTERNA": "",
          "GUIA": null,
          "NIVEL_SEGURIDAD": "Publico",
          "ARCHIVO": ""
      }
    }`;
    */


  }


  numeros(event: any) {
    const pattern = /[0-9.,]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  base64ToArrayBuffer(base64) {
	  let binaryString = base64.replace(/\\n/g, '');
    binaryString =  window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array( len );
    for (let i = 0; i < len; i++)        {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  verPDF(){
    this.verArchivo = 1;
  }

  limpiarFormulario(){
    console.log('LIMPIEZA');
    this.todo.idRadicado = '';
    this.datosPQRSD = '';
    this.mensajeError = '';
    this.verArchivo = 0;
    this.verListaRadicados = 0;

  }

  verRadicados(){
    this.verListaRadicados = 1;
    this.radicados = JSON.parse(window.localStorage.getItem('radicados') || '[]');
    console.log(this.radicados);
  }

  consultarRadicado(radicado){
    this.todo.idRadicado = radicado;
    this.cargueInformacion();
  }

  opcRegistro(){
    this.router.navigate(['/pqrsd/tabs/pqrsd-registro']);
  }

}
