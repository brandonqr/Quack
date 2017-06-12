import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Usuario } from '../interfaces/usuario.interface';
import { Http, Headers }  from "@angular/http";

@Injectable()
export class RegistroLoginService {


private usuarioUrl:string="http://localhost:3000/api/v1/users";
public perfil;
public token;
  profile:any={
    _id:"",
    nickname:"",
    token:""

  }
  usuario:any;

  public login(usuario:any){
    let body = JSON.stringify( usuario );
    let headers = new Headers({
       'Content-Type' : 'application/json'
     });
   let url=`${ this.usuarioUrl }/login`
   return this.http.post( url, body, { headers } )
              .map(res =>{
                //forzar a actualizar la pagina
                return res.json()

  });
  }
  getPerfil(){
    let perfil= JSON.parse(localStorage.getItem('perfil'));
    this.perfil=(perfil!="undefined")?perfil:null;
  }
  getToken(){
    let token= JSON.parse(localStorage.getItem('token'));
    this.token=(token!="undefined")?token:null;
  }



  public estaLogeado(): boolean {
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

public logout(): void {
  // Remove tokens and expiry time from localStorage
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_at');
  localStorage.removeItem('perfil');
  // Go back to the home route
  window.location.href = 'http://localhost:4200/';
//  this.router.navigate(['home']);
//  window.location.href = 'http://localhost:4200/home';
}

  constructor( private http:Http, private router:Router) { }

}
