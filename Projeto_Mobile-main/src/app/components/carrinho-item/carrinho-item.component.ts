import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.scss'],
})
export class CarrinhoItemComponent {
  @Input() produto: any; // Recebe os dados do produto.
  @Output() remover = new EventEmitter<void>(); // Emite evento ao clicar em "Remover".

  removerDoCarrinho() {
    this.remover.emit(); // Emite evento para o pai.
  }
}
