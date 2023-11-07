import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Breweries, IBreweries } from '../models/breweries.model';

@Injectable({
  providedIn: 'root',
})
export class BreweriesApiService {
  constructor(private http: HttpClient) {}

  getBreweries(page: string, per_page: string): Observable<Breweries[]> {
    return this.http
      .get(
        `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${per_page}`
      )
      .pipe(
        map((res: any) => {
          const breweries: Breweries[] = [];
          res.map((data: IBreweries) => {
            breweries.push(new Breweries(data));
          });
          return breweries;
        })
      );
  }

  getBreweriesBySearch(
    search: string,
    per_page: string
  ): Observable<Breweries[]> {
    return this.http
      .get(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${search}&per_page=${per_page}`
      )
      .pipe(
        map((res: any) => {
          const breweries: Breweries[] = [];
          res.map((data: IBreweries) => {
            breweries.push(new Breweries(data));
          });
          return breweries;
        })
      );
  }

  getBreweriesByID(id: string): Observable<Breweries> {
    return this.http
      .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
      .pipe(
        map((res: any) => {
          return new Breweries(res);
        })
      );
  }
}
