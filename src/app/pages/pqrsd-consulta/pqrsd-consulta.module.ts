import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PqrsdConsultaPageRoutingModule } from './pqrsd-consulta-routing.module';

import { PqrsdConsultaPage } from './pqrsd-consulta.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PqrsdConsultaPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [PqrsdConsultaPage]
})
export class PqrsdConsultaPageModule {}
