import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['../../app.component.css']
})
export class ServicesSectionComponent {}
