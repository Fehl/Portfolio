import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { TechStackComponent } from "./tech-stack/tech-stack.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TechStackComponent]
})
export class AppComponent {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  day = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
}