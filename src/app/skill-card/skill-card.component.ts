import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})

export class SkillCardComponent {
  @Input() skillName!: string;
  @Input() iconUrl?: string;
  @Input() level?: string;
}
