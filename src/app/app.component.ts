import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    public router: Router,
    private screenOrientation: ScreenOrientation
  ) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);  //TODO: QUITAR ESTO
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');  // TODO: CAMBIAR A SPLASH
      // SplashScreen.hide();
    });
  }


}

// D:\PIXELBI\IONIC\Actualizar\estadistica-sic\android\app\build\outputs\apk\debug
