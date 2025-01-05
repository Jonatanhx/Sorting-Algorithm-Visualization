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

export default function BubbleSort() {
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

  function startSorting() {
    resetArray();

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];

      if (currentI() >= arr.length - 1 || !isRunning()) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsRunning(false);
        setIsSorting(false);
        return;
      }

      if (currentJ() < arr.length - currentI() - 1) {
        if (
          arr[currentJ()][selectedDataTable() as keyof country] >
          arr[currentJ() + 1][selectedDataTable() as keyof country]
        ) {
          const newArr = [...arr];
          [newArr[currentJ()], newArr[currentJ() + 1]] = [
            newArr[currentJ() + 1],
            newArr[currentJ()],
          ];
          setArray(newArr);
        }

        setCurrentJ((j) => j + 1);
      } else {
        setCurrentJ(0);
        setCurrentI((i) => i + 1);
      }
    }, 100 / speed());
  }

  return (
    <SortingAlgorithmWrapper>
      <div class="flex py-2 items-center">
        <div class="flex flex-col flex-1 text-white gap-2">
          <div class="flex">
            <div class="flex-1" />
            <h1 class="text-white text-4xl flex-1 mt-4">Bubble sort</h1>
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
                      Bubble Sort is an iterative sorting algorithm that
                      imitates the movement of bubbles in sparkling water. The
                      bubbles represents the elements of the data structure.
                    </p>
                    <p>
                      The bigger bubbles reach the top faster than smaller
                      bubbles, and this algorithm works in the same way. It
                      iterates through the data structure and for each cycle
                      compares the current element with the next one, swapping
                      them if they are in the wrong order.
                    </p>
                    <p>
                      It's a simple algorithm to implement, but not much
                      efficient: on average, quadratic sorting algorithms with
                      the same time complexity such as Selection Sort or
                      Insertion Sort perform better. It has several variants to
                      improve its performances, such as Shaker Sort, Odd Even
                      Sort and Comb Sort.
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
        <div class="mb-1 flex flex-1 h-64 bg-neutral-900 z-10 rotate-180 flex-row-reverse ">
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
