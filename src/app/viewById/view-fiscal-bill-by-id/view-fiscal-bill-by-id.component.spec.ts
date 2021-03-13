import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFiscalBillByIdComponent } from './view-fiscal-bill-by-id.component';

describe('ViewFiscalBillByIdComponent', () => {
  let component: ViewFiscalBillByIdComponent;
  let fixture: ComponentFixture<ViewFiscalBillByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFiscalBillByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFiscalBillByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
