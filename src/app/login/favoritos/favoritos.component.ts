import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, EMPTY } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { Usuario } from 'src/app/service/Usuario';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileModel } from 'src/app/service/profile.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  uid: string;
  logado: boolean;
  authResult: Observable<Usuario>;
  usuario: Usuario;
  delete: boolean = false;
  compensador: number = 1;
  profile:ProfileModel;
  removerArray: Array<number> = [];
  constructor(
    private authService: AuthService,
    public auth: AngularFireAuth,
    public userService: UserService,
    private router: Router,
  ) {
    this.carregar();
  }
  ngOnInit() {

  }

  carregar() {
    this.authResult = this.authService.getUserInfo()
    if (this.authResult == EMPTY) {
      this.router.navigate(['login']);
    } else {
      this.authResult.subscribe(result => {
        if (result) {
          this.logado = true;
          this.usuario = result;
        }
      });
    }
    this.profile=this.authService.getProfileData();

  }
  addEle(i: number) {
    if (this.removerArray.includes(i, 0)) {
      this.removerArray.splice(this.removerArray.indexOf(i, 0), 1);
    } else {
      this.removerArray.push(i);
    }
  }
  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
  removerConfirmar() {
    for (let index = 0; index < this.removerArray.length; index++) {
      this.usuario.fav.splice(this.removerArray[index] + this.compensador, 1);
      this.compensador--;
    }
    this.authService.updateFav(this.usuario.fav);
    this.delete = false;
    this.removerArray = [];

  }

  remover() {
    this.delete = true;
  }

}
