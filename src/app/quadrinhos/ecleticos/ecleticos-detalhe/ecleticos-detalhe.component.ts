import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quadrinhoDoc } from 'src/app/service/quadrinhoDoc';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { EMPTY, Observable } from 'rxjs';
import { Quadrinho } from 'src/app/service/quadrinho';

@Component({
  selector: 'app-ecleticos-detalhe',
  templateUrl: './ecleticos-detalhe.component.html',
  styleUrls: ['./ecleticos-detalhe.component.css']
})
export class EcleticosDetalheComponent  {
   id:string;
   options:any ={
    title:0,
    toolbar:{
      zoomIn: 1,
      zoomOut: 1,
      oneToOne: 0,
      fullscreen:0,
      reset: 0,
      prev: 1,
      play:0,
      next: 1,
      rotateLeft: 0,
      rotateRight: 0,
      flipHorizontal: 0,
      flipVertical: 0,
    }
   };
  authResult: any;
  usuario: any;
  favorito: { url: any; id: string; tipo:string, nome:string};
  quadrinhoObservable: Observable<Quadrinho>;
  quadrinho;
  constructor(public quadrinhoDoc: quadrinhoDoc, private route:ActivatedRoute,
    private router: Router, private authService:AuthService) {
    
  }
 ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id');
  this.id = this.route.snapshot.paramMap.get('id');
  this.quadrinhoObservable = this.quadrinhoDoc.init(this.id);
  this.quadrinhoObservable.subscribe(result => {
    this.quadrinho = result;
  })
  
 }
 comentarios() {
  this.router.navigate(['/comentario/' + this.id]);
}
 addFav() {
  this.authResult = this.authService.getUserInfo()
  if (this.authResult == EMPTY) {
    this.router.navigate(['login']);
  } else {
    this.authResult.pipe(take(1)).subscribe(result => {
      if (result) {
        this.usuario = result;
        this.favorito = { url: this.quadrinho.paginas[0], id: this.id, 
                  tipo: this.quadrinho.tipo, nome:this.quadrinho.nome};
        this.usuario.fav.push(this.favorito);
        this.authService.updateFav(this.usuario.fav);
      }
    });
  }
}

}
