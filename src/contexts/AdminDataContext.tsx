import { createContext, createSignal } from "solid-js";

export const AdminDataContext = createContext();

export function AdminDataProvider(props) {
  const [dataTable, setDataTable] = createSignal("countries");

  return (
    <AdminDataContext.Provider value={{ dataTable, setDataTable }}>
      {props.children}
    </AdminDataContext.Provider>
  );
}
