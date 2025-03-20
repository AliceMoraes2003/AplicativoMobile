import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuCarrinhoPage } from './meu-carrinho.page';

const routes: Routes = [
  {
    path: '',
    component: MeuCarrinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuCarrinhoPageRoutingModule {}
