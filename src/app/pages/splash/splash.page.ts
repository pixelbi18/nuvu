import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  logoTitulo = '/assets/img/logoAnsv.png';
  logoEscuela = '/assets/img/logoEscuela.png';
  logoBot = '/assets/img/prudencia.png';
  logoPqrsd = '/assets/img/pqrsd.png';
  seguir  = 1;

  constructor(
    public  router: Router,
    // private screenOrientation: ScreenOrientation
    )
  {
      this.setPortrait();
      // this.screenOrientation.unlock();
      if ( this.seguir === 1) {
        setTimeout(() => {
          this.router.navigateByUrl('menu');
        }, 4000);
      }
  }

  ngOnInit() {

  }


  setPortrait(){
    // set to portrait
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  cargarHome(){
    setTimeout(() => {
      this.router.navigateByUrl('menu');  // TODO: MENU
    }, 2000);
  }

}
