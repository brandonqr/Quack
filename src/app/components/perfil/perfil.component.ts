import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Usuario } from "../../interfaces/usuario.interface";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
date = new Date().toLocaleDateString();
profile:any;
user_id:any;
perfil:any;
  constructor(private aRoute:ActivatedRoute, private uService:UsuarioService) {
  }

  ngOnInit() {
    this.perfil=JSON.parse(localStorage.getItem("perfil"));
  }


}
