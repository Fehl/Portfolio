import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.css']
})
export class SnowComponent implements AfterViewInit, OnDestroy {
  @ViewChild('snowCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private flakes: any[] = [];
  private animationFrameId: number = 0;
  public isBrowser = false;
  public isHome = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.isHome = event.urlAfterRedirects === '/';
          if (this.isHome) {
            setTimeout(() => this.startSnow(), 50); // Small delay to wait for ViewChild
          } else {
            this.stopSnow();
          }
        });
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser && this.router.url === '/') {
      this.isHome = true;
      this.startSnow();
    }
  }

  private startSnow(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    const numFlakes = 150;
    this.flakes = [];
    for (let i = 0; i < numFlakes; i++) {
      this.flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speedY: Math.random() * 0.25 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
      });
    }

    this.animate();
  }

  private stopSnow(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = 0;
    }
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  private drawFlakes(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();

    for (const f of this.flakes) {
      this.ctx.moveTo(f.x, f.y);
      this.ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    }

    this.ctx.fill();
    this.updateFlakes();
  }

  private updateFlakes(): void {
    const canvas = this.canvasRef.nativeElement;
    for (const f of this.flakes) {
      f.y += f.speedY;
      f.x += f.speedX;

      if (f.y > canvas.height) {
        f.y = 0;
        f.x = Math.random() * canvas.width;
      }

      if (f.x > canvas.width || f.x < 0) {
        f.x = Math.random() * canvas.width;
      }
    }
  }

  private animate(): void {
    this.drawFlakes();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy(): void {
    this.stopSnow();
  }
}
