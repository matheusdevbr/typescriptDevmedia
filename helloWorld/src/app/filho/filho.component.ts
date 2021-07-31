import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-filho',
 templateUrl: './filho.component.html'
})
export class FilhoComponent {

 private _livro = '';

 @Input()
 set livro(livro: string) {
   this._livro = (livro && livro.trim()) || '<Nome em branco>';
 }

 get livro(): string { return this._livro;}
}
