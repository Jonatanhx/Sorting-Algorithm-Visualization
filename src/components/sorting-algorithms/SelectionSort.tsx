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

export default function SelectionSort() {
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
    setCurrentI(0);
    setCurrentJ(0);
    setIsSorting(false);
    setIsSorted(false);
  }

  function startSorting() {
    resetArray();
    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];
      const n = arr.length;
      const i = currentI();
      const j = currentJ();

      if (i >= n - 1 || !isRunning()) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        return;
      }

      if (j >= n) {
        let minIdx = i;
        for (let k = i + 1; k < n; k++) {
          if (
            arr[k][selectedDataTable() as keyof country] <
            arr[minIdx][selectedDataTable() as keyof country]
          ) {
            minIdx = k;
          }
        }

        if (minIdx !== i) {
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
          setArray(arr);
        }

        setCurrentI(i + 1);
        setCurrentJ(i + 1);
        return;
      }

      setCurrentJ(j + 1);
    }, 100 / speed());
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 justify-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Selection sort</h1>
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
                      Selection Sort is an iterative and in-place sorting
                      algorithm that divides the data structure in two sublists:
                      the ordered one, and the unordered one. The algorithm
                      loops for all the elements of the data structure and for
                      every cycle picks the smallest element of the unordered
                      sublist and adds it to the sorted sublist, progressively
                      filling it.
                    </p>
                    <p>
                      It's a really simple and intuitive algorithm that does not
                      require additional memory, but it's not really efficient
                      on big data structures due to its quadratic time
                      complexity.
                    </p>
                    <p>
                      This algorithm has been upgraded and enhanced in several
                      variants such as Heap Sort.
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
