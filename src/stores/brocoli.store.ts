import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Brocoli } from "../components/models";
import { BrocoliApiService } from "../api/brocoli-api.service";
import { inject } from "@angular/core";

export const BrocoliStore = signalStore(
  withState({
    brocolis: [] as Brocoli[],
  }),
  withHooks({
    onInit(store, api = inject(BrocoliApiService) ) {
      api.list$().subscribe(list => patchState(store, { brocolis: list }));
    },
  })
);