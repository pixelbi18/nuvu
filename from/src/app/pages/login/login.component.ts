import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginRetornoInterfaces } from '../../interface/user-login-retorno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  public error: { code: number, message: string } = null;
  userLoginRetornoInterfaces:UserLoginRetornoInterfaces={};

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('auth_token') !== null){
      this.router.navigate(['user']);
    }

  }

  public logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
  }

  public login() {
    if (this.email != undefined && this.password != undefined) {      
      const datos = {
        "email": this.email,
        "password": this.password
      }
      this.http.post('http://127.0.0.1:3333/auth/login', datos)
        .subscribe(resp => {
          this.userLoginRetornoInterfaces = resp;
          if(this.userLoginRetornoInterfaces.valid == true){
            console.log(this.userLoginRetornoInterfaces);
            this.router.navigate(['user']);
            localStorage.setItem('auth_token', this.userLoginRetornoInterfaces.access_token.token);
            localStorage.setItem('email', this.userLoginRetornoInterfaces.data.email);
          }else{
            this.logout();
          }
        });
    }

  }



}
