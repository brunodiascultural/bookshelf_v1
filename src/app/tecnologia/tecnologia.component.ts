import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component,} from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardTecnologia } from '../modelosInterface/dashboardTecnologia';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardTecnologiaService } from '../servicosInterface/dashboard.tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent{
  cardsTecnologia$: Observable<DashboardTecnologia[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardTecnologia = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsTecnologia$;
      }
      return this.cardsTecnologia$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardTecnologia: DashboardTecnologiaService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsTecnologia$ = dashboardTecnologia.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }
}

