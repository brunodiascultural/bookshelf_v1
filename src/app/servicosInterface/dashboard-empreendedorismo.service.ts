import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardEmpreendedorismo } from '../modelosInterface/dashboardEmpreendedorismo';

@Injectable({
  providedIn: 'root'
})
export class DashboardEmpreendedorismoService {
  private readonly uriAPI = '../../assets/dashboardEmpreendedorismo.json';

  constructor(private cardsDashboardEmpreendedorismo:  HttpClient) {}

  listagemCards() {
    return this.cardsDashboardEmpreendedorismo.get<DashboardEmpreendedorismo[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
