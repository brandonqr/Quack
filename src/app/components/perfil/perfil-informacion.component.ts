import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../../interfaces/usuario.interface";
import { UsuarioService } from "../../services/usuario.service";
@Component({
  selector: 'app-perfil-informacion',
  templateUrl: './perfil-informacion.component.html',
  styles: []
})
export class PerfilInformacionComponent implements OnInit {
  usuario:Usuario;
    constructor(private uService:UsuarioService, private aRoute:ActivatedRoute) {
     }

    ngOnInit() {
    }
}
