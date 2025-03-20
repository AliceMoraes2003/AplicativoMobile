import { Component } from '@angular/core';


@Component({
  selector: 'app-meu-carrinho',
  templateUrl: './meu-carrinho.page.html',
  styleUrls: ['./meu-carrinho.page.scss'],
})
export class MeuCarrinhoPage {
  carrinho: any[] = []; // Produtos no carrinho.
  total: number = 0; // Total do carrinho.

  constructor() {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarCarrinho(); // Atualiza os dados ao carregar a página.
  }

  carregarCarrinho() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    this.calcularTotal();
  }

  removerProduto(produto: any) {
    this.carrinho = this.carrinho.filter((item) => item.id !== produto.id);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.carrinho.reduce((acc, item) => acc + item.price, 0);
  }
}
