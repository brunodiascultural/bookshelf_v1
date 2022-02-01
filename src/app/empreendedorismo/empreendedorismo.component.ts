import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardEmpreendedorismo } from '../modelosInterface/dashboardEmpreendedorismo';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardEmpreendedorismoService } from '../servicosInterface/dashboard-empreendedorismo.service';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent {
  cardsEmpreendedorismo$: Observable<DashboardEmpreendedorismo[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardempreendedorismo = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsEmpreendedorismo$;
      }
      return this.cardsEmpreendedorismo$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardEmpreendedorismoService: DashboardEmpreendedorismoService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsEmpreendedorismo$ = dashboardEmpreendedorismoService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
