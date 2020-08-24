import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  id:string;
  nameValue: string;
  placeValue: string;
  botao:boolean= true;
  quadrinhos: any[] = [];
  quadrinhosid: any[] = [];
  constructor(private route:ActivatedRoute,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.carregar(this.id);
  }
  carregar(id:string){
    this.firestore.collection('quadrinho', ref => ref
       .where('tags', 'array-contains',id)
     ).snapshotChanges()
       .subscribe(response => {
         if (!response.length) {
           console.log("No Data Available");
           return false;
         }
        
         this.quadrinhos = [];
         this.quadrinhosid=[];
         for (let item of response) {
           this.quadrinhos.push(item.payload.doc.data());
           this.quadrinhosid.push(item.payload.doc.id);
         }
  
       }, error => {
       });
  }

}
