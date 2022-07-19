import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IonTabs, Platform } from '@ionic/angular';

declare global {
  interface Window {
      WebChat: any;
  }
}

window.WebChat = window.WebChat || {};

@Component({
  selector: 'app-pqrsd',
  templateUrl: './pqrsd.page.html',
  styleUrls: ['./pqrsd.page.scss'],
})
export class PqrsdPage implements OnInit{

  @ViewChild('botWindow', {static: true}) botWindowElement: ElementRef;

  @ViewChild('tabs') tabs: IonTabs;

  logoTitulo = '/assets/img/logoAnsv.png';

  resetStackTabs = ['inbox', 'tasks'];


  //url2 = 'https://ansv.maps.arcgis.com/apps/webappviewer/index.html?id=feb6a00fe5e44aa59138442a1f1764f6';

  constructor( private route: Router) {


  }


  ngOnInit() {

  }


  regresar(): void {
    this.route.navigate(['/home']);
  }




}

