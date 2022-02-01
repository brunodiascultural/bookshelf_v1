import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardVestibulares } from '../modelosInterface/dashboardVestibulares';


@Injectable({
  providedIn: 'root'
})
export class DashboardVestibularesService {
  private readonly uriAPI = '../../assets/dashboardVestibulares.json';

  constructor(private cardsDashboardVestibulares: HttpClient) { }

      listagemCards() {
    return this.cardsDashboardVestibulares.get<DashboardVestibulares[]>(this.uriAPI).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
