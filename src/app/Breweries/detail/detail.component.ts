import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breweries } from '../models/breweries.model';
import { BreweriesApiService } from '../services/breweries-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  id: string = '';
  brewery?: Breweries;

  constructor(
    private route: ActivatedRoute,
    private apiService: BreweriesApiService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getBreweriesByID();
    });
  }

  getBreweriesByID() {
    this.apiService.getBreweriesByID(this.id).subscribe((data: Breweries) => {
      this.brewery = data;
    });
  }
}
