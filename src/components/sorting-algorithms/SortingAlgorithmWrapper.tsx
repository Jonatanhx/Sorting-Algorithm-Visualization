import type { ParentProps } from "solid-js";

export default function SortingAlgorithmWrapper(props: ParentProps) {
  return (
    <div class="flex h-[500px] border flex-col border-neutral-600 rounded-lg bg-neutral-900 text-center z-40 p-2">
      <div class="flex flex-col">{props.children}</div>
    </div>
  );
}
