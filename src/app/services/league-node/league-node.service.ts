import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchLeagueNodeIn } from '../../models/league/search-league-node-in.model';
import { Observable } from 'rxjs';
import { LeagueNode } from '../../models/league/league-node.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueNodeService {

  constructor(private http : HttpClient) { }

  readonly basePath = "http://localhost:8080/api/nodes";

  searchLeagueNodes(input: SearchLeagueNodeIn):Observable<LeagueNode[]> {
    return this.http.post<LeagueNode[]>(this.basePath + "/search", input);
  }
}
