import { Component, NgModule,  NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from  "@angular/router"
import { Evento } from "../../../interfaces/evento.interface";
import { EventoService } from "../../../services/evento.service";
import { MapasService } from "../../../services/mapas.service";
import { Marcador } from "../../../interfaces/marcador.interface";
import { MapsAPILoader } from 'angular2-google-maps/core';
import { } from '@types/googlemaps';
declare let jQuery:any;
declare let $:any;
declare var google: any;
@Component({
  selector: 'app-quedada-form',
  templateUrl: './quedada-form.component.html',
  styles: []
})

export class QuedadaFormComponent implements OnInit {

  public searchControl: FormControl;
  @ViewChild("search")

  public searchElementRef: ElementRef;

  lat: number = 0;
  lng: number = 0;
  zoom:number=15;

  imagen : File;
  fecha : Date;
  autor: string;


  evento:Evento={
    nombre : "",
    lugar : "",
    descripcion:"",
    fecha:"",
    imagen:"",
    autor : "",
    categoria:""
  };
    forma:FormGroup;
  constructor(private aRoute:ActivatedRoute,
              private eService:EventoService,
              public mService:MapasService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone
             ) {



    this.forma=new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'descripcion': new FormControl('', Validators.required),
      'imagen': new FormControl(this.imagen, Validators.required),
      'fecha': new FormControl(this.fecha, Validators.required),
      'categoria': new FormControl(this.fecha, Validators.required)
    })

  this.forma.reset({
    nombre:"",
    descripcion:""
  })
}
  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();
    //set current position
   this.setCurrentPosition();
   this.mapsAPILoader.load().then(() => {
     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
       types: ["address"]
     });
     autocomplete.addListener("place_changed", () => {
       this.ngZone.run(() => {
         //get the place result
         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

         //verify result
         if (place.geometry === undefined || place.geometry === null) {
           return;
         }

         //set latitude, longitude and zoom
         this.lat = place.geometry.location.lat();
         this.lng = place.geometry.location.lng();

       });
     });
   });

  }
  private setCurrentPosition() {
   if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition((position) => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;

     });
   }
 }
  crearQuack(){
    console.log(this.forma.value)
    console.log(this.forma)
    console.log(this.imagen)
    console.log(this.autor)

    //llenar laos datos con datos ficctios, par asegurarnos que insertará a la bd
    this.evento.autor=this.autor;
    this.evento.nombre = "evento numero 1";
    this.evento.lugar = " Girona, Palau";
    this.evento.descripcion="esta es la descripcion dele evento";
    this.evento.fecha="25/02/1998";
    this.evento.imagen="blalabala.jpg";
    this.evento.categoria="lol"
    console.log("el de abajo es el evento")
    console.log(this.evento);
    this.eService.crearEvento(this.evento).subscribe();

  }

  getFiles(event){
      this.imagen = event.target.files[0]
      //cambiar el texto del input text por el nombre de la imagen
      $("#spanFile").toggleClass('.custom-file-control').text(this.imagen.name);
    }
    getDate(event){
      console.log(event.target.value)
    }

    //marcador mapas

    dragEndMarcador( marcador:Marcador, evento ){
      let lat= evento.coords.lat;
      let lng = evento.coords.lng;

      marcador.lat = lat;
      marcador.lng=lng;

      //actualizar posicion del marcador
      this.lat=lat;
      this.lng=lng;
    }
}
