import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactSectionComponent } from './sections/contact/contact.component';
import { CompetenceSectionComponent } from './sections/competence/competence.component';
import { LandingSectionComponent } from './sections/landing/landing.component';
import { ProcessSectionComponent } from './sections/process/process.component';
import { ProjectsSectionComponent } from './sections/projects/projects.component';
import { ServicesSectionComponent } from './sections/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    LandingSectionComponent,
    ServicesSectionComponent,
    CompetenceSectionComponent,
    ProjectsSectionComponent,
    ProcessSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <div class="page">
      <app-landing-section
        [navOpen]="navOpen()"
        (toggleNav)="toggleNav()"
        (closeNav)="closeNav()"
      ></app-landing-section>

      <main>
        <app-services-section></app-services-section>
        <app-competence-section></app-competence-section>
        <app-projects-section></app-projects-section>
        <app-process-section></app-process-section>
        <app-contact-section></app-contact-section>
      </main>

      <button class="contact-bubble" type="button" (click)="scrollToContact()" aria-label="Zum Kontaktbereich springen">
        <span class="bubble-icon">✉</span>
        <span class="bubble-label">Kontakt</span>
      </button>

      <footer class="footer">
        <div class="footer-brand">
          <span class="brand-mark">BMS</span>
          <div>
            <strong>BMS-Beric</strong>
            <span>Verkehrssicherung &amp; Bauvorbereitung</span>
          </div>
        </div>
        <div class="footer-links">
          <a href="#leistungen">Leistungen</a>
          <a href="#kompetenzen">Kompetenzen</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt">Kontakt</a>
        </div>
        <div class="footer-legal">
          <span>© {{ currentYear }} BMS-Beric. Alle Rechte vorbehalten.</span>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('bms-beric');
  protected readonly currentYear = new Date().getFullYear();
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }

  protected closeNav(): void {
    this.navOpen.set(false);
  }

  protected scrollToContact(): void {
    this.closeNav();
    const contact = document.getElementById('kontakt');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
