import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Blog } from './blog';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class blogDoc  {
    blogDoc: AngularFirestoreDocument<Blog>;
   blog: Observable<Blog>;
   pagina:string;
   constructor(private afs: AngularFirestore) {
   }
   init(pagina:string){
       this.pagina=pagina;
    this.blogDoc = this.afs.doc<Blog>('blog/'+ this.pagina);
     this.blog = this.blogDoc.valueChanges();
   }
}