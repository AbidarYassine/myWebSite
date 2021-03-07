import { TestBed } from '@angular/core/testing';

import { LocalStoragServiceService } from './local-storag-service.service';

describe('LocalStoragServiceService', () => {
  let service: LocalStoragServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoragServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
