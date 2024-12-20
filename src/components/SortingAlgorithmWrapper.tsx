import type { ParentProps } from "solid-js";

export default function SortingAlgorithmWrapper(props: ParentProps) {
  return (
    <div class="flex border flex-col border-black rounded-lg bg-neutral-900 mx-96">
      <div class="m-1 flex flex-col">{props.children}</div>
    </div>
  );
}
