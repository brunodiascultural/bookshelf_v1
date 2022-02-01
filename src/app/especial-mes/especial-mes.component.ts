import { DashboardEspecialMesService } from './../servicosInterface/dashboard-especial-mes.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardEspecialMes } from '../modelosInterface/dashboard-especial-mes';

@Component({
  selector: 'app-especial-mes',
  templateUrl: './especial-mes.component.html',
  styleUrls: ['./especial-mes.component.scss'],
})
export class EspecialMesComponent {
  cardsEspecialMes$: Observable<DashboardEspecialMes[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsEspecialMes = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsEspecialMes$;
      }
      return this.cardsEspecialMes$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardEspecialMesService: DashboardEspecialMesService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsEspecialMes$ = dashboardEspecialMesService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
