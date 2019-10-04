import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

  ngOnInit(){
    console.log("Animals.Component Cargado!!.");
  }
}
