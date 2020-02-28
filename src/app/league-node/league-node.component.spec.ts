import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueNodeComponent } from './league-node.component';

describe('LeagueNodeComponent', () => {
  let component: LeagueNodeComponent;
  let fixture: ComponentFixture<LeagueNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
