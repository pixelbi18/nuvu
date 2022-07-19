import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PqrsdPage } from './pqrsd.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: PqrsdPage,
    children: [
      {
        path: 'pqrsd-registro',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/pqrsd-registro/pqrsd-registro.module').then(m => m.PqrsdRegistroPageModule),
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'pqrsd-consulta',
        loadChildren: () => import('../../pages/pqrsd-consulta/pqrsd-consulta.module').then(m => m.PqrsdConsultaPageModule),
        pathMatch: 'full'
      },



    ]
  },
  {
    path: '',
    redirectTo: 'tabs/pqrsd-registro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PqrsdPageRoutingModule {}
