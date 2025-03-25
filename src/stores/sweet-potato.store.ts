import { signalStoreFeature, withState } from "@ngrx/signals";

interface SweetPotato {
  id: number;
  name: string;
}

export function withSweetPotatoStore() {
  return signalStoreFeature(
    withState({
      sweetPotatos: [
        { id: 1, name: "white" },
        { id: 2, name: "orange" },
        { id: 3, name: "purple" },
      ] as SweetPotato[],
    })
  );
}