import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNodeDetailsComponent } from './show-node-details.component';

describe('ShowNodeDetailsComponent', () => {
  let component: ShowNodeDetailsComponent;
  let fixture: ComponentFixture<ShowNodeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNodeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
