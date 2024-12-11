import type { ParentProps } from "solid-js";
import { createContext, createResource } from "solid-js";
import type { AdminDataContextValue } from "~/interfaces";
import { db } from "../../prisma/db";

export const AdminDataContext = createContext<AdminDataContextValue>(
  {} as AdminDataContextValue
);

export function AdminDataProvider(props: ParentProps) {
  const [admins, refetch] = createResource(async () => {
    "use server";
    const adminData = await db.user.findMany({});
    return adminData;
  });

  return (
    <AdminDataContext.Provider value={{ admins, refetch }}>
      {props.children}
    </AdminDataContext.Provider>
  );
}
