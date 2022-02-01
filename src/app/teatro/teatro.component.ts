import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardTeatro } from '../modelosInterface/dashboardTeatro';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardTeatroService } from '../servicosInterface/dashboard-teatro.service';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent {
  cardsTeatro$: Observable<DashboardTeatro[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsaga = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsTeatro$;
      }
      return  this.cardsTeatro$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardTeatroService: DashboardTeatroService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsTeatro$ = dashboardTeatroService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
