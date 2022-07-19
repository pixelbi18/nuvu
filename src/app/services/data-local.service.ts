import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  token: any;

  constructor( //private storage: Storage,
               public  toastController: ToastController,
               private storage: Storage, ) {

      this.storage.create();
  }



  guardarToken(token: any){
    this.token = token;
    this.storage.set('tokenANSV', this.token );
  }

  async leerToken(){
    this.token = this.storage.get('tokenANSV');
    return await this.storage.get('tokenANSV');
  }

}
