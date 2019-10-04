import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class homeComponent implements OnInit {
  title = 'Bienvenido a ngZoo';

  ngOnInit(){
    console.log("home.Component Cargado!!.");
  }
}
