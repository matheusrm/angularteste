import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.css']
})
export class TagItemComponent implements OnInit {
  @Input() capa:string;
  @Input() titulo:string;


  constructor() { }

  ngOnInit() {
  }

}
