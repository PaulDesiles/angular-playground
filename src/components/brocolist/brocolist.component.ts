import { Component, computed, signal } from '@angular/core';
import { BrocoliComponent } from "../brocoli/brocoli.component";
import { Brocoli } from "../models";

@Component({
  selector: 'bro-brocolist',
  imports: [
    BrocoliComponent
  ],
  templateUrl: './brocolist.component.html',
  styleUrl: './brocolist.component.css'
})
export class BrocolistComponent {
  public brocolis = signal<Brocoli[]>([{
    "createdAt": "2025-03-21T10:46:13.430Z",
    "name": "Diana Schultz",
    "avatar": "https://croissy-fruits.fr/cdn/shop/files/Brocoli_CroissyFruits_Packshot-7093.jpg?v=1723742984&width=300",
    "description": "sympathize",
    "id": 1
  }]);

  public brocoliCount = computed(() => this.brocolis().length);
  public progress = computed(() => this.brocoliCount() / 100);
  public gaugeWidth = computed(() => `${this.progress() * 100}%`);
}
