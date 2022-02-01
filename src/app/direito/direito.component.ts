import { DashboardDireito } from './../modelosInterface/dashboardDireito';
import { catchError, map, Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardDireitoService } from '../servicosInterface/dashboard-direito.service';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent {
  cardsDireito$: Observable<DashboardDireito[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  carddireito = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsDireito$;
      }
      return this.cardsDireito$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardDireitoService: DashboardDireitoService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsDireito$ = dashboardDireitoService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}

