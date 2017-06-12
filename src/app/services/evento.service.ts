import { Injectable } from '@angular/core';
import { Http, Headers }  from "@angular/http";
import { Evento} from "../interfaces/evento.interface";
import 'rxjs/add/operator/map'

@Injectable()
export class EventoService {

  evento:Evento={
    nombre : "",
    lugar : "",
    descripcion:"",
    fecha:"",
    imagen:"",
    autor : "",
    categoria:""
  };
    private eventoUrl:string="http://localhost:3000/evento";
  constructor(private http:Http) {

   }
   crearEvento( evento:Evento ){
     let body = JSON.stringify( evento );
     let headers = new Headers({
        'Content-Type' : 'application/json'
      });

    return this.http.post( this.eventoUrl, body, { headers } )
      .map( res => {
        return res.json();
      } );
     }

}
