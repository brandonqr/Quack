import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

declare let jQuery:any;
declare let $:any;
@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styles: []
})
export class LoginModalFormComponent implements OnInit {
  profile:any;
  public abrirModal(){
    console.log("click en modal")
        $("#modalLogin").modal();

  }

  constructor(public auth: AuthService) {
    auth.handleAuthentication();

  }
  ngOnInit() {
    this.profile=JSON.parse(localStorage.getItem("profile"));
/*
      if (this.auth.userProfile) {
       this.profile = this.auth.userProfile;
     } else {
       this.auth.getProfile((err, profile) => {
         this.profile = profile;
       });

   }*/

  }



}
