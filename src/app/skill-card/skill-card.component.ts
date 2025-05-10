import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  imports: [CommonModule],
  styleUrls: ['./skill-card.component.css']
})

export class SkillCardComponent {
  @Input() skillName!: string;
  @Input() iconUrl?: string;
  @Input() level?: string;
}
