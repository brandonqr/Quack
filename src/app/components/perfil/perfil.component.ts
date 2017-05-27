import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
user_id:any;
  constructor(private aRoute:ActivatedRoute) {

    this.aRoute.params.subscribe(params=>{
      this.user_id=params;
      console.log(this.user_id)
    })
  }

  ngOnInit() {
  }

}
