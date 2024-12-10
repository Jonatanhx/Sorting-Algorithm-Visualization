import type { ParentProps } from "solid-js";
import { createContext, createSignal } from "solid-js";
import type { IsSortingContextValue } from "~/interfaces";

export const IsSortingContext = createContext<IsSortingContextValue>(
  {} as IsSortingContextValue
);

export function IsSortingProvider(props: ParentProps) {
  const [isSorting, setIsSorting] = createSignal(false);

  return (
    <IsSortingContext.Provider value={{ isSorting, setIsSorting }}>
      {props.children}
    </IsSortingContext.Provider>
  );
}
