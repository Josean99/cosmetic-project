import { ElementRef, Pipe, PipeTransform, Renderer2, inject } from '@angular/core';

@Pipe({
  name: 'stars',
  standalone: true
})
export class StarsPipe implements PipeTransform {
  private element: ElementRef = inject(ElementRef);
  private renderer2: Renderer2 = inject(Renderer2);

  transform(value: number) {    
    let div:HTMLDivElement = this.renderer2.parentNode(this.element.nativeElement)
    let htmlraw = "";
    for (let index = 1; index <= value; index++) {
      htmlraw += "<i class='fa fa-star' aria-hidden='true'></i>";      
    }
    if (value % 1 == 0.5 ) {
      htmlraw += "<i class='fa fa-star-half-o' aria-hidden='true'></i>";  
    }
    div.innerHTML = htmlraw;    
  }

}
