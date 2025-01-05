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
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function InsertionSort() {
  const { countries } = useContext(CountryDataContext);
  const { setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);
  const { speed } = useContext(SortingSpeedContext);

  const [selectedDataTable, setSelectedDataTable] =
    createSignal("populationSize");
  const [array, setArray] = createSignal<country[]>([]);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);
  const [isRunning, setIsRunning] = createSignal(false);
  const [key, setKey] = createSignal<country | null>(null);

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
    setCurrentI(1);
    setCurrentJ(0);
    setKey(null);
    setIsSorting(false);
    setIsSorted(false);
  }

  function startSorting() {
    resetArray();

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(1);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];

      if (currentI() >= arr.length || !isRunning()) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        setKey(null);
        return;
      }

      if (key() === null) {
        setKey(arr[currentI()]);
        setCurrentJ(currentI() - 1);
        return;
      }

      if (
        currentJ() >= 0 &&
        arr[currentJ()][selectedDataTable() as keyof country] >
          key()![selectedDataTable() as keyof country]
      ) {
        arr[currentJ() + 1] = arr[currentJ()];
        setArray(arr);
        setCurrentJ(currentJ() - 1);
      } else {
        arr[currentJ() + 1] = key()!;
        setArray(arr);
        setKey(null);
        setCurrentI(currentI() + 1);
      }
    }, 100 / speed());
  }
  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 justify-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Insertion sort</h1>
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
                      Insertion sort is a simple sorting algorithm that builds
                      the final sorted array one item at a time. It's less
                      performant than advanced sorting algorithms, but it can
                      still have some advantages: it's really easy to implement
                      and it's efficient on small data structures almost sorted.
                    </p>
                    <p>
                      The algorithm divides the data structure in two sublists:
                      a sorted one, and one still to sort. Initially, the sorted
                      sublist is made up of just one element and it gets
                      progressively filled. For every iteration, the algorithm
                      picks an element on the unsorted sublist and inserts it at
                      the right place in the sorted sublist. It's available in
                      several variants such as Gnome Sort.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <h2>
            Currently sorting:{" "}
            <Show
              when={selectedDataTable() == "populationSize"}
              fallback={"Land Area"}
            >
              Population Size
            </Show>
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
                      index() === currentI()
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
