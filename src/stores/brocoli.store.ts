import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Brocoli } from "../components/models";
import { BrocoliApiService } from "../api/brocoli-api.service";
import { computed, inject } from "@angular/core";
import { withLoadingAction, withUiStateAction } from "@lucca/cdk/signal-store";
import { onLoadingStateChange, onUiStateChange } from "@lucca/cdk/utils";
import { delay, of } from "rxjs";

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
  withUiStateAction('nothing'),
  withMethods(( store ) => ({
    doNothingButTakeYourTime: () => {
      of(undefined)
        .pipe(
          delay(2000),
          onUiStateChange(store.setNothingActionUiState)
        )
        .subscribe();
    }
  })),
  withHooks({
    onInit(store, api = inject(BrocoliApiService)) {
      api.list$()
        .pipe(onLoadingStateChange(store.setInitActionLoading))
        .subscribe(list => patchState(store, { brocolis: list }));
    },
  })
);