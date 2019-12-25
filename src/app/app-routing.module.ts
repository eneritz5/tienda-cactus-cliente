import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TiendaComponent} from './tienda/tienda.component'
import {InicioComponent} from './inicio/inicio.component'
import {CestaComponent} from './cesta/cesta.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HastaprontoComponent } from './hastapronto/hastapronto.component'
import { CactusComponent } from './cactus/cactus.component';

const routes: Routes = [
{path: 'tienda', component:TiendaComponent},
{path: '', component:InicioComponent},
{path: 'cesta', component:CestaComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'about', component:AboutComponent},
{path: 'contacto', component:ContactoComponent},
{path: 'hastapronto', component:HastaprontoComponent},
{path:'cactus/:id',component: CactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
