import { Popover } from "@kobalte/core/popover";
import { IoInformationCircleOutline } from "solid-icons/io";
import type { ParentProps } from "solid-js";
import { PopoverContent, PopoverTrigger } from "./ui/popover";

export default function informationPopover(props: ParentProps) {
  return (
    <Popover>
      <PopoverTrigger aria-label="Information" class="text-white w-5 self-end">
        <span class="hidden">i</span>
        <IoInformationCircleOutline
          class="size-5"
          aria-label="Information icon"
        />
      </PopoverTrigger>

      <PopoverContent class="text-white max-w-[20rem] border p-6 border-neutral-400 bg-neutral-700">
        <div class="gap-2 flex flex-col text-sm text-white">
          {props.children}
        </div>
      </PopoverContent>
    </Popover>
  );
}
