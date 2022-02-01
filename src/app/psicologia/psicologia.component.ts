import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardPsicologia } from '../modelosInterface/dashboardPsicologia';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardPsicologiaService } from '../servicosInterface/dashboard-psicologia.service';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss'],
})
export class PsicologiaComponent {
  cardsPsicologia$: Observable<DashboardPsicologia[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsBiblioteconomia = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return this.cardsPsicologia$;
        }
        return this.cardsPsicologia$;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardDashboardPsicologia: DashboardPsicologiaService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsPsicologia$ = dashboardDashboardPsicologia.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
