import { Component } from '@angular/core';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  imports: [SkillCardComponent],
  styleUrls: ['./tech-stack.component.css']
})

export class TechStackComponent {
  skills = [
    { skillName: 'Angular', iconUrl: 'assets/icons/angular.svg', level: 'Advanced' },
    { skillName: 'TypeScript', iconUrl: 'assets/icons/typescript.svg', level: 'Advanced' },
    { skillName: 'HTML5', iconUrl: 'assets/icons/html5.svg', level: 'Advanced' },
    { skillName: 'CSS3', iconUrl: 'assets/icons/css3.svg', level: 'Intermediate' },
    
  ];
}
