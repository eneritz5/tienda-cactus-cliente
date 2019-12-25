import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  user:object;
  constructor(private http: HttpClient, private route: Router) { }

  async logout(){
    this.user = await this.http.get('/api/logout')
    .toPromise();
    this.route.navigate(['/hastapronto'])
  }
}
