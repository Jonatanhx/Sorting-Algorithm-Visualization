import { Popover } from "@kobalte/core/popover";
import { IoInformationCircleOutline } from "solid-icons/io";
import type { ParentProps } from "solid-js";
import { PopoverContent, PopoverTrigger } from "./ui/popover";

export default function informationPopover(props: ParentProps) {
  return (
    <Popover>
      <div class="flex flex-1 w-full justify-end text-white">
        <PopoverTrigger class="mr-1">
          <IoInformationCircleOutline class="size-5" />
        </PopoverTrigger>
      </div>
      <PopoverContent class="max-w-[20rem] border border-neutral-400 bg-neutral-700">
        <div class="gap-2 flex flex-col text-sm text-white">
          {props.children}
        </div>
      </PopoverContent>
    </Popover>
  );
}
