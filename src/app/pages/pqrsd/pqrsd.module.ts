import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PqrsdPageRoutingModule } from './pqrsd-routing.module';

import { PqrsdPage } from './pqrsd.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//import { CabeceraComponent} from '../../shared/cabecera/cabecera.component';
//import { PieComponent} from '../../shared/pie/pie.component';
import { CabeceraModule } from 'src/app/shared/cabecera/cabecera.module';
import { PieModule } from 'src/app/shared/pie/pie.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PqrsdPageRoutingModule,
    PdfViewerModule,
    CabeceraModule,
    PieModule,
  ],
  declarations: [PqrsdPage,
    //CabeceraComponent,
    //PieComponent
  ],
  providers: [
  ]
})
export class PqrsdPageModule {}
