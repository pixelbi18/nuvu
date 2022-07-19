import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recurso',
    loadChildren: () => import('./pages/recurso/recurso.module').then( m => m.RecursoPageModule)
  },
  {
    path: 'bot',
    loadChildren: () => import('./pages/bot/bot.module').then( m => m.BotPageModule)
  },
  {
    path: 'pqrsd',
    loadChildren: () => import('./pages/pqrsd/pqrsd.module').then( m => m.PqrsdPageModule)
  },
  {
    path: 'pqrsd-registro',
    loadChildren: () => import('./pages/pqrsd-registro/pqrsd-registro.module').then( m => m.PqrsdRegistroPageModule)
  },
  {
    path: 'pqrsd-consulta',
    loadChildren: () => import('./pages/pqrsd-consulta/pqrsd-consulta.module').then( m => m.PqrsdConsultaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cabecera',
    loadChildren: () => import('./shared/cabecera/cabecera.module').then( m => m.CabeceraModule)
  },
  {
    path: 'pie',
    loadChildren: () => import('./shared/pie/pie.module').then( m => m.PieModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
