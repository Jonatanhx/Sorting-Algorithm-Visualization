import { createSignal, For } from "solid-js";

export default function BubbleSortVisualization() {
  const originalArray = [
    507, 228, 877, 1231, 155, 633, 2201, 249, 741, 112, 1505,
  ];
  const [array, setArray] = createSignal(originalArray);
  const [currentI, setCurrentI] = createSignal(0);
  const [currentJ, setCurrentJ] = createSignal(0);
  const [isSorting, setIsSorting] = createSignal(false);
  const [isSorted, setIsSorted] = createSignal(false);

  function calculateHeight(value: number) {
    const maxValue = Math.max(...array());
    const normalizedHeight = Math.max(
      20,
      Math.min(80, (value / maxValue) * 80)
    );
    return `${normalizedHeight}%`;
  }

  function startSorting() {
    if (isSorting()) return;
    setIsSorting(true);
    setIsSorted(false);

    const sortInterval = setInterval(() => {
      const arr = [...array()];
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
    setArray(originalArray);
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
          disabled={isSorting()}
          class="bg-blue-500 text-white px-4 py-2"
        >
          Start Sorting
        </button>
        <button onClick={resetArray} class="bg-gray-500 text-white px-4 py-2">
          Reset Array
        </button>
        {isSorted() && <div class="text-green-500">Sorted!</div>}
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
