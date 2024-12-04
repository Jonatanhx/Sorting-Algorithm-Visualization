import type { ParentProps } from "solid-js";
import { createContext, createSignal } from "solid-js";
import type { SelectedDataTableContextValue } from "~/interfaces";

export const SelectedDataTableContext =
  createContext<SelectedDataTableContextValue>(
    {} as SelectedDataTableContextValue
  );

export function SelectedDataTableProvider(props: ParentProps) {
  const [selectedDataTable, setSelectedDataTable] = createSignal("countries");

  return (
    <SelectedDataTableContext.Provider
      value={{ selectedDataTable, setSelectedDataTable }}
    >
      {props.children}
    </SelectedDataTableContext.Provider>
  );
}
