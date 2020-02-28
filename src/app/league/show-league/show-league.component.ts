import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from 'src/app/services/league-node/league.service';
import { SearchLeagues } from 'src/app/models/league/search-leagues-model';
import { SearchLeagueIn } from 'src/app/models/league/search-league-in.model';
import { League } from 'src/app/models/league/league.model';

@Component({
  selector: 'app-show-league',
  templateUrl: './show-league.component.html',
  styleUrls: ['./show-league.component.css']
})
export class ShowLeagueComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: LeagueService) { }

  pageTitle: string;
  league: League = new League();
  displayedColumns: string[] = ['id', 'short-name', 'name', 'options'];

  ngOnInit() {
    this.pageTitle = this.route.snapshot.paramMap.get('league');

    let searchLeaguesIn = new SearchLeagueIn();
    searchLeaguesIn.leagueName = this.pageTitle;
    this.service.searchLeagues(searchLeaguesIn).subscribe(data => {
      this.league = data["leagues"].find(e => e !== undefined);
    });
    
  }

}
