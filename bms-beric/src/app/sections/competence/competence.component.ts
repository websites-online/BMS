import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-competence-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './competence.component.html',
  styleUrls: ['../../app.component.css']
})
export class CompetenceSectionComponent {}
