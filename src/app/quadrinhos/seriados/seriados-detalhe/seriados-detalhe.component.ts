import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quadrinhoDoc } from 'src/app/service/quadrinhoDoc';
import { Observable, EMPTY } from 'rxjs';
import { Quadrinho } from 'src/app/service/quadrinho';
import { AuthService } from 'src/app/service/auth.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-seriados-detalhe',
  templateUrl: './seriados-detalhe.component.html',
  styleUrls: ['./seriados-detalhe.component.css']
})
export class SeriadosDetalheComponent {
  id: string;
  //Disable next and prev buttons
  next: boolean = true;
  prev: boolean = true;
  options: any = {
    title: 0,
    toolbar: {
      zoomIn: {
        show: 1,
        size: 'large',
      },
      zoomOut: {
        show: 1,
        size: 'large',
      },
      oneToOne: 0,
      fullscreen: 0,
      reset: 0,
      prev: {
        show: 1,
        size: 'large',
      },
      play: 0,
      next: {
        show: 1,
        size: 'large',
      },
      rotateLeft: 0,
      rotateRight: 0,
      flipHorizontal: 0,
      flipVertical: 0,
    }
  };
  authResult: any;
  usuario: any;
  favorito: { url: any; id: string; tipo: string, nome: string };
  quadrinhoObservable: Observable<Quadrinho>;
  quadrinho;
  constructor(public quadrinhoDoc: quadrinhoDoc, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {

  }
  ngOnInit() {
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
          this.favorito = {
            url: this.quadrinho.paginas[0], id: this.id,
            tipo: this.quadrinho.tipo, nome: this.quadrinho.nome
          };
          this.usuario.fav.push(this.favorito);
          this.authService.updateFav(this.usuario.fav);
        }
      });
    }
  }

}
