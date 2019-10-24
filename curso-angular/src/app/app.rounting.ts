import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes
import { TiendaComponent } from './components/Tienda/tienda.component';
import { AnimalsComponent } from './components/Animals/Animals.component';
import { ContactComponent } from './components/Contact/contact.component';
import { homeComponent } from './components/Home/home.component';
import { KeepersComponent } from './components/Keepers/keepers.component';

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