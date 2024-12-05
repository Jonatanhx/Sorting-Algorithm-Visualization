import { createEffect, createSignal, For, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import type { country } from "~/interfaces";

export default function BubbleSort() {
  const { countries } = useContext(CountryDataContext);

  const [array, setArray] = createSignal<country[]>([]);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);
  const [isSorting, setIsSorting] = createSignal(false);
  const [isSorted, setIsSorted] = createSignal(false);

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
    const currentArray = array();
    if (isSorting() || currentArray.length === 0) return;

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
    }, 50);
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
    <div class="p-4 mx-72 my-12 flex flex-col bg-black items-center">
      <div class="flex p-4">
        <h1 class="text-white text-4xl">Bubble sort</h1>

        {countries.loading && <div class="text-white ml-2">Loading...</div>}
      </div>
      <div
        class={`flex gap-2 p-4 h-64 border border-${
          isSorting() ? "green-500" : "red-500"
        }`}
      >
        <For each={array()}>
          {(country, index) => (
            <div
              class={`w-16
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
      <div>
        <button
          onClick={startSorting}
          disabled={isSorting() || array().length === 0}
          class="bg-blue-500 text-white px-4 py-2 mr-2"
        >
          Start
        </button>
        <button
          onClick={resetArray}
          disabled={array().length === 0}
          class="bg-gray-500 text-white px-4 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
