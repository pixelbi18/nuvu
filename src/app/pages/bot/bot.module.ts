import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotPageRoutingModule } from './bot-routing.module';

import { BotPage } from './bot.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CabeceraModule } from 'src/app/shared/cabecera/cabecera.module';
import { PieModule } from 'src/app/shared/pie/pie.module';

//import { CabeceraComponent} from '../../shared/cabecera/cabecera.component';
//import { PieComponent} from '../../shared/pie/pie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotPageRoutingModule,
    PdfViewerModule,
    CabeceraModule,
    PieModule
  ],
  declarations: [BotPage,
    //CabeceraComponent,
    //PieComponent
  ],
  providers: [
  ]
})
export class BotPageModule {}
