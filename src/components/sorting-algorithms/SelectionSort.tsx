import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { DataContext } from "~/contexts/DataContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingAlgorithmWrapper from "../sorting-algorithms/SortingAlgorithmWrapper";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";

export default function SelectionSort() {
  const { data } = useContext(DataContext);

  const [isRunning, setIsRunning] = createSignal(false);
  const [localData, setLocalData] = createSignal<number[]>([]);

  createEffect(() => {
    setLocalData([...data()]);
  });

  function stopSorting() {
    setIsRunning(false);
  }

  function selectionSort() {
    const arr = [...localData()];
    scrambleData(arr);

    setIsRunning(true);

    const stepsPerTick = 1000;
    let i = 0;
    let j = i + 1;
    let minIdx = i;

    const sortInterval = setInterval(() => {
      let steps = 0;
      if (!isRunning()) {
        clearInterval(sortInterval);
        setIsRunning(false);
        return;
      }

      if (i >= arr.length - 1) {
        clearInterval(sortInterval);
        setIsRunning(false);
        return;
      }

      while (j < arr.length && steps < stepsPerTick) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }

        j++;
        steps++;
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setLocalData([...arr]);
      }

      i++;
      j = i + 1;
      minIdx = i;
    }, 1);
  }

  return (
    <SortingAlgorithmWrapper>
      <InformationPopover>
        <p>
          Selection Sort is an iterative and in-place sorting algorithm that
          divides the data structure in two sublists: the ordered one, and the
          unordered one. The algorithm loops for all the elements of the data
          structure and for every cycle picks the smallest element of the
          unordered sublist and adds it to the sorted sublist, progressively
          filling it.
        </p>
        <p>
          It's a really simple and intuitive algorithm that does not require
          additional memory, but it's not really efficient on big data
          structures due to its quadratic time complexity.
        </p>
        <p>
          This algorithm has been upgraded and enhanced in several variants such
          as Heap Sort.
        </p>
      </InformationPopover>
      <div class="flex flex-col items-center h-full flex-1 text-black gap-2">
        <h1 class="sort-title">Selection sort</h1>
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
                selectionSort();
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
                class={`flex-1 z-10 w-[0px] bg-orange-500`}
                style={{ height: `${(value / 1000) * 100}%` }}
              />
            )}
          </For>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
