import { Routes } from '@angular/router';
import {CompraFormComponent} from "./compra-form.component";
import {QuedadaFormComponent} from "./quedada-form.component";
import {ServicioFormComponent} from "./servicio-form.component";
import {OtrosFormComponent} from "./otros-form.component";

export const FORMS_ROUTES: Routes = [
  { path: 'quedada-form', component: QuedadaFormComponent },
  { path: 'compra-form', component: CompraFormComponent },
  { path: 'servicio-form', component: ServicioFormComponent },
  { path: 'otros-form', component: OtrosFormComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'quedada-form' }
];
