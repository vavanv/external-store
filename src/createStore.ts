import { useSyncExternalStore } from "react";

export interface Store<T> {
  getState: () => T;
  setState: (state: T) => void;
  subscribe: (listener: (state: T) => void) => () => void;
}

export function createStore<T>(initialState: T): Store<T> {
  let currentState: T = initialState;
  const listeners = new Set<(state: T) => void>();
  return {
    getState: () => currentState,
    setState: (newState: T) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe: (listener: (state: T) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export const useStore = <T>(
  store: Store<T>,
  selector: (state: T) => T = (state: T) => state
) => useSyncExternalStore(store.subscribe, () => selector(store.getState()));

export default createStore;
