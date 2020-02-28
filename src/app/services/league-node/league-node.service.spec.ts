import { TestBed } from '@angular/core/testing';

import { LeagueNodeService } from './league-node.service';

describe('LeagueNodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeagueNodeService = TestBed.get(LeagueNodeService);
    expect(service).toBeTruthy();
  });
});
