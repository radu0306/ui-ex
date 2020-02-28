import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchClubIn } from 'src/app/models/club/search-club-in.model';
import { Observable } from 'rxjs';
import { SearchClubs } from 'src/app/models/club/search-clubs.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) { }

  readonly basePath = "http://localhost:8080/api/clubs";

  searchClubs(input: SearchClubIn): Observable<SearchClubs> {
    return this.http.post<SearchClubs>(this.basePath + '/search', input);
  }
}
