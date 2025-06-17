import Hero from "~/components/Hero";
import BubbleSort from "~/components/sorting-algorithms/BubbleSort";
import InsertionSort from "~/components/sorting-algorithms/InsertionSort";
import MergeSort from "~/components/sorting-algorithms/MergeSort";
import QuickSort from "~/components/sorting-algorithms/QuickSort";
import SelectionSort from "~/components/sorting-algorithms/SelectionSort";
import { Separator } from "~/components/ui/separator";

export default function Home() {
  return (
    <main class="relative flex flex-col min-h-screen bg-blueprint">
      <Hero />

      <section class="flex flex-col p-20 gap-20 items-center">
        <div class="flex flex-row min-w-full items-center">
          <Separator class="border-neutral-600 border-dotted" />
          <h2 class="text-neutral-200 uppercase font-semibold px-20 text-3xl">
            Quadratic
          </h2>
          <Separator class="border-neutral-600 border-dotted" />
        </div>

        <BubbleSort />

        <InsertionSort />

        <SelectionSort />

        <div class="flex flex-row min-w-full items-center">
          <Separator class="border-neutral-600 border-dotted" />
          <h2 class="text-neutral-200 uppercase font-semibold px-20 text-3xl">
            Logarithmic
          </h2>
          <Separator class="border-neutral-600 border-dotted" />
        </div>

        <QuickSort />

        <MergeSort />
      </section>
    </main>
  );
}
