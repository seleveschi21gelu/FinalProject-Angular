import { TestBed } from '@angular/core/testing';

import { FlatblockService } from './flatblock.service';

describe('FlatblockService', () => {
  let service: FlatblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
