import { createEffect, createSignal, For, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import type { country } from "~/interfaces";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";
import SortingTimer from "./SortingTimer";

export default function BubbleSort() {
  const { countries } = useContext(CountryDataContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

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

  function calculateHeight(value: number) {
    const currentArray = array();
    if (currentArray.length === 0) return "0%";

    const maxValue = Math.max(
      ...currentArray.map((country) => country.populationSize)
    );
    const percentHeight = (value / maxValue) * 100;

    return `${percentHeight}%`;
  }

  function startSorting() {
    resetArray();

    const currentArray = array();
    if (isSorting() || currentArray.length === 0) {
      return;
    }

    setIsRunning(true);
    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];

      if (currentI() >= arr.length - 1) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsSorting(false);
        return;
      }

      if (currentJ() < arr.length - currentI() - 1) {
        if (
          arr[currentJ()].populationSize > arr[currentJ() + 1].populationSize
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
    }, 100);
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
      <div class="flex p-4">
        <h1 class="text-white text-4xl">Bubble sort</h1>
      </div>
      <div class="relative border-black overflow-hidden">
        <div>
          <div class="m-1 relative flex h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
            <For each={array()}>
              {(country, index) => (
                <div
                  class={`flex w-12 relative z-10
                    ${
                      index() === currentJ() || index() === currentJ() + 1
                        ? "bg-yellow-300"
                        : "bg-white p-2"
                    }`}
                  style={{
                    height: calculateHeight(country.populationSize),
                  }}
                />
              )}
            </For>
          </div>
          <div
            class={`gradient-border blur-sm ${
              isSorting() ? "animation-snake" : ""
            }`}
          />
        </div>
      </div>

      <div>
        <button
          onClick={startSorting}
          disabled={isSorting() || array().length === 0}
          class="bg-blue-500 text-white px-4 py-2 mr-2"
        >
          Start
        </button>
        <SortingTimer isRunning={isRunning()} />
      </div>
    </SortingAlgorithmWrapper>
  );
}
