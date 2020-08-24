import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ecleticos',
  templateUrl: './ecleticos.component.html',
  styleUrls: ['./ecleticos.component.css']
})
export class EcleticosComponent {
  //Models for Input fields
  nameValue: string;
  placeValue: string;

  responseResult: any;
  search: string = "";

  byNovo:boolean=false;
  byVelho:boolean=false;
  byNormal:boolean=false;

  //Data object for listing items
  quadrinhos: any[] = [];
  quadrinhosid: any[] = [];
  //Save first document in snapshot of items received
  firstInResponse: any = [];

  //Save last document in snapshot of items received
  lastInResponse: any = [];

  //Keep the array of first document of previous pages
  prev_strt_at: any = [];

  //Maintain the count of clicks on Next Prev button
  pagination_clicked_count = 0;

  //Disable next and prev buttons
  disable_next: boolean = false;
  disable_prev: boolean = false;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.loadItems();
  }

  ngOnInit() {
  }
  pesquisarTitulo() {
    this.firestore.collection('quadrinho', ref => ref
      .where('nome', '>=', this.search)
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        this.quadrinhos = [];
        this.quadrinhosid = [];

        for (let item of response) {
          this.quadrinhos.push(item.payload.doc.data());
          this.quadrinhosid.push(item.payload.doc.id);
        }
      }, error => {
      });
  }
  carregarTudo() {
    this.firestore.collection('quadrinho', ref => ref
      .where('tipo', '==', 'ecleticos')
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        this.responseResult = response;
      }, error => {
      });
  }
  antigoNovo() {
    if (this.responseResult == undefined) {
      this.firestore.collection('quadrinho', ref => ref
        .where('tipo', '==', 'ecleticos')
      ).snapshotChanges()
        .subscribe(response => {
          if (!response.length) {
            console.log("No Data Available");
            return false;
          }
          this.responseResult = response;
        }, error => {
        });
    }
    this.quadrinhos = [];
    this.quadrinhosid = [];
    this.responseResult.sort((a: any, b: any) => {
      if (a.payload.doc.data().timestamp > b.payload.doc.data().timestamp) {
        return 1;
      } else if (a.payload.doc.data().timestamp < b.payload.doc.data().timestamp) {
        return -1;
      }
    });
    for (let item of this.responseResult) {
      this.quadrinhos.push(item.payload.doc.data());
      this.quadrinhosid.push(item.payload.doc.id);
    }

  }
  async novoAntigo() {
    if (this.responseResult == undefined) {
      this.firestore.collection('quadrinho', ref => ref
        .where('tipo', '==', 'ecleticos')
      ).snapshotChanges()
        .subscribe(response => {
          if (!response.length) {
            console.log("No Data Available");
            return false;
          }
          this.responseResult = response;
        }, error => {
        });
    }
    this.quadrinhos = [];
    this.quadrinhosid = [];
    this.responseResult.sort((a: any, b: any) => {
      if (a.payload.doc.data().timestamp > b.payload.doc.data().timestamp) {
        return 1;
      } else if (a.payload.doc.data().timestamp < b.payload.doc.data().timestamp) {
        return -1;
      }
    });
    for (let item of this.responseResult) {
      this.quadrinhos.push(item.payload.doc.data());
      this.quadrinhosid.push(item.payload.doc.id);
    }

  }

  loadItems() {
    this.byNormal=true;
    this.byVelho=false;
    this.byNovo=false;
    this.firestore.collection('quadrinho', ref => ref
      .limit(2)
      .where('tipo', '==', 'ecleticos')
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.quadrinhos = [];
        this.quadrinhosid = [];

        for (let item of response) {
          this.quadrinhos.push(item.payload.doc.data());
          this.quadrinhosid.push(item.payload.doc.id);
        }

        //Initialize values
        this.prev_strt_at = [];
        this.pagination_clicked_count = 0;
        this.disable_next = false;
        this.disable_prev = false;

        //Push first item to use for Previous action
        this.push_prev_startAt(this.firstInResponse);
      }, error => {
      });
  }

  // Add item in Collection

  nextPage() {
    this.disable_next = true;
    this.firestore.collection('quadrinho', ref => ref
      .limit(2)
      .where('tipo', '==', 'ecleticos')
      .startAfter(this.lastInResponse)
    ).get()
      .subscribe(response => {

        if (!response.docs.length) {
          this.disable_next = true;
          return;
        }
        this.firstInResponse = response.docs[0];

        this.lastInResponse = response.docs[response.docs.length - 1];

        for (let item of response.docs) {
          this.quadrinhos.push(item.data());
          this.quadrinhosid.push(item.id);
        }

        this.pagination_clicked_count++;

        this.push_prev_startAt(this.firstInResponse);

        this.disable_next = false;
      }, error => {
        this.disable_next = false;
      });
  }

  //Add document
  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  //Remove not required document 
  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }




}