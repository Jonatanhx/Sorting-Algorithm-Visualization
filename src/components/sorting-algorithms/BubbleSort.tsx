import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import { scrambleData } from "~/helperFunctions";
import InformationPopover from "../InformationPopover";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function BubbleSort() {
  const { setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

  const [isRunning, setIsRunning] = createSignal<boolean>(false);
  const [sortingData, setSortingData] = createSignal<number[]>([]);

  createEffect(() => {
    const data: number[] = [];
    const dataSize = 1000;
    for (let i = 1; i <= dataSize; i++) {
      data.push(i);
    }
    scrambleData(data);
    setSortingData(data);
  });

  function resetArray() {
    setIsRunning(false);
    setIsSorting(false);
    setIsSorted(false);
  }

  function startSorting() {
    scrambleData(sortingData());

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);

    const stepsPerTick = 1000;

    let i = 0;
    let j = 0;
    const arr = [...sortingData()];

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
      setSortingData([...arr]);

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
      <div class="flex py-2 items-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Bubble sort</h1>
            <div class="flex-1">
              <InformationPopover>
                <p>
                  Bubble Sort is an iterative sorting algorithm that imitates
                  the movement of bubbles in sparkling water. The bubbles
                  represents the elements of the data structure.
                </p>
                <p>
                  The bigger bubbles reach the top faster than smaller bubbles,
                  and this algorithm works in the same way. It iterates through
                  the data structure and for each cycle compares the current
                  element with the next one, swapping them if they are in the
                  wrong order.
                </p>
                <p>
                  It's a simple algorithm to implement, but not much efficient:
                  on average, quadratic sorting algorithms with the same time
                  complexity such as Selection Sort or Insertion Sort perform
                  better. It has several variants to improve its performances,
                  such as Shaker Sort, Odd Even Sort and Comb Sort.
                </p>
              </InformationPopover>
            </div>
          </div>
          <SortingTimer isRunning={isRunning()} />
        </div>
      </div>
      <div class="flex flex-1">
        <div class="mb-1 flex flex-1 h-64 z-10 rotate-180 flex-row-reverse">
          <For each={sortingData()}>
            {(value) => (
              <div
                style={{ height: `${(value / 1000) * 100}%` }}
                class={`flex-1 z-10 w-[0px] bg-green-500`}
              />
            )}
          </For>
        </div>
      </div>

      <div class="flex h-[50px] w-[50px] flex-row items-center m-1">
        <div class="flex-1" />
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
              startSorting();
            }}
            variant={"outline"}
          >
            Start
          </Button>
        </Show>
      </div>
    </SortingAlgorithmWrapper>
  );
}
