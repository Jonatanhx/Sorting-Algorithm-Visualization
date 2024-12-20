import { createSignal, onCleanup, useContext } from "solid-js";
import { IsSortingContext } from "~/contexts/IsSortingContext";
import type { SortingTimerProps } from "~/interfaces";

export default function SortingTimer(props: SortingTimerProps) {
  const [minutes, setMinutes] = createSignal(0);
  const [seconds, setSeconds] = createSignal(0);
  const [milliSeconds, setMilliSeconds] = createSignal(0);
  const { isSorting } = useContext(IsSortingContext);

  const interval = setInterval(() => {
    if (isSorting() && props.isRunning === true) {
      setMilliSeconds((ms) => {
        if (ms >= 99) {
          setSeconds((s) => {
            if (s >= 59) {
              setMinutes((m) => m + 1);
              return 0;
            }
            return s + 1;
          });
          return 0;
        }
        return ms + 1;
      });
    }
  }, 10);

  onCleanup(() => clearInterval(interval));

  return (
    <div>
      <div
        class={`font-mono ${
          props.isRunning ? "text-yellow-300" : "text-white"
        }`}
      >
        {minutes().toString().padStart(2, "0")}:
        {seconds().toString().padStart(2, "0")}:
        {milliSeconds().toString().padStart(2, "0")}
      </div>
    </div>
  );
}
