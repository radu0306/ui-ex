import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Country } from '../../models/country/country.model';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { CountryService } from './country.service';

export class CountryDataSource implements DataSource<Country> {

    private countrySubject = new BehaviorSubject<Country[]>([]);

    totalElements: number;

    constructor(private service : CountryService){}

    loadCountries(pageNumber : number, nrOfResultsPerPage : number){
        console.log("In loadCountries => pageNumber :" + pageNumber);
        this.service.searchCountries(pageNumber, nrOfResultsPerPage)
            .subscribe(data => {
                console.log(data);
                this.countrySubject.next(data["countries"]);
                this.totalElements = data["totalElements"];
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<Country[]> {
        console.log("Connecting to database");
        return this.countrySubject.asObservable();
    }    
    
    disconnect(collectionViewer: CollectionViewer): void {
        console.log("Disconnecting from database");
        this.countrySubject.complete();
    }

    
}