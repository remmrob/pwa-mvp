import { TestBed } from '@angular/core/testing';

import { HandleUnrecovableStateService } from './handle-unrecovable-state.service';

describe('HandleUnrecovableStateService', () => {
  let service: HandleUnrecovableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUnrecovableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
