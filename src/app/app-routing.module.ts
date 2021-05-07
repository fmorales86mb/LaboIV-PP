import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './modules/auth/guards/authenticate.guard';
import { AltasRepartidorComponent } from './pages/altas-repartidor/altas-repartidor.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { RepartidorComponent } from './pages/repartidor/repartidor.component';

const routes: Routes = [
  {path:"", component:BienvenidaComponent, pathMatch:"full"},
  {path:"altas-repartidor", component:AltasRepartidorComponent, canActivate:[AuthenticateGuard]},
  {path:"lista-repartidor", component:RepartidorComponent, canActivate:[AuthenticateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
