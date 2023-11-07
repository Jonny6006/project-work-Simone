import { Component } from '@angular/core';
import { Breweries,  } from '../models/breweries.model';
import { BreweriesApiService } from '../services/breweries-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  title = 'Breweries';
  breweries: Breweries[] = [];
  page: number = 1;
  per_page: number = 10;
  search: string = '';


 
  constructor(
    private apiService: BreweriesApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.search = params['search'];
      if (this.search) {
        this.getBreweriesBySearch();
      } else {
        this.getBreweries();
      }
    });
  }

  getBreweriesBySearch() {
    this.apiService
      .getBreweriesBySearch(this.search, String(this.per_page))
      .subscribe((data: Breweries[]) => {
        this.breweries = data;
      });
  }

  getBreweries() {
    this.apiService
      .getBreweries(String(this.page), String(this.per_page))
      .subscribe((data: Breweries[]) => {
        this.breweries = data;
      });
  }

  prevPage() {
    if (this.page === 1) return;
    this.page--;
    this.getBreweries();
  }

  nextPage() {
    if (this.page === 20) return;
    this.page++;
    this.getBreweries();
  }

  detail(id: string) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }

  searched() {
    this.router.navigate(['/list'], {
      queryParams: { search: this.search},
    });
  }
} 



