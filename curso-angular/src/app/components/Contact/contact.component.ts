import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  emailContacto : string;

  ngOnInit(){
    console.log("Contact.Component Cargado!!.");
  }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);    
  }
}
