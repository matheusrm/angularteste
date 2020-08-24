import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Avaliacao } from './avaliacao';
import { Injectable } from '@angular/core';
@Injectable()
export class AvaliacaoService {
  AvaliacaoDoc: AngularFirestoreDocument<Avaliacao>;
  Avaliacao: Avaliacao;
  constructor(private afs: AngularFirestore) {
  }
  init(pagina: string) {
    this.AvaliacaoDoc = this.afs.doc<Avaliacao>('avaliacao/' + pagina);
    return this.AvaliacaoDoc.valueChanges();
  }
}