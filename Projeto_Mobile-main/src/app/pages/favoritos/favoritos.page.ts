import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritoService: FavoritoService) {}

  ngOnInit() {
    this.favoritos = this.favoritoService.getFavoritos();
  }

  removerFavorito(produto: any) {
    this.favoritoService.removeFavorito(produto);
    this.favoritos = this.favoritoService.getFavoritos(); // Atualiza a lista
  }

}
