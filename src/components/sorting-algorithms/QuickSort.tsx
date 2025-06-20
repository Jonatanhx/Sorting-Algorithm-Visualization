import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { DataContext } from "~/contexts/DataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingAlgorithmWrapper from "../sorting-algorithms/SortingAlgorithmWrapper";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";

export default function QuickSort() {
  const { data } = useContext(DataContext);
  const { setIsSorted } = useContext(IsSortedContext);

  const [isRunning, setIsRunning] = createSignal(false);
  const [localData, setLocalData] = createSignal<number[]>([]);

  createEffect(() => {
    setLocalData([...data()]);
  });

  function stopSorting() {
    setIsRunning(false);
    setIsSorted(false);
  }
  function quickSort() {
    const arr = [...localData()];
    scrambleData(arr);
    setIsRunning(true);
    setIsSorted(false);

    const stack = [[0, arr.length - 1]];

    const stepsPerTick = 1;

    const sortInterval = setInterval(() => {
      let steps = 0;

      while (stack.length > 0 && steps < stepsPerTick) {
        const item = stack.pop();
        if (!item) {
          break;
        }
        const [low, high] = item;
        if (low < high) {
          const pi = partition(arr, low, high);

          stack.push([pi + 1, high]);
          stack.push([low, pi - 1]);
        }
        steps++;
      }

      setLocalData([...arr]);

      if (stack.length === 0 || !isRunning()) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
      }
    }, 1);

    function partition(arr: number[], low: number, high: number) {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }
  }

  return (
    <SortingAlgorithmWrapper>
      <InformationPopover>
        <p>
          Quick Sort is a sorting algorithm based on splitting the data
          structure in smaller partitions and sort them recursively until the
          data structure is sorted.
        </p>
        <p>
          This division in partitions is done based on an element, called pivot:
          all the elements bigger than the pivot get placed on the right side of
          the structure, the smaller ones to the left, creating two partitions.
          Next, this procedure gets applied recursively to the two partitions
          and so on.
        </p>
        <p>
          This partition technique based on the pivot is called Divide and
          conquer. It's a performant strategy also used by other sorting
          algorithms, such as Merge Sort.
        </p>
      </InformationPopover>
      <div class="flex flex-col items-center h-full flex-1 text-black gap-2">
        <h1 class="sort-title">Quick sort</h1>
        <div class="flex gap-2 p-6 flex-col">
          <Show
            when={!isRunning()}
            fallback={
              <Button
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
              onClick={() => {
                quickSort();
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
                class={`flex-1 z-10 w-[0px] bg-blue-500`}
                style={{ height: `${(value / 1000) * 100}%` }}
              />
            )}
          </For>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
