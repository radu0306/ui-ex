import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchLeagueIn } from 'src/app/models/league/search-league-in.model';
import { Observable } from 'rxjs';
import { SearchLeagues } from 'src/app/models/league/search-leagues-model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  readonly basePath = "http://localhost:8080/api/nodes/leagues";

  searchLeagues(input: SearchLeagueIn): Observable<SearchLeagues> {
    return this.http.post<SearchLeagues>(this.basePath + "/search", input);
  }
}
