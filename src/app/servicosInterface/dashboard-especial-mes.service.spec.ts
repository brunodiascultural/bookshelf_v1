import { TestBed } from '@angular/core/testing';

import { DashboardEspecialMesService } from './dashboard-especial-mes.service';

describe('DashboardEspecialMesService', () => {
  let service: DashboardEspecialMesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEspecialMesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
