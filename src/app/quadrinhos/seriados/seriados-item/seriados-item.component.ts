import { Component, OnInit, Input } from '@angular/core';
import { seriadoService } from 'src/app/service/seriado.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-seriados-item',
  templateUrl: './seriados-item.component.html',
  styleUrls: ['./seriados-item.component.css']
})
export class SeriadosItemComponent implements OnInit {
  @Input() capa:string;
  @Input() titulo:string;

  constructor() { }

  ngOnInit() {
  }

}
