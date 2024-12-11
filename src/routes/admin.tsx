import { useAuth } from "@solid-mediakit/auth/client";
import { Show, useContext } from "solid-js";
import AdminDatatable from "~/components/AdminDataTable";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { AdminDataContext } from "~/contexts/AdminDataContext";

export default function Admin() {
  const { admins } = useContext(AdminDataContext);
  const auth = useAuth();
  return (
    <main class="flex min-h-screen flex-col bg-black">
      <Header />
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
        <p class="text-white">
          You do not have the required credentials to view this
        </p>
      </Show>
      <Footer />
    </main>
  );
}
