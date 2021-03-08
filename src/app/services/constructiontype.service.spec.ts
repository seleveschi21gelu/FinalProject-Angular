import { TestBed } from '@angular/core/testing';

import { ConstructiontypeService } from './constructiontype.service';

describe('ConstructiontypeService', () => {
  let service: ConstructiontypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructiontypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
