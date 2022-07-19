import {  Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.page.html',
  styleUrls: ['./recurso.page.scss'],
})
export class RecursoPage implements OnInit, OnDestroy{

  logoTitulo = '/assets/img/logoAnsv.png';
  //url2 = 'https://ansv.maps.arcgis.com/apps/webappviewer/index.html?id=feb6a00fe5e44aa59138442a1f1764f6';

  url2 = window.localStorage.getItem('url');

  esPdf = 0;
  existingScreenOrientation: string;

  orientacion = false;

  loading = true;

  constructor( private platform: Platform, private route: Router, private screenOrientation: ScreenOrientation) {
    // window.screen.orientation.unlock();
    this.screenOrientation.unlock();

    // this.redimiensionar();
    // get current

    // set to landscape
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // detect orientation changes
  }
  /*
  getOrientation(){
    console.log('vamosss entra please');
    const orientation = window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait';
    return orientation;
  }

  redimiensionar(): void {
    window.onresize = function(){ this.getOrientation(); };
  }*/

  orientacionPantalla(){
    console.log('ENTRA');
    if (this.orientacion === true) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    else {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    this.orientacion = !this.orientacion;
    // this.screenOrientation.unlock();
  }


  ngOnInit() {
    this.screenOrientation.unlock();
    // this.redimiensionar();

    /*this.platform.ready().then(() => {

      console.log('estado pantalla', this.platform.isPortrait());

      this.so.onChange().subscribe(async () => {
        console.log('=> CAMBIO : ', this.so.type); // This logs either landscape-primary or landscape-secondary
      });
    });*/


    const re = /(?:\.([^.]+))?$/;
    const ext = re.exec(this.url2);

    if(ext[1] === 'pdf'){
      this.esPdf = 1;
    }
    else {
      this.esPdf = 0;
    }

    //this.urlPdf = this.urlPdf + encodeURIComponent('https://ansv.gov.co/escuela/fase1/on/ANSV_PT028_INF01/ANSV_PT028_INF01_V8.pdf');

  }


  regresar(): void {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.route.navigate(['/home']);
  }

  ngOnDestroy(){
    this.loading = false;
  }


}

