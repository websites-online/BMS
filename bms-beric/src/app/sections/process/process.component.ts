import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './process.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProcessSectionComponent {}
