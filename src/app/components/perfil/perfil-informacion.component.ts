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
    actualizarInformacionUsuario(){
      this.uService.obtenerUsuarioBySocialId(this.usuario.socialId).subscribe(
        data=>{
          this.usuario=data[0];

        }
      );
      //datos para probar, hasta que el formulario esté validado y listo
      this.usuario.nickname="El PUTO AMOwwww"
      this.uService.actualizarInformacionUsuario(this.usuario).subscribe();
    }
}
