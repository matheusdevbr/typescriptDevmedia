import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ListaLivrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
