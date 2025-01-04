import { useAuth } from "@solid-mediakit/auth/client";
import { Show, useContext } from "solid-js";
import AdminDatatable from "~/components/AdminDataTable";
import { AdminDataContext } from "~/contexts/AdminDataContext";

export default function Admin() {
  const { admins } = useContext(AdminDataContext);
  const auth = useAuth();
  return (
    <main class="flex min-h-screen flex-col my-4">
      <Show
        when={admins()?.some(
          (admin) => admin.id === auth.session()?.user.id && admin.isAdmin
        )}
      >
        <AdminDatatable />
      </Show>
      <Show
        when={admins()?.some(
          (admin) => admin.id !== auth.session()?.user.id && admin.isAdmin
        )}
      >
        <div class="flex flex-col text-white min-h-screen items-center justify-center">
          <p>You do not have the required credentials to view this page.</p>
        </div>
      </Show>
    </main>
  );
}
