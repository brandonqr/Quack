import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EventosCreadosComponent } from './components/perfil/eventos-creados.component';
import { EventosNoCreadosComponent } from './components/perfil/eventos-no-creados.component';
import { PuntuacionRecibidaComponent } from './components/perfil/puntuacion-recibida.component';
import { PuntuacionHechaComponent } from './components/perfil/puntuacion-hecha.component';
import { PerfilInformacionComponent } from './components/perfil/perfil-informacion.component';
import { QuedadaFormComponent } from './components/perfil/eventos-form/quedada-form.component';
import { ServicioFormComponent } from './components/perfil/eventos-form/servicio-form.component';
import { CompraFormComponent } from './components/perfil/eventos-form/compra-form.component';
import { EventosFormComponent } from './components/perfil/eventos-form/eventos-form.component';
import { OtrosFormComponent } from './components/perfil/eventos-form/otros-form.component';
import { UsuarioService } from "./services/usuario.service";

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
    EventosCreadosComponent,
    EventosNoCreadosComponent,
    PuntuacionRecibidaComponent,
    PuntuacionHechaComponent,
    PerfilInformacionComponent,
    QuedadaFormComponent,
    ServicioFormComponent,
    CompraFormComponent,
    EventosFormComponent,
    OtrosFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
