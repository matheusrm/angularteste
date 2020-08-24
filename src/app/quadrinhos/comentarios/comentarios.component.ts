import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { AvaliacaoService } from 'src/app/service/avaliacao.service';
import { Avaliacao } from 'src/app/service/avaliacao';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  id: string;
  authResult: Observable<any>;
  usuario;
  url: string;
  AvaliacaoObservable: Observable<Avaliacao>;
  avaliacao: any;
  logado: boolean;
  comentario: string;
  enviar: { user: string; comentario: string; };
  vazio:boolean=false;

  constructor(public AvaliacaoService: AvaliacaoService, private route: ActivatedRoute,
    private authService: AuthService,
    public router: Router,
    private ngZone: NgZone,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.AvaliacaoObservable = this.AvaliacaoService.init(this.id);
    this.AvaliacaoObservable.subscribe(result => {
      this.avaliacao = result;
    });
  }
  addComentario() {
    this.usuario = this.authService.getUser();
    if (this.usuario != null && this.comentario != null) {
      this.enviar = { user: this.usuario.displayName, comentario: this.comentario }
      this.avaliacao.comentarios.push(this.enviar);
      this.authService.updateCom(this.avaliacao.comentarios, this.id);
    } else if (this.usuario != null) {
      this.vazio=true;
    } else {
      this.router.navigate(['login']);
    };
    this.comentario = "";
  }
}
