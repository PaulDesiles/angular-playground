import { signalStore, withMethods, withState } from "@ngrx/signals";
import { withSweetPotatoStore } from "./sweet-potato.store";
import { withBrocoliStore } from "./brocoli.store";

export interface SoupSize {
  nbPers: number;
}

export const SoupStore = signalStore(
  withState<SoupSize>({
    nbPers: 2,
  }),
  withSweetPotatoStore(),
  withBrocoliStore(),
  withMethods(({ brocolis, sweetPotatos }) => ({
    cook: (i: number) => {
      console.log(`soup with ${brocolis[i]} & ${sweetPotatos[i]}`);
    }
  })),
);