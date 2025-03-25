import { signalStoreFeature, withMethods, withState } from "@ngrx/signals";
import { makeFeatureFactoryStoreAware } from "@lucca/cdk/signal-store";

interface SweetPotato {
  id: number;
  name: string;
}

interface PurpleFeatureConfig {
  hasPurplePotato: () => boolean;
}

function _withPurpleFeatureStore(config: PurpleFeatureConfig) {
  return signalStoreFeature(
    withMethods(() => ({
      isAwesome: () => config.hasPurplePotato(),
    })),
  );
}

export const withPurpleFeatureStore = makeFeatureFactoryStoreAware(_withPurpleFeatureStore);


export function withSweetPotatoStore() {
  return signalStoreFeature(
    withState({
      sweetPotatos: [
        { id: 1, name: "white" },
        { id: 2, name: "orange" },
        { id: 3, name: "purple" },
      ] as SweetPotato[],
    }),
    withPurpleFeatureStore(({ sweetPotatos }) => ({
      hasPurplePotato: () => sweetPotatos()?.some(p => p.name === "purple")
    })),
    withMethods(({ isAwesome }) => ({
      tellMeImAwesome: () => isAwesome(),
    }))
  );
}
