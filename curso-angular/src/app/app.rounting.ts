import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes
import { TiendaComponent } from './Tienda/tienda.component';
import { AnimalsComponent } from './Animals/Animals.component';
import { ContactComponent } from './Contact/contact.component';
import { homeComponent } from './Home/home.component';
import { KeepersComponent } from './Keepers/keepers.component';

const appRoutes: Routes = [
    //{path:'',component: homeComponent},
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component: homeComponent},
    {path:'animals',component: AnimalsComponent},    
    {path:'keepers',component: KeepersComponent},
    {path:'tienda',component: TiendaComponent},
    {path:'contact',component: ContactComponent},
    {path:'**',component: homeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);