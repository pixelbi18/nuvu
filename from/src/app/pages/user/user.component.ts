import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserRegisterRetornoInterface } from '../../interface/user-register-retorno.interface';
import { CardGetRetornoInterfaceData, CardGetRetornoInterface } from '../../interface/card-get-retorno.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  firtname: string;
  lastname: string;
  email: string;
  password: string;
  users_id: number;

  card_id: number = 0;
  own: string;
  cvv: string;
  expiration: string;
  card_number: string;
  franchise: string;

  userRegisterRetornoInterface: UserRegisterRetornoInterface = {}
  cardGetRetornoInterface: CardGetRetornoInterface = {}
  fieldArray: CardGetRetornoInterfaceData = []
  token = localStorage.getItem('auth_token');
  public maskExp = [/[1-9]/, /\d/, '/', /\d/, /\d/]
  public maskCvv = [/[1-9]/, /\d/, /\d/]
  public maskCardNumber = [/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]

  constructor(private http: HttpClient, private router: Router) {

    this.limpiarCard()



    const email = localStorage.getItem('email');

    const datos = {
      "token": this.token,
      "email": email
    }
    this.http.post('http://127.0.0.1:3333/user/getBy', datos)
      .subscribe(resp => {
        this.userRegisterRetornoInterface = resp
        this.firtname = this.userRegisterRetornoInterface.data.firt_name
        this.lastname = this.userRegisterRetornoInterface.data.last_name
        this.email = this.userRegisterRetornoInterface.data.email
        this.password = this.userRegisterRetornoInterface.data.password
        this.users_id = this.userRegisterRetornoInterface.data.id

        //traer tarjetas de creditos
        const card = {
          "token": this.token,
          "users_id": this.users_id
        }

        this.http.post('http://127.0.0.1:3333/card/getByUserId', card)
          .subscribe(resp => {
            this.cardGetRetornoInterface = resp
            for (let prop in this.cardGetRetornoInterface.data) {
              console.log(prop);
            }
            this.fieldArray = this.cardGetRetornoInterface.data
            //console.log(this.fieldArray)
          });
      });
  }

  ngOnInit(): void {
  }

  public irEditar(field) {
    this.card_id = field.id
    this.own = field.own
    this.cvv = field.cvv
    this.expiration = field.expiration
    this.card_number = field.card_number
    this.franchise = field.franchise

  }

  public registrar() {
    //actualizar datos persona
    const datos = {
      "token": this.token,
      "firt_name": this.firtname,
      "last_name": this.lastname,
      "id": this.users_id
    }
    //console.log(datos);
    this.http.post('http://127.0.0.1:3333/user/actualizar', datos)
      .subscribe(resp => {
        this.userRegisterRetornoInterface = resp;
        if (this.userRegisterRetornoInterface.valid == true) {
          console.log(resp)
        } else {
          console.log("No actualizado la persona")
        }
      });
    //validar si es una nueva tarjeta
    const card = {
      "token": this.token,
      'own': this.own,
      'cvv': this.cvv,
      'expiration': this.expiration,
      'card_number': this.card_number,
      'franchise': this.franchise,
      'id': this.card_id,
      'users_id': this.users_id
    }
    console.log(card);
    if (this.card_id == 0) {//insertar
      this.http.post('http://127.0.0.1:3333/card/registro', card)
        .subscribe(resp => {
          this.cardGetRetornoInterface = resp;
          if (this.cardGetRetornoInterface.valid == true) {
            console.log(resp)
          } else {
            console.log("No inserta la tarjeta")
          }
        });
    } else {//actualizar
      this.http.post('http://127.0.0.1:3333/card/actualizar', card)
        .subscribe(resp => {
          this.cardGetRetornoInterface = resp;
          if (this.cardGetRetornoInterface.valid == true) {
            console.log(resp)
          } else {
            console.log("No actualizado la tarjeta")
          }
        });
    }
  }

  limpiarCard() {
    this.card_id = 0
    this.own = null
    this.cvv = null
    this.expiration = null
    this.card_number = null
    this.franchise = null
  }


}
