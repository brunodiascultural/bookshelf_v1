import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  formularioRecup = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email] )
  })

  hasUnitNumber=false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }
    loginFirebase(){
      if(!this.formularioLogin.valid){
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(()=>{
        this.rotas.navigate(['/cdd'])
      })
  }


    loginUsuarioGgle(){
      this.autenticacaoFirebaseService.loginUsuarioGoogle()
      .pipe(
        this.toast.observe({
          success: 'Sucesso',
          loading: 'Carregando...',
          error: 'Algo deu errado, verifique as informações'
        })).subscribe(()=>{
          this.rotas.navigate(['/cdd'])
        })
      }

      enviaEmailRecupSenha(){
        if(!this.formularioRecup.valid){
          return
        }
        const {email} = this.formularioRecup.value;
        this.autenticacaoFirebaseService.emailRecupSenha(email)
        .pipe(
          this.toast.observe({
            success: 'Email de verificação enviado com Sucesso',
            loading: 'Carregando...',
            error: 'Algo deu errado, verifique as informações'
          })).subscribe(()=>{
            this.rotas.navigate([''])
          })

      }

}
