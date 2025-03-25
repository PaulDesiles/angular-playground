import { Component, computed, inject } from '@angular/core';
import { BrocoliComponent } from "../brocoli/brocoli.component";
import { ButtonComponent } from "@lucca-front/ng/button";
import { LuUiStateDirective } from "@lucca/cdk/utils";
import { SoupStore } from "../../stores/soup.store";

@Component({
  selector: 'bro-brocolist',
  imports: [
    BrocoliComponent,
    ButtonComponent,
    LuUiStateDirective
  ],
  templateUrl: './brocolist.component.html',
  styleUrl: './brocolist.component.css',
  providers: [SoupStore]
})
export class BrocolistComponent {
  readonly store = inject(SoupStore);
  public gaugeWidth = computed(() => `${this.store.brocoliProgress() * 100}%`);
}
