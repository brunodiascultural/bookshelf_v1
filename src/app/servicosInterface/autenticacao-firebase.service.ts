import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoFirebaseService {

  usuarioLogado$ = authState(this.usuarioFb);
  auth = getAuth();

  constructor(
    private usuarioFb: Auth
    ) { }

    loginUsuario(usuarioEmail: string, usuarioSenha: string){
      return from(signInWithEmailAndPassword(this.usuarioFb, usuarioEmail, usuarioSenha));
    }

    sairLogin(){
      return from(this.usuarioFb.signOut());
    }

    cadastrarUsuario(nome: string, email: string, senha: string, url: string){
      return from(createUserWithEmailAndPassword(this.usuarioFb, email, senha)).pipe(
        switchMap(({user}) => updateProfile(user, {displayName: nome, photoURL: url}))
      )
    }

    loginUsuarioGoogle(){
      const provider = new GoogleAuthProvider();

      return from(signInWithPopup(this.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      }))
      // Opção para login com redirecionamento.
      // return from(signInWithRedirect(this.auth, provider))

    };

    emailRecupSenha(usuarioEmail: string) {
        return from(sendPasswordResetEmail(this.auth, usuarioEmail))

    }

}
