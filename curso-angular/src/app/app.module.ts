import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.rounting';

import { ModuloEmailModule } from './moduloemail/moduloemail.module'

import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './Simple-Tiny/simple-tiny.component';

import { TiendaComponent } from './Tienda/tienda.component';
import { ParquesComponent } from './Parques/parques.component';
import { AnimalsComponent } from './Animals/Animals.component';
import { ContactComponent } from './Contact/contact.component';
import { homeComponent } from './Home/home.component';
import { KeepersComponent } from './Keepers/keepers.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    homeComponent,
    KeepersComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
