import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIntersection]',
  standalone : true
})
export class IntersectionDirective {
  observer : IntersectionObserver;
  @Input() animation !: string;
  @Input() stopAnimation !:string;
  constructor(private ele : ElementRef) {
    ele.nativeElement.style.opacity = 0;
    ele.nativeElement.style.transition = '0.5s ease-in-out';
    // ele.nativeElement.style.position = 'relative';
    ele.nativeElement.style.transform = this.animation;
    this.observer = new IntersectionObserver((sections ,observer)=>{
      for (const section of sections) {
        const intersecting = section.isIntersecting;
        if(intersecting){
          ele.nativeElement.style.opacity = 1;
          ele.nativeElement.style.transform = this.stopAnimation;
          observer.unobserve(section.target)
        }
      }
    } , {
      threshold : 0.1
    })
    this.observer.observe(ele.nativeElement)
  }

ngOnChanges(): void {
  this.ele.nativeElement.style.transform = this.animation;
}
}
