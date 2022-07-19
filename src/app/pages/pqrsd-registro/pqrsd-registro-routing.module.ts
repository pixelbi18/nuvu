import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PqrsdRegistroPage } from './pqrsd-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PqrsdRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PqrsdRegistroPageRoutingModule {}
