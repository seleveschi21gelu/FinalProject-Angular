import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalBillViewComponent } from './fiscal-bill-view.component';

describe('FiscalBillViewComponent', () => {
  let component: FiscalBillViewComponent;
  let fixture: ComponentFixture<FiscalBillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalBillViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalBillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
