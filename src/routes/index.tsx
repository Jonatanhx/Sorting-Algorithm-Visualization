import BubbleSort from "~/components/BubbleSort";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col bg-[#1b1b1b] z-0">
      <Header />
      <BubbleSort />
      <Footer />
    </main>
  );
}
