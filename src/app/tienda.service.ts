import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  producto: object = {
    id:'',
    nombre: '',
    img:'',
    precio: '',
    descripcion:''
    }

  constructor(public http: HttpClient) { }
    
  async anyadirProducto(producto) {
  let cactusAnyadido = await this.http.post('/api/cesta', {"producto":producto},{headers:{"Content-Type": "application/json"}, responseType:"text"}).toPromise();
  console.log(producto)
  }
  
  async irACactus(producto){
    let datos: any = await this.http.post('api/cactus', {id:producto}).toPromise()
    return datos;
  }

  async obtenerCactus() {
    let datos: any = await this.http.get('api/tienda')
      .toPromise();
    console.log(datos);
    return datos;
  }
}
