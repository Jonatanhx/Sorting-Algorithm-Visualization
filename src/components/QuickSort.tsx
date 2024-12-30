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

export default function QuickSort() {
  const { countries } = useContext(CountryDataContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

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

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-4">
        <div class="flex-1" />
        <div class="flex flex-col text-white items-center">
          <h1 class="text-white text-4xl">Quick sort</h1>
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
                    disabled={isRunning() === true}
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
      <div class="flex flex-1 relative overflow-hidden">
        <div class="m-2 flex flex-1 h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
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
