import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardArtes } from '../modelosInterface/dashboardArtes';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardArtesService } from '../servicosInterface/dashboard-artes.service';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss']
})
export class ArtesComponent {
  cardsArtes$: Observable<DashboardArtes[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardsArtes = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return this.cardsArtes$;
        }
        return this.cardsArtes$;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardArtesService: DashboardArtesService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsArtes$ = dashboardArtesService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}
