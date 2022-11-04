import { TestBed } from '@angular/core/testing';

import { AletModalService } from './alet-modal.service';

describe('AletModalService', () => {
  let service: AletModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AletModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
