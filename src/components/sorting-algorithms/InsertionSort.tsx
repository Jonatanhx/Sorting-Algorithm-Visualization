import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { DataContext } from "~/contexts/DataContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function InsertionSort() {
  const { data } = useContext(DataContext);

  const [isRunning, setIsRunning] = createSignal(false);
  const [localData, setLocalData] = createSignal<number[]>([]);

  createEffect(() => {
    setLocalData([...data()]);
  });

  function stopSorting() {
    setIsRunning(false);
  }

  function insertionSort() {
    const arr = [...localData()];
    scrambleData(arr);
    setIsRunning(true);

    let i = 1;
    const sortInterval = setInterval(() => {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;

      setLocalData([...arr]);
      i++;

      if (i >= arr.length || !isRunning()) {
        clearInterval(sortInterval);
        setIsRunning(false);
      }
    }, 1);
  }

  return (
    <SortingAlgorithmWrapper>
      <InformationPopover>
        <p>
          Insertion sort is a simple sorting algorithm that builds the final
          sorted array one item at a time. It's less performant than advanced
          sorting algorithms, but it can still have some advantages: it's really
          easy to implement and it's efficient on small data structures almost
          sorted.
        </p>
        <p>
          The algorithm divides the data structure in two sublists: a sorted
          one, and one still to sort. Initially, the sorted sublist is made up
          of just one element and it gets progressively filled. For every
          iteration, the algorithm picks an element on the unsorted sublist and
          inserts it at the right place in the sorted sublist. It's available in
          several variants such as Gnome Sort.
        </p>
      </InformationPopover>
      <div class="flex flex-col items-center h-full flex-1 text-black gap-2">
        <h1 class="sort-title">Insertion sort</h1>
        <div class="flex gap-2 p-6 flex-col">
          <Show
            when={!isRunning()}
            fallback={
              <Button
                class="w-48 hover:bg-white/80"
                variant={"outline"}
                onClick={() => {
                  stopSorting();
                }}
              >
                Stop
              </Button>
            }
          >
            <Button
              class="w-48 font-semibold hover:bg-white/80"
              onClick={() => {
                insertionSort();
              }}
              variant={"outline"}
            >
              Start
            </Button>
          </Show>

          <SortingTimer isRunning={isRunning()} />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-1 h-64 z-10 rotate-180 flex-row-reverse">
          <For each={localData()}>
            {(value) => (
              <div
                class={`flex-1 z-10 w-[0px] bg-fuchsia-500`}
                style={{ height: `${(value / 1000) * 100}%` }}
              />
            )}
          </For>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
