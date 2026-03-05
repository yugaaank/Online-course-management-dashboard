import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightSeats]',
  standalone: true
})
export class HighlightSeatsDirective implements OnInit {
  @Input('appHighlightSeats') seats: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.seats < 5) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      const text = this.renderer.createText(' (Low Seats!)');
      this.renderer.appendChild(this.el.nativeElement, text);
    }
  }
}
