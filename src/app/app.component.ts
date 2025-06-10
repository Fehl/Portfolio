import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { TechStackComponent } from "./tech-stack/tech-stack.component";
import { SnowComponent } from "./snow/snow.component";
import { TypewriterComponent } from "./typewriter/typewriter.component";
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TechStackComponent, SnowComponent, TypewriterComponent, CustomCursorComponent]
})
export class AppComponent {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  

  weekDay() {
    let day = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    if (day == "Domingo" || day == "Sábado") {
      day = "Semana";
    }
    return day;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault(); // Prevent default anchor behavior (changing URL)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}