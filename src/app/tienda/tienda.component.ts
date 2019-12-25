import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TiendaService } from '../tienda.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  datos:any;

  constructor(public tiendaService: TiendaService, public http: HttpClient, public router:Router) { }

  anyadirCesta() {
    console.log('añadido a la cesta')
    this.snackbarFuncion();
  }

  async anyadirProducto(producto) {
    await this.tiendaService.anyadirProducto(producto);
  }

  snackbarFuncion() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
  }

  async irACactus(producto){
    this.router.navigate(['/cactus/'+producto]);
  }


  async ngOnInit() {
    this.datos = await this.tiendaService.obtenerCactus();
  }

}
