import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { DashboardTeatro } from '../modelosInterface/dashboardTeatro';
@Injectable({
  providedIn: 'root'
})
export class DashboardTeatroService {
  private readonly uriAPI = '../../assets/dashboardTeatro.json';

  constructor(private cardsDashboardTeatro:  HttpClient) { }

      listagemCards() {
    return this.cardsDashboardTeatro.get<DashboardTeatro[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }

}
