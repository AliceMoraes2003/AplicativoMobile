import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { FavoritoService } from '../../services/favorito.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  isLoading: boolean = true;

  categorias: string[] = []; // Guardará as categorias
  selectedCategory: string | null = null; // Categoria selecionada
  produtos: any[] = []; // Produtos completos
  categoryNames: { [key: string]: string } = {
    electronics: 'Eletrônicos',
    jewelery: 'Joias',
    "men's clothing": 'Itens Masculinos',
    "women's clothing": 'Itens Femininos',
  };

  constructor(
    private produtoService: ProdutoService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit() {
    this.carregarCategorias();
    this.carregarProdutos();
  }

  carregarCategorias() {
    this.produtoService.getCategorias().subscribe({
      next: (categorias) => (this.categorias = categorias),
      error: (error) => console.error('Erro ao carregar categorias:', error),
    });
  }

  carregarProdutos() {
    this.isLoading = true; // Ativa o loader
    this.produtoService.getProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (error) => console.error('Erro ao carregar produtos:', error),
      complete: () => (this.isLoading = false), // Desativa o loader
    });
  }

  limparFiltro() {
    this.selectedCategory = null;
  }

  isFavorito(produto: any): boolean {
    return this.favoritoService.isFavorito(produto);
  }

  atualizarFavoritos(produto: any, isFavorito: boolean) {
    isFavorito
      ? this.favoritoService.addFavorito(produto)
      : this.favoritoService.removeFavorito(produto);
  }
}
