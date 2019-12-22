import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeLookupComponent } from './attribute-lookup.component';

describe('AttributeLookupComponent', () => {
  let component: AttributeLookupComponent;
  let fixture: ComponentFixture<AttributeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
