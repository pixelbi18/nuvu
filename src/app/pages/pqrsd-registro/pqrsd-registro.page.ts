import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { EventosService } from 'src/app/services/eventos.service';

import * as paises from '../../../assets/json/paises.json';
import * as departamentos from '../../../assets/json/departamentos.json';
import * as departamentosExtranjeros from '../../../assets/json/departamentosExtranjeros.json';
import * as ciudades from '../../../assets/json/ciudades.json';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pqrsd-registro',
  templateUrl: './pqrsd-registro.page.html',
  styleUrls: ['./pqrsd-registro.page.scss'],
})
export class PqrsdRegistroPage implements OnInit {

  todo = {
    anonimo: '',
    tdoc: '',
    nombre: '',
    tipoDocumento:'',
    tipoRem:'',
    documento:'',
    respuesta:'',
    email:'',
    direccion:'',
    barrioVeredaCorregimiento:'',
    idCont: '0',
    pais: 0,
    departamento:0,
    ciudad: 0,
    numeroContacto:'',
    asunto:'',
    adjunto:'',
    folios:'1',
    tpradicado: '4',
    anexos: '',
    fileb64: '',
    cuentai: '',
    radAsociado: '',
    medio: '2'
  };

  paises = '';
  departamentos = '';
  departamentosTemporal = '';
  departamentosExtranjeros = '';
  ciudades = '';
  ciudadesTemporal = '';
  asuntoSelected = '';
  anexoExiste = 0;

  anonimo = 0;
  radicadoCreado = 0;
  numeroRadicado = '';

  paisSelected = '';
  departamentoSelected = '';

  nombreArchivo = '';
  fileb64 = '';
  datosPQRSD: any = '';
  verArchivo = 0;
  src: any = '';

  constructor( private  eventosService: EventosService, public alertCtrl: AlertController, public router: Router) {
    // window.localStorage.clear();

  }

  ngOnInit() {

    this.readJsonPaises();
    this.readJsonDepartamentos();
    // this.readJsonDepartamentosExtranjeros();
    this.readJsonCiudades();

  }

  operarAnonimo(e){

    this.todo.nombre = '';
    this.todo.tipoRem = '';
    this.todo.tipoDocumento = '';
    this.todo.documento = '';
    this.todo.idCont = '';
    this.todo.pais = 0;
    this.todo.departamento = 0;
    this.todo.ciudad = 0;
    this.todo.email = '';
    this.todo.direccion = '';
    this.todo.barrioVeredaCorregimiento='';
    this.todo.numeroContacto = '';

    if(e.detail.value === 'Si'){
      this.anonimo = 1;
      this.todo.nombre = 'ANONIMO';
      this.todo.tipoRem = '0';
      this.todo.tipoDocumento = '0';
      this.todo.documento = '123456789';
      this.todo.idCont = '1';
      this.todo.pais = 170;
      this.todo.departamento = 11;
      this.todo.ciudad = 11001000;
      this.todo.respuesta ='3';
      this.todo.email = ' ';
      this.todo.direccion = ' ';
      this.todo.barrioVeredaCorregimiento=' ';
      this.todo.numeroContacto = ' ';
    }
    else {
      this.anonimo = 0;
    }

  }


  asuntoCambio(e){
    this.asuntoSelected = e.detail.value;

  }

  tipoRem(e){
    let valor = '0';

    if(e.detail.value === '4'){
      valor = '2';
    }
    else {
      valor = '0';
    }

    this.todo.tipoRem = valor;

  }


  readJsonPaises(){
    fetch('../../../assets/json/paises.json').then(res=>res.json()).then(json=>{
        this.paises = json;
    });
  }
  readJsonDepartamentos(){
    fetch('../../../assets/json/departamentos.json').then(res=>res.json()).then(json=>{
      this.departamentosTemporal = json;
    });
  }

  /*readJsonDepartamentosExtranjeros(){
    fetch('../../../assets/json/departamentosExtranjeros.json').then(res=>res.json()).then(json=>{
      this.departamentosExtranjeros = json;
    });
  }*/

  readJsonCiudades(){
    fetch('../../../assets/json/ciudades.json').then(res=>res.json()).then(json=>{
      this.ciudadesTemporal = json;
    });
  }

  cambiarDepartamento(e){
    // console.log('pais', e);
    this.departamentos = '';
    this.todo.departamento = 0;

    if(e.detail.value.length > 0){
      this.paisSelected = e.detail.value;
      const myJson = JSON.parse(JSON.stringify(this.departamentosTemporal));
      const resultado = myJson.filter(val=> val.id_pais === e.detail.value );
      this.departamentos = resultado;

    }


    /*
    if ( Number(e.detail.value) === 170 ){
      this.departamentos = this.departamentosTemporal;

    } else {
      this.departamentos = this.departamentosExtranjeros;
    }
    */

  }

  cambiarCiudad(e){
    // console.log('departamento', e);
    this.ciudades = '';
    this.todo.ciudad = 0;
    if(e.detail.value.length > 0){

      const myJson = JSON.parse(JSON.stringify(this.ciudadesTemporal));
      const resultado = myJson.filter(val=> val.id_departamento === e.detail.value && this.paisSelected === val.id_pais);
      this.ciudades = resultado;

    }
  }

