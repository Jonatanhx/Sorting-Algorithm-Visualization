import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { Tooltip } from "@kobalte/core/tooltip";
import { IoInformationCircleOutline } from "solid-icons/io";
import { createEffect, createSignal, For, Show, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import { SortingSpeedContext } from "~/contexts/SortingSpeedContext";
import { calculateHeight } from "~/globalFunction";
import type { country } from "~/interfaces";
import SortingAlgorithmWrapper from "../sorting-algorithms/SortingAlgorithmWrapper";
import SortingTimer from "../SortingTimer";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function QuickSort() {
  const { countries } = useContext(CountryDataContext);
  const { setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);
  const { speed } = useContext(SortingSpeedContext);

  const [selectedDataTable, setSelectedDataTable] =
    createSignal("populationSize");
  const [array, setArray] = createSignal<country[]>([]);
  const [currentPivot, setCurrentPivot] = createSignal(-1);
  const [currentI, setCurrentI] = createSignal(-1);
  const [currentJ, setCurrentJ] = createSignal(-1);
  const [isRunning, setIsRunning] = createSignal(false);
  const [stack, setStack] = createSignal<[number, number][]>([]);
  const [currentPartition, setCurrentPartition] = createSignal<
    [number, number] | null
  >(null);
  const [partitionState, setPartitionState] = createSignal({
    pivotIndex: -1,
    i: -1,
    j: -1,
    isPartitioning: false,
  });

  createEffect(() => {
    const countryData = countries();
    if (countryData && countryData.length > 0) {
      setArray(countryData as country[]);
    }
  });

  function resetArray() {
    const countryData = countries();
    if (countryData && countryData.length > 0) {
      setArray(countryData as country[]);
    }

    setIsRunning(false);
    setCurrentI(-1);
    setCurrentJ(-1);
    setCurrentPivot(-1);
    setStack([]);
    setCurrentPartition(null);
    setPartitionState({
      pivotIndex: -1,
      i: -1,
      j: -1,
      isPartitioning: false,
    });
    setIsSorting(false);
    setIsSorted(false);
  }

  function startSorting() {
    resetArray();
    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);

    setStack([[0, array().length - 1]]);
    setCurrentPartition(null);
    setPartitionState({
      pivotIndex: -1,
      i: -1,
      j: -1,
      isPartitioning: false,
    });

    const sortInterval = setInterval(() => {
      const currentStack = stack();
      const current = currentPartition();
      const state = partitionState();

      if (!state.isPartitioning && !current) {
        if (currentStack.length === 0) {
          clearInterval(sortInterval);
          setIsRunning(false);
          setIsSorting(false);
          setIsSorted(true);
          setCurrentPivot(-1);
          setCurrentI(-1);
          setCurrentJ(-1);
          return;
        }
        const nextPartition = currentStack[currentStack.length - 1];
        setStack(currentStack.slice(0, -1));
        setCurrentPartition(nextPartition);

        const [low, high] = nextPartition;
        setPartitionState({
          pivotIndex: high,
          i: low - 1,
          j: low,
          isPartitioning: true,
        });
        setCurrentPivot(high);
      } else if (state.isPartitioning && current) {
        const [low, high] = current;
        const arr = [...array()];

        if (state.j < high) {
          if (
            arr[state.j][selectedDataTable() as keyof country] <
            arr[state.pivotIndex][selectedDataTable() as keyof country]
          ) {
            const newI = state.i + 1;
            [arr[newI], arr[state.j]] = [arr[state.j], arr[newI]];
            setArray(arr);
            setPartitionState({
              ...state,
              i: newI,
              j: state.j + 1,
            });
          } else {
            setPartitionState({
              ...state,
              j: state.j + 1,
            });
          }
          setCurrentI(state.i);
          setCurrentJ(state.j);
        } else {
          const pivotPos = state.i + 1;
          [arr[pivotPos], arr[high]] = [arr[high], arr[pivotPos]];
          setArray(arr);

          const newStack = [...stack()];
          if (pivotPos - 1 > low) {
            newStack.push([low, pivotPos - 1]);
          }
          if (pivotPos + 1 < high) {
            newStack.push([pivotPos + 1, high]);
          }
          setStack(newStack);

          setCurrentPartition(null);
          setPartitionState({
            pivotIndex: -1,
            i: -1,
            j: -1,
            isPartitioning: false,
          });
        }
      }
    }, 100 / speed());
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 justify-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Quick sort</h1>
            <div class="flex-1">
              <Tooltip>
                <div class="flex flex-1 w-full justify-end text-white">
                  <TooltipTrigger>
                    <IoInformationCircleOutline class="size-5 mr-1" />
                  </TooltipTrigger>
                </div>
                <TooltipContent class="max-w-[20rem] border border-neutral-400 bg-neutral-700">
                  <div class="gap-2 flex flex-col text-sm">
                    <p>
                      Quick Sort is a sorting algorithm based on splitting the
                      data structure in smaller partitions and sort them
                      recursively until the data structure is sorted.
                    </p>
                    <p>
                      This division in partitions is done based on an element,
                      called pivot: all the elements bigger than the pivot get
                      placed on the right side of the structure, the smaller
                      ones to the left, creating two partitions. Next, this
                      procedure gets applied recursively to the two partitions
                      and so on.
                    </p>
                    <p>
                      This partition technique based on the pivot is called
                      Divide and conquer. It's a performant strategy also used
                      by other sorting algorithms, such as Merge Sort.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <h2>
            Currently sorting:
            {" " + selectedDataTable()}
          </h2>
          <SortingTimer isRunning={isRunning()} />
        </div>
      </div>
      <div class="flex flex-1 relative overflow-hidden">
        <div class="mb-1 flex flex-1 h-64 bg-neutral-900 z-10 rotate-180 flex-row-reverse">
          <For each={array()}>
            {(country, index) => (
              <div
                class={`flex-1 z-10 border border-black
                    ${
                      index() === currentPivot()
                        ? "bg-red-600"
                        : index() === currentI()
                        ? "bg-red-600"
                        : index() === currentJ() || index() === currentJ() + 1
                        ? "bg-red-600"
                        : "bg-white"
                    }`}
                style={{
                  height: calculateHeight(
                    country[selectedDataTable() as keyof country] as number,
                    array(),
                    selectedDataTable() as keyof country
                  ),
                }}
              />
            )}
          </For>
        </div>
      </div>

      <div class="flex flex-row items-center m-1">
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

        <div class="flex justify-end flex-1">
          <DropdownMenu placement="bottom">
            <DropdownMenuTrigger
              as={(props: DropdownMenuSubTriggerProps) => (
                <Button
                  variant="outline"
                  {...props}
                  disabled={isRunning() == true}
                >
                  Select dataset
                </Button>
              )}
            />
            <DropdownMenuContent class="w-56">
              <DropdownMenuGroup>
                <DropdownMenuGroupLabel>Select dataset</DropdownMenuGroupLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedDataTable()}
                  onChange={setSelectedDataTable}
                >
                  <DropdownMenuRadioItem value="populationSize">
                    Population Size
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="landArea">
                    Land Area in km2
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </SortingAlgorithmWrapper>
  );
}
