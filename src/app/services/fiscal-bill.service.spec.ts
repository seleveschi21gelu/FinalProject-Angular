import { TestBed } from '@angular/core/testing';

import { FiscalBillService } from './fiscal-bill.service';

describe('FiscalBillService', () => {
  let service: FiscalBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiscalBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
