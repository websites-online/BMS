import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './impressum.component.html',
  styleUrls: ['../../app.component.css']
})
export class ImpressumComponent {
  protected readonly currentYear = new Date().getFullYear();
}
