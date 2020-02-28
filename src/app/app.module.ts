import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import {HttpClientModule} from '@angular/common/http';

import { CountryComponent } from './country/country.component';
import { CountryService } from 'src/app/services/country/country.service';
import { LeagueNodeComponent } from './league-node/league-node.component';
import { LeagueNodeService } from './services/league-node/league-node.service';
import { ShowNodeDetailsComponent } from './league-node/show-node-details/show-node-details.component';
import { LeagueComponent } from './league/league.component';
import { ShowLeagueComponent } from './league/show-league/show-league.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { LeagueService } from './services/league-node/league.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    LeagueNodeComponent,
    ShowNodeDetailsComponent,
    LeagueComponent,
    ShowLeagueComponent,
    StaffMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    
    HttpClientModule
  ],
  providers: [CountryService, LeagueNodeService, LeagueService],
  bootstrap: [AppComponent],
  entryComponents: [ShowNodeDetailsComponent]
})
export class AppModule { }
