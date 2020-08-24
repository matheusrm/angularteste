import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-seriados-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class SeriadosListaComponent implements OnInit {

  nameValue: string;
  placeValue: string;
  id: string;
  responseResult: any;

  //Data object for listing items
  quadrinhos: any[] = [];
  quadrinhosid: any[] = [];
  seriados: any[] = [];


  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadItems();
  }


  loadItems() {
    this.firestore.collection('quadrinho', ref => ref
      .where('serie', '==', this.id)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        response.sort((a: any, b: any) => {
          if (a.payload.doc.data().capitulo > b.payload.doc.data().capitulo) {
            return 1;
          } else if (a.payload.doc.data().capitulo < b.payload.doc.data().capitulo) {
            return -1;
          }
        });
        this.responseResult = response;
        this.quadrinhos = [];
        this.quadrinhosid = [];
        for (let item of response) {
          this.quadrinhos.push(item.payload.doc.data());
          this.quadrinhosid.push(item.payload.doc.id);
        }
        //Push first item to use for Previous action
      }, error => {
      });

    this.firestore.collection('seriados', ref => ref
      .where('serie', '==', this.id)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        this.seriados = [];
        for (let item of response) {
          this.seriados.push(item.payload.doc.data());
        }
        //Push first item to use for Previous action
      }, error => {
      });
  }
  antigoNovo() {
    this.quadrinhos = [];
    this.quadrinhosid = [];
    this.responseResult.sort((a: any, b: any) => {
      if (a.payload.doc.data().capitulo > b.payload.doc.data().capitulo) {
        return 1;
      } else if (a.payload.doc.data().capitulo < b.payload.doc.data().capitulo) {
        return -1;
      }
    });
    for (let item of this.responseResult) {
      this.quadrinhos.push(item.payload.doc.data());
      this.quadrinhosid.push(item.payload.doc.id);
    }

  }
  novoAntigo() {
    this.quadrinhos = [];
    this.quadrinhosid = [];
    this.responseResult.sort((a: any, b: any) => {
      if (a.payload.doc.data().capitulo < b.payload.doc.data().capitulo) {
        return 1;
      } else if (a.payload.doc.data().capitulo > b.payload.doc.data().capitulo) {
        return -1;
      }
    });
    for (let item of this.responseResult) {
      this.quadrinhos.push(item.payload.doc.data());
      this.quadrinhosid.push(item.payload.doc.id);
    }

  }


}
