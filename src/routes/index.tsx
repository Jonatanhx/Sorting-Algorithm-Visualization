import Banner from "~/components/Banner";
import BubbleSort from "~/components/BubbleSort";
import InsertionSort from "~/components/InsertionSort";
import MergeSort from "~/components/MergeSort";
import QuickSort from "~/components/QuickSort";
import SelectionSort from "~/components/SelectionSort";

export default function Home() {
  return (
    <main class="flex flex-col bg-[#1b1b1b] z-0 min-h-screen gap-4">
      <Banner />
      <div class="flex flex-col gap-4 items-center">
        <BubbleSort />
        <InsertionSort />
        <SelectionSort />
        <QuickSort />
        <MergeSort />
      </div>
    </main>
  );
}
