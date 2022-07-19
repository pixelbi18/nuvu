import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TruncatePipe } from '../../pipes/truncate.pipe';

//import { CabeceraComponent} from '../../shared/cabecera/cabecera.component';
//import { PieComponent} from '../../shared/pie/pie.component';
import { CabeceraModule } from 'src/app/shared/cabecera/cabecera.module';
import { PieModule } from 'src/app/shared/pie/pie.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CabeceraModule,
    PieModule
  ],
  declarations: [HomePage,
    //CabeceraComponent,
    //PieComponent,
    TruncatePipe]
})
export class HomePageModule {}
