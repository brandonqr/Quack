import { Component, OnInit } from '@angular/core';
declare let jQuery:any;
declare let $:any;

@Component({
  selector: 'app-columna-navegacion',
  templateUrl: './columna-navegacion.component.html',
  styles: []
})
export class ColumnaNavegacionComponent implements OnInit {
profile:any;
  constructor() {


   }

  ngOnInit() {

    this.profile=JSON.parse(localStorage.getItem("profile"))

  }
  editableInput(username:string){
    //$("#inputNickname").val()//
  console.log(  $("#inputNickname").prop('readonly', false))

  }

}
