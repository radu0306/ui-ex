import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SearchCountries } from '../../models/country/search-countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) { }

  readonly basePath = "http://localhost:8080/api/countries";

  searchCountries(pageNumber : number, nrOfResultsPerPage : number) : Observable<SearchCountries> {
    return this.http.get<SearchCountries>(this.basePath, {params : new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('nrOfResultsPerPage', nrOfResultsPerPage.toString())
    });
  }
}
