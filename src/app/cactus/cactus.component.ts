import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../tienda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.component.html',
  styleUrls: ['./cactus.component.css']
})
export class CactusComponent implements OnInit {
  _id: string;
  producto: any = '';
  constructor(public route: ActivatedRoute, public tiendaService: TiendaService) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this._id = params.id;
      this.producto = await this.tiendaService.irACactus(this._id);
      console.log(this.producto)
    })

  }

  anyadirCesta() {
    console.log('añadido a la cesta')
    this.snackbarFuncion();
  }

  snackbarFuncion() {
    var x = document.getElementById("snackbar-two");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
  }
  
  async anyadirProducto(producto) {
    await this.tiendaService.anyadirProducto(producto);
  }


}
