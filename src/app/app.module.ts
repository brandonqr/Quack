import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from "./app.routes";
import { LoginComponent } from './components/login/login.component';
import { LoginModalFormComponent } from './components/login/login-modal-form.component';

//services
import { AuthService}  from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";

import { PerfilComponent } from './components/perfil/perfil.component';
import { ColumnaNavegacionComponent } from './components/perfil/columna-navegacion.component';
import { MiPerfilComponent } from './components/perfil/mi-perfil.component';
import { EventoFormComponent } from './components/perfil/evento-form.component';
import { EventosCreadosComponent } from './components/perfil/eventos-creados.component';
import { EventosNoCreadosComponent } from './components/perfil/eventos-no-creados.component';
import { PuntuacionRecibidaComponent } from './components/perfil/puntuacion-recibida.component';
import { PuntuacionHechaComponent } from './components/perfil/puntuacion-hecha.component';
import { PerfilInformacionComponent } from './components/perfil/perfil-informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LoginModalFormComponent,
    PerfilComponent,
    ColumnaNavegacionComponent,
    MiPerfilComponent,
    EventoFormComponent,
    EventosCreadosComponent,
    EventosNoCreadosComponent,
    PuntuacionRecibidaComponent,
    PuntuacionHechaComponent,
    PerfilInformacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
