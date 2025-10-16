import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-danke',
  standalone: true,
  imports: [RouterModule, RevealDirective],
  templateUrl: './danke.html',
  styleUrl: './danke.css'
})
export class Danke {

}
