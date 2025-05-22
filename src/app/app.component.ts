import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { TechStackComponent } from "./tech-stack/tech-stack.component";
import { SnowComponent } from "./snow/snow.component";
import { TypewriterComponent } from "./typewriter/typewriter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TechStackComponent, SnowComponent, TypewriterComponent]
})
export class AppComponent {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  day = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault(); // Prevent default anchor behavior (changing URL)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}