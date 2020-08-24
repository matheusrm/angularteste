import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecleticos-item',
  templateUrl: './ecleticos-item.component.html',
  styleUrls: ['./ecleticos-item.component.css']
})
export class EcleticosItemComponent implements OnInit {
  @Input() capa:string;
  @Input() titulo:string;



  constructor() { }

  ngOnInit() {
  }

}
