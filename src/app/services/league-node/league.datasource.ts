import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { League } from 'src/app/models/league/league.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchLeagueIn } from 'src/app/models/league/search-league-in.model';
import { LeagueService } from './league.service';

export class LeagueDataSource implements DataSource<League> {

    constructor(private service: LeagueService) {}

    private leagueSubject = new BehaviorSubject<League[]>([]);
    totalElements: number;

    loadLeagues(pageNumber : number, nrOfResultsPerPage : number) {
        let searchLeagueIn = new SearchLeagueIn();
        searchLeagueIn.pageNumber = pageNumber;
        searchLeagueIn.nrOfResultsPerPage = nrOfResultsPerPage;
        this.service.searchLeagues(searchLeagueIn).subscribe(data => {
            this.leagueSubject.next(data["leagues"]);
            this.totalElements = data["totalElements"];
        });
    }

    connect(collectionViewer: CollectionViewer): Observable<League[]> {
        return this.leagueSubject.asObservable();
    }    
    
    disconnect(collectionViewer: CollectionViewer): void {
        this.leagueSubject.complete();
    }

    
}