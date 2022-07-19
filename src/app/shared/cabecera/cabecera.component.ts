import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {
  @Input() tipo: any;
  banner = [];
  logo = [];
  animacion = [];
  constructor() {
    this.banner[1] = '/assets/img/banner.png';
    this.banner[2] = '/assets/img/banner.png';
    this.banner[3] = '/assets/img/banner.png';

    this.logo[1] = '/assets/img/logoEscuela.png';
    this.logo[2] = '/assets/img/prudencia.png';
    this.logo[3] = '/assets/img/pqrsd.png';

    this.animacion[1] = 'animate__animated animate__rubberBand  animate__infinite ';
    this.animacion[2] = 'animate__animated animate__rubberBand  animate__infinite ';
    this.animacion[3] = 'animate__animated animate__rubberBand  animate__infinite ';
  }

  ngOnInit() {

  }

}
