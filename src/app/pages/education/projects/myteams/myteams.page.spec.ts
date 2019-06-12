import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamsPage } from './myteams.page';

describe('MyteamsPage', () => {
  let component: MyteamsPage;
  let fixture: ComponentFixture<MyteamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
