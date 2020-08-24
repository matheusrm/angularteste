import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Seriado } from './seriado';
import { map } from 'rxjs/operators';
@Injectable()
export class seriadoService {
  seriadoCollection: AngularFirestoreCollection<Seriado>;
  seriado: Observable<Seriado[]>
  serie: string;
  constructor(private afs: AngularFirestore) { }
  init(serie: string) {
    this.serie = serie;
    this.seriadoCollection = this.afs.collection<Seriado>('quadrinho', ref => {
      return ref
        .where('serie', '==', this.serie)
    });
    this.seriado = this.seriadoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Seriado;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }
}
