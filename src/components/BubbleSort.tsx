import { createEffect, createResource, createSignal, For } from "solid-js";
import { db } from "~/server/db";

export default function BubbleSort() {
  const [countries] = createResource(async () => {
    const populationData = await db.countries.findMany({
      select: { populationSize: true },
    });

    return populationData.map((country) => country.populationSize);
  });

  const [array, setArray] = createSignal<number[]>([]);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);
  const [isSorting, setIsSorting] = createSignal(false);
  const [isSorted, setIsSorted] = createSignal(false);

  createEffect(() => {
    const populationSizes = countries();
    if (populationSizes && populationSizes.length > 0) {
      setArray(populationSizes);
    }
  });

  function calculateHeight(value: number) {
    const currentArray = array();
    if (currentArray.length === 0) return "20%";

    const maxValue = Math.max(...currentArray);
    const normalizedHeight = Math.max(
      20,
      Math.min(80, (value / maxValue) * 80)
    );
    return `${normalizedHeight}%`;
  }

  function startSorting() {
    const currentArray = array();
    if (isSorting() || currentArray.length === 0) return;

    setIsSorting(true);
    setIsSorted(false);

    const sortInterval = setInterval(() => {
      const arr = [...currentArray];
      let swapped = false;

      if (currentI() < arr.length) {
        if (currentJ() < arr.length - currentI() - 1) {
          if (arr[currentJ()] > arr[currentJ() + 1]) {
            const newArr = [...arr];
            [newArr[currentJ()], newArr[currentJ() + 1]] = [
              newArr[currentJ() + 1],
              newArr[currentJ()],
            ];
            setArray(newArr);
            swapped = true;
          }

          setCurrentJ((j) => j + 1);
        } else {
          setCurrentJ(0);
          setCurrentI((i) => i + 1);
        }

        // Check if fully sorted
        if (currentI() === arr.length - 1 && !swapped) {
          setIsSorted(true);
          clearInterval(sortInterval);
          setIsSorting(false);
        }
      } else {
        setCurrentI(0);
      }
    }, 50); //speed of sorting
  }

  function resetArray() {
    const populationSizes = countries();
    if (populationSizes && populationSizes.length > 0) {
      setArray(populationSizes);
    }
    setCurrentI(0);
    setCurrentJ(0);
    setIsSorting(false);
    setIsSorted(false);
  }

  return (
    <div class="p-4 border border-black my-12 flex flex-col-reverse bg-black items-center">
      <div class="flex p-4">
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
        {countries.loading && <div class="text-white ml-2">Loading...</div>}
        {isSorted() && <div class="text-green-500 ml-2">Sorted!</div>}
      </div>
      <div class="flex gap-2 p-4 h-64">
        <For each={array()}>
          {(num, index) => (
            <div
              class={`w-10 h-36 flex items-center justify-center border 
                ${
                  index() === currentJ() || index() === currentJ() + 1
                    ? "bg-yellow-300"
                    : "bg-white p-2"
                }`}
              style={{
                height: calculateHeight(num),
              }}
            >
              {num}
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
