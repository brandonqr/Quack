import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../interfaces/usuario.interface";
import { UsuarioService } from "../../services/usuario.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styles: []
})
export class MiPerfilComponent implements OnInit {
usuario:Usuario;
  constructor(private uService:UsuarioService, private aRoute:ActivatedRoute) {
    this.aRoute.parent.params.subscribe(
      params=>{
        this.uService.obtenerUsuarioBySocialId(params['id']).subscribe(
          data=>{
            this.usuario=data[0];
            
          }
        );
      }
    )




   }

  ngOnInit() {
  }

}
