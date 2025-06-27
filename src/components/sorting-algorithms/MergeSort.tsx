import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { DataContext } from "~/contexts/DataContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function MergeSort() {
  const { data } = useContext(DataContext);

  const [localData, setLocalData] = createSignal<number[]>([]);
  const [isRunning, setIsRunning] = createSignal(false);

  createEffect(() => {
    setLocalData([...data()]);
  });

  function resetArray() {
    setIsRunning(false);
  }

  function mergeSort() {
    const arr = [...localData()];
    scrambleData(arr);
    const steps = startSorting(arr);
    let stepIndex = 0;
    const stepsPerTick = 10;
    setIsRunning(true);

    const interval = setInterval(() => {
      for (let i = 0; i < stepsPerTick && stepIndex < steps.length; i++) {
        setLocalData(steps[stepIndex]);
        stepIndex++;
      }
      if (stepIndex >= steps.length || !isRunning()) {
        clearInterval(interval);

        setIsRunning(false);
      }
    }, 1);
  }

  function startSorting(arr: number[]) {
    const steps: number[][] = [];

    function sort(array: number[], start: number, end: number) {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        sort(array, start, mid);
        sort(array, mid + 1, end);
        merge(array, start, mid, end);
      }
    }

    function merge(array: number[], start: number, mid: number, end: number) {
      const left = array.slice(start, mid + 1);
      const right = array.slice(mid + 1, end + 1);
      let i = 0,
        j = 0,
        k = start;

      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          array[k] = left[i++];
        } else {
          array[k] = right[j++];
        }
        steps.push([...array]);
        k++;
      }
      while (i < left.length) {
        array[k++] = left[i++];
        steps.push([...array]);
      }
      while (j < right.length) {
        array[k++] = right[j++];
        steps.push([...array]);
      }
    }
    sort([...arr], 0, arr.length - 1);
    return steps;
  }

  return (
    <SortingAlgorithmWrapper>
      <InformationPopover>
        <p>
          Merge Sort is a sorting algorithm based on the Divide and Conqueor
          technique, like Quick Sort. It can be implemented iteratively or
          recursively, using the Top-Down and Bottom-Up algorithms respectively.
          We represented the first one.
        </p>
        <p>
          The algorithm divides the data structure recursively until the
          subsequences contain only one element. At this point, the subsequences
          get merged and ordered sequentially. To do so, the algorithm
          progressively builds the sorted sublist by adding each time the
          minimum element of the next two unsorted subsequences until there is
          only one sublist remaining. This will be the sorted data structure
        </p>
      </InformationPopover>
      <div class="flex flex-col items-center h-full flex-1 text-black gap-2">
        <h1 class="sort-title">Merge sort</h1>
        <div class="flex gap-2 p-6 flex-col">
          <Show
            when={!isRunning()}
            fallback={
              <Button
                variant={"outline"}
                onClick={() => {
                  resetArray();
                }}
              >
                Stop
              </Button>
            }
          >
            <Button
              onClick={() => {
                mergeSort();
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
                class={`flex-1 z-10 bg-yellow-400`}
                style={{ height: `${(value / 1000) * 100}%` }}
              />
            )}
          </For>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
