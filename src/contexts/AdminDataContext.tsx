import type { ParentProps } from "solid-js";
import { createContext, createSignal } from "solid-js";

export const AdminDataContext = createContext();

export function AdminDataProvider(props: ParentProps) {
  const [dataTable, setDataTable] = createSignal("countries");

  return (
    <AdminDataContext.Provider value={{ dataTable, setDataTable }}>
      {props.children}
    </AdminDataContext.Provider>
  );
}