  uploadFile() {
    //this.fileButton.nativeElement.click();
  }

  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  fileChanged(event) {
    const files = event.target.files;
    console.log('files', files);

    const extension = files[0].name.split('.').pop();

    this.nombreArchivo= 'archivo_1.'+extension;
    // console.log('todo.adjunto', this.todo.adjunto);

    const reader = this.getFileReader();
    reader.onload = () => {
      //this.imageURL = reader.result;

      const base64String = (reader.result as string)
                .replace('data:', '')
                .replace(/^.+,/, '');
      console.log(base64String);
      this.fileb64 = base64String;
    };
    reader.readAsDataURL(event.target.files[0]);

    if ( event.target.files[0].name !== '') {
      this.anexoExiste = 1;
    }
    else {
      this.anexoExiste = 0;
    }

  }


  guardarForm(){
    /*datosFinal.tipo_rem = this.todo.tipoRem;
    datosFinal.nombre = this.todo.nombre;
    datosFinal.direccion = this.todo.direccion;
    datosFinal.telefono = this.todo.numeroContacto;
    datosFinal.mail = this.todo.email;*/
    // datosFinal.id_cont =
    const verificarData = this.verificarData();
    if ( verificarData === 0) {

      this.radicadoCreado = 1;
      const myJson = JSON.parse(JSON.stringify(this.paises));
      if(this.todo.idCont === ''){
        const resultado = myJson.filter(val=> val.value === this.todo.pais);
        this.todo.idCont = resultado[0].continente;
        console.log('Data Final', this.todo);
      }
      this.eventosService.postCrearRadicado(this.todo)
        .subscribe( resp => {
          // console.log('resp', resp);

          this.numeroRadicado = JSON.parse(JSON.stringify(resp.message));

          const radicados = JSON.parse(window.localStorage.getItem('radicados') || '[]');
          radicados.push(this.numeroRadicado);
          window.localStorage.setItem('radicados', JSON.stringify(radicados));
          // console.log('radicados', radicados);
          // consumimos servicio para subir el archivo
          if( this.fileb64 !== ''){
            this.eventosService.postcrearAnexo(this.numeroRadicado, this.nombreArchivo, this.fileb64)
            .subscribe( resp2 => {
              // console.log('resp2', resp2);

            });
          }


      });
    }
    else {
      this.showAlert();
    }
  }

  verificarData(){
    let resp = 0;
    if (this.todo.tipoRem === '') {
      resp = 1;
    }
    else if(this.todo.nombre === ''){
      resp = 1;
    }
    else if(this.todo.tipoDocumento === '' || this.todo.tipoDocumento === null){
      resp = 1;
    }
    else if(this.todo.documento === ''  || this.todo.documento === null){
      resp = 1;
    }
    else if(this.todo.email === ''  || this.todo.email === null){
      resp = 1;
    }
    else if(this.todo.direccion === '' || this.todo.direccion === null){
      resp = 1;
    }
    else if(this.todo.barrioVeredaCorregimiento === '' || this.todo.barrioVeredaCorregimiento === null){
      resp = 1;
    }
    else if(this.todo.pais === 0 || this.todo.pais === null){
      resp = 1;
    }
    else if(this.todo.departamento === 0 || this.todo.departamento === null){
      resp = 1;
    }
    else if(this.todo.ciudad === 0 || this.todo.ciudad === null){
      resp = 1;
    }
    else if(this.todo.numeroContacto === ''){
      resp = 1;
    }
    else if(this.todo.asunto === '' || this.todo.asunto === null){
      resp = 1;
    }
    // console.log('TODO', this.todo);
    // console.log('resp', resp);
    return resp;
  }

  verPDF(){
    // this.numeroRadicado = '20229000000932';
    this.eventosService.getConsultaRadicado(this.numeroRadicado, '1')
      .subscribe( resp => {
        // console.log(resp);
        this.datosPQRSD = resp;
        this.verArchivo = 1;
        if(resp.message.RADICADO !== ''){
          if(resp.message.ARCHIVO !== '' && resp.message.ARCHIVO !== 'No tiene imagen Digitalizada'){
            this.src = this.base64ToArrayBuffer(resp.message.ARCHIVO);

          }
        }
      });
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


  limpiarFormulario(){
    this.radicadoCreado = 0;
    this.verArchivo = 0;

    this.todo = {
      anonimo: '',
      tdoc: '',
      nombre: '',
      tipoDocumento:'',
      tipoRem:'',
      documento:'',
      respuesta:'',
      email:'',
      direccion:'',
      barrioVeredaCorregimiento:'',
      idCont: '0',
      pais: 0,
      departamento:0,
      ciudad: 0,
      numeroContacto:'',
      asunto:'',
      adjunto:'',
      folios:'1',
      tpradicado: '4',
      anexos: '',
      fileb64: '',
      cuentai: '',
      radAsociado: '',
      medio: '2'
    };



  }


  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Datos incompletos',
      subHeader: '',
      message: 'Revisa que los datos solicitados por el formulario esten diligenciados.',
      buttons: ['Entendido']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    // console.log(result);
  }


  opcConsulta(){
    this.router.navigate(['/pqrsd/tabs/pqrsd-consulta']);
  }

}
