import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { DashboardPsicologia } from '../modelosInterface/dashboardPsicologia';

@Injectable({
  providedIn: 'root',
})
export class DashboardPsicologiaService {
  private readonly uriAPI = '../../assets/dashboardPsicologia.json';

  constructor(private DashboardPsicologia: HttpClient) {}

  listagemCards() {
    return this.DashboardPsicologia.get<DashboardPsicologia[]>(
      this.uriAPI
    ).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
