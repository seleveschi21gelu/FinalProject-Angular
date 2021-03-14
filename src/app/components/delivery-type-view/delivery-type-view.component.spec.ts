import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTypeViewComponent } from './delivery-type-view.component';

describe('DeliveryTypeViewComponent', () => {
  let component: DeliveryTypeViewComponent;
  let fixture: ComponentFixture<DeliveryTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTypeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
