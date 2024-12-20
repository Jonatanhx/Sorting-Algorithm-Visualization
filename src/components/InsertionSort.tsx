import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { createEffect, createSignal, For, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import type { country } from "~/interfaces";
import { Button } from "../components/ui/button";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";
import SortingTimer from "./SortingTimer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function InsertionSort() {
  const { countries } = useContext(CountryDataContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

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

  function startSorting() {
    resetArray();

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];
      if (currentI() >= arr.length) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        return;
      }

      const key = arr[currentI()];
      let j = currentI() - 1;

      while (
        j >= 0 &&
        arr[j][selectedDataTable() as keyof country] >
          key[selectedDataTable() as keyof country]
      ) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;

      setArray(arr);
      setCurrentJ(j + 1);
      setCurrentI(currentI() + 1);
    }, 100);
  }

  function calculateHeight(value: number) {
    const currentArray = array();
    const values = currentArray.map(
      (country) => country[selectedDataTable() as keyof country] as number
    );

    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

    return `${Math.max(5, Math.min(percentage))}%`;
  }

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

  return (
    <SortingAlgorithmWrapper>
      <div class="flex p-4 justify-center">
        <h1 class="text-white text-4xl">Insertion sort</h1>
      </div>
      <div class="flex flex-1 relative border-black overflow-hidden">
        <div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
          <For each={array()}>
            {(country, index) => (
              <div
                class={`flex-1 z-10 border border-black
                    ${
                      index() === currentJ() || index() === currentJ() + 1
                        ? "bg-cyan-500 "
                        : "bg-white"
                    }`}
                style={{
                  height: calculateHeight(
                    country[selectedDataTable() as keyof country] as number
                  ),
                }}
              />
            )}
          </For>
        </div>
        <div
          class={`gradient-border blur-sm ${
            isRunning() ? "animation-snake" : ""
          }`}
        />
      </div>
      <div>
        <button
          onClick={startSorting}
          disabled={isSorting() || array().length === 0 || isRunning()}
          class="bg-blue-500 text-white px-4 py-2 mr-2"
        >
          Start
        </button>
        <SortingTimer isRunning={isRunning()} />
      </div>
      <div>
        <DropdownMenu placement="bottom">
          <DropdownMenuTrigger
            as={(props: DropdownMenuSubTriggerProps) => (
              <Button variant="outline" {...props}>
                Select dataset
              </Button>
            )}
          />
          <DropdownMenuContent class="w-56">
            <DropdownMenuGroup>
              <DropdownMenuGroupLabel>Select data set</DropdownMenuGroupLabel>
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
    </SortingAlgorithmWrapper>
  );
}
