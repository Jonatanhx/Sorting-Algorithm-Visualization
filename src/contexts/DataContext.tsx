import type { ParentProps } from "solid-js";
import { createContext, createEffect, createSignal } from "solid-js";
import { scrambleData } from "~/helperFunctions";
import type { DataContextValue } from "~/interfaces";

export const DataContext = createContext<DataContextValue>(
  {} as DataContextValue
);

export function DataProvider(props: ParentProps) {
  const [data, setData] = createSignal<number[]>([]);

  createEffect(() => {
    const data: number[] = [];
    const dataSize = 1000;
    for (let i = 1; i <= dataSize; i++) {
      data.push(i);
    }
    scrambleData(data);
    setData(data);
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
}
