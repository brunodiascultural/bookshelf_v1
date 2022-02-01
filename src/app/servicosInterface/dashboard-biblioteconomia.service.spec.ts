import { TestBed } from '@angular/core/testing';

import { DashboardBiblioteconomiaService } from './dashboard-biblioteconomia.service';

describe('DashboardBiblioteconomiaService', () => {
  let service: DashboardBiblioteconomiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardBiblioteconomiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
