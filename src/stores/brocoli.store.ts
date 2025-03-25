import {
  patchState,
  signalStoreFeature,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { Brocoli } from "../components/models";
import { BrocoliApiService } from "../api/brocoli-api.service";
import { computed, inject } from "@angular/core";
import { withLoadingAction, withUiStateAction } from "@lucca/cdk/signal-store";
import { onLoadingStateChange, onUiStateChange } from "@lucca/cdk/utils";
import { delay, of, pipe, tap } from "rxjs";
import { SoupSize } from "./soup.store";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

export function withBrocoliStore() {
  return signalStoreFeature(
    { state: type<SoupSize>() },
    withState({
      brocolis: [] as Brocoli[],
    }),
    withComputed(({ brocolis }) => ({
      brocoliCount: computed(() => brocolis().length),
    })),
    withComputed(({ brocoliCount, nbPers }) => ({
      brocoliProgress: computed(() => (brocoliCount() / nbPers()) / 100),
    })),
    withLoadingAction('init'),
    withUiStateAction('nothing'),
    withMethods(( store ) => ({
      doNothingButTakeYourTime: rxMethod<undefined>(
        pipe(
          delay(2000),
          onUiStateChange(store.setNothingActionUiState)
        )
      ),
    })),
    withHooks({
      onInit(store, api = inject(BrocoliApiService)) {

        api.list$()
          .pipe(onLoadingStateChange(store.setInitActionLoading))
          .subscribe(list => patchState(store, { brocolis: list }));
      },
    })
  );
}