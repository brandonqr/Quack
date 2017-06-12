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
perfil:any;
  constructor(private uService:UsuarioService, private aRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.aRoute.parent.params.subscribe(data=>{
            this.uService.getUsuariobyId(data.id).subscribe(data=>{
              this.perfil=data;
            })
    })

  }

}
