import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuCarrinhoPageRoutingModule } from './meu-carrinho-routing.module';

import { MeuCarrinhoPage } from './meu-carrinho.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuCarrinhoPageRoutingModule,
    SharedModule
  ],
  declarations: [MeuCarrinhoPage]
})
export class MeuCarrinhoPageModule {}
