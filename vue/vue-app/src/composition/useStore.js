import { provide, inject } from "@vue/composition-api";

const StoreSymbol = Symbol();

export const provideStore = store => provide(StoreSymbol, store);

const useStore = () => {
    const store = inject(StoreSymbol);

    if (!store) {
        throw new Error('No store provided!');
    }

    return store;
}

export default useStore;
