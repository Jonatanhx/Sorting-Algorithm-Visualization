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

export default function SelectionSort() {
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

  function startSorting() {
    resetArray();

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(1);

    const sortInterval = setInterval(() => {
      const arr = [...array()];
      const n = arr.length;

      if (currentI() >= n - 1) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        return;
      }

      const i = currentI();
      let minIdx = i;
      const j = currentJ();

      if (j < n) {
        for (let k = j; k < n; k++) {
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

        setCurrentJ(j + 1);
      } else {
        setCurrentI(i + 1);
        setCurrentJ(i + 2);
      }
    }, 100);
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-4 mx-16">
        <div class="flex-1" />
        <div class="flex flex-col text-white items-center">
          <h1 class="text-white text-4xl">Selection sort</h1>
          <h2>
            Currently sorting:
            {" " + selectedDataTable()}
          </h2>
        </div>
        <div class="flex-1">
          <div class="flex justify-end">
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
                  <DropdownMenuGroupLabel>
                    Select dataset
                  </DropdownMenuGroupLabel>
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
      </div>
      <div class="flex flex-1 relative overflow-hidden mx-16">
        <div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
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
                    country[selectedDataTable() as keyof country] as number
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

      <div class="flex flex-col items-center m-1">
        <Button
          onClick={startSorting}
          disabled={isSorting() || array().length === 0}
          variant={"outline"}
        >
          Start
        </Button>

        <SortingTimer isRunning={isRunning()} />
      </div>
    </SortingAlgorithmWrapper>
  );
}
