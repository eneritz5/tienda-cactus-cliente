import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:object = {
    email: '',
    nombre: '',
    password:''
  }
  constructor(private http:HttpClient, private route: Router) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    let user:object = await this.http.post('/api/login', this.user)
    .toPromise()
    this.refresh()
    this.route.navigate(['/tienda'])
  }

  refresh(): void {
    window.location.reload();
  }

}
