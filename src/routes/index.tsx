import BubbleSort from "~/components/BubbleSort";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import InsertionSort from "~/components/InsertionSort";

export default function Home() {
  return (
    <main class="flex flex-col bg-[#1b1b1b] z-0">
      <Header />
      <div class="flex flex-col">
        <BubbleSort />
        <InsertionSort />
      </div>
      <Footer />
    </main>
  );
}
