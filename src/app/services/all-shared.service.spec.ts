import { TestBed } from '@angular/core/testing';

import { AllSharedService } from './all-shared.service';

describe('AllSharedService', () => {
  let service: AllSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
