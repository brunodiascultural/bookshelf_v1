import { TestBed } from '@angular/core/testing';

import { Dashboard.TecnologiaService } from './dashboard.tecnologia.service';

describe('Dashboard.TecnologiaService', () => {
  let service: Dashboard.TecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboard.TecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
