import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective {
  // Recebe a condição para alterar o estilo
  @Input('appHighlightButton') isActive: boolean = false;

  // Aplica a cor de fundo
  @HostBinding('style.backgroundColor') get backgroundColor(): string {
    return this.isActive ? 'lightgray' : '';
  }

  // Opcional: Alterar o cursor para indicar estado "desativado"
  @HostBinding('style.cursor') get cursor(): string {
    return this.isActive ? 'not-allowed' : 'pointer';
  }
}
