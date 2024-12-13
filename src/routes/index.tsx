import BubbleSort from "~/components/BubbleSort";
import InsertionSort from "~/components/InsertionSort";

export default function Home() {
  return (
    <main class="flex flex-col bg-[#1b1b1b] z-0">
      <BubbleSort />
      <InsertionSort />
    </main>
  );
}
