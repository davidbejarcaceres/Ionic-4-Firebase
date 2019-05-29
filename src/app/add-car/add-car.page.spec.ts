import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarPage } from './add-car.page';

describe('AddCarPage', () => {
  let component: AddCarPage;
  let fixture: ComponentFixture<AddCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
