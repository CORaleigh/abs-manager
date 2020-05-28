import { TestBed } from '@angular/core/testing';

import { ConfirmedFormGroupsService } from './confirmed-form-groups.service';

describe('ConfirmedFormGroupsService', () => {
  let service: ConfirmedFormGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmedFormGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
