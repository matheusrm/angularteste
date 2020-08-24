import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from './Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarioDoc: AngularFirestoreDocument<Usuario>;
  usuario: Observable<Usuario>;
  uid: string;
  constructor(private afs: AngularFirestore) {
  }
  init(uid: string) {
    this.uid = uid;
    this.usuarioDoc = this.afs.doc<Usuario>('usuarios/' + this.uid);
    this.usuario = this.usuarioDoc.valueChanges();
  }
}
