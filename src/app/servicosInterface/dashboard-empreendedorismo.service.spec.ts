import { TestBed } from '@angular/core/testing';

import { DashboardEmpreendedorismoService } from './dashboard-empreendedorismo.service';

describe('DashboardEmpreendedorismoService', () => {
  let service: DashboardEmpreendedorismoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardEmpreendedorismoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
