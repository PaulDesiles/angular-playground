import { Component, input } from '@angular/core';
import { Brocoli } from "../models";

@Component({
  selector: 'bro-brocoli',
  imports: [],
  templateUrl: './brocoli.component.html',
  styleUrl: './brocoli.component.css'
})
export class BrocoliComponent {
  brocoli = input.required<Brocoli>();
}
