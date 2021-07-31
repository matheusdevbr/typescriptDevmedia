import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  public numero = 1;
  public exibirConteudo = false;


  constructor() { }

  ngOnInit(): void {
  }
  
  increment(){ 
    this.numero++;
  }

  public toggleConteudo(){
    this.exibirConteudo = !this.exibirConteudo;
  }

  public onClick(){
    console.log("Recebi um click")
  }

  public onKeyPress(event: any){
    console.log(event.target.value.length);
  }

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}`;

    console.log(dados);
  }
}
