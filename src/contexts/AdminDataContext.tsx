import type { Accessor, ParentProps, Setter } from "solid-js";
import { createContext, createSignal } from "solid-js";

interface AdminDataContextValue {
  dataTable: Accessor<string>;
  setDataTable: Setter<string>;
}

export const AdminDataContext = createContext<AdminDataContextValue>(
  {} as AdminDataContextValue
);

export function AdminDataProvider(props: ParentProps) {
  const [dataTable, setDataTable] = createSignal("countries");

  return (
    <AdminDataContext.Provider value={{ dataTable, setDataTable }}>
      {props.children}
    </AdminDataContext.Provider>
  );
}
