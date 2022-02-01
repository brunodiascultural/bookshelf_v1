import { TestBed } from '@angular/core/testing';

import { DashboardDireitoService } from './dashboard-direito.service';

describe('DashboardDireitoService', () => {
  let service: DashboardDireitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDireitoService) ;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
