import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {
  marcadores:Marcador[]=[];
  nuevoMarcador:Marcador;
  constructor() {
    if(localStorage.getItem('marcadores')){
      this.nuevoMarcador=JSON.parse(localStorage.getItem('marcadores'));
    }
    else{
    this.nuevoMarcador={
      lat:41.9802474,
      lng:2.8202653,
      draggable:true,
      titulo: "Iglesia de Coronado"
    }
    }
    this.marcadores.push(this.nuevoMarcador);
   }

   guardarMarcadores(){
     localStorage.setItem('marcadores', JSON.stringify( this.marcadores ))
   }
   cargarMarcadores(){
     if(localStorage.getItem('marcadores')){
       this.marcadores=JSON.parse( localStorage.getItem('marcadores'))
     }
 }
 }
