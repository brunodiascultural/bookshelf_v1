import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardBiblioteconomia } from '../modelosInterface/dashboardBiblioteconomia';

@Injectable({
  providedIn: 'root',
})
export class DashboardBiblioteconomiaService {
  private readonly uriAPI = '../../assets/dashboardBiblioteconomia.json';

  constructor(private cardsDashboardBiblioteconomia: HttpClient) {}

  listagemCards() {
    return this.cardsDashboardBiblioteconomia
      .get<DashboardBiblioteconomia[]>(this.uriAPI)
      .pipe(
        first(),
        tap((apiDashboard) => console.log(apiDashboard))
      );
  }
}
