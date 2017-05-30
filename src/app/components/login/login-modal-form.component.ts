import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Usuario } from "../../interfaces/usuario.interface";

declare let jQuery:any;
declare let $:any;
@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styles: []
})
export class LoginModalFormComponent implements OnInit {
  profile:any;
  usuario:Usuario={
    nickname : "",
    nombre : "",
    email : "",
    sexo : "",
    localidad : "",
    socialId : "",
    imagen : "",
    puntuacion : 0,
    descripcion:"",
    fecha_nacimiento:new Date().toLocaleDateString(),
    nCambioNick:0,
    contrasenya:""

  }
  public abrirModal(){
        $("#modalLogin").modal();

  }

  constructor(public auth: AuthService) {
    auth.handleAuthentication();

  }
  ngOnInit() {
    this.profile=JSON.parse(localStorage.getItem("profile"));
    if(this.profile!=null){


      this.profile=JSON.parse(localStorage.getItem("profile"));
      this.usuario.email=this.profile.email;
      this.usuario.nombre=this.profile.name;
      this.usuario.imagen=this.profile.picture;
      this.usuario.socialId=this.profile.sub;
      this.usuario.nickname=this.profile.nickname;
      this.usuario.sexo=(this.profile.gender)?"Hombre":"Mujer";
      localStorage.setItem("usuario",JSON.stringify(this.usuario))
    }

  }



}
