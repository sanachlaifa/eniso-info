import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeamsPage } from './all-teams.page';

describe('AllTeamsPage', () => {
  let component: AllTeamsPage;
  let fixture: ComponentFixture<AllTeamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTeamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
