import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { BiblioteconomiaComponent } from './biblioteconomia/biblioteconomia.component';
import { DireitoComponent } from './direito/direito.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { FeedComponent } from './feed/feed.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { SagaComponent } from './saga/saga.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { TeatroComponent } from './teatro/teatro.component';


const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app-app-cadastro',
  },
  {
    path: 'app-app-cadastro',
    component: AppCadastroComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'especial-mes',
    component: EspecialMesComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then((c) => c.CddModule),
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'sugestoes',
    component: SugestoesComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'biblioteconomia',
    component: BiblioteconomiaComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'psicologia',
    component: PsicologiaComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'saga',
    component: SagaComponent,
    ...canActivate(enviarSemLogin),
  },

    {
    path: 'teatro',
    component: TeatroComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'direito',
    component: DireitoComponent,
    ...canActivate(enviarSemLogin),
  },
  {
    path: 'empreendedorismo',
    component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
