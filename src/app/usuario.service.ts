import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
user:any=''

  async usuario(){
    const resp:any = await this.http.get('/api/usuario')
    .toPromise(); 
    if(resp.mensaje == 'no logueado') {
      this.user = undefined;
      return undefined;
    } else {
      this.user = resp;
      return this.user;
    }
  }
  constructor(public http: HttpClient) { }

  obtenerUsuario()  {
    return this.user;
  }
}
