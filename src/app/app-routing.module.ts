import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { LeagueNodeComponent } from './league-node/league-node.component';
import { LeagueComponent } from './league/league.component';
import { ShowLeagueComponent } from './league/show-league/show-league.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';


const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'nodes', component: LeagueNodeComponent},
  { path: 'leagues', component: LeagueComponent},
  { path: 'league/:league', component: ShowLeagueComponent},
  { path: 'staff', component: StaffMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
