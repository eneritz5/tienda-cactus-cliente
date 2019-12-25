import { Component } from '@angular/core';
import {TiendaService} from './tienda.service';
import {LogoutService} from './logout.service';
import {UsuarioService} from './usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cactus:any;
  user:any;

  constructor(public tiendaService:TiendaService, public logoutService:LogoutService, private usuarioService:UsuarioService){}

  async obtenerCactus(){
    this.cactus = await this.tiendaService.obtenerCactus();
  }

  async logout(){
    this.user = await this.logoutService.logout();
  }

  async ngOnInit(){
    this.user = await this.usuarioService.usuario();
    console.log('hola')
  }

}
