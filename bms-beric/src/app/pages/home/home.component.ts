import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactSectionComponent } from '../../sections/contact/contact.component';
import { CompetenceSectionComponent } from '../../sections/competence/competence.component';
import { LandingSectionComponent } from '../../sections/landing/landing.component';
import { ProcessSectionComponent } from '../../sections/process/process.component';
import { ProjectsSectionComponent } from '../../sections/projects/projects.component';
import { SafetySectionComponent } from '../../sections/safety/safety.component';
import { ServicesSectionComponent } from '../../sections/services/services.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    LandingSectionComponent,
    ServicesSectionComponent,
    SafetySectionComponent,
    CompetenceSectionComponent,
    ProjectsSectionComponent,
    ProcessSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomeComponent {
  private readonly scrollThreshold = 48;

  protected navOpen = false;
  protected navScrolled = false;
  protected readonly currentYear = new Date().getFullYear();

  protected toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  protected closeNav(): void {
    this.navOpen = false;
  }

  protected scrollToContact(): void {
    this.closeNav();
    const contact = document.getElementById('kontakt');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  protected handleScroll(): void {
    const shouldShrink = window.scrollY > this.scrollThreshold;
    if (this.navScrolled !== shouldShrink) {
      this.navScrolled = shouldShrink;
    }
  }
}
