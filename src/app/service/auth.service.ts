import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject, from, EMPTY } from 'rxjs';
import { User, auth } from 'firebase/app';
import { ProfileModel } from 'src/app/service/profile.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from './Usuario';
import { Avaliacao } from './avaliacao';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;
  userProviderAdditionalInfo: any;
  redirectResult: Subject<any> = new Subject<any>();
  constructor(
    public angularFire: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
  ) {

  }
  init() {
    this.angularFire.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.currentUser = user;
      } else {
        // No user is signed in.
        this.currentUser = null;
      }
    });
  }

  getUser() {
    return this.currentUser;
  }

  getUserInfo() {
    if (this.currentUser) {
      return this.afs.doc<Usuario>('usuarios/' + this.currentUser.uid).valueChanges()
    } else {
      return EMPTY
    }
  }
  updateFav(favoritos: [{ url: string; id: string; tipo: string; nome: string; }]) {
    this.afs.doc<Usuario>('usuarios/' + this.angularFire.auth.currentUser.uid).set({ fav: favoritos });
  }
  updateCom(comentario: [{ comentario: string; user: string; }], id: string) {
    this.afs.doc<Avaliacao>('avaliacao/' + id).update({ comentarios: comentario });
  }

  public getProfileData() {
    if (this.currentUser) {
      const userModel = new ProfileModel();
      let providerData: any = this.currentUser;

      userModel.name = providerData.name || providerData.displayName || 'What\'s your name?';
      userModel.email = providerData.email || 'Where can I send you emails?';
      userModel.verificado = providerData.emailVerified;
      return userModel;
    } else {
      return null;
    }
  }

  esqueciSenha(email: string) {
    return this.angularFire.auth.sendPasswordResetEmail(email)
  }
  SetUserData(user: any) {
    this.currentUser = user
  }
  signOut(): Observable<any> {
    return from(this.angularFire.auth.signOut());
  }
  invalido() {
    alert("Email ou senha invalido");
  }
  notVerified() {
    alert("Favor validar seu email, verifique seu email");
  }
  signInWithEmail(email: string, password: string) {
    return this.angularFire.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified !== true) {
          this.sendEmail();
          this.notVerified();
          this.signOut();
        } else {
          this.SetUserData(result.user);
          this.ngZone.run(() => {
            this.router.navigate(['favoritos']);
          });
        }
      }, (rejectionReason) => this.invalido()
      ).catch((error) => {
      });
  }

  signUpWithEmail(email: string, password: string, nome: string) {
    return this.angularFire.auth.createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        this.sendEmail();
        await this.afs.collection('usuarios').doc(user.user.uid).set({ fav: [{ url: "", id: "" }] });
        this.angularFire.auth.currentUser.updateProfile({displayName: nome});
        this.notVerified();
        this.signOut();
      }).catch((error) => {
      })
  }
  sendEmail() {
    return this.angularFire.auth.currentUser.sendEmailVerification()
  }

}
