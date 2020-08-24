import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Calendario } from './calendario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class configuracaoDoc  {
    caledarioDoc: AngularFirestoreDocument<Calendario>;
   calendario: Observable<Calendario>;
   pagina:string;
   constructor(private afs: AngularFirestore) {
   }
   init(pagina:string){
       this.pagina=pagina;
    this.caledarioDoc = this.afs.doc<Calendario>('configuracao/'+ this.pagina);
     this.calendario = this.caledarioDoc.valueChanges();
   }
}