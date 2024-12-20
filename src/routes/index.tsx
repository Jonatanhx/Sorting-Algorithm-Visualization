import Banner from "~/components/Banner";
import BubbleSort from "~/components/BubbleSort";
import InsertionSort from "~/components/InsertionSort";

export default function Home() {
  return (
    <main class="flex flex-col bg-[#1b1b1b] z-0 min-h-screen">
      <Banner />
      <BubbleSort />
      <InsertionSort />
    </main>
  );
}
