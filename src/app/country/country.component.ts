import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material';
import { CountryService } from '../services/country/country.service';


import { tap } from 'rxjs/operators';
import { CountryDataSource } from '../services/country/country.datasource';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private service : CountryService) { }

  pageTitle : string = 'Countries';
  totalElements : number;
  dataSource : CountryDataSource;
  displayedColumns : string[] = ['ID', 'Country Name', 'Country Short Name'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new CountryDataSource(this.service);
    this.dataSource.loadCountries(0,10);
    this.totalElements = 230;
  }

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadPage())
        )
        .subscribe();
  }

  loadPage() {
    this.dataSource.loadCountries(this.paginator.pageIndex, this.paginator.pageSize);
    this.totalElements = this.dataSource.totalElements;
  }

}
