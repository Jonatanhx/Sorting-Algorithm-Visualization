import Banner from "~/components/Banner";
import BubbleSort from "~/components/sorting-algorithms/BubbleSort";
import InsertionSort from "~/components/sorting-algorithms/InsertionSort";
import MergeSort from "~/components/sorting-algorithms/MergeSort";
import QuickSort from "~/components/sorting-algorithms/QuickSort";
import SelectionSort from "~/components/sorting-algorithms/SelectionSort";

export default function Home() {
  return (
    <main class="flex flex-col z-0 min-h-screen gap-4">
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
