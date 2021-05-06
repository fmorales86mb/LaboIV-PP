import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/services/auth.service';
import { UsersService } from './modules/auth/services/users.service';
import { SharedModule } from './modules/shared/shared.module';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { AltasRepartidorComponent } from './pages/altas-repartidor/altas-repartidor.component';
import { FormRepartidorComponent } from './components/form-repartidor/form-repartidor.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    BienvenidaComponent,
    AltasRepartidorComponent,
    FormRepartidorComponent,
    ListadoPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    AuthModule,
    SharedModule
  ],
  providers: [AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
