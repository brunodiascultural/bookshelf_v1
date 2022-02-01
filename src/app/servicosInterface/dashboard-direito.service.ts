import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardDireito } from '../modelosInterface/dashboardDireito';

@Injectable({
  providedIn: 'root'
})
export class DashboardDireitoService {
  private readonly uriAPI = '../../assets/dashboardDireito.json';

  constructor(private cardsDashboardDireito:  HttpClient) {}

  listagemCards() {
    return this.cardsDashboardDireito.get<DashboardDireito[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
