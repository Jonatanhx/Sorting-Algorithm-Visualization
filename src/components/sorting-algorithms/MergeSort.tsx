import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { createEffect, createSignal, For, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
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
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function MergeSort() {
  const { countries } = useContext(CountryDataContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

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
    setCurrentI(0);
    setCurrentJ(0);
    setIsSorting(false);
    setIsSorted(false);
  }

  function startSorting() {
    resetArray();

    if (isSorting() || array().length === 0) {
      return;
    }

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);

    const arr = [...array()];
    const n = arr.length;
    let currentSize = 1;

    const sortInterval = setInterval(() => {
      if (currentSize > n) {
        setArray(arr);
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        return;
      }

      for (let start = 0; start < n - 1; start += 2 * currentSize) {
        const mid = Math.min(start + currentSize - 1, n - 1);
        const end = Math.min(start + 2 * currentSize - 1, n - 1);

        merge(arr, start, mid, end);
      }

      currentSize *= 2;
      setArray([...arr]);
    }, 100);
  }

  function merge(arr: country[], start: number, mid: number, end: number) {
    const leftArr = arr.slice(start, mid + 1);
    const rightArr = arr.slice(mid + 1, end + 1);
    let i = 0,
      j = 0,
      k = start;

    while (i < leftArr.length && j < rightArr.length) {
      setCurrentI(start + i);
      setCurrentJ(mid + 1 + j);

      if (
        leftArr[i][selectedDataTable() as keyof country] <=
        rightArr[j][selectedDataTable() as keyof country]
      ) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }
    }

    while (i < leftArr.length) {
      setCurrentI(start + i);
      arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
      setCurrentJ(mid + 1 + j);
      arr[k++] = rightArr[j++];
    }
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 justify-center">
        <div class="flex flex-col text-white items-center">
          <h1 class="text-white text-4xl">Merge sort</h1>
          <h2>
            Currently sorting:
            {" " + selectedDataTable()}
          </h2>
          <SortingTimer isRunning={isRunning()} />
        </div>
      </div>
      <div class="flex flex-1 relative border-black overflow-hidden">
        <div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
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
        <div
          class={`gradient-border ${isRunning() ? "animation-snake" : ""}`}
        />
      </div>

      <div class="flex flex-row items-center m-1">
        <div class="flex-1" />
        <Button
          onClick={startSorting}
          disabled={isSorting() || array().length === 0}
          variant={"outline"}
        >
          Start
        </Button>

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
