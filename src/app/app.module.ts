import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CestaComponent } from './cesta/cesta.component';
import { TiendaComponent } from './tienda/tienda.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HastaprontoComponent } from './hastapronto/hastapronto.component';
import { CactusComponent } from './cactus/cactus.component';



@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    InicioComponent,
    CestaComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactoComponent,
    HastaprontoComponent,
    CactusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
