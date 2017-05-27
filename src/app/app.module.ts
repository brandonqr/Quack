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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LoginModalFormComponent,
    PerfilComponent,
    ColumnaNavegacionComponent
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
