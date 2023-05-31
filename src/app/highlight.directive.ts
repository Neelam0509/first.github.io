import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.backgroundColor="yellow";
  }
@HostListener('mouseenter') onMouseenter(){
   this.highlight('yellow');
}

@HostListener('mouseleave') onMouseleave(){
  this.highlight('red');
}
@HostListener('click') onClick(){
  this.highlight('purple');
}

private highlight(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}
}
