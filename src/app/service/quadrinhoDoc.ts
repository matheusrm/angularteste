import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Quadrinho } from './quadrinho';
import { Injectable } from '@angular/core';
@Injectable()
export class quadrinhoDoc {
  quadrinhoDoc: AngularFirestoreDocument<Quadrinho>;
  quadrinho: Quadrinho;
  constructor(private afs: AngularFirestore) {
  }
  init(pagina: string) {
    this.quadrinhoDoc = this.afs.doc<Quadrinho>('quadrinho/' + pagina);
    return this.quadrinhoDoc.valueChanges();
  }
}