import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { LeagueNodeService } from '../services/league-node/league-node.service';
import { SearchLeagueNodeIn } from '../models/league/search-league-node-in.model';
import { LeagueNode } from '../models/league/league-node.model';
import { ShowNodeDetailsComponent } from './show-node-details/show-node-details.component';

@Component({
  selector: 'app-league-node',
  templateUrl: './league-node.component.html',
  styleUrls: ['./league-node.component.css']
})
export class LeagueNodeComponent implements OnInit {

  constructor(private service: LeagueNodeService, private dialog: MatDialog) { }

  pageTitle : string = 'League Nodes';
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'nodeName', 'options'];
  searchLeagueNodeIn: SearchLeagueNodeIn;

  ngOnInit() {
    this.searchLeagueNodeIn = new SearchLeagueNodeIn();
    this.searchLeagueNodeIn.countryShortName = "ROU";
    this.service.searchLeagueNodes(this.searchLeagueNodeIn).subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<LeagueNode>(data);
    });
  }

  showDetails(input: LeagueNode) {
    console.log("button clicked by " + input);

    this.dialog.open(ShowNodeDetailsComponent, {
      data: input
    });

  }

}
