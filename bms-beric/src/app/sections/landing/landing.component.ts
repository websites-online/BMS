import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-landing-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './landing.component.html',
  styleUrls: ['../../app.component.css']
})
export class LandingSectionComponent {
  @Input({ required: true }) navOpen = false;

  @Output() toggleNav = new EventEmitter<void>();
  @Output() closeNav = new EventEmitter<void>();

  protected onToggleNav(): void {
    this.toggleNav.emit();
  }

  protected onCloseNav(): void {
    this.closeNav.emit();
  }
}
