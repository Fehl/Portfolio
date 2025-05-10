import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  imports: [CommonModule, SkillCardComponent],
  styleUrls: ['./tech-stack.component.css']
})

export class TechStackComponent {
  skills = [
    { skillName: 'Angular', iconUrl: 'icons/angular.svg', level: 'Advanced' },
    { skillName: 'TypeScript', iconUrl: 'icons/typescript.svg', level: 'Advanced' },
    { skillName: 'HTML5', iconUrl: 'icons/html5.svg', level: 'Advanced' },
    { skillName: 'CSS3', iconUrl: 'icons/css3.svg', level: 'Intermediate' },
    { skillName: 'JavaScript', iconUrl: 'icons/javascript.svg', level: 'Intermediate' },
    { skillName: 'Python', iconUrl: 'icons/python.svg', level: 'Intermediate' },
    { skillName: 'Java', iconUrl: 'icons/java.svg', level: 'Intermediate' },
    // { skillName: 'C#', iconUrl: 'icons/csharp.svg', level: 'Intermediate' },
    { skillName: 'MySQL', iconUrl: 'icons/mysql.svg', level: 'Intermediate' },
    { skillName: 'PostgreSQL', iconUrl: 'icons/postgresql.svg', level: 'Intermediate' },
    { skillName: 'NodeJS', iconUrl: 'icons/nodedotjs.svg', level: 'Intermediate' },
    { skillName: 'SpringBoot', iconUrl: 'icons/springboot.svg', level: 'Intermediate' },
    { skillName: 'AWS', iconUrl: 'icons/amazonwebservices.svg', level: 'Intermediate' },
    { skillName: 'Docker', iconUrl: 'icons/docker.svg', level: 'Intermediate' },
    
  ];
}
