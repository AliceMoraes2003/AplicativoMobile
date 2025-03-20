import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], category: string | null): any[] {
    if (!items) {
      return [];
    }
    if (!category) {
      // Se category for null, retorna todos os itens
      return items;
    }
    return items.filter(item => item.category === category);
  }
}
