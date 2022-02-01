import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardEspecialMes } from '../modelosInterface/dashboard-especial-mes';

@Injectable({
  providedIn: 'root',
})
export class DashboardEspecialMesService {
  private readonly uriAPI = '../../assets/dashboardEspecialMes.json';

  constructor(private cardsDashboard: HttpClient) {}

  listagemCards() {
    return this.cardsDashboard.get<DashboardEspecialMes[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
