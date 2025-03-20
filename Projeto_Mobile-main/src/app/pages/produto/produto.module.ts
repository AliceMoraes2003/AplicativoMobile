import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutoPageRoutingModule } from './produto-routing.module';
import { ProdutoPage } from './produto.page';
import { SharedModule } from '../../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule,
    SharedModule 
  ],
  declarations: [
    ProdutoPage
  ]
})
export class ProdutoPageModule {}
