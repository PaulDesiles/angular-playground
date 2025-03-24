import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Brocoli } from "../components/models";
import { BrocoliApiService } from "../api/brocoli-api.service";
import { computed, inject } from "@angular/core";

export const BrocoliStore = signalStore(
  withState({
    brocolis: [] as Brocoli[],
  }),
  withComputed(({ brocolis }) => ({
    brocoliCount: computed(() => brocolis().length),
  })),
  withComputed(({ brocoliCount }) => ({
    brocoliProgress: computed(() => brocoliCount() / 100),
  })),
  withHooks({
    onInit(store, api = inject(BrocoliApiService) ) {
      api.list$().subscribe(list => patchState(store, { brocolis: list }));
    },
  })
);