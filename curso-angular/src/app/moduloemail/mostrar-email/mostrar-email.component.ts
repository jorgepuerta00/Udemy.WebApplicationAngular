import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: ` 
              
              <div *ngIf="emailContacto">
                <h4>{{title}}</h4>
                <strong>Email de Contacto:</strong> {{emailContacto}}
                <hr>
                <button (click)="borrarEmail()">Eliminar LocalStorage</button>
              </div>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';
  emailContacto : string;

  ngDoCheck(){
    this.emailContacto=localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto=localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto=null;
  }

}
