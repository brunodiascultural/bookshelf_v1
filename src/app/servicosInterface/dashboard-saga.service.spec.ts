import { TestBed } from '@angular/core/testing';

import { DashboardSagaService } from './dashboard-saga.service';

describe('DashboardSagaService', () => {
  let service: DashboardSagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardSagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
