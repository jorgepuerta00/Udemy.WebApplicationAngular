import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'Ng Zoo';
  emailContacto : string;

  ngDoCheck(){
    //console.log("Se ejecutó doCheck en AppComponent.");
    this.emailContacto=localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto=localStorage.getItem('emailContacto');
    //console.log(this.emailContacto);
  }

  BorrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto=null;
  }
}
