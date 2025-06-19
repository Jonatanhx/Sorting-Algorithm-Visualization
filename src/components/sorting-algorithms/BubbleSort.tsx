import { createSignal, For, Show, useContext } from "solid-js";
import { DataContext } from "~/contexts/DataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function BubbleSort() {
  const { data, setData } = useContext(DataContext);
  const { setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);
  const [isRunning, setIsRunning] = createSignal<boolean>(false);

  function stopSorting() {
    setIsRunning(false);
    setIsSorting(false);
    setIsSorted(false);
  }

  function bubbleSort() {
    const arr = [...data()];
    scrambleData(arr);

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(true);

    const stepsPerTick = 1000;
    let i = 0;
    let j = 0;

    const sortInterval = setInterval(() => {
      let steps = 0;
      while (i < arr.length - 1 && steps < stepsPerTick) {
        if (j < arr.length - i - 1) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
          j++;
        } else {
          j = 0;
          i++;
        }
        steps++;
      }
      setData([...arr]);

      if (i >= arr.length - 1 || !isRunning()) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
      }
    }, 1);
  }

  return (
    <SortingAlgorithmWrapper>
      <InformationPopover>
        <p>
          Bubble Sort is an iterative sorting algorithm that imitates the
          movement of bubbles in sparkling water. The bubbles represents the
          elements of the data structure.
        </p>
        <p>
          The bigger bubbles reach the top faster than smaller bubbles, and this
          algorithm works in the same way. It iterates through the data
          structure and for each cycle compares the current element with the
          next one, swapping them if they are in the wrong order.
        </p>
        <p>
          It's a simple algorithm to implement, but not much efficient: on
          average, quadratic sorting algorithms with the same time complexity
          such as Selection Sort or Insertion Sort perform better. It has
          several variants to improve its performances, such as Shaker Sort, Odd
          Even Sort and Comb Sort.
        </p>
      </InformationPopover>
      <div class="flex flex-col items-center h-full flex-1 text-black gap-2">
        <h1 class="text-white text-4xl">Bubble sort</h1>
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
                bubbleSort();
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
          <For each={data()}>
            {(value) => (
              <div
                style={{ height: `${(value / 1000) * 100}%` }}
                class={`flex-1 z-10 w-[0px] bg-green-500`}
              />
            )}
          </For>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
