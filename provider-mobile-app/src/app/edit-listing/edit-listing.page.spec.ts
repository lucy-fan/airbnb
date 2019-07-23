import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingPage } from './edit-listing.page';

describe('EditListingPage', () => {
  let component: EditListingPage;
  let fixture: ComponentFixture<EditListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
