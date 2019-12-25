import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{CestaService} from '../cesta.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  cesta:[]=[]
  precioTotal:number = 0;
  producto:object = {
    _id:'',
    nombre: '',
    img:'',
    precio: ''
  }
  total:number;

  constructor(public http: HttpClient, public cestaService:CestaService, private route: Router ) { }

  async ngOnInit() {
    this.cesta = await this.cestaService.obtenerCesta();
    this.precioTotal = this.cesta.reduce(function(total:any,actual:any){
      return total += actual.producto.precio;
      }, 0)
  }
  
  async pagar(){
    await this.http.delete('/api/cesta-pagar')
    .toPromise()
  }

  async quitarDeLaCesta(_id){
    await this.cestaService.quitarDeLaCesta(_id)
  }

  refresh(): void {
    window.location.reload();
}

}
