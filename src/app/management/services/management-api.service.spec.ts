import { TestBed } from '@angular/core/testing';

import { ManagementApiService } from './management-api.service';

describe('ManagementApiService', () => {
  let service: ManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
