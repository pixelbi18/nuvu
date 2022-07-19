import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertController, IonicModule } from '@ionic/angular';

import { PqrsdRegistroPageRoutingModule } from './pqrsd-registro-routing.module';

import { PqrsdRegistroPage } from './pqrsd-registro.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CabeceraModule } from 'src/app/shared/cabecera/cabecera.module';
import { PieModule } from 'src/app/shared/pie/pie.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PqrsdRegistroPageRoutingModule,
    PdfViewerModule,
    CabeceraModule,
    PieModule,
  ],
  providers: [
    AlertController, //Esta es la línea importante.
  ],
  declarations: [PqrsdRegistroPage]
})
export class PqrsdRegistroPageModule {}
