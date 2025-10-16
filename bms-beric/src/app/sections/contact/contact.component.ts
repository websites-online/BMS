import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactSectionComponent {}
