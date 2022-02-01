import { TestBed } from '@angular/core/testing';

import { DashboardPsicologiaService } from './dashboard-psicologia.service';

describe('DashboardPsicologiaService', () => {
  let service: DashboardPsicologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardPsicologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
