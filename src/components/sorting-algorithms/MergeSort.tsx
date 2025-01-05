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

export default function MergeSort() {
  const { countries } = useContext(CountryDataContext);
  const { setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);
  const { speed } = useContext(SortingSpeedContext);

  const [selectedDataTable, setSelectedDataTable] =
    createSignal("populationSize");
  const [isRunning, setIsRunning] = createSignal(false);
  const [array, setArray] = createSignal<country[]>([]);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);

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

  async function startSorting() {
    resetArray();
    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);

    const delay = () =>
      new Promise((resolve) => setTimeout(resolve, 100 / speed()));

    async function merge(
      arr: country[],
      start: number,
      mid: number,
      end: number
    ) {
      const temp = [...arr];
      let i = start;
      let j = mid + 1;
      let k = start;
      if (!isRunning() == false) {
        while (i <= mid && j <= end) {
          setCurrentI(i);
          setCurrentJ(j);
          await delay();

          if (
            temp[i][selectedDataTable() as keyof country] <=
            temp[j][selectedDataTable() as keyof country]
          ) {
            arr[k] = temp[i];
            i++;
          } else {
            arr[k] = temp[j];
            j++;
          }
          k++;
          setArray([...arr]);
        }

        while (i <= mid) {
          setCurrentI(i);
          await delay();
          arr[k] = temp[i];
          i++;
          k++;
          setArray([...arr]);
        }

        while (j <= end) {
          setCurrentJ(j);
          await delay();
          arr[k] = temp[j];
          j++;
          k++;
          setArray([...arr]);
        }
      }
    }

    async function mergeSort(arr: country[], start: number, end: number) {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid + 1, end);
        await merge(arr, start, mid, end);
      }
    }

    const arr = [...array()];
    await mergeSort(arr, 0, arr.length - 1);

    setIsSorted(true);
    setIsRunning(false);
    setIsSorting(false);
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 items-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Merge sort</h1>
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
                      Merge Sort is a sorting algorithm based on the Divide and
                      Conqueor technique, like Quick Sort. It can be implemented
                      iteratively or recursively, using the Top-Down and
                      Bottom-Up algorithms respectively. We represented the
                      first one.
                    </p>
                    <p>
                      The algorithm divides the data structure recursively until
                      the subsequences contain only one element. At this point,
                      the subsequences get merged and ordered sequentially. To
                      do so, the algorithm progressively builds the sorted
                      sublist by adding each time the minimum element of the
                      next two unsorted subsequences until there is only one
                      sublist remaining. This will be the sorted data structure
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
      <div class="flex flex-1 relative border-black overflow-hidden">
        <div class="mb-1 flex flex-1 h-64 bg-neutral-900 z-10 rotate-180 flex-row-reverse">
          <For each={array()}>
            {(country, index) => (
              <div
                class={`flex-1 z-10 border border-black ${
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
