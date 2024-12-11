import type { ParentProps } from "solid-js";
import OpenDataTableDropDown from "./OpenDataTableDropDown";

export default function SortingAlgorithmWrapper(props: ParentProps) {
  return (
    <div class="border border-black rounded-lg bg-neutral-900">
      <div class="m-1 flex flex-col items-center">{props.children}</div>
      <div class="flex items-center justify-between">
        <OpenDataTableDropDown />
      </div>
    </div>
  );
}
