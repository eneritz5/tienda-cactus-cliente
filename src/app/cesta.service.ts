import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  constructor(public http: HttpClient) { }
  producto:object = {
    _id:'',
    nombre: '',
    img:'',
    precio: ''
  }
    async obtenerCesta() {
      let cesta: any = await this.http.get('/api/cesta')
        .toPromise();
      console.log(cesta);
      return cesta;
  }

  async quitarDeLaCesta(_id){
    let cactusEliminado = await this.http.delete(`/api/cesta/${_id}`).toPromise();
    console.log(_id)
    return _id;
  }

}
