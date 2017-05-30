import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";
import { Usuario} from "../interfaces/usuario.interface";
import 'rxjs/add/operator/map'

@Injectable()
export class UsuarioService {
  date = new Date().toLocaleDateString();
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
    fecha_nacimiento:this.date,
    nCambioNick:0,
    contrasenya:""

  }
  private usuarioUrl:string="http://localhost:3000/usuario";

  constructor(private http:Http) { }

  crearUsuario( usuario:Usuario ){
    let body = JSON.stringify( usuario );
    let headers = new Headers({
       'Content-Type' : 'application/json'
     });

   return this.http.post( this.usuarioUrl, body, { headers } )
     .map( res => {
       return res.json();
     } );
    }
  obtenerUsuarioBySocialId( socialId:string){
    let url=`${ this.usuarioUrl }/socialId/${ socialId }`
    return this.http.get(url)
                .map( res => res.json())
  }

  actualizarInformacionUsuario( usuario:Usuario){
    let body = JSON.stringify( usuario );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let url=`${ this.usuarioUrl }/${ usuario.socialId}`

    return this.http.put( url, body, { headers } )
      .map( res => {
        console.log("respuesta")
        console.log(res)
        return res.json();
      } );
  }




}
