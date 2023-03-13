import { TestBed } from '@angular/core/testing';

import { DrillingopsService } from './drillingops.service';

describe('DrillingopsService', () => {
  let service: DrillingopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrillingopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
