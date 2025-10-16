import { Component } from '@angular/core';
import { ContactSectionComponent } from '../../sections/contact/contact.component';
import { CompetenceSectionComponent } from '../../sections/competence/competence.component';
import { LandingSectionComponent } from '../../sections/landing/landing.component';
import { ProcessSectionComponent } from '../../sections/process/process.component';
import { ProjectsSectionComponent } from '../../sections/projects/projects.component';
import { ServicesSectionComponent } from '../../sections/services/services.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LandingSectionComponent,
    ServicesSectionComponent,
    CompetenceSectionComponent,
    ProjectsSectionComponent,
    ProcessSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomeComponent {
  protected navOpen = false;
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
}
