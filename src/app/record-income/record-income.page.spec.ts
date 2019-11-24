import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordIncomePage } from './record-income.page';

describe('RecordIncomePage', () => {
  let component: RecordIncomePage;
  let fixture: ComponentFixture<RecordIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordIncomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
