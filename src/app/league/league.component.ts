import { Component, OnInit, ViewChild } from '@angular/core';
import { LeagueDataSource } from '../services/league-node/league.datasource';
import { LeagueService } from '../services/league-node/league.service';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(private service: LeagueService) { }

  pageTitle: string = 'Leagues';
  totalElements: number;
  dataSource: LeagueDataSource;
  displayedColumns : string[] = ['id', 'short-name', 'name'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new LeagueDataSource(this.service);
    this.dataSource.loadLeagues(0,10);
    this.totalElements = 62;
  }

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadPage())
        )
        .subscribe();
  }

  loadPage() {
    this.dataSource.loadLeagues(this.paginator.pageIndex, this.paginator.pageSize);
    this.totalElements = this.dataSource.totalElements;
  }

}
