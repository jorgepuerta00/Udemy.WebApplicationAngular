import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Keepers',
  templateUrl: './keepers.component.html'
})
export class KeepersComponent implements OnInit {
  title = 'Keepers';

  ngOnInit(){
    console.log("Keepers.Component Cargado!!.");
  }
}
