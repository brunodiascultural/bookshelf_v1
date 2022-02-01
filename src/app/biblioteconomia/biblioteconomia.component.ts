import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DashboardBiblioteconomia } from '../modelosInterface/dashboardBiblioteconomia';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardBiblioteconomiaService } from '../servicosInterface/dashboard-biblioteconomia.service';

@Component({
  selector: 'app-biblioteconomia',
  templateUrl: './biblioteconomia.component.html',
  styleUrls: ['./biblioteconomia.component.scss'],
})
export class BiblioteconomiaComponent {
  cardsBiblioteconomia$: Observable<DashboardBiblioteconomia[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsBiblioteconomia = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return this.cardsBiblioteconomia$;
        }
        return this.cardsBiblioteconomia$;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardBiblioteconomia: DashboardBiblioteconomiaService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsBiblioteconomia$ = dashboardBiblioteconomia.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
