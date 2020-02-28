import { Club } from '../club/club.model';

export class League {
    leagueId: number;
    leagueName: string;
    leagueShortName: string;
    leagueNodeName: string;
    regionShortName: string;
    leagueClubs: Club[]

    constructor() {}
}