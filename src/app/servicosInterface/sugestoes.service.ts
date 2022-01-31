import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { DashboardSugestao } from '../modelosInterface/dashboardSugestoes';



@Injectable({
  providedIn: 'root',
})
export class SugestoesService {
  private readonly uriAPI = '../../assets/dashboardSugestao.json';

  constructor(private cardsDashboardSugestao: HttpClient) {}

  listagemCards() {
    return this.cardsDashboardSugestao
      .get<DashboardSugestao[]>(this.uriAPI)
      .pipe(
        first(),
        tap((apiDashboard) => console.log(apiDashboard))
      );
  }
}
