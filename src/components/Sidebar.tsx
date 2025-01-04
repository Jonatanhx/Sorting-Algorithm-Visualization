import { BsChevronCompactLeft } from "solid-icons/bs";
import { createSignal } from "solid-js";
import { setActiveSection } from "./Navbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export default function Sidebar() {
  const [open, setOpen] = createSignal<boolean>(false);

  return (
    <Sheet open={open()} onOpenChange={setOpen}>
      <SheetTrigger
        class="top-0 left-0 w-10 fixed h-screen"
        onMouseEnter={() => setOpen(true)}
      >
        <BsChevronCompactLeft class="text-white size-16 rotate-180" />
      </SheetTrigger>

      <SheetContent
        class="bg-neutral-950"
        side="left"
        onMouseLeave={() => setOpen(false)}
      >
        <SheetHeader>
          <SheetDescription class="flex flex-col">
            <button class="p-4" onClick={() => setActiveSection("bubble-sort")}>
              Bubble Sort
            </button>

            <button class="p-4" onClick={() => setActiveSection("quick-sort")}>
              Quick Sort
            </button>

            <button class="p-4" onClick={() => setActiveSection("merge-sort")}>
              Merge Sort
            </button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
