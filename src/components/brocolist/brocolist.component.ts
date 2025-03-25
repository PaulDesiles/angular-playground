import { Component, computed, inject, signal } from '@angular/core';
import { BrocoliComponent } from "../brocoli/brocoli.component";
import { Brocoli } from "../models";
import { BrocoliStore } from "../../stores/brocoli.store";
import { ButtonComponent } from "@lucca-front/ng/button";
import { LuUiStateDirective } from "@lucca/cdk/utils";

@Component({
  selector: 'bro-brocolist',
  imports: [
    BrocoliComponent,
    ButtonComponent,
    LuUiStateDirective
  ],
  templateUrl: './brocolist.component.html',
  styleUrl: './brocolist.component.css',
  providers: [BrocoliStore]
})
export class BrocolistComponent {
  readonly store = inject(BrocoliStore);
  public gaugeWidth = computed(() => `${this.store.brocoliProgress() * 100}%`);
}
