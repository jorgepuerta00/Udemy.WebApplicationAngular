import { Component } from '@angular/core';

@Component({
  selector: 'main-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  title = 'Listado';
  numbers = new Array(10);
}