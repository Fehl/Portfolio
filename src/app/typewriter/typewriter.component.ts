import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  @Input() texts: string[] = ['Desenvolvedor FullStack', 'Estudante de Ciência da Computação'];
  @Input() typingSpeed = 100;
  @Input() deletingSpeed = 50;
  @Input() delayBetween = 3000;

  displayedText = '';
  isDeleting = false;
  textIndex = 0;
  charIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.type();
    }
  }

  type() {
    const currentText = this.texts[this.textIndex];
    
    if (!this.isDeleting) {
      this.displayedText = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentText.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.delayBetween);
        return;
      }
    } else {
      this.displayedText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }

    setTimeout(() => this.type(), this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}
