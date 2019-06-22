import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import * as marked from 'marked';

@Directive({
  selector: '[appMarked]'
})
export class MarkedDirective implements OnInit{
  @Input() markHTML : string = '';

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

    ngOnInit() {
      // deliberate use of innerHTML because we might have HTML and markdown
      // mixed together
      const markText = this.markHTML;
      if (markText && markText.length > 0) {
          const markdownHtml = marked(markText);
          this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', markdownHtml);
      }
  }

}
