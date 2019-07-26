import { TestBed } from '@angular/core/testing';
import { FormgroupsService } from './formgroups.service';
describe('FormgroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    const service: FormgroupsService = TestBed.get(FormgroupsService);
    expect(service).toBeTruthy();
  });
});
