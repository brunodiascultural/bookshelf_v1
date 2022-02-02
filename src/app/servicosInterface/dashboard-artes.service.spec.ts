import { TestBed } from '@angular/core/testing';

import { DashboardArtesService } from './dashboard-artes.service';

describe('DashboardArtesService', () => {
  let service: DashboardArtesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardArtesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
