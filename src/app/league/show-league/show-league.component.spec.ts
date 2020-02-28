import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeagueComponent } from './show-league.component';

describe('ShowLeagueComponent', () => {
  let component: ShowLeagueComponent;
  let fixture: ComponentFixture<ShowLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
