import type { ParentProps } from "solid-js";
import { createContext, createSignal } from "solid-js";
import type { IsSortedContextValue } from "~/interfaces";

export const IsSortedContext = createContext<IsSortedContextValue>(
  {} as IsSortedContextValue
);

export function IsSortedProvider(props: ParentProps) {
  const [isSorted, setIsSorted] = createSignal(false);

  return (
    <IsSortedContext.Provider value={{ isSorted, setIsSorted }}>
      {props.children}
    </IsSortedContext.Provider>
  );
}
