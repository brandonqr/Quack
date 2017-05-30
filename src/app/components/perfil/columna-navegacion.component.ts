import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columna-navegacion',
  templateUrl: './columna-navegacion.component.html',
  styles: []
})
export class ColumnaNavegacionComponent implements OnInit {
@Input() usuario;
constructor() {
 }

  ngOnInit() {

  }


}
