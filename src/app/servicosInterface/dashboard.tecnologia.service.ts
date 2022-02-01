import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { DashboardTecnologia } from '../modelosInterface/dashboardTecnologia';

@Injectable({
  providedIn: 'root'
})
export class DashboardTecnologiaService {
  private readonly uriAPI = '../../assets/dashboardTecnologia.json';

  constructor(private cardsDashboardTecnologia: HttpClient) {}

  listagemCards() {
    return this.cardsDashboardTecnologia.get<DashboardTecnologia[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
