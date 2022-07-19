import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursoPageRoutingModule } from './recurso-routing.module';

import { RecursoPage } from './recurso.page';

import { SafePipe } from 'src/app/pipes/safe.pipe';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursoPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [RecursoPage, SafePipe],
  providers: [
    ScreenOrientation,
  ]
})
export class RecursoPageModule {}
