import { TestBed } from '@angular/core/testing';

import { BrewViewServiceService } from './brew-view-service.service';

describe('BrewViewServiceService', () => {
  let service: BrewViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
