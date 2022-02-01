import { TestBed } from '@angular/core/testing';

import { DashboardTeatroService } from './dashboard-teatro.service';

describe('DashboardTeatroService', () => {
  let service: DashboardTeatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardTeatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
