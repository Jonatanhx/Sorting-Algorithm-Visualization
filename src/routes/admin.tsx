import AdminDatatable from "~/components/AdminDataTable";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Admin() {
  return (
    <main class="flex min-h-screen flex-col bg-black">
      <Header />
      <AdminDatatable />
      <Footer />
    </main>
  );
}
