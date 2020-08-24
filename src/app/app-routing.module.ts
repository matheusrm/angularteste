import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcleticosComponent } from './quadrinhos/ecleticos/ecleticos.component';
import { SeriadosComponent } from './quadrinhos/seriados/seriados.component';
import { HomeComponent } from './home/home.component';
import { BlogHeaderComponent } from './blog/blog-header/blog-header.component';
import { EcleticosDetalheComponent } from './quadrinhos/ecleticos/ecleticos-detalhe/ecleticos-detalhe.component';
import { BlogDetalheComponent } from './blog/blog-detalhe/blog-detalhe.component';
import { SeriadosDetalheComponent } from './quadrinhos/seriados/seriados-detalhe/seriados-detalhe.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { SeriadosListaComponent } from './quadrinhos/seriados/lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TagComponent } from './tag/tag.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { FavoritosComponent } from './login/favoritos/favoritos.component';
import { ComentariosComponent } from './quadrinhos/comentarios/comentarios.component'

const routes: Routes = [
  { path: 'ecleticos', component: EcleticosComponent },
  { path: 'seriados', component: SeriadosComponent },
  { path: 'blog', component: BlogHeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ecleticos/:id', component: EcleticosDetalheComponent },
  { path: 'blog/:id', component: BlogDetalheComponent },
  { path: 'seriados/:id', component: SeriadosDetalheComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'lista/:id', component: SeriadosListaComponent },
  { path: 'tag/:id', component: TagComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/registrar', component: RegistrarComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'comentario/:id', component:ComentariosComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
