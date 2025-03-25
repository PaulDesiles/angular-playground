import { signalStore, withMethods } from "@ngrx/signals";
import { withSweetPotatoStore } from "./sweet-potato.store";
import { withBrocoliStore } from "./brocoli.store";

export const SoupStore = signalStore(
  withSweetPotatoStore(),
  withBrocoliStore(),
  withMethods(({ brocolis, sweetPotatos }) => ({
    cook: (i: number) => {
      console.log(`soup with ${brocolis[i]} & ${sweetPotatos[i]}`);
    }
  })),
);