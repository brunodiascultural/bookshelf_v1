import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DashboardSugestao } from '../modelosInterface/dashboardSugestoes';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { SugestoesService } from '../servicosInterface/sugestoes.service';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss'],
})
export class SugestoesComponent {
  cardsSugestao$: Observable<DashboardSugestao[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsSugestao = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsSugestao$;
      }
      return this.cardsSugestao$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardSugestao: SugestoesService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsSugestao$ = dashboardSugestao.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
