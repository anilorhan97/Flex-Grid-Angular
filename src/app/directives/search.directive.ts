import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  @HostBinding('style.width') width: string = "";
  @HostBinding('style.padding-left') paddingLeft: string = "";
  @HostBinding('style.marginLeft') marginLeft: string = "";
  @HostBinding('style.border') border : string = "";

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    // this.width = '525px';
    this.marginLeft = "10px";
    this.paddingLeft = '50px'; 
    
  }

  @HostListener('blur') onBlur() {
    // this.width = '490px'; 
    this.marginLeft = "0px";
    this.paddingLeft = '10px'; // Padding değerini geri alın
  }
}

