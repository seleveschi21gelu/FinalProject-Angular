import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalBillComponent } from './fiscal-bill.component';

describe('FiscalBillComponent', () => {
  let component: FiscalBillComponent;
  let fixture: ComponentFixture<FiscalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
