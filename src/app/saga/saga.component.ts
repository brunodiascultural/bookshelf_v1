import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DashboardSaga } from '../modelosInterface/dashboardSaga';
import { DashboardSagaService } from '../servicosInterface/dashboard-saga.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-saga',
  templateUrl: './saga.component.html',
  styleUrls: ['./saga.component.scss'],
})
export class SagaComponent {
  cardsSaga$: Observable<DashboardSaga[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsaga = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsSaga$;
      }
      return this.cardsSaga$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardSagaService: DashboardSagaService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsSaga$ = dashboardSagaService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
