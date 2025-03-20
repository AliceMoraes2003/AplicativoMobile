import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective {
  @Input() set appLoading(isLoading: boolean) {
    if (isLoading) {
      this.showLoader();
    } else {
      this.hideLoader();
    }
  }

  @Input() spinnerColor: string = '#3880ff'; 
  @Input() spinnerSize: string = '40px'; 

  private loaderElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.loaderElement = this.renderer.createElement('div');
    this.renderer.addClass(this.loaderElement, 'loading-container');

    
    this.loaderElement.innerHTML = 
    `
      <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
      <p>Carregando...</p>
    `;

    this.renderer.setStyle(this.loaderElement, 'display', 'flex');
    this.renderer.setStyle(this.loaderElement, 'align-items', 'center');
    this.renderer.setStyle(this.loaderElement, 'justify-content', 'center');
    this.renderer.setStyle(this.loaderElement, 'height', '100%');
  }

  private showLoader() {
    this.renderer.appendChild(this.el.nativeElement, this.loaderElement);

    const spinner = this.loaderElement.querySelector('.custom-spinner') as HTMLElement;
    if (spinner) {
      this.renderer.setStyle(spinner, 'color', this.spinnerColor);
      this.renderer.setStyle(spinner, 'font-size', this.spinnerSize);
    }
  }

  private hideLoader() {
    if (this.loaderElement.parentNode) {
      this.renderer.removeChild(this.el.nativeElement, this.loaderElement);
    }
  }
}
