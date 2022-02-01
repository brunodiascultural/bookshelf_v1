import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { DashboardSaga } from '../modelosInterface/dashboardSaga';

@Injectable({
  providedIn: 'root',
})
export class DashboardSagaService {
  private readonly uriAPI = '../../assets/dashboardSaga.json';

  constructor(private cardsDashboardSaga: HttpClient) {}

  listagemCards() {
    return this.cardsDashboardSaga.get<DashboardSaga[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
