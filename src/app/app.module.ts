import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxViewerModule } from 'ngx-viewer';
import { firebaseConfig } from '../config';
import { AngularFireModule } from '@angular/fire';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuadrinhosComponent } from './quadrinhos/quadrinhos.component';
import { BlogComponent } from './blog/blog.component';
import { RedesComponent } from './redes/redes.component';
import { SeriadosComponent } from './quadrinhos/seriados/seriados.component';
import { ListaTodosComponent } from './quadrinhos/lista-todos/lista-todos.component';
import { ListaComponent } from './blog/lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { EcleticosComponent } from './quadrinhos/ecleticos/ecleticos.component';
import { EcleticosDetalheComponent } from './quadrinhos/ecleticos/ecleticos-detalhe/ecleticos-detalhe.component';
import { SeriadosDetalheComponent } from './quadrinhos/seriados/seriados-detalhe/seriados-detalhe.component';
import { BlogDetalheComponent } from './blog/blog-detalhe/blog-detalhe.component';
import { HomeComponent } from './home/home.component';
import { BlogHeaderComponent } from './blog/blog-header/blog-header.component';
import { SeriadosItemComponent } from './quadrinhos/seriados/seriados-item/seriados-item.component';
import { EcleticosItemComponent } from './quadrinhos/ecleticos/ecleticos-item/ecleticos-item.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { quadrinhoDoc } from './service/quadrinhoDoc';
import { seriadoService } from './service/seriado.service';
import { blogDoc } from './service/blogDoc';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AdicionarQuadrinhoComponent } from './adicionar/adicionar-quadrinho/adicionar-quadrinho.component';
import { AdicionarBlogComponent } from './adicionar/adicionar-blog/adicionar-blog.component';
import { AdicionarSeriadoComponent } from './adicionar/adicionar-seriado/adicionar-seriado.component';
import { HeaderDoisComponent } from './header/header-dois/header-dois.component';
import { SeriadosListaComponent } from './quadrinhos/seriados/lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListaItemComponent } from './quadrinhos/seriados/lista/lista-item/lista-item.component';
import { TagComponent } from './tag/tag.component';
import { TagItemComponent } from './tag/tag-item/tag-item.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { AuthService } from './service/auth.service';
import { AvaliacaoService } from './service/avaliacao.service';
import { FavoritosComponent } from './login/favoritos/favoritos.component';
import { ComentariosComponent } from './quadrinhos/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuadrinhosComponent,
    BlogComponent,
    RedesComponent,
    SeriadosComponent,
    ListaTodosComponent,
    ListaComponent,
    FooterComponent,
    EcleticosComponent,
    EcleticosDetalheComponent,
    SeriadosDetalheComponent,
    BlogDetalheComponent,
    HomeComponent,
    BlogHeaderComponent,
    SeriadosItemComponent,
    EcleticosItemComponent,
    AdicionarComponent,
    AdicionarQuadrinhoComponent,
    AdicionarBlogComponent,
    AdicionarSeriadoComponent,
    HeaderDoisComponent,
    SeriadosListaComponent,
    NotFoundComponent,
    ListaItemComponent,
    TagComponent,
    TagItemComponent,
    LoginComponent,
    RegistrarComponent,
    FavoritosComponent,
    ComentariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgbModule,
    NgxViewerModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore,quadrinhoDoc, seriadoService, blogDoc, SeriadosItemComponent
  ,AuthService,AvaliacaoService,AngularFirestoreModule,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
