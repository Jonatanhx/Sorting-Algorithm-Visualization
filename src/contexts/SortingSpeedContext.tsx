import type { ParentProps } from "solid-js";
import { createContext, createSignal } from "solid-js";
import type { SortingSpeedContextValue } from "~/interfaces";

export const SortingSpeedContext = createContext<SortingSpeedContextValue>(
  {} as SortingSpeedContextValue
);

export function SortingSpeedProvider(props: ParentProps) {
  const [speed, setSpeed] = createSignal<number>(50);

  return (
    <SortingSpeedContext.Provider value={{ speed, setSpeed }}>
      {props.children}
    </SortingSpeedContext.Provider>
  );
}
