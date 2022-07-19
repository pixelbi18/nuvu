import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PqrsdConsultaPage } from './pqrsd-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: PqrsdConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PqrsdConsultaPageRoutingModule {}
