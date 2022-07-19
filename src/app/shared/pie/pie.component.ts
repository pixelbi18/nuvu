import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent implements OnInit {
  @Input() tipo: any;
  footer = [];
  mostrar = 1;
  constructor(public router: Router) {
    this.footer[1] = '/assets/img/footer.png';
    this.footer[2] = '/assets/img/footer.png';
    this.footer[3] = '/assets/img/footer.png';
  }

  ngOnInit() {}

  regresarMenu(): void {
    this.router.navigate(['/menu']);
  }

}
