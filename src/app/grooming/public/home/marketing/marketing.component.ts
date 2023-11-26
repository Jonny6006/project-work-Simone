import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {
  constructor(private readonly router: Router) {}
  products = [
    {
      id: '1000',
      name: 'Toelettatura',
      price: 65,
      category: 'Cat/Dog',
    },
    {
      id: '1001',
      name: 'Pulizia denti',
      price: 25,
      category: 'Dog',
    },
    {
      id: '1000',
      name: 'Cura unghie',
      price: 30,
      category: 'Cat',
    },
  ];

  goToCreateReservation() {
    this.router.navigate(['grooming','public','prenotazioni']);
  }
}
