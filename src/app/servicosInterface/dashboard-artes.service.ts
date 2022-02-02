import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardArtes } from '../modelosInterface/dashboardArtes';

@Injectable({
  providedIn: 'root'
})
export class DashboardArtesService {
  private readonly uriAPI = '../../assets/dashboardArtes.json';

  constructor(private DashboardPsicologia: HttpClient) {}

  listagemCards() {
    return this.DashboardPsicologia.get<DashboardArtes[]>(
      this.uriAPI
    ).pipe(
      first(),
      tap((apiDashboard) => console.log(apiDashboard))
    );
  }
}
