import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { DashboardVestibulares } from '../modelosInterface/dashboardVestibulares';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { DashboardVestibularesService } from '../servicosInterface/dashboard-vestibulares.service';

@Component({
  selector: 'app-vestibulares',
  templateUrl: './vestibulares.component.html',
  styleUrls: ['./vestibulares.component.scss']
})
export class VestibularesComponent {

  cardsVestibulares$: Observable<DashboardVestibulares[]> | undefined;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cardVestibulares = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsVestibulares$;
      }
      return  this.cardsVestibulares$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardVestibularesService: DashboardVestibularesService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {
    this.cardsVestibulares$ = dashboardVestibularesService.listagemCards().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

}
