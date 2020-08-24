import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-header-dois',
  templateUrl: './header-dois.component.html',
  styleUrls: ['./header-dois.component.css']
})
export class HeaderDoisComponent implements OnInit {
  nameValue: string;
  placeValue: string;
  id:string;

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
  ) {    this.loadItems();

    
  }
 
  ngOnInit() {
  }
 
 
  loadItems() {
    this.firestore.collection('seriados'
    ).snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log("No Data Available");
          return false;
        }
       
        response.sort((a:any, b:any) => {
         if(a.payload.doc.data().ano < b.payload.doc.data().ano) {
           return 1;
         }else if(a.payload.doc.data().ano == b.payload.doc.data().ano &&
                   a.payload.doc.data().mes < b.payload.doc.data().mes){
                     return 1;
                   
        }else if (a.payload.doc.data().ano == b.payload.doc.data().ano &&
                  a.payload.doc.data().mes == b.payload.doc.data().mes &&
                   a.payload.doc.data().dia < b.payload.doc.data().dia ){
                    return 1;
        } else if(a.payload.doc.data().ano > b.payload.doc.data().ano) {
         return -1;
       }else if(a.payload.doc.data().ano == b.payload.doc.data().ano &&
                 a.payload.doc.data().mes > b.payload.doc.data().mes){
                   return -1;
                 
      }else if (a.payload.doc.data().ano == b.payload.doc.data().ano &&
                a.payload.doc.data().mes == b.payload.doc.data().mes &&
                 a.payload.doc.data().dia > b.payload.doc.data().dia ){
                  return -1;
        } else {
           return 0;
         }
       });
       
        this.quadrinhos = [];
        this.quadrinhosid=[];
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
      }, error => {
      });
  }
 

}
