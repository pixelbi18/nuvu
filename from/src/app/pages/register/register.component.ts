import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserRegisterRetornoInterface } from '../../interface/user-register-retorno.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firtname: string;
  lastname: string;
  email: string;
  password: string;
  userRegisterRetornoInterface: UserRegisterRetornoInterface = {};
  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  registrar() {
    if (this.email != undefined
      && this.password != undefined
      && this.firtname != undefined) {
      const datos = {
        "firtname": this.firtname,
        "lastname": this.lastname,
        "email": this.email,
        "password": this.password
      }
      this.http.post('http://127.0.0.1:3333/user/register', datos)
        .subscribe(resp => {
          this.userRegisterRetornoInterface = resp;
          if(this.userRegisterRetornoInterface.valid == true){
            localStorage.setItem('auth_token', this.userRegisterRetornoInterface.access_token.token);
            localStorage.setItem('email', this.userRegisterRetornoInterface.data.email);
            this.router.navigate(['user']);            
          }else{
            this.router.navigate(['register']); 
          }
        });
    }
  }

}
