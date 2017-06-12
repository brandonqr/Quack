import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";
import { Usuario} from "../interfaces/usuario.interface";
import 'rxjs/add/operator/map'

@Injectable()
export class UsuarioService {
  date = new Date().toLocaleDateString();
  perfil:any
  private usuarioUrl:string="http://localhost:3000/api/v1/users";

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

    getUsuariobyId(id:string){
  let url=`${ this.usuarioUrl}/${ id }`
  return this.http.get(url)
              .map( res => {
                  return res.json()
              })

    }




}
