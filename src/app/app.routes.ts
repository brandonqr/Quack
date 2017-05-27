import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { AuthGuardService } from "./services/auth-guard.service";

import { PERFIL_ROUTES } from "./components/perfil/perfil.routes";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
    { path: 'login/:id', component: LoginComponent },

  {
     path: 'perfil',
     component: PerfilComponent,
     canActivate:[ AuthGuardService ]
  },
  {
     path: 'perfil/:id',
     component: PerfilComponent,
     canActivate:[ AuthGuardService ],
     children: PERFIL_ROUTES
  },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
