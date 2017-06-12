import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Usuario } from "../../interfaces/usuario.interface";
import { RegistroLoginService } from "../../services/registro-login.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs/Rx'

declare let jQuery:any;
declare let $:any;
@Component({
  selector: 'app-login-modal-form',
  templateUrl: './login-modal-form.component.html',
  styles: []
})
export class LoginModalFormComponent implements OnInit {
  public errorMsg;
  public token;
  forma:FormGroup;
  perfil:any={
    _id:"",
    nickname:"",
    token:""

  }
  usuario:any={
    email: "",
    password:""
  };
  public abrirModal(){
        $("#modalLogin").modal();

  }

  constructor(private rlService:RegistroLoginService) {
    this.forma = new FormGroup({
      'email': new FormControl('',[
                                    Validators.required,
                                    Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")
                                  ]),
      'password': new FormControl('', Validators.required)
    })

  }
  ngOnInit() {
    this.perfil=this.rlService.getPerfil();
    this.token=this.rlService.getToken();
  }

  login(){
    this.rlService.login(this.forma.value).subscribe(
      res=>{
        //crear elemento usuario en el localstorage
        this.token=res.token;
        localStorage.setItem('perfil', JSON.stringify(res));
        localStorage.setItem('token', this.token);

      //  console.log(res);
        console.log(this.token);
      },
      err=>{
        this.errorMsg=err._body
      }
    )
  }
  cerrarSesion()
  {
    this.rlService.logout();
  }

}
