import { TestBed } from '@angular/core/testing';

import { DashboardVestibularesService } from './dashboard-vestibulares.service';

describe('DashboardVestibularesService', () => {
  let service: DashboardVestibularesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardVestibularesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
