import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { RevistaComponent } from './revista/revista.component';
import { LivroComponent } from './livro/livro.component';
import { FilmeComponent } from './filme/filme.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ListaLivrosComponent,
    RevistaComponent,
    LivroComponent,
    FilmeComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
