import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProjectsSectionComponent {}
