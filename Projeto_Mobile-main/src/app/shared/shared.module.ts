import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProdutoCardComponent } from '../components/produto-card/produto-card.component';
import { CarrinhoItemComponent } from '../components/carrinho-item/carrinho-item.component';

import { FilterPipe } from '../pipes/filter.pipe';

import { HighlightButtonDirective } from '../directives/highlight-button.directive';

import { LoadingDirective } from '../directives/loading.directive';

@NgModule({
  declarations: [
    ProdutoCardComponent,
    CarrinhoItemComponent,
    FilterPipe,
    HighlightButtonDirective,
    LoadingDirective,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    ProdutoCardComponent,
    CarrinhoItemComponent,
    FilterPipe,
    HighlightButtonDirective,
    LoadingDirective
  ],
})
export class SharedModule {}
