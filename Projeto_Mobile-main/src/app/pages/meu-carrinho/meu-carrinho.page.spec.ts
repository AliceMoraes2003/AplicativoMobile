import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuCarrinhoPage } from './meu-carrinho.page';

describe('MeuCarrinhoPage', () => {
  let component: MeuCarrinhoPage;
  let fixture: ComponentFixture<MeuCarrinhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
