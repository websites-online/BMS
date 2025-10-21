import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datenschutz-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './datenschutz.component.html',
  styleUrls: ['../../app.component.css']
})
export class DatenschutzComponent {
  protected readonly currentYear = new Date().getFullYear();
}
