import { Component, OnInit } from '@angular/core';

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
}
