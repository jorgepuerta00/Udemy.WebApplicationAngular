import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.rounting';

// Modulos Nuevos
import { ModuloEmailModule } from './moduloemail/components/moduloemail.module';
import { AdminModule } from './admin/admin.module';

// Componentes Nuevos
import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './components/Simple-Tiny/simple-tiny.component';
import { TiendaComponent } from './components/Tienda/tienda.component';
import { ParquesComponent } from './components/Parques/parques.component';
import { AnimalsComponent } from './components/Animals/Animals.component';
import { ContactComponent } from './components/Contact/contact.component';
import { homeComponent } from './components/Home/home.component';
import { KeepersComponent } from './components/Keepers/keepers.component';

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
    ModuloEmailModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
