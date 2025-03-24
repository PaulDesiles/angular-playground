import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Brocoli } from "../components/models";
import { BrocoliApiService } from "../api/brocoli-api.service";
import { computed, inject } from "@angular/core";
import { withLoadingAction } from "@lucca/cdk/signal-store";
import { onLoadingStateChange } from "@lucca/cdk/utils";

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
  withLoadingAction('init'),
  withHooks({
    onInit(store, api = inject(BrocoliApiService)) {
      api.list$()
        .pipe(onLoadingStateChange(store.setInitActionLoading))
        .subscribe(list => patchState(store, { brocolis: list }));
    },
  })
);