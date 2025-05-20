import { Component, ElementRef, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { TechStackComponent } from "./tech-stack/tech-stack.component";
import { SnowComponent } from "./snow/snow.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [TechStackComponent, SnowComponent]
})
export class AppComponent {
  title = 'Portfolio';
  currentYear = new Date().getFullYear();
  day = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
}