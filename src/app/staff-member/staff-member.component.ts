import { Component, OnInit } from '@angular/core';
import { League } from '../models/league/league.model';
import { LeagueService } from '../services/league-node/league.service';
import { SearchLeagueIn } from '../models/league/search-league-in.model';
import { ClubService } from '../services/club/club.service';
import { SearchClubIn } from '../models/club/search-club-in.model';
import { Club } from '../models/club/club.model';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent implements OnInit {

  pageTitle: string = 'Staff Members';
  leaguesList: Array<League>;
  clubsList: Array<Club>;

  constructor(private leagueService: LeagueService, private clubService: ClubService) { }

  ngOnInit() {
    let searchLeaguesIn = new SearchLeagueIn();
    searchLeaguesIn.nrOfResultsPerPage = 1000;
    this.leagueService.searchLeagues(searchLeaguesIn).subscribe(data => {
      this.leaguesList = data["leagues"];
    });
  }

  onLeagueChange(selectedId: number){
    let searchClubsIn = new SearchClubIn();
    searchClubsIn.leagueId = selectedId;
    this.clubService.searchClubs(searchClubsIn).subscribe(data => {
      this.clubsList = data["clubs"];
    })
  }

}
