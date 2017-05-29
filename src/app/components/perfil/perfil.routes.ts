import { Routes } from '@angular/router';
import { MiPerfilComponent } from "./mi-perfil.component";
import { PerfilInformacionComponent } from "./perfil-informacion.component";
import { EventosFormComponent } from "./eventos-form/eventos-form.component";
import { EventosCreadosComponent } from "./eventos-creados.component";
import { EventosNoCreadosComponent } from "./eventos-no-creados.component";
import { PuntuacionHechaComponent } from "./puntuacion-hecha.component";
import { PuntuacionRecibidaComponent } from "./puntuacion-recibida.component";
import { FORMS_ROUTES } from "../perfil/eventos-form/eventos.routes";

export const PERFIL_ROUTES: Routes = [
  { path: 'mi-perfil', component: MiPerfilComponent },
  { path: 'perfil-informacion', component: PerfilInformacionComponent },
  { path: 'evento-form', component: EventosFormComponent, children: FORMS_ROUTES},
  { path: 'eventos-creados', component: EventosCreadosComponent },
  { path: 'eventos-no-creados', component: EventosNoCreadosComponent },
  { path: 'puntuacion-hecha', component: PuntuacionHechaComponent },
  { path: 'puntuacion-recibida', component: PuntuacionRecibidaComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'mi-perfil' }
];
