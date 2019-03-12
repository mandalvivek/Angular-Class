import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoProductsComponent } from './fo-products.component';

describe('FoProductsComponent', () => {
  let component: FoProductsComponent;
  let fixture: ComponentFixture<FoProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
