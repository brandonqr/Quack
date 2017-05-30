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
usuario:Usuario={
  nickname : "",
  nombre : "",
  email : "",
  sexo : "",
  localidad : "",
  socialId : "",
  imagen : "",
  puntuacion: 0,
  descripcion:"",
  fecha_nacimiento:this.date,
  nCambioNick:0,
  contrasenya:""

}
  constructor(private aRoute:ActivatedRoute, private uService:UsuarioService) {
    this.aRoute.params.subscribe(params=>{
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      this.existeSocialIdEnDb()
    })
  }

  ngOnInit() {
  }
  existeSocialIdEnDb(){
    //
    //if socialID existe obtenerUsuario, sino, crearlo
    this.uService.obtenerUsuarioBySocialId(this.usuario.socialId).subscribe(
      data=>{
        if(data.length>0){
          this.usuario=data[0];
        }
        else{
          this.uService.crearUsuario(this.usuario).subscribe();
        }
      }
    );
  }


}
