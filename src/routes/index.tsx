import BubbleSort from "~/components/BubbleSort";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import InsertionSort from "~/components/InsertionSort";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col bg-[#1b1b1b] z-0">
      <Header />
      <div class="flex">
        <div class="flex-1" id="empty-div" />
        <div class="flex flex-col">
          <BubbleSort />
          <InsertionSort />
        </div>
        <div class="flex-1" id="empty-div" />
      </div>
      <Footer />
    </main>
  );
}
