import { Component, computed, inject, signal } from '@angular/core';
import { BrocoliComponent } from "../brocoli/brocoli.component";
import { Brocoli } from "../models";
import { BrocoliStore } from "../../stores/brocoli.store";

@Component({
  selector: 'bro-brocolist',
  imports: [
    BrocoliComponent
  ],
  templateUrl: './brocolist.component.html',
  styleUrl: './brocolist.component.css',
  providers: [BrocoliStore]
})
export class BrocolistComponent {
  readonly store = inject(BrocoliStore);
  public gaugeWidth = computed(() => `${this.store.brocoliProgress() * 100}%`);
}
