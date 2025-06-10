import { Component, OnInit, OnDestroy, HostListener, Renderer2, Inject, ElementRef, HostBinding } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css'
})

export class CustomCursorComponent implements OnInit, OnDestroy {
  @HostBinding('class.cursor-visible')
  isCursorVisible = false;

  private mouseX = 0;
  private mouseY = 0;

  private dotX = 0;
  private dotY = 0;

  trail: { x: number, y: number }[] = [];
  private readonly trailLength = 10; // How many segments in the trail
  private readonly speed = 0.08; // How quickly the trail follows

  private animationFrameId: number | null = null;
  private listeners: (() => void)[] = [];
  
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngOnInit(): void {
    this.trail = Array.from({ length: this.trailLength }, () => ({ x: 0, y: 0 }));
    this.animateCursor();
    this.setupEventListeners();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.listeners.forEach(removeListener => removeListener());
  }
  
  private animateCursor = () => {
    this.dotX = this.mouseX;
    this.dotY = this.mouseY;

    let prevX = this.dotX;
    let prevY = this.dotY;

    this.trail.forEach((segment, index) => {
      const currentSegment = this.trail[index];
      
      // Use linear interpolation for smooth following
      currentSegment.x += (prevX - currentSegment.x) * this.speed;
      currentSegment.y += (prevY - currentSegment.y) * this.speed;

      prevX = currentSegment.x;
      prevY = currentSegment.y;
    });

    this.animationFrameId = requestAnimationFrame(this.animateCursor);
  }
  
  getDotStyles() {
    return { 'left.px': this.dotX, 'top.px': this.dotY };
  }

  getTrailSegmentStyles(index: number) {
    const segment = this.trail[index];
    const opacity = 1 - (index / this.trailLength) * 0.7;
    return {
      'left.px': segment.x,
      'top.px': segment.y,
      'opacity': opacity.toString()
    };
  }

  // Find all interactive elements and add listeners for both visibility and effects
  private setupEventListeners(): void {
    setTimeout(() => {
        // --- 1. Logic for Cursor Visibility ---
        const targetDivs = this.document.querySelectorAll('.show-custom-cursor');
        targetDivs.forEach(div => {
            this.listeners.push(this.renderer.listen(div, 'mouseenter', () => this.isCursorVisible = true));
            this.listeners.push(this.renderer.listen(div, 'mouseleave', () => this.isCursorVisible = false));
        });

        // --- 2. Logic for "Grow" Effect ---
        const interactiveElements = this.document.querySelectorAll('a, button, .interactive-element');
        interactiveElements.forEach(el => {
            this.listeners.push(this.renderer.listen(el, 'mouseenter', () => this.renderer.addClass(this.document.body, 'cursor-grow')));
            this.listeners.push(this.renderer.listen(el, 'mouseleave', () => this.renderer.removeClass(this.document.body, 'cursor-grow')));
        });
    }, 100);
  }
}
