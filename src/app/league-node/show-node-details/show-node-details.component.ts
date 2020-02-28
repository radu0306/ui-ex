import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LeagueNode } from 'src/app/models/league/league-node.model';

@Component({
  selector: 'app-show-node-details',
  templateUrl: './show-node-details.component.html',
  styleUrls: ['./show-node-details.component.css']
})
export class ShowNodeDetailsComponent implements OnInit {

  currentLeagueNode: LeagueNode;

  constructor(public dialogRef: MatDialogRef<ShowNodeDetailsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.currentLeagueNode = data;
    }

  ngOnInit() {
  }

}
