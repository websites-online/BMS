import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Danke } from './danke';

describe('Danke', () => {
  let component: Danke;
  let fixture: ComponentFixture<Danke>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Danke]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Danke);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
