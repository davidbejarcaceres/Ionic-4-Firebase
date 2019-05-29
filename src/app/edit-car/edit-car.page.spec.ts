import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarPage } from './edit-car.page';

describe('EditCarPage', () => {
  let component: EditCarPage;
  let fixture: ComponentFixture<EditCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
