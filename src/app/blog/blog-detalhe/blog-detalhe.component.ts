import { Component} from '@angular/core';
import { blogDoc } from 'src/app/service/blogDoc';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-detalhe',
  templateUrl: './blog-detalhe.component.html',
  styleUrls: ['./blog-detalhe.component.css']
})
export class BlogDetalheComponent  {
  id:string;
  constructor(public blogDoc: blogDoc, private route:ActivatedRoute) {
    
  }
 ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id');
  
  this.blogDoc.init(this.id);  
  
 }
}


