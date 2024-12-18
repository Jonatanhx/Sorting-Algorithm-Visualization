import Banner from "~/components/Banner";
import BubbleSort from "~/components/BubbleSort";
import InsertionSort from "~/components/InsertionSort";

export default function Home() {
  return (
    <main class="flex flex-col bg-[#1b1b1b] z-0 h-screen">
      <Banner />
      <div class="flex justify-center flex-col flex-1">
        <BubbleSort />
        <InsertionSort />
      </div>
    </main>
  );
}
