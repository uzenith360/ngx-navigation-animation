import { TestBed } from '@angular/core/testing';

import { NavigateEventService } from './navigate-event.service';

describe('NavigateEventService', () => {
  let service: NavigateEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
