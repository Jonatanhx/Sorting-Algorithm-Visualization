import type { ParentProps } from "solid-js";
import OpenDataTableDropDown from "./OpenDataTableDropDown";

export default function SortingAlgorithmWrapper(props: ParentProps) {
  return (
    <div class="flex border flex-col border-black rounded-lg bg-neutral-900 mx-96">
      <div class="m-1 flex flex-col">{props.children}</div>
      <div class="flex items-center justify-between">
        <OpenDataTableDropDown />
      </div>
    </div>
  );
}
