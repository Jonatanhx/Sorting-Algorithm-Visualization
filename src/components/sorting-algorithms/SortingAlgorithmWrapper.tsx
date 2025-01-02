import type { ParentProps } from "solid-js";

export default function SortingAlgorithmWrapper(props: ParentProps) {
  return (
    <div class="flex border flex-col border-neutral-600 rounded-lg bg-neutral-900 mx-96 lg:min-w-[70rem] md:min-w-[50rem] min-w-[20rem] text-center">
      <div class="m-1 flex flex-col">{props.children}</div>
    </div>
  );
}
