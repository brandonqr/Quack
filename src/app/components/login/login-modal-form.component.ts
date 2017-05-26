import { Component, OnInit } from '@angular/core';
declare let jQuery:any;
declare let $:any;
@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styles: []
})
export class LoginModalFormComponent implements OnInit {
  public abrirModal(){
    console.log("click en modal")
        $("#modalLogin").modal();

  }
  constructor() { }

  ngOnInit() {
  }

}
