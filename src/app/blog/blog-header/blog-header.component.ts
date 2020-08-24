import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Calendario } from 'src/app/service/calendario';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {

  //Models for Input fields
 nameValue: string;
 placeValue: string;

 //Data object for listing items
 blogs: any[] = [];
 blogid: any[] = [];
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
   
 }

 ngOnInit() {
  this.loadItems();
 }


 loadItems() {
   this.firestore.collection('blog', ref => ref
     .limit(10)
   ).snapshotChanges()
     .subscribe(response => {
       if (!response.length) {
         console.log("No Data Available");
         return false;
       }
       this.firstInResponse = response[0].payload.doc;
       this.lastInResponse = response[response.length - 1].payload.doc;

       this.blogs = [];
       this.blogid=[];
       for (let item of response) {
         this.blogs.push(item.payload.doc.data());
         this.blogid.push(item.payload.doc.id);
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


 nextPage() {
   this.disable_next = true;
   this.firestore.collection('blog', ref => ref
      .limit(5)
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
        this.blogs.push(item.data());
        this.blogid.push(item.id);
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
