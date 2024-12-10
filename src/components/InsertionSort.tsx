import { createEffect, createSignal, For, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { IsSortedContext } from "~/contexts/IsSortedContext";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import type { country } from "~/interfaces";
import SortingAlgorithmWrapper from "./SortingAlgorithmWrapper";

export default function InsertionSort() {
  const { countries } = useContext(CountryDataContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { setIsSorted } = useContext(IsSortedContext);

  const [array, setArray] = createSignal<country[]>([]);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);

  createEffect(() => {
    const countryData = countries();
    if (countryData && countryData.length > 0) {
      setArray(countryData as country[]);
    }
  });

  function startSorting() {
    resetArray();

    setIsSorting(true);
    setIsSorted(false);
    setCurrentI(0);
    setCurrentJ(0);

    const sortInterval = setInterval(() => {
      const arr = [...array()];
      if (currentI() >= arr.length) {
        setIsSorted(true);
        clearInterval(sortInterval);
        setIsSorting(false);
        return;
      }

      const key = arr[currentI()];

      for (
        setCurrentI(1);
        currentI() < arr.length;
        setCurrentI(currentI() + 1)
      ) {
        setCurrentJ(currentI() - 1);

        while (currentJ() >= 0 && arr[currentJ()] > key) {
          arr[currentJ() + 1] = arr[currentJ()];
          setCurrentJ(currentJ() - 1);
        }
        arr[currentJ() + 1] = key;
      }
    }, 100);
  }

  function calculateHeight(value: number) {
    const currentArray = array();
    if (currentArray.length === 0) return "0%";

    const maxValue = Math.max(
      ...currentArray.map((country) => country.populationSize)
    );
    const percentHeight = (value / maxValue) * 100;

    return `${percentHeight}%`;
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
        <h1 class="text-white text-4xl">Insertion sort</h1>
      </div>
      <div class="relative border-black overflow-hidden">
        <div>
          <div class="m-1 relative flex h-64 bg-black border-black border-2 z-10 rotate-180 flex-row-reverse">
            <For each={array()}>
              {(country, index) => (
                <div
                  class={`flex relative z-10
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
      </div>
    </SortingAlgorithmWrapper>
  );
}
