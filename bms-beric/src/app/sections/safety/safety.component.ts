import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-safety-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './safety.component.html',
  styleUrls: ['../../app.component.css']
})
export class SafetySectionComponent {}
