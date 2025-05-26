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
  hoveredSkill: string = '';

  skills = [
    { skillName: 'Angular', iconUrl: 'icons/angular.svg', color: '#a855f7'},
    { skillName: 'TypeScript', iconUrl: 'icons/typescript.svg', color: '#000000'},
    { skillName: 'HTML5', iconUrl: 'icons/html5.svg', color: '#000000'},
    { skillName: 'CSS3', iconUrl: 'icons/css3.svg', color: '#000000'},
    { skillName: 'JavaScript', iconUrl: 'icons/javascript.svg', color: '#000000'},
    { skillName: 'Python', iconUrl: 'icons/python.svg', color: '#000000'},
    { skillName: 'Java', iconUrl: 'icons/java.svg', color: '#000000'},
    // { skillName: 'C#', iconUrl: 'icons/csharp.svg', color: '#000000'},
    { skillName: 'MySQL', iconUrl: 'icons/mysql.svg', color: '#000000'},
    { skillName: 'PostgreSQL', iconUrl: 'icons/postgresql.svg', color: '#000000'},
    { skillName: 'NodeJS', iconUrl: 'icons/nodedotjs.svg', color: '#000000'},
    { skillName: 'SpringBoot', iconUrl: 'icons/springboot.svg', color: '#000000'},
    { skillName: 'AWS', iconUrl: 'icons/amazonwebservices.svg', color: '#000000'},
    { skillName: 'Docker', iconUrl: 'icons/docker.svg', color: '#000000'},
    
  ];
}
