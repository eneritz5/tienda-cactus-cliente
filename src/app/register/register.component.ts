import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: object = {
    name: '',
    email: '',
    password: ''
  }

  constructor(public http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  async registrarse() {
    let user: object = await this.http.post('/api/register', this.user)
    .toPromise();
    console.log(this.user);
    this.route.navigate(['/login'])
  }

}
